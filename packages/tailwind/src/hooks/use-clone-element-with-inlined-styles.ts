import React from "react";
import type { Node } from "postcss";
import type { EmailElementProps } from "../tailwind";
import { sanitizeDeclarations } from "../utils/css/sanitize-declarations";
import { sanitizeMediaQueries } from "../utils/css/media-queries/sanitize-media-queries";
import { makeInlineStylesFor } from "../utils/css/make-inline-styles-for";
import { sanitizeClassName } from "../utils/compatibility/sanitize-class-name";
import type { useTailwind } from "./use-tailwind";
import { isComponent } from "../utils/react/is-component";

export const useCloneElementWithInlinedStyles = (
  tailwind: ReturnType<typeof useTailwind>,
) => {
  return (element: React.ReactElement<EmailElementProps>) => {
    const propsToOverwrite = {} as Partial<EmailElementProps>;

    let nonInlinableClasses: string[] = [];
    let nonInlineStyleNodes: Node[] = [];

    if (element.props.className) {
      const rootForClasses = tailwind.generateRootForClasses(
        element.props.className.split(" "),
      );
      sanitizeDeclarations(rootForClasses);

      const { sanitizedAtRules, mediaQueryClasses } =
        sanitizeMediaQueries(rootForClasses);
      nonInlinableClasses = mediaQueryClasses;
      nonInlineStyleNodes = sanitizedAtRules;

      const inliningResults = makeInlineStylesFor(
        element.props.className,
        rootForClasses,
      );
      const { styles } = inliningResults;
      let { residualClassName } = inliningResults;

      if (isComponent(element)) {
        /*
          We keep the className for components so that users can still manage the className
          for their components while still having access to what the className will resolve into.

          This is fine to do, even if the users spreads the `style` of the component into the
          rendered element, because the styles generated by Tailwind will take priority over 
          the inlined styles in the element's props — as is written down bellow.

          See https://github.com/resend/react-email/issues/1250
        */
        residualClassName = element.props.className;
      }

      propsToOverwrite.style = {
        ...element.props.style,
        ...styles,
      };

      if (residualClassName.trim().length > 0) {
        propsToOverwrite.className = residualClassName;

        /*
          We sanitize only the class names of Tailwind classes that we are not going to inline
          to avoid unpredictable behavior on the user's code. If we did sanitize all classes
          a user-defined class could end up also being sanitized which would lead to unexpected 
          behavior and bugs that are hard to track.
        */
        for (const singleClass of mediaQueryClasses) {
          propsToOverwrite.className = propsToOverwrite.className.replace(
            singleClass,
            sanitizeClassName(singleClass),
          );
        }
      } else {
        propsToOverwrite.className = undefined;
      }
    }

    const newProps = {
      ...element.props,
      ...propsToOverwrite,
    };

    return {
      elementWithInlinedStyles: React.cloneElement(
        element,
        newProps,
        newProps.children,
      ),

      nonInlinableClasses,
      nonInlineStyleNodes,
    };
  };
};
