import type { SupportEntry } from '../components/email-insights';

export const nicenames = {
  "family": {
    "gmail": "Gmail",
    "outlook": "Outlook",
    "yahoo": "Yahoo! Mail",
    "apple-mail": "Apple Mail",
    "aol": "AOL",
    "thunderbird": "Mozilla Thunderbird",
    "microsoft": "Microsoft",
    "samsung-email": "Samsung Email",
    "sfr": "SFR",
    "orange": "Orange",
    "protonmail": "ProtonMail",
    "hey": "HEY",
    "mail-ru": "Mail.ru",
    "fastmail": "Fastmail",
    "laposte": "LaPoste.net",
    "t-online-de": "T-online.de",
    "free-fr": "Free.fr",
    "gmx": "GMX",
    "web-de": "WEB.DE",
    "ionos-1and1": "1&1",
    "rainloop": "RainLoop",
    "wp-pl": "WP.pl"
  },
  "platform": {
    "desktop-app": "Desktop",
    "desktop-webmail": "Desktop Webmail",
    "mobile-webmail": "Mobile Webmail",
    "webmail": "Webmail",
    "ios": "iOS",
    "android": "Android",
    "windows": "Windows",
    "macos": "macOS",
    "windows-mail": "Windows Mail",
    "outlook-com": "Outlook.com"
  },
  "support": {
    "supported": "Supported",
    "mitigated": "Partially supported",
    "unsupported": "Not supported",
    "unknown": "Support unknown",
    "mixed": "Mixed support"
  },
  "category": {
    "html": "HTML",
    "css": "CSS",
    "image": "Image formats",
    "others": "Others"
  }
};

export const supportEntries: SupportEntry[] = [
  {
    "slug": "amp",
    "title": "AMP for Email",
    "description": "Support for rendering emails in the AMP format.",
    "url": "https://www.caniemail.com/features/amp/",
    "category": "others",
    "tags": [],
    "keywords": "amp4email",
    "last_test_date": "2020-03-31",
    "test_url": "https://www.caniemail.com/tests/amp.html",
    "test_results_url": null,
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "n"
          }
        ],
        "ios": [
          {
            "13.1": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2022-02": "y #1"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-01": "n"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2019-10": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2020-01": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-01": "y"
          },
          {
            "2022-02": "y #1"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          },
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          },
          {
            "2022-12": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "n"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.4": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "n"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "n"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "n"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Supported on compatible browsers. Refer to ‘supported platforms’ links listed below under resources."
    }
  },
  {
    "slug": "bimi",
    "title": "BIMI",
    "description": "BIMI (Brand Indicators for Message Identification) is a specification allowing for the display of brand logos next to authenticated e-mails.",
    "url": "https://www.caniemail.com/features/bimi/",
    "category": "others",
    "tags": [],
    "keywords": "bimi, logo, brand",
    "last_test_date": "2022-12-29",
    "test_url": "https://www.caniemail.com",
    "test_results_url": null,
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "n"
          },
          {
            "16": "y"
          }
        ],
        "ios": [
          {
            "15": "n"
          },
          {
            "16": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-01": "n"
          }
        ],
        "macos": [
          {
            "16.56": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      }
    },
    "notes": "Data based on email clients providers own declarations.",
    "notes_by_num": null
  },
  {
    "slug": "css-accent-color",
    "title": "accent-color",
    "description": "",
    "url": "https://www.caniemail.com/features/css-accent-color/",
    "category": "css",
    "tags": [],
    "keywords": "accent,color",
    "last_test_date": "2023-12-19",
    "test_url": "https://www.caniemail.com/tests/css-accent-color.html",
    "test_results_url": "https://testi.at/proj/LAzSmlkimAnFmnrtPjPuPjpT1rO",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "n"
          },
          {
            "17": "n"
          },
          {
            "18": "n"
          },
          {
            "19": "n"
          },
          {
            "20": "n"
          },
          {
            "21": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "y #1"
          },
          {
            "15": "y #1"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-07": "y #1"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Supports `accent-color` but rendering depends on browser support."
    }
  },
  {
    "slug": "css-align-items",
    "title": "align-items",
    "description": "",
    "url": "https://www.caniemail.com/features/css-align-items/",
    "category": "css",
    "tags": [],
    "keywords": "align,items,flexbox,grid",
    "last_test_date": "2023-12-19",
    "test_url": "https://www.caniemail.com/tests/css-align-items.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/FvYneb1dhiR4we6rAOf4AC02oFa6ksA0sTWxbEjgmt6Mg/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-02": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-12": "n"
          }
        ],
        "macos": [
          {
            "2020-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "4.2048.4": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          }
        ],
        "android": [
          {
            "6.16.2.1519779": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          }
        ],
        "android": [
          {
            "2021-03": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2020-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y #1"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Supported. But a default style of `margin:auto` is applied on every element and can prevent the expected result."
    }
  },
  {
    "slug": "css-animation",
    "title": "animation",
    "description": "Tests for the shorthand `animation` property and its longhand equivalents.",
    "url": "https://www.caniemail.com/features/css-animation/",
    "category": "css",
    "tags": [],
    "keywords": "keyframes",
    "last_test_date": "2023-12-19",
    "test_url": "https://www.caniemail.com/tests/css-animation.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/u4oWccYOFNNyTagHs2NSUZqJYQ3MssrqDMocBnRa35hf7/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "a #1"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "a #1"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "a #2"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. Animation properties are supported but `@keyframes` are incorrectly prefixed.",
      "2": "Partial. Only supports from and to keyframes. Does not support % keyframes"
    }
  },
  {
    "slug": "css-aspect-ratio",
    "title": "aspect-ratio",
    "description": "Sets a preferred aspect ratio for the element",
    "url": "https://www.caniemail.com/features/css-aspect-ratio/",
    "category": "css",
    "tags": [],
    "keywords": "ratio",
    "last_test_date": "2023-12-19",
    "test_url": "https://www.caniemail.com/tests/css-aspect-ratio.html",
    "test_results_url": "https://testi.at/proj/Mv0IO0vs3vTgRQuJ8IzyBfD6",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14": "n"
          },
          {
            "15.0": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-10": "n"
          }
        ],
        "ios": [
          {
            "2021-10": "n"
          }
        ],
        "android": [
          {
            "2021-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-10": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-10": "n"
          }
        ],
        "ios": [
          {
            "2021-10": "n"
          }
        ],
        "android": [
          {
            "2021-10": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-10": "n"
          }
        ],
        "macos": [
          {
            "2021-10": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-10": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2021-10": "n"
          }
        ],
        "android": [
          {
            "2021-10": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-10": "n"
          }
        ],
        "ios": [
          {
            "2021-10": "n"
          }
        ],
        "android": [
          {
            "6.37": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-10": "n"
          }
        ],
        "ios": [
          {
            "2021-10": "n"
          }
        ],
        "android": [
          {
            "2021-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2021-10": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y #1"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10.2": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y #1"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-11": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Requires iOS 15."
    }
  },
  {
    "slug": "css-at-font-face",
    "title": "@font-face",
    "description": "`@font-face` in CSS allows to include your own fonts inside an email.",
    "url": "https://www.caniemail.com/features/css-at-font-face/",
    "category": "css",
    "tags": [],
    "keywords": "font face, web fonts, google fonts",
    "last_test_date": "2023-12-19",
    "test_url": "https://www.caniemail.com/tests/css-font-face.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/veY9MhuhgFeF1ly5crrhTXawfLJSwxgpYi27OElI7iSoc/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.2": "y"
          }
        ],
        "ios": [
          {
            "10.3": "y"
          },
          {
            "12.3.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-07": "n #6"
          }
        ],
        "ios": [
          {
            "2019-07": "n"
          }
        ],
        "android": [
          {
            "2019-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-05": "a #2"
          },
          {
            "2021-03": "n #7"
          },
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2019-07": "y"
          },
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2019-07": "a #1"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "a #3"
          },
          {
            "2007": "a #4 #5"
          },
          {
            "2010": "a #4 #5"
          },
          {
            "2013": "a #4 #5"
          },
          {
            "2016": "a #4 #5"
          },
          {
            "2019": "a #4"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-07": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "3.29.0": "n"
          }
        ],
        "android": [
          {
            "2019-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y #8"
          },
          {
            "2021-11": "y #8"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-07": "a #2"
          }
        ],
        "ios": [
          {
            "2019-07": "n"
          }
        ],
        "android": [
          {
            "2019-07": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.7": "y"
          },
          {
            "78.5": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-01": "n"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-07": "n"
          }
        ],
        "ios": [
          {
            "2019-07": "n"
          }
        ],
        "android": [
          {
            "2019-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "a #2"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported through a `<link>` tag.",
      "2": "Partial. Only supported directly through a `<style>` tag.",
      "3": "Buggy. Support depends on the version of IE installed.",
      "4": "Partial. The declaration is supported but distant fonts are ignored.",
      "5": "Buggy. Elements using a font declared with `@font-face` ignore the font stack and fall back to Times New Roman. Use `mso-generic-font-family` and `mso-font-alt` to control the fallback.",
      "6": "Not supported. Roboto and Google Sans can be used, but only because they're embedded with the webmail's own styles.",
      "7": "Not supported. The `@font-face` declaration is kept but the `src` property is removed.",
      "8": "Not supported when using a Microsoft email address; outlook, live, hotmail, etc."
    }
  },
  {
    "slug": "css-at-import",
    "title": "@import",
    "description": "This is the description of the `@import` property.",
    "url": "https://www.caniemail.com/features/css-at-import/",
    "category": "css",
    "tags": [],
    "keywords": "css, style",
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-placement.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/6vV9sx4RoRsdnkZBDjLWwSC18VcUQzJY00tlj2NVSxKKv/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "n"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2023-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "y"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          },
          {
            "78.5": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "n"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "n"
          }
        ]
      },
      "wp-pl": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-at-keyframes",
    "title": "@keyframes",
    "description": "",
    "url": "https://www.caniemail.com/features/css-at-keyframes/",
    "category": "css",
    "tags": [],
    "keywords": "animation",
    "last_test_date": "2021-05-25",
    "test_url": "https://www.caniemail.com/tests/css-animation.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/u4oWccYOFNNyTagHs2NSUZqJYQ3MssrqDMocBnRa35hf7/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "n #1"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "a #1"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "a #1"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "a #2"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported. The `@keyframes` declaration is kept but values are incorrectly prefixed.",
      "2": "Partial. Only supports from and to keyframes. Does not support % keyframes"
    }
  },
  {
    "slug": "css-at-media-device-pixel-ratio",
    "title": "@media (-webkit-device-pixel-ratio)",
    "description": "",
    "url": "https://www.caniemail.com/features/css-at-media-device-pixel-ratio/",
    "category": "css",
    "tags": [],
    "keywords": "media queries, media query, media feature",
    "last_test_date": "2019-08-20",
    "test_url": "https://www.caniemail.com/tests/css-media.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/hMLCNCSKZYHkLgLOpIWltlnYjtagbNsrwzMxalc2VbghN/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "y"
          }
        ],
        "ios": [
          {
            "10.3": "y"
          },
          {
            "12.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-08": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y #1"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "n"
          },
          {
            "78.5": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-08": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. The first rule inside a media query is not prefixed."
    }
  },
  {
    "slug": "css-at-media-hover",
    "title": "@media (hover), @media (any-hover)",
    "description": "This media query tests whether the user's input device[s] (i.e mouse, trackpad etc.) can hover over elements",
    "url": "https://www.caniemail.com/features/css-at-media-hover/",
    "category": "css",
    "tags": [
      "accessibility"
    ],
    "keywords": "media, media query, hover, any-hover",
    "last_test_date": "2022-08-29",
    "test_url": "https://www.caniemail.com/tests/css-media-hover.html",
    "test_results_url": "https://testi.at/proj/onECpNVH8Dhv7BSLPXUbQ4s0O",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2022-08": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-08": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2022-08": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-at-media-orientation",
    "title": "@media (orientation)",
    "description": "",
    "url": "https://www.caniemail.com/features/css-at-media-orientation/",
    "category": "css",
    "tags": [],
    "keywords": "media queries, media query, media feature, portrait, landscape",
    "last_test_date": "2019-08-20",
    "test_url": "https://www.caniemail.com/tests/css-media.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/hMLCNCSKZYHkLgLOpIWltlnYjtagbNsrwzMxalc2VbghN/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "y"
          }
        ],
        "ios": [
          {
            "10.3": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y #1"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "n"
          },
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          },
          {
            "78.5": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-08": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. The first rule inside a media query is not prefixed."
    }
  },
  {
    "slug": "css-at-media-prefers-color-scheme",
    "title": "@media (prefers-color-scheme)",
    "description": "This media query allows to theme for system light and dark mode.",
    "url": "https://www.caniemail.com/features/css-at-media-prefers-color-scheme/",
    "category": "css",
    "tags": [
      "accessibility"
    ],
    "keywords": "media queries, media query, media feature, dark mode, light mode",
    "last_test_date": "2023-03-08",
    "test_url": "https://www.caniemail.com/tests/css-media-prefers-color-scheme.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/CBhafIa5yXDRKQKbV442rVFISXim84wMgXaoCqVFD8VTe/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "n"
          },
          {
            "12.4": "y"
          },
          {
            "16.0": "y"
          }
        ],
        "ios": [
          {
            "12.2": "n"
          },
          {
            "13.0": "y"
          },
          {
            "16.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-01": "n"
          },
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          },
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          },
          {
            "2022-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          },
          {
            "2022-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2022-12": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          },
          {
            "2022-12": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          },
          {
            "2022-12": "n"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "n"
          }
        ],
        "macos": [
          {
            "2019": "y"
          },
          {
            "16.70": "y #3"
          },
          {
            "16.80": "y #3"
          }
        ],
        "outlook-com": [
          {
            "2019-07": "y"
          },
          {
            "2022-12": "y #3"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          },
          {
            "2022-12": "y #3"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          },
          {
            "2022-12": "n #3"
          },
          {
            "2023-03": "y #3"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "n"
          },
          {
            "6.1": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          },
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          },
          {
            "2022-12": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "n"
          },
          {
            "68.4": "y"
          },
          {
            "78.5": "n"
          },
          {
            "91.13": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-01": "n #1"
          }
        ],
        "ios": [
          {
            "2020-01": "n #1"
          }
        ],
        "android": [
          {
            "2020-01": "n #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-01": "n #1"
          },
          {
            "2022-12": "n #6"
          }
        ],
        "ios": [
          {
            "2020-01": "n #1"
          },
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n #1"
          },
          {
            "2022-12": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          },
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          },
          {
            "2022-12": "n #5"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          },
          {
            "2022-12": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n #2"
          },
          {
            "2022-12": "y #4"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          },
          {
            "2022-12": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported. `@media (prefers-color-scheme)` is transformed into `@media ( _filtered_a )`.",
      "2": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media none`.",
      "3": "Additional custom `data` attributes (`data-ogsc`, `data-ogac`, `data-ogsb`, `data-ogab`) are added when viewing an email in dark mode. See [this article](https://www.hteumeuleu.com/2021/emails-react-outlook-com-dark-mode/) for examples.",
      "4": "`@media (prefers-color-scheme:dark)` is transformed into `@media all` at run time if it applies.",
      "5": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media (false)`",
      "6": "Not supported. `@media (prefers-color-scheme:dark)` is transformed into `@media ()`"
    }
  },
  {
    "slug": "css-at-media-prefers-reduced-motion",
    "title": "@media (prefers-reduced-motion)",
    "description": "",
    "url": "https://www.caniemail.com/features/css-at-media-prefers-reduced-motion/",
    "category": "css",
    "tags": [
      "accessibility",
      "performance"
    ],
    "keywords": "media queries, media query, media feature, prefers-reduced-motion, animation, accessibility",
    "last_test_date": "2021-02-20",
    "test_url": "https://www.caniemail.com/tests/css-media-prefers-reduced-motion.html",
    "test_results_url": "https://testi.at/proj/e3GT3l1CxqBUoE3u9keC4WLf5",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-02": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-02": "y"
          }
        ],
        "android": [
          {
            "2021-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "16005.13426.20316.0": "n"
          }
        ],
        "macos": [
          {
            "2020-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "4.2048.4": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2021-02": "n"
          }
        ],
        "android": [
          {
            "6.16.2.1519779": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2021-02": "n"
          }
        ],
        "android": [
          {
            "2021-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-02": "y"
          }
        ],
        "ios": [
          {
            "2021-02": "n"
          }
        ],
        "android": [
          {
            "2021-02": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.7": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-02": "n"
          }
        ],
        "ios": [
          {
            "2021-02": "n"
          }
        ],
        "android": [
          {
            "2021-02": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-02": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-02": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n #1"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported. `@media (prefers-reduced-motion:reduce)` is transformed into `@media none`."
    }
  },
  {
    "slug": "css-at-media",
    "title": "@media",
    "description": "",
    "url": "https://www.caniemail.com/features/css-at-media/",
    "category": "css",
    "tags": [],
    "keywords": "media queries, media query, media feature",
    "last_test_date": "2023-12-13",
    "test_url": "https://www.caniemail.com/tests/css-media.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/hMLCNCSKZYHkLgLOpIWltlnYjtagbNsrwzMxalc2VbghN/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "y"
          }
        ],
        "ios": [
          {
            "10.3": "y"
          },
          {
            "12.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-08": "a #1 #7"
          },
          {
            "2020-01": "a #7"
          }
        ],
        "ios": [
          {
            "2019-08": "a #1 #6 #7"
          },
          {
            "2020-01": "a #6 #7"
          }
        ],
        "android": [
          {
            "2019-08": "a #1 #6 #7"
          },
          {
            "2022-07": "a #6 #7"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y #5"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "a #1"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1 #10"
          }
        ],
        "outlook-com": [
          {
            "2019-08": "a #1"
          },
          {
            "2023-12": "a #1 #10"
          }
        ],
        "ios": [
          {
            "2019-08": "a #1"
          }
        ],
        "android": [
          {
            "2019-08": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0": "y"
          },
          {
            "6.1.90.16": "a #9"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "n"
          }
        ],
        "android": [
          {
            "2019-08": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          },
          {
            "78.5": "n"
          },
          {
            "102.11": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-08": "a #1 #2"
          },
          {
            "2020-01": "a #2"
          }
        ],
        "ios": [
          {
            "2019-08": "a #1 #2"
          },
          {
            "2020-01": "a #2"
          }
        ],
        "android": [
          {
            "2019-08": "a #1 #2 #3"
          },
          {
            "2020-01": "a #2 #3"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "a #1 #2"
          },
          {
            "2020-01": "a #2"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1 #2"
          },
          {
            "2020-01": "a #2"
          }
        ],
        "android": [
          {
            "2019-02": "a #1 #2"
          },
          {
            "2020-01": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          },
          {
            "2023-05": "a #8"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          },
          {
            "2023-05": "a #8"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "a #1 #7"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Does not support nested media queries.",
      "2": "Partial. Only supports `screen`, `min-width`, `max-width`, `min-height` and `max-height` based media queries.",
      "3": "Buggy. Requires a double `<head>` hack to work.",
      "4": "Partial. Does not support simple `@media {}` declarations.",
      "5": "Buggy. The first rule inside a media query is not prefixed.",
      "6": "Partial. Not supported with non Google accounts.",
      "7": "Partial. Does not support height based media queries.",
      "8": "Partial. Does not support landscape media query.",
      "9": "Partial. Not supported with Hotmail/Outlook accounts.",
      "10": "Partial. Nested media queries are removed."
    }
  },
  {
    "slug": "css-at-supports",
    "title": "@supports",
    "description": null,
    "url": "https://www.caniemail.com/features/css-at-supports/",
    "category": "css",
    "tags": [],
    "keywords": "feature queries",
    "last_test_date": "2020-05-25",
    "test_url": "https://www.caniemail.com/tests/css-at-supports.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/No78GouZXTsxEZCD6z4Hn2frAvg3tHBw1SRAP8SwPKsZ5/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "y"
          },
          {
            "78.5": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-05": "y #1"
          }
        ],
        "ios": [
          {
            "2020-05": "y #1"
          }
        ],
        "android": [
          {
            "2020-05": "y #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-05": "y #1"
          }
        ],
        "ios": [
          {
            "2020-05": "y #1"
          }
        ],
        "android": [
          {
            "2020-05": "y #1"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n #2"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Properties not supported by the client are replaced by `_filtered_a` inside the parenthesis.",
      "2": "Not supported. `@supports` is transformed into `@media not all`."
    }
  },
  {
    "slug": "css-backdrop-filter",
    "title": "backdrop-filter",
    "description": "Lets you apply graphical effects such as blurring or color shifting to the area behind an element.",
    "url": "https://www.caniemail.com/features/css-backdrop-filter/",
    "category": "css",
    "tags": [],
    "keywords": "filter",
    "last_test_date": "2024-01-17",
    "test_url": "https://www.caniemail.com/tests/css-backdrop-filter.html",
    "test_results_url": "https://testi.at/proj/p4r7t9n30o7nh7vvfpn",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10": "y #1"
          },
          {
            "11": "u"
          },
          {
            "12": "u"
          },
          {
            "13": "y #1"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "y #1"
          },
          {
            "14": "y #1"
          },
          {
            "15": "y #1"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-01": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-01": "n"
          }
        ],
        "macos": [
          {
            "2024-01": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-01": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-01": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "ios": [
          {
            "2024-01": "u"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-01": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-01": "u"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-01": "u"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Works with prefix `-webkit`"
    }
  },
  {
    "slug": "css-background-blend-mode",
    "title": "background-blend-mode",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-blend-mode/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          }
        ],
        "android": [
          {
            "2019-02": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-background-clip",
    "title": "background-clip",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-clip/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          }
        ],
        "android": [
          {
            "2019-02": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts. But it can be used in the `background` shorthand property instead."
    }
  },
  {
    "slug": "css-background-color",
    "title": "background-color",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-color/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "a #1"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2021-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2021-10": "a #1"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "y"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. Only supports [color keywords from CSS Level 1](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#color_keywords)."
    }
  },
  {
    "slug": "css-background-image",
    "title": "background-image",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-image/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2023-07-24",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/04SuPXr8tEGhWRlJ2Us6dA8BzgREpyxHYEmSBeyNuWyWo/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          },
          {
            "2023-07": "a #6"
          },
          {
            "2023-08": "y"
          }
        ],
        "ios": [
          {
            "2018-09": "a #1"
          },
          {
            "2018-10": "y"
          },
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2018-09": "a #1"
          },
          {
            "2018-10": "y"
          },
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #5"
          },
          {
            "2010": "n #5"
          },
          {
            "2013": "n #5"
          },
          {
            "2016": "n #5"
          },
          {
            "2019": "n #5"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "a #3 #4"
          },
          {
            "2021-10": "a #3"
          }
        ],
        "ios": [
          {
            "2019-02": "a #3 #4"
          },
          {
            "2021-10": "a #3"
          }
        ],
        "android": [
          {
            "2019-02": "a #3 #4"
          },
          {
            "2021-10": "a #3"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "a #3 #4"
          },
          {
            "2021-10": "a #3"
          }
        ],
        "ios": [
          {
            "2019-02": "a #3 #4"
          },
          {
            "2021-10": "a #3"
          }
        ],
        "android": [
          {
            "2019-02": "a #3 #4"
          },
          {
            "2021-10": "a #3"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "a #2"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2021-11": "n"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2021-11": "n"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #3"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #3"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. Requires at least one `<img>` element in the email to download all images.",
      "3": "Partial. Does not support multiple values. The comma between two values is removed.",
      "4": "Partial. Images URL must be between quotes.",
      "5": "Background images can be used in VML. See [backgrounds.cm](https://backgrounds.cm/) and [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/web-workshop---how-to-use-vml-on-web-pages-----fill--element).",
      "6": "Partial and buggy. Removes the entire `style` attribute or `<style>` tag when a `url()` function with a valid image URL is present. See [Gmail rolling out changes that strip CSS with background images](https://freshinbox.com/blog/gmail-rolling-out-changes-that-strip-background-image-css/) and [Gmail and background images](https://parcel.io/blog/gmail-and-background-images)."
    }
  },
  {
    "slug": "css-background-origin",
    "title": "background-origin",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-origin/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a"
          }
        ],
        "android": [
          {
            "2019-02": "a"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Background images origin can be used in VML with the `origin` attribute. See [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/origin-attribute--fill--vml)."
    }
  },
  {
    "slug": "css-background-position",
    "title": "background-position",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-position/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y #1"
          }
        ],
        "ios": [
          {
            "2019-02": "a"
          },
          {
            "2021-10": "y #1"
          }
        ],
        "android": [
          {
            "2019-02": "a"
          },
          {
            "2021-10": "y #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #2"
          },
          {
            "2010": "n #2"
          },
          {
            "2013": "n #2"
          },
          {
            "2016": "n #2"
          },
          {
            "2019": "n #2"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y #1"
          }
        ],
        "ios": [
          {
            "2019-02": "y #1"
          }
        ],
        "android": [
          {
            "2019-02": "y #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y #1"
          }
        ],
        "ios": [
          {
            "2019-02": "y #1"
          }
        ],
        "android": [
          {
            "2019-02": "y #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Does not support multiple values. The comma between two values is removed.",
      "2": "Background images position can be used in VML with the `position` attribute. See [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/position-attribute--fill--vml)."
    }
  },
  {
    "slug": "css-background-repeat",
    "title": "background-repeat",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-repeat/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a"
          },
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2019-02": "a"
          },
          {
            "2021-10": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #2"
          },
          {
            "2010": "n #2"
          },
          {
            "2013": "n #2"
          },
          {
            "2016": "n #2"
          },
          {
            "2019": "n #2"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y #1"
          }
        ],
        "ios": [
          {
            "2019-02": "y #1"
          }
        ],
        "android": [
          {
            "2019-02": "y #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y #1"
          }
        ],
        "ios": [
          {
            "2019-02": "y #1"
          }
        ],
        "android": [
          {
            "2019-02": "y #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Does not support multiple values. The comma between two values is removed.",
      "2": "Background images repetition can be used in VML with the `type=\"tile\"` or `type=\"frame\"` attribute. See [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/type-attribute--fill--vml)."
    }
  },
  {
    "slug": "css-background-size",
    "title": "background-size",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background-size/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/oxaaoE6R3ur4T9fAPzVsQ3G2R7p1c9axDm7LLgC3cKw0F/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          }
        ],
        "android": [
          {
            "2019-02": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #3"
          },
          {
            "2010": "n #3"
          },
          {
            "2013": "n #3"
          },
          {
            "2016": "n #3"
          },
          {
            "2019": "n #3"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y #2"
          }
        ],
        "ios": [
          {
            "2019-02": "y #2"
          }
        ],
        "android": [
          {
            "2019-02": "y #2"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y #2"
          }
        ],
        "ios": [
          {
            "2019-02": "y #2"
          }
        ],
        "android": [
          {
            "2019-02": "y #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts. But it can be used in the `background` shorthand property instead.",
      "2": "Partial. Does not support multiple values. The comma between two values is removed.",
      "3": "Background images size can be used in VML with the `size` attribute. See [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/size-attribute--fill--vml)."
    }
  },
  {
    "slug": "css-background",
    "title": "background",
    "description": "",
    "url": "https://www.caniemail.com/features/css-background/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2023-07-24",
    "test_url": "https://www.caniemail.com/tests/css-background.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/04SuPXr8tEGhWRlJ2Us6dA8BzgREpyxHYEmSBeyNuWyWo/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          },
          {
            "2023-07": "a #6 #7"
          },
          {
            "2023-08": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "a #6"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "a #6"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "a #6"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #3"
          },
          {
            "2010": "a #3"
          },
          {
            "2013": "a #3"
          },
          {
            "2016": "a #3"
          },
          {
            "2019": "a #3"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          },
          {
            "2021-10": "a #3"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "a #1 #2 #4"
          },
          {
            "2021-10": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1 #2 #4"
          },
          {
            "2021-10": "a #1 #2"
          }
        ],
        "android": [
          {
            "2019-02": "a #1 #2 #4"
          },
          {
            "2021-10": "a #1 #2"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "a #1 #2 #4"
          },
          {
            "2021-10": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1 #2 #4"
          },
          {
            "2021-10": "a #1 #2"
          }
        ],
        "android": [
          {
            "2019-02": "a #1 #2 #4"
          },
          {
            "2021-10": "a #1 #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5.0": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y #5"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #1 #5 #6"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #1 #5 #6"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Does not support multiple values. The comma between two values is removed.",
      "2": "Partial. Does not support the `/ value` shorthand for `background-size`. But it can be used in the `background-size` property instead.",
      "3": "Partial. Only `background-color` values are supported.",
      "4": "Partial. Images URL must be between quotes.",
      "5": "Partial. Does not support multiple values. The entire property is removed if so.",
      "6": "Partial. Does not support the `/ value` shorthand for `background-size`.",
      "7": "Partial and buggy. Removes the entire `style` attribute or `<style>` tag when a `url()` function with a valid image URL is present. See [Gmail rolling out changes that strip CSS with background images](https://freshinbox.com/blog/gmail-rolling-out-changes-that-strip-background-image-css/) and [Gmail and background images](https://parcel.io/blog/gmail-and-background-images)."
    }
  },
  {
    "slug": "css-block-inline-size",
    "title": "block-size & inline-size",
    "description": "Defines the horizontal or vertical size of an element's block, depending on its writing mode.",
    "url": "https://www.caniemail.com/features/css-block-inline-size/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "block-size, inline-size",
    "last_test_date": "2022-07-14",
    "test_url": "https://www.caniemail.com/tests/css-block-size.html",
    "test_results_url": "https://testi.at/proj/0xeT11rcnx6IzN7f9NsVFlZ",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.13": "n"
          },
          {
            "10.15": "y"
          },
          {
            "11": "y"
          },
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2022": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "91.11.0": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border-collapse",
    "title": "border-collapse",
    "description": "Sets whether cells inside a `<table>` have shared or separate borders.",
    "url": "https://www.caniemail.com/features/css-border-collapse/",
    "category": "css",
    "tags": [],
    "keywords": "table",
    "last_test_date": "2023-12-20",
    "test_url": "https://www.caniemail.com/tests/css-border-collapse.html",
    "test_results_url": "https://testi.at/proj/4zk4fe7tv86fn4bc6",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2023-12": "y"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "y"
          }
        ],
        "macos": [
          {
            "2023-12": "y"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border-image",
    "title": "border-image",
    "description": "",
    "url": "https://www.caniemail.com/features/css-border-image/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border-inline-block-individual",
    "title": "border-inline & border-block individual logical properties",
    "description": "Support for `border-inline` & `border-block` individual logical properties.",
    "url": "https://www.caniemail.com/features/css-border-inline-block-individual/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "border-inline-color, border-block-color, border-inline-style, border-block-style, border-inline-width, border-block-width, border-inline-start, border-inline-end, border-block-start, border-block-end",
    "last_test_date": "2022-07-14",
    "test_url": "https://www.caniemail.com/tests/css-border-logical-properties.html",
    "test_results_url": "https://testi.at/proj/1yxFDAGtwrUmbf4tzMTY",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12": "n"
          },
          {
            "10.13": "n"
          },
          {
            "10.15": "a #1"
          },
          {
            "11": "y"
          },
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "a #1"
          },
          {
            "13": "a #1"
          },
          {
            "14": "a #1"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "a #1"
          },
          {
            "2016": "a #1"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "a #1"
          },
          {
            "11": "a #1"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `border-<inline/block>-color` and `border-<inline/block>-width` does not work."
    }
  },
  {
    "slug": "css-border-inline-block-longhand",
    "title": "border-inline & border-block longhand properties",
    "description": "Support for `border-inline` & `border-block` longhand properties.",
    "url": "https://www.caniemail.com/features/css-border-inline-block-longhand/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "border-inline-start-color, border-block-start-color, border-inline-start-style, border-block-start-style, border-inline-start-width, border-block-start-width, border-inline-end-color, border-block-end-color, border-inline-end-style, border-block-end-style, border-inline-end-width, border-block-end-width",
    "last_test_date": "2022-07-14",
    "test_url": "https://www.caniemail.com/tests/css-border-logical-properties.html",
    "test_results_url": "https://testi.at/proj/1yxFDAGtwrUmbf4tzMTY",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12": "n"
          },
          {
            "10.13": "n"
          },
          {
            "10.15": "y"
          },
          {
            "11": "y"
          },
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border-inline-block",
    "title": "border-inline & border-block",
    "description": "Support for the `border-inline` and `border-block` shorthand properties.",
    "url": "https://www.caniemail.com/features/css-border-inline-block/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "border-inline, border-block",
    "last_test_date": "2022-07-13",
    "test_url": "https://www.caniemail.com/tests/css-border-logical-properties.html",
    "test_results_url": "https://testi.at/proj/1yxFDAGtwrUmbf4tzMTY",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.15": "n"
          },
          {
            "11": "y"
          },
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          },
          {
            "11": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border-radius-logical",
    "title": "border-radius logical properties",
    "description": "Support for border radius logical properties",
    "url": "https://www.caniemail.com/features/css-border-radius-logical/",
    "category": "css",
    "tags": [],
    "keywords": "border-start-start-radius, border-start-end-radius, border-end-start-radius, border-end-end-radius",
    "last_test_date": "2022-08-16",
    "test_url": "https://www.caniemail.com/tests/css-border-logical-properties.html",
    "test_results_url": "https://testi.at/proj/1yxFDAGtwrUmbf4tzMTY",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.15": "n"
          },
          {
            "11": "n"
          },
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-08": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          },
          {
            "11": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border-radius",
    "title": "border-radius",
    "description": "The `border-radius` CSS property rounds the corners of an element's outer border edge.",
    "url": "https://www.caniemail.com/features/css-border-radius/",
    "category": "css",
    "tags": [],
    "keywords": "rounded corners",
    "last_test_date": "2021-03-09",
    "test_url": "https://www.caniemail.com/tests/css-border-radius.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/6baogXZwm2BzrRxpjQq0z7QrcfjJQjQa2sLYKhIJSg2sh/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "y"
          }
        ],
        "ios": [
          {
            "10.3": "y"
          },
          {
            "12.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n #1"
          },
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "n #1"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-02": "a #2"
          }
        ],
        "ios": [
          {
            "2021-03": "a #2"
          }
        ],
        "android": [
          {
            "2021-03": "a #2"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-02": "a #2"
          }
        ],
        "ios": [
          {
            "2021-03": "a #2"
          }
        ],
        "android": [
          {
            "6.18.2.1529859": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Round corners can be used in VML with the `RoundRect` element. See [buttons.cm](https://buttons.cm/) and [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/msdn-online-vml-roundrect-element).",
      "2": "Partial support. Shorthand for setting elliptical borders with the slash `/` notation is not supported e.g. `border-radius: 27% 73% 70% 30% / 30% 34% 66% 70%;`."
    }
  },
  {
    "slug": "css-border-spacing",
    "title": "border-spacing",
    "description": "Sets the distance between the borders of adjacent cells in a `<table>`.",
    "url": "https://www.caniemail.com/features/css-border-spacing/",
    "category": "css",
    "tags": [],
    "keywords": "table",
    "last_test_date": "2023-12-20",
    "test_url": "https://www.caniemail.com/tests/css-border-spacing.html",
    "test_results_url": "https://testi.at/proj/dyodfk8c5dhjanflz",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "n"
          }
        ],
        "macos": [
          {
            "2023-12": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-border",
    "title": "border",
    "description": "The `border` properties set an element's border. This page accounts for all `border` longhands and shorthands.",
    "url": "https://www.caniemail.com/features/css-border/",
    "category": "css",
    "tags": [],
    "keywords": "border-width, border-style, border-color, border-top, border-bottom, border-left, border-right, border-top-width, border-top-style, border-top-color, border-bottom-width, border-bottom-style, border-bottom-color, border-left-width, border-left-style, border-left-color, border-right-width, border-right-style, border-right-color",
    "last_test_date": "2021-07-22",
    "test_url": "https://www.caniemail.com/tests/css-border.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/jbuHMEUL4RGhgEHaRBjYJdJuonItGgpBGH9XWbqznvzrD/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #1 #2"
          },
          {
            "2010": "a #1 #2"
          },
          {
            "2013": "a #1 #2"
          },
          {
            "2016": "a #1 #2"
          },
          {
            "2019": "a #1 #2"
          }
        ],
        "windows-mail": [
          {
            "2021-07": "a #1 #2"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.12": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": "This pages reports support for all CSS properties related to `border`: `border`, `border-width`, `border-style`, `border-color`, `border-top`, `border-bottom`, `border-left`, `border-right`, `border-top-width`, `border-top-style`, `border-top-color`, `border-bottom-width`, `border-bottom-style`, `border-bottom-color`, `border-left-width`, `border-left-style`, `border-left-color`, `border-right-width`, `border-right-style`, `border-right-color`.",
    "notes_by_num": {
      "1": "Partial. A border can not be bigger than 8px.",
      "2": "Buggy. Unreliable if used on a `<p>` or a `<div>`."
    }
  },
  {
    "slug": "css-box-shadow",
    "title": "box-shadow",
    "description": "Adds shadow effects around an element's frame.",
    "url": "https://www.caniemail.com/features/css-box-shadow/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2023-12-20",
    "test_url": "https://www.caniemail.com/tests/css-box-shadow.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/TxbmgM1vnD44aLEEOdI06riwAqm3qmfet8jFoYTQ65bRp/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          },
          {
            "16.0": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          },
          {
            "17.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          },
          {
            "2023-01": "a #1"
          }
        ],
        "android": [
          {
            "2021-08": "a #1"
          },
          {
            "2023-01": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2023-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          },
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          },
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.1.50.25": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported with non Google accounts."
    }
  },
  {
    "slug": "css-box-sizing",
    "title": "box-sizing",
    "description": "",
    "url": "https://www.caniemail.com/features/css-box-sizing/",
    "category": "css",
    "tags": [],
    "keywords": "box model",
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-caption-side",
    "title": "caption-side",
    "description": "The `caption-side` CSS property puts the content of a table's `<caption>` on the specified side.",
    "url": "https://www.caniemail.com/features/css-caption-side/",
    "category": "css",
    "tags": [],
    "keywords": "caption,table",
    "last_test_date": "2021-05-13",
    "test_url": "https://www.caniemail.com/tests/css-caption-side.html",
    "test_results_url": "https://testi.at/proj/JOOcrJZc0YcjDSZQRFP0OTlYXcw",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2021-05": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "6.27": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.42.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2021-05": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y #1"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "y #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "The `caption-side` property in CSS is supported but the `<caption>` HTML element is not."
    }
  },
  {
    "slug": "css-clip-path",
    "title": "clip-path",
    "description": "",
    "url": "https://www.caniemail.com/features/css-clip-path/",
    "category": "css",
    "tags": [],
    "keywords": "clip,path,svg,mask",
    "last_test_date": "2021-03-09",
    "test_url": "https://www.caniemail.com/tests/css-clip-path.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/wp9G5kZZ8sY3lne7CeGvMmPIlyBT2Wy0nBMBBAevQNgQO/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-02": "n"
          }
        ],
        "ios": [
          {
            "2021-02": "n"
          }
        ],
        "android": [
          {
            "2021-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-02": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "2021-02": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-02": "n"
          }
        ],
        "ios": [
          {
            "2021-02": "n"
          }
        ],
        "android": [
          {
            "4.2101.1": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-02": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          }
        ],
        "android": [
          {
            "6.16.2.1525679": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-02": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          }
        ],
        "android": [
          {
            "2021-03": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2021-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-02": "a #1 #2"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `path()` is not supported.",
      "2": "Partial. [Embedded SVG](/features/html-svg/) is not supported. Referencing an embedded SVG's `<clipPath>` with `url()` does not work.",
      "3": "Partial. Referencing an external SVG's `<clipPath>` with `url()` does not work."
    }
  },
  {
    "slug": "css-color-scheme",
    "title": "color-scheme CSS property",
    "description": "Changes the default colors of HTML elements. Useful for when you want an email to display only in a dark color scheme or only a light scheme, regardless of user settings",
    "url": "https://www.caniemail.com/features/css-color-scheme/",
    "category": "css",
    "tags": [],
    "keywords": "dark mode, light mode",
    "last_test_date": "2023-09-18",
    "test_url": "https://www.caniemail.com/tests/css-color-scheme.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16.0": "y #1"
          }
        ],
        "ios": [
          {
            "16.1": "y #1"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2023-09": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2023-09": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-12": "u"
          }
        ],
        "ios": [
          {
            "2022-12": "u"
          }
        ],
        "android": [
          {
            "2022-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "u"
          },
          {
            "2007": "u"
          },
          {
            "2010": "u"
          },
          {
            "2013": "u"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "u"
          }
        ],
        "macos": [
          {
            "16.73": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2023-09": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "a #2"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.11": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2023-09": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2023-09": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-09": "y"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2023-09": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-12": "u"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-12": "u"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "u"
          }
        ],
        "android": [
          {
            "2022-06": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "u"
          }
        ],
        "android": [
          {
            "2022-06": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "u"
          }
        ],
        "android": [
          {
            "2022-06": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Works only the html/root element",
      "2": "Buggy. The property is supported but does not work due to a prefix added by the webmail on the rule selector."
    }
  },
  {
    "slug": "css-column-count",
    "title": "column-count",
    "description": "",
    "url": "https://www.caniemail.com/features/css-column-count/",
    "category": "css",
    "tags": [],
    "keywords": "columns",
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-column-layout-properties",
    "title": "css column properties",
    "description": "Support for the `columns` shorthand and longhand properties.",
    "url": "https://www.caniemail.com/features/css-column-layout-properties/",
    "category": "css",
    "tags": [],
    "keywords": "columns, column-count, column-fill, column-gap, column-rule, column-rule-color, column-rule-style, column-rule-width, column-span, column-width",
    "last_test_date": "2022-08-02",
    "test_url": "https://www.caniemail.com/tests/css-column-layout.html",
    "test_results_url": "https://testi.at/proj/E87UgpgtlXxt6Rsx4Ec1pcxm",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-08": "n"
          }
        ],
        "macos": [
          {
            "2022-08": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-comments",
    "title": "CSS comments",
    "description": "Adds explanatory notes to the code or to prevent the browser from interpreting specific parts of the style sheet",
    "url": "https://www.caniemail.com/features/css-comments/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-04-25",
    "test_url": "https://www.caniemail.com/tests/css-comments.html",
    "test_results_url": "https://testi.at/proj/n4ayign05k6cozot6",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2024-04": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2024-04": "a #2"
          }
        ],
        "mobile-webmail": [
          {
            "2024-04": "a #4"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-08": "n #6"
          }
        ],
        "ios": [
          {
            "2024-08": "n #6"
          }
        ],
        "android": [
          {
            "2024-08": "n #6"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          },
          {
            "2021": "y"
          }
        ],
        "windows-mail": [
          {
            "2024-04": "y"
          }
        ],
        "macos": [
          {
            "2024-04": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-04": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2024-04": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2024-04": "a #1"
          }
        ],
        "android": [
          {
            "2024-04": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2024-04": "a #1"
          }
        ],
        "android": [
          {
            "2024-04": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-08": "a #5"
          }
        ],
        "ios": [
          {
            "2024-08": "a #5"
          }
        ],
        "android": [
          {
            "2024-08": "a #5"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-04": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-04": "a #3"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-08": "a #5"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. The first <head> in the HTML is removed, so comment needs to be in the `<style>` tag of a second `<head>` element.",
      "2": "Partial. `<style>` tag not supported with non-google account. Comment inside `style:` attribute works.",
      "3": "Partial. Comment inside `<style>` tag works. Comment inside `style` attribute strips the whole attribute.",
      "4": "Partial. `<style>` tag not supported. Comment inside `style:` attribute works.",
      "5": "Partial. Comment inside `style` attribute works.",
      "6": "Not supported. The entire rule is removed within a `<style> element. The entire inline `style` attribute is removed."
    }
  },
  {
    "slug": "css-conic-gradient",
    "title": "conic-gradient()",
    "description": "Creates an image consisting of a gradient with color transitions rotated around a center point (rather than radiating from the center).",
    "url": "https://www.caniemail.com/features/css-conic-gradient/",
    "category": "css",
    "tags": [],
    "keywords": "gradients",
    "last_test_date": "2023-01-02",
    "test_url": "https://www.caniemail.com/tests/css-gradients.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-12": "n"
          }
        ],
        "macos": [
          {
            "2022-12": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-12": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "u"
          },
          {
            "6.1.90.16": "a #1"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "91.4.1": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with Hotmail/Outlook accounts."
    }
  },
  {
    "slug": "css-direction",
    "title": "direction",
    "description": "Sets the direction of text or table columns.",
    "url": "https://www.caniemail.com/features/css-direction/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": null,
    "last_test_date": "2021-10-05",
    "test_url": "https://www.caniemail.com/tests/css-direction.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/TzLrUhEnTKX7mZ1LTCpvaZ2PNzg4mnsZtoLJi0FVbCSRD/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-10": "a #1"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2021-10": "y"
          }
        ],
        "macos": [
          {
            "16.55": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. The client applies an `rtl` direction to the entire email if it contains text in a `rtl` language."
    }
  },
  {
    "slug": "css-display-flex",
    "title": "display:flex",
    "description": "",
    "url": "https://www.caniemail.com/features/css-display-flex/",
    "category": "css",
    "tags": [],
    "keywords": "flexbox",
    "last_test_date": "2021-11-02",
    "test_url": "https://www.caniemail.com/tests/css-flexbox.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/Kw9bvIPLsmmwVoXhbXpIu1FM31v4nV2KXMaEvPQPezSO9/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          },
          {
            "2020-11": "a #1"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          },
          {
            "2020-11": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2021-11": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2021-11": "n"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a"
          },
          {
            "2020-11": "y"
          }
        ],
        "android": [
          {
            "2019-02": "a"
          },
          {
            "2020-11": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2020-11": "y #2"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2020-11": "y #2"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2020-11": "y #2"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2020-11": "y #2"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2020-11": "y #2"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2020-11": "y #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported with non Google accounts.",
      "2": "`display:inline-flex` is not supported."
    }
  },
  {
    "slug": "css-display-grid",
    "title": "display:grid",
    "description": "",
    "url": "https://www.caniemail.com/features/css-display-grid/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-display-none",
    "title": "display:none",
    "description": "",
    "url": "https://www.caniemail.com/features/css-display-none/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-visual-effects.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/DhTRmGsVH6uobU4pHD3CasJywfBL4HnEjA1LOF8f9ctso/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #1 #2"
          },
          {
            "2010": "a #1 #2"
          },
          {
            "2013": "a #1 #2"
          },
          {
            "2016": "a #1 #2"
          },
          {
            "2019": "a #1 #2"
          }
        ],
        "windows-mail": [
          {
            "2019-09": "a #1 #2"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-09": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Does not inherit onto nested `<table>` elements.",
      "2": "Partial. Does not work when applied directly to an `<img>` element."
    }
  },
  {
    "slug": "css-display",
    "title": "display",
    "description": "Sets whether an element is treated as a block or inline element and the layout used for its children.",
    "url": "https://www.caniemail.com/features/css-display/",
    "category": "css",
    "tags": [],
    "keywords": "inline, block, inline-block",
    "last_test_date": "2021-12-01",
    "test_url": "https://www.caniemail.com/tests/css-display.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/eyGBFSORjrHd635gw4udynxX8ykC5bzlMUUrF6yi7Kspu/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "a #1"
          }
        ],
        "android": [
          {
            "2021-12": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-12": "a #2 #3"
          }
        ],
        "ios": [
          {
            "2021-12": "a #2"
          }
        ],
        "android": [
          {
            "2021-12": "a #2"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #4 #5"
          },
          {
            "2010": "a #4 #5"
          },
          {
            "2013": "a #4 #5"
          },
          {
            "2016": "a #4 #5"
          },
          {
            "2019": "a #4 #5"
          }
        ],
        "windows-mail": [
          {
            "2021-12": "a #4 #5"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "91.2": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-12": "a #6"
          }
        ],
        "ios": [
          {
            "2021-12": "a #6"
          }
        ],
        "android": [
          {
            "2021-12": "a #6"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-12": "a #6"
          }
        ],
        "ios": [
          {
            "2021-12": "a #6"
          }
        ],
        "android": [
          {
            "2021-12": "a #6"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-12": "a #7"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `flex`, `grid`, `flow-root`, `contents`, `inline flow-root`, `inline flex`, `inline grid`, `initial`, `revert`, `unset` are not supported with non Google accounts.",
      "2": "Partial. `inline-flex`, `inline-grid`, `flex`, `grid`, `flow-root`, `contents`, `inline flow-root`, `inline flex`, `inline grid`, `initial`, `revert`, `unset` values are not supported.",
      "3": "Buggy. Only the first value is kept with the two-value syntax.",
      "4": "Buggy. `display:none` does not inherit to inner tables.",
      "5": "Partial. Only supports `display:none` (but not on `<img>`).",
      "6": "Partial. `flow-root`, `inline-flex`, `inline-grid`, `inline flow`, `contents`, `revert` are not supported.",
      "7": "Partial. Two-value syntax are combined into a single one with a dash."
    }
  },
  {
    "slug": "css-empty-cells",
    "title": "empty-cells",
    "description": "Sets whether borders and backgrounds appear around `<table>` cells that have no visible content.",
    "url": "https://www.caniemail.com/features/css-empty-cells/",
    "category": "css",
    "tags": [],
    "keywords": "blank",
    "last_test_date": "2024-08-23",
    "test_url": "https://www.caniemail.com/tests/css-empty-cells.html",
    "test_results_url": "https://testi.at/proj/kgl7t57xs8jxueze0v8",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-08": "y"
          }
        ],
        "ios": [
          {
            "2024-08": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-08": "y"
          }
        ],
        "ios": [
          {
            "2024-08": "y"
          }
        ],
        "android": [
          {
            "2024-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2024-08": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-08": "n"
          }
        ],
        "macos": [
          {
            "2024-08": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-08": "y"
          }
        ],
        "ios": [
          {
            "2024-08": "y"
          }
        ],
        "android": [
          {
            "2024-08": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-08": "y"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-08": "y"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-08": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-filter",
    "title": "filter",
    "description": "Tests with values `blur`, `brightness`, `grayscale`, `hue-rotate`, `invert`, `opacity`, `saturate`, `sepia` and `shadow`.",
    "url": "https://www.caniemail.com/features/css-filter/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-01-03",
    "test_url": "https://www.caniemail.com/tests/css-visual-effects.html",
    "test_results_url": "https://testi.at/proj/73yrcloa1z681dkzu6",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-01": "a #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Multiple values don't work."
    }
  },
  {
    "slug": "css-flex-direction",
    "title": "flex-direction:column",
    "description": "",
    "url": "https://www.caniemail.com/features/css-flex-direction/",
    "category": "css",
    "tags": [],
    "keywords": "flexbox",
    "last_test_date": "2023-01-17",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-flex-wrap",
    "title": "flex-wrap: wrap",
    "description": "",
    "url": "https://www.caniemail.com/features/css-flex-wrap/",
    "category": "css",
    "tags": [],
    "keywords": "flexbox",
    "last_test_date": "2023-01-16",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-float",
    "title": "float",
    "description": "",
    "url": "https://www.caniemail.com/features/css-float/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-05-08",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://testi.at/proj/gyjkc98dtyzxfd3bhz",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11.7": "a #2"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "14": "a #2"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n #1"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          },
          {
            "2023-01": "y"
          },
          {
            "2024-05": "a #2"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          },
          {
            "2024-05": "a #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          },
          {
            "2024-05": "a #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported. `table` and `img` elements can use an `align` attribute to get a similar effect.",
      "2": "Partial. Logical property values `inline-start` and `inline-end` are not supported."
    }
  },
  {
    "slug": "css-font-kerning",
    "title": "font-kerning",
    "description": "",
    "url": "https://www.caniemail.com/features/css-font-kerning/",
    "category": "css",
    "tags": [],
    "keywords": "font,kerning",
    "last_test_date": "2022-08-01",
    "test_url": "https://www.caniemail.com/tests/css-font-kerning.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/RlRYNGDjVNBhofxCNxloUcRbUVWGDhJ2kZ4fy6HXpEatH/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "macos": [
          {
            "2022-08": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "4.2101.1": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          },
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-font-size",
    "title": "font-size",
    "description": "Sets the size of the font.",
    "url": "https://www.caniemail.com/features/css-font-size/",
    "category": "css",
    "tags": [],
    "keywords": "font,size",
    "last_test_date": "2024-02-28",
    "test_url": "https://www.caniemail.com/tests/css-font-size.html",
    "test_results_url": "https://testi.at/proj/vr3ai85bunngsxjjfd2",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-02": "y"
          }
        ],
        "ios": [
          {
            "2024-02": "y"
          }
        ],
        "android": [
          {
            "2024-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2024-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "a #1"
          },
          {
            "2016": "a #1"
          },
          {
            "2019": "a #1"
          },
          {
            "2021": "a #1"
          }
        ],
        "windows-mail": [
          {
            "2024-02": "a #2"
          }
        ],
        "macos": [
          {
            "2024-02": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-02": "y"
          }
        ],
        "ios": [
          {
            "2024-02": "y"
          }
        ],
        "android": [
          {
            "2024-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-02": "a #1"
          }
        ],
        "ios": [
          {
            "2024-02": "a #1"
          }
        ],
        "android": [
          {
            "2024-02": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-02": "a #1"
          }
        ],
        "ios": [
          {
            "2024-02": "a #1"
          }
        ],
        "android": [
          {
            "2024-02": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-02": "a #2"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-02": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-02": "a #1"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-02": "a #1"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial support. `rem` values are not supported.",
      "2": "Partial support. `relative` and `percentage` size values not supported."
    }
  },
  {
    "slug": "css-font-stretch",
    "title": "font-stretch",
    "description": "Selecting different font widths (e.g. condensed, expanded)",
    "url": "https://www.caniemail.com/features/css-font-stretch/",
    "category": "css",
    "tags": [],
    "keywords": "font",
    "last_test_date": "2023-09-23",
    "test_url": "https://www.caniemail.com/tests/css-font-stretch.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          }
        ],
        "ios": [
          {
            "16": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-09": "y #1"
          }
        ],
        "ios": [
          {
            "2023-09": "y"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2023-09": "y #1"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "macos": [
          {
            "2023-09": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2023-09": "y #1"
          }
        ],
        "ios": [
          {
            "2023-09": "y"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2023-09": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-09": "y #1"
          }
        ],
        "ios": [
          {
            "2023-09": "y"
          }
        ],
        "android": [
          {
            "2022-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-09": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "u"
          },
          {
            "6.1.90.16": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-01": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Depends on the browser. There is currently a bug in Chrome/Edge where font-stretch does not work for variable fonts."
    }
  },
  {
    "slug": "css-font-weight",
    "title": "font-weight",
    "description": "",
    "url": "https://www.caniemail.com/features/css-font-weight/",
    "category": "css",
    "tags": [],
    "keywords": "font,weight",
    "last_test_date": "2022-06-23",
    "test_url": "https://www.caniemail.com/tests/css-font-weight.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/n4Dj7AQAtcFsJEgkLoSucoofVEvWrmqTqsO5pev2ew8XN/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          },
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          },
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          },
          {
            "2022-06": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-01": "y"
          },
          {
            "2022-06": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          },
          {
            "2021-03": "a #1"
          },
          {
            "2024-04": "a #1"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #2"
          },
          {
            "2010": "a #2"
          },
          {
            "2013": "a #2"
          },
          {
            "2016": "a #2"
          },
          {
            "2019": "a #2"
          }
        ],
        "windows-mail": [
          {
            "2021-01": "a #2"
          }
        ],
        "macos": [
          {
            "2021-01": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "4.2101.1": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "6.21.1": "a #1"
          }
        ],
        "android": [
          {
            "6.16.2.1525679": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          },
          {
            "2022-06": "a #1"
          }
        ],
        "ios": [
          {
            "2021-01": "a #1"
          }
        ],
        "android": [
          {
            "2021-01": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2021-01": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          },
          {
            "2022-06": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial support. `<number>` values are not supported as per CSS Fonts Level 4 where any `<number>` value between 1 and 1000 (inclusive) is a valid value. Only the following numeric values are supported: 100, 200, 300, 400, 500, 600, 700, 800, and 900.",
      "2": "Partial support. `<number>` values between 0 and 599 are set as normal font weight. `<number>` values between 600 and 1000 are set as bold font weight."
    }
  },
  {
    "slug": "css-font",
    "title": "font shorthand",
    "description": "",
    "url": "https://www.caniemail.com/features/css-font/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-text.html",
    "test_results_url": "https: //app.emailonacid.com/app/acidtest/DkqbHs69ek5UnK6uhZ7Uj0n5GVQNTP4Z1FvgXvnKyEoTM/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          },
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "2019-02": "a #1"
          },
          {
            "2020-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "y"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-function-clamp",
    "title": "clamp()",
    "description": "Support for the CSS `clamp()` function.",
    "url": "https://www.caniemail.com/features/css-function-clamp/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-05-07",
    "test_url": "https://www.caniemail.com/tests/css-clamp.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/zSEJIfc49LeYUVU5ncqsWBDRRTZlqq01sYRUSICWOs74Y/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "n"
          },
          {
            "14.0": "y"
          }
        ],
        "ios": [
          {
            "13": "n"
          },
          {
            "14.5": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "2021-05": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-function-light-dark",
    "title": "light-dark()",
    "description": "Enables setting two colors (one for light and the other for dark mode) for a property.",
    "url": "https://www.caniemail.com/features/css-function-light-dark/",
    "category": "css",
    "tags": [],
    "keywords": "dark, light",
    "last_test_date": "2024-08-14",
    "test_url": "https://www.caniemail.com/tests/css-function-light-dark.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/Lai13xyIE95H6jo1BBs6ay0f3RvJdPL344S3j3M7FbeU4/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16.0": "y #1"
          }
        ],
        "ios": [
          {
            "17.5.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-08": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-08": "n"
          }
        ],
        "macos": [
          {
            "16.88": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "u"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-08": "a #2"
          }
        ],
        "ios": [
          {
            "2024-08": "a #1 #2"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "115.10.1": "n"
          },
          {
            "128.1.0": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-08": "a #2"
          }
        ],
        "ios": [
          {
            "2024-08": "y #1"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-08": "a #2"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-08": "a #2"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-08": "a #2"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2024-08": "a #2"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Only supported if you’ve updated your OS with Safari 17.5 or later.",
      "2": "Buggy. The function is supported but the color stays light even in dark mode."
    }
  },
  {
    "slug": "css-function-max",
    "title": "max()",
    "description": "Support for the CSS `max()` function.",
    "url": "https://www.caniemail.com/features/css-function-max/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-05-07",
    "test_url": "https://www.caniemail.com/tests/css-clamp.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/zSEJIfc49LeYUVU5ncqsWBDRRTZlqq01sYRUSICWOs74Y/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          },
          {
            "14.0": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          },
          {
            "14.5": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "2021-05": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-function-min",
    "title": "min()",
    "description": "Support for the CSS `min()` function.",
    "url": "https://www.caniemail.com/features/css-function-min/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-05-07",
    "test_url": "https://www.caniemail.com/tests/css-clamp.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/zSEJIfc49LeYUVU5ncqsWBDRRTZlqq01sYRUSICWOs74Y/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          },
          {
            "14.0": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          },
          {
            "14.5": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "2021-05": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-gap",
    "title": "gap, column-gap, row-gap",
    "description": "Properties for adding spacing between grid items, flex items and columns",
    "url": "https://www.caniemail.com/features/css-gap/",
    "category": "css",
    "tags": [],
    "keywords": "gap",
    "last_test_date": "2022-12-28",
    "test_url": "https://www.caniemail.com/tests/css-gap.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/OAnjtSK1hEGcC3V9Q30mzIU8xKXIqwNq0M4lZywGOhQIn/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13.1": "y"
          }
        ],
        "ios": [
          {
            "16.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-12": "a #1"
          }
        ],
        "ios": [
          {
            "2022-12": "a #1"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-12": "n"
          }
        ],
        "macos": [
          {
            "2022-12": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2022-12": "a #1"
          },
          {
            "2023-12": "a #1"
          }
        ],
        "ios": [
          {
            "2022-12": "a #1"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6.1": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-12": "a #2"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Supports column-gap for flexbox.",
      "2": "Partial. Supports gap and column-gap for flexbox. Supports gap for multi-column layout (i.e. in conjunction with CSS column-count property)"
    }
  },
  {
    "slug": "css-grid-template",
    "title": "grid-template-* properties",
    "description": "This page reflects support for `grid-template`, `grid-template-areas`, `grid-template-columns`, `grid-template-rows`.",
    "url": "https://www.caniemail.com/features/css-grid-template/",
    "category": "css",
    "tags": [],
    "keywords": "grid-template, grid-template-areas, grid-template-columns, grid-template-rows",
    "last_test_date": "2023-01-09",
    "test_url": "https://www.caniemail.com/tests/css-grid-properties.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/MBJ7UfOQ1sVRvPBJNsWByvymNSwrIhi2drpCo4gTw0oM0/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13.1": "y"
          }
        ],
        "ios": [
          {
            "16.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-01": "n"
          }
        ],
        "macos": [
          {
            "2023-01": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-01": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.74.5": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2023-01": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "u"
          }
        ],
        "android": [
          {
            "2023-01": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-01": "u"
          }
        ],
        "ios": [
          {
            "2023-01": "u"
          }
        ],
        "android": [
          {
            "2023-01": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-01": "u"
          }
        ],
        "android": [
          {
            "2023-01": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-height",
    "title": "height property",
    "description": null,
    "url": "https://www.caniemail.com/features/css-height/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-09-27",
    "test_url": "https://www.caniemail.com/tests/css-width-height.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/UhsQmS14DHKFfotKEcCTnWaoAiS24FJMiApZ1OtmHR7vs/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-09": "y"
          }
        ],
        "ios": [
          {
            "2019-09": "y"
          }
        ],
        "android": [
          {
            "2019-09": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-09": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-09": "y"
          }
        ],
        "android": [
          {
            "2019-09": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "a #2"
          },
          {
            "2010": "a #2"
          },
          {
            "2013": "a #2"
          },
          {
            "2016": "a #2"
          },
          {
            "2019": "a #2"
          }
        ],
        "windows-mail": [
          {
            "2019-09": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-09": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2019-09": "y"
          }
        ],
        "android": [
          {
            "2019-09": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-09": "y"
          }
        ],
        "ios": [
          {
            "2019-09": "y"
          }
        ],
        "android": [
          {
            "2019-09": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-09": "y #1"
          }
        ],
        "ios": [
          {
            "2019-09": "y #1"
          }
        ],
        "android": [
          {
            "2019-09": "y #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-09": "n #1"
          }
        ],
        "ios": [
          {
            "2019-09": "n #1"
          }
        ],
        "android": [
          {
            "2019-09": "n #1"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. Replaces `height` by `min-height`.",
      "2": "Partial. Not supported on `<body>`, `<span>`, `<div>` or `<p>` elements."
    }
  },
  {
    "slug": "css-hyphenate-character",
    "title": "hyphenate-character",
    "description": "Sets the character (or string) used at the end of a line before a hyphenation break.",
    "url": "https://www.caniemail.com/features/css-hyphenate-character/",
    "category": "css",
    "tags": [],
    "keywords": "hyphens, break",
    "last_test_date": "2024-06-19",
    "test_url": "https://www.caniemail.com/tests/css-hyphenate-character.html",
    "test_results_url": "https://testi.at/proj/vr3e1e5bikda08oxc2",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "20": "n"
          },
          {
            "21": "n"
          },
          {
            "22": "n"
          },
          {
            "23": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-06": "n"
          }
        ],
        "ios": [
          {
            "2024-06": "n"
          }
        ],
        "android": [
          {
            "2024-06": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-06": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-06": "u"
          }
        ],
        "ios": [
          {
            "2024-06": "u"
          }
        ],
        "android": [
          {
            "2024-06": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-06": "n"
          }
        ],
        "macos": [
          {
            "2024-06": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-06": "n"
          }
        ],
        "ios": [
          {
            "2024-06": "n"
          }
        ],
        "android": [
          {
            "2024-06": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-06": "n"
          }
        ],
        "ios": [
          {
            "2024-06": "n"
          }
        ],
        "android": [
          {
            "2024-06": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-06": "n"
          }
        ],
        "ios": [
          {
            "2024-06": "n"
          }
        ],
        "android": [
          {
            "2024-06": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-06": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-06": "u"
          }
        ],
        "ios": [
          {
            "2024-06": "u"
          }
        ],
        "android": [
          {
            "2024-06": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-06": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-06": "a #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-06": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-06": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-06": "n"
          }
        ],
        "ios": [
          {
            "2024-06": "u"
          }
        ],
        "android": [
          {
            "2024-06": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-06": "n"
          }
        ],
        "ios": [
          {
            "2024-06": "u"
          }
        ],
        "android": [
          {
            "2024-06": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-06": "u"
          }
        ],
        "android": [
          {
            "2024-06": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Does not support encoded character values"
    }
  },
  {
    "slug": "css-hyphenate-limit-chars",
    "title": "hyphenate-limit-chars",
    "description": "Specifies the minimum word length to allow hyphenation of words as well as the minimum number of characters before and after the hyphen.",
    "url": "https://www.caniemail.com/features/css-hyphenate-limit-chars/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-08-08",
    "test_url": "https://www.caniemail.com/tests/css-hyphenate-limit-chars.html",
    "test_results_url": "https://testi.at/proj/kgljcojhdyrfdv5s2",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-08": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-08": "n"
          }
        ],
        "macos": [
          {
            "2024-08": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "n"
          }
        ],
        "android": [
          {
            "2024-08": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-08": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-08": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-08": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-08": "n"
          }
        ],
        "ios": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-08": "u"
          }
        ],
        "android": [
          {
            "2024-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-hyphens",
    "title": "hyphens",
    "description": "",
    "url": "https://www.caniemail.com/features/css-hyphens/",
    "category": "css",
    "tags": [],
    "keywords": "hyphens, break",
    "last_test_date": "2022-08-03",
    "test_url": "https://www.caniemail.com/tests/css-hyphen.html",
    "test_results_url": "https://testi.at/proj/rvEUZkBsPVNSbRohvoRigyRiM",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          },
          {
            "17": "y"
          },
          {
            "18": "y"
          },
          {
            "19": "y"
          },
          {
            "20": "y"
          },
          {
            "21": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-08": "n"
          }
        ],
        "macos": [
          {
            "2022-08": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ],
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-important",
    "title": "!important keyword",
    "description": "An `!important` declaration takes precedence over a normal declaration.",
    "url": "https://www.caniemail.com/features/css-important/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-11-30",
    "test_url": "https://www.caniemail.com/tests/css-important.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/JEyxyPfKHFZCPKxlgiOugpH4lyNrXX39cd9M8xaW1DojH/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          },
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-11": "a #1"
          }
        ],
        "ios": [
          {
            "2021-11": "a #1 #2"
          }
        ],
        "android": [
          {
            "2021-11": "a #1 #2"
          }
        ],
        "mobile-webmail": [
          {
            "2021-11": "a #1 #2"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-11": "n #3"
          }
        ],
        "ios": [
          {
            "2021-11": "n #3"
          }
        ],
        "android": [
          {
            "2021-11": "n #3"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #4 #5"
          },
          {
            "2010": "a #4 #5"
          },
          {
            "2013": "a #4 #5"
          },
          {
            "2016": "a #4 #5"
          },
          {
            "2019": "a #4 #5"
          }
        ],
        "windows-mail": [
          {
            "2021-11": "a #4"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "a #6"
          }
        ],
        "android": [
          {
            "2021-11": "a #6"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "91.2.1": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-11": "a #7"
          }
        ],
        "ios": [
          {
            "2021-11": "a #7"
          }
        ],
        "android": [
          {
            "2021-11": "a #7"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-11": "a #7"
          }
        ],
        "ios": [
          {
            "2021-11": "a #7"
          }
        ],
        "android": [
          {
            "2021-11": "a #7"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-11": "a #8"
          }
        ],
        "ios": [
          {
            "2021-11": "a #6"
          }
        ],
        "android": [
          {
            "2021-11": "a #6"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "wp-pl": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported in lowercase. (See [email-bugs#13](https://github.com/hteumeuleu/email-bugs/issues/13))",
      "2": "Partial. Only supported inline when using a Non Gmail Account due to the lack of `<style>` support.",
      "3": "Not supported. The entire declaration is removed if there is no space before `!important`.",
      "4": "Partial. Only supported with a space before.",
      "5": "Partial. Not supported inline. (See [email-bugs#31](https://github.com/hteumeuleu/email-bugs/issues/31))",
      "6": "Partial. Only supported inline due to the lack of `<style>` support.",
      "7": "Partial. Removed if there is no space before when used with a `background-image` property. (See [email-bugs#16](https://github.com/hteumeuleu/email-bugs/issues/16))",
      "8": "Partial. Only supported in lowercase."
    }
  },
  {
    "slug": "css-inline-size",
    "title": "inline-size ",
    "description": "",
    "url": "https://www.caniemail.com/features/css-inline-size/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "n"
          }
        ],
        "ios": [
          {
            "12.1": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-inset",
    "title": "inset",
    "description": "Shorthand that corresponds to the `top`, `right`, `bottom`, and/or `left` properties",
    "url": "https://www.caniemail.com/features/css-inset/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-05-29",
    "test_url": "https://www.caniemail.com/tests/css-inset.html",
    "test_results_url": "https://testi.at/proj/rlpdia3k18jytjx8c2",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.15": "n"
          },
          {
            "11.7": "y"
          }
        ],
        "ios": [
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-05": "n"
          }
        ],
        "macos": [
          {
            "2024-05": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-05": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-intrinsic-size",
    "title": "fit-content, min-content, max-content",
    "description": "Sets the height or width relative to its content.",
    "url": "https://www.caniemail.com/features/css-intrinsic-size/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2022-12-31",
    "test_url": "https://www.caniemail.com/tests/css-intrinsic-size.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/tcE2poX3tOf6HlwmIH6GQqveQN6SwMrsqCp4ylpkFVc3W/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y #2"
          }
        ],
        "ios": [
          {
            "12.1": "y #2"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "a #3"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-12": "n"
          }
        ],
        "macos": [
          {
            "2022-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-12": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "a #1"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y #2"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Supports `min-content` and `fit-content` only.",
      "2": "Buggy. `width: min-content` acts as if `word-break: break-all` had been set on the element.",
      "3": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-justify-content",
    "title": "justify-content",
    "description": "",
    "url": "https://www.caniemail.com/features/css-justify-content/",
    "category": "css",
    "tags": [],
    "keywords": "justify,align,flexbox,grid",
    "last_test_date": "2021-03-09",
    "test_url": "https://www.caniemail.com/tests/css-justify-content.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/xzDNNDwodl8rMxtm0irAH2Y4XVYRhz2GOzStUxrTVFgog/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-12": "n"
          }
        ],
        "macos": [
          {
            "2020-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-12": "n"
          },
          {
            "2023-01": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          },
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          },
          {
            "2023-01": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          }
        ],
        "android": [
          {
            "6.16.2.1519779": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2021-03": "n"
          }
        ],
        "android": [
          {
            "2021-03": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2020-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-03": "y"
          }
        ],
        "android": [
          {
            "2021-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-03": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {}
  },
  {
    "slug": "css-left-right-top-bottom",
    "title": "left, right, top, bottom",
    "description": "",
    "url": "https://www.caniemail.com/features/css-left-right-top-bottom/",
    "category": "css",
    "tags": [],
    "keywords": "absolute, sticky, fixed, relative, position",
    "last_test_date": "2021-05-16",
    "test_url": "https://www.caniemail.com/tests/css-positioning.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/E45AW3a9IiIhUSBpv3dc1qPfMiMN8mLepy5BsvqtpXhhy/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14": "y"
          }
        ],
        "ios": [
          {
            "14.5": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "a #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `left` and `top` are not supported."
    }
  },
  {
    "slug": "css-letter-spacing",
    "title": "letter-spacing",
    "description": "",
    "url": "https://www.caniemail.com/features/css-letter-spacing/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-01-19",
    "test_url": "https://www.caniemail.com/tests/css-text.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/VfcyPsGJhy1PhKyxvuo0oXGz0tPdMLjc7tI37nGIW8HWu/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "a #1 #2"
          },
          {
            "2010": "a #1 #2"
          },
          {
            "2013": "a #1 #2"
          },
          {
            "2016": "a #1 #2"
          },
          {
            "2019": "a #1 #2"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "a #1"
          }
        ],
        "macos": [
          {
            "2020-01": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-01": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Big negative values are rendered differently from CSS standards.",
      "2": "Buggy. Values set in `em` are smaller than the expected render in CSS. See [#192](https://github.com/hteumeuleu/caniemail/issues/192)."
    }
  },
  {
    "slug": "css-line-height",
    "title": "line-height",
    "description": "Sets the height of a line box. Or, basically, the height of a line of text.",
    "url": "https://www.caniemail.com/features/css-line-height/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-10-02",
    "test_url": "https://www.caniemail.com/tests/css-line-height.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/POu1Ixvy9x2XUtzmwlFPA4Lx8DDVhRpGvraSjEmf9DnDG/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "a #2"
          }
        ],
        "android": [
          {
            "2021-10": "a #2"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #1"
          },
          {
            "2010": "a #1"
          },
          {
            "2013": "a #1"
          },
          {
            "2016": "a #1"
          },
          {
            "2019": "a #1"
          }
        ],
        "windows-mail": [
          {
            "2021-10": "a #1"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ],
        "ios": [
          {
            "2021-10": "y"
          }
        ],
        "android": [
          {
            "2021-10": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-10": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. `em` and `px` units behave weirdly. Use `mso-line-height-rule:exactly`.",
      "2": "Partial. `normal` value is not supported."
    }
  },
  {
    "slug": "css-linear-gradient",
    "title": "linear-gradient()",
    "description": "Creates an image consisting of a progressive transition between two or more colors along a straight line.",
    "url": "https://www.caniemail.com/features/css-linear-gradient/",
    "category": "css",
    "tags": [],
    "keywords": "gradients",
    "last_test_date": "2021-12-29",
    "test_url": "https://www.caniemail.com/tests/css-gradients.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/8FCYDYSPXot6jquGzeiqGsfoeCU4tvCeRpnVG0z6luNLr/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2021-12": "n"
          }
        ],
        "macos": [
          {
            "16.57": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-12": "n"
          },
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.2148.2": "n"
          }
        ],
        "android": [
          {
            "4.2147.4": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          },
          {
            "6.1.90.16": "a #2"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "91.4.1": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Gradients can be created in VML using `type=\"gradient\"` on a `<v:fill>`. See [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/web-workshop---how-to-use-vml-on-web-pages-----fill--element#gradient-fill).",
      "2": "Partial. Not supported with Hotmail/Outlook accounts."
    }
  },
  {
    "slug": "css-list-style-image",
    "title": "list-style-image",
    "description": null,
    "url": "https://www.caniemail.com/features/css-list-style-image/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-04-20",
    "test_url": "https://www.caniemail.com/tests/css-list.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/ifwlqtEsBCU23xVI7NgjBqvJlcJ4c20Akv3aRW3ugRJsP/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2020-04": "n #1"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2020-04": "n #2"
          },
          {
            "2023-12": "n #2"
          }
        ],
        "ios": [
          {
            "2020-04": "n #2"
          }
        ],
        "android": [
          {
            "2020-04": "n #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-04": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-04": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-04": "n #3"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported, but the proprietary `mso-bullet-image` property can be used instead on `<li>`. Outlook 2007 and 2010 only support `.ico` and `.gif` file formats.",
      "2": "Not supported, but image values are supported through the `list-style` shorthand property.",
      "3": "`url()` is transformed into `proton-url()`."
    }
  },
  {
    "slug": "css-list-style-position",
    "title": "list-style-position",
    "description": null,
    "url": "https://www.caniemail.com/features/css-list-style-position/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-04-20",
    "test_url": "https://www.caniemail.com/tests/css-list.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/ifwlqtEsBCU23xVI7NgjBqvJlcJ4c20Akv3aRW3ugRJsP/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2020-04": "n #1"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-04": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported, but the proprietary `mso-text-indent-alt` property can be used instead."
    }
  },
  {
    "slug": "css-list-style-type",
    "title": "list-style-type",
    "description": null,
    "url": "https://www.caniemail.com/features/css-list-style-type/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": null,
    "last_test_date": "2020-04-20",
    "test_url": "https://www.caniemail.com/tests/css-list.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/ifwlqtEsBCU23xVI7NgjBqvJlcJ4c20Akv3aRW3ugRJsP/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-04": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-04": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": "Tests and support are based on the CSS Level 2 specification. `<custom-ident>`, `symbols()` and `<string>` values are not tested here.",
    "notes_by_num": {}
  },
  {
    "slug": "css-list-style",
    "title": "list-style",
    "description": null,
    "url": "https://www.caniemail.com/features/css-list-style/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-04-20",
    "test_url": "https://www.caniemail.com/tests/css-list.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/ifwlqtEsBCU23xVI7NgjBqvJlcJ4c20Akv3aRW3ugRJsP/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "a #1"
          }
        ],
        "ios": [
          {
            "2020-04": "a #1"
          }
        ],
        "android": [
          {
            "2020-04": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "a #1"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "a #2"
          },
          {
            "2010": "a #2"
          },
          {
            "2013": "a #2"
          },
          {
            "2016": "a #2"
          },
          {
            "2019": "a #2"
          }
        ],
        "windows-mail": [
          {
            "2020-04": "a #2"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #3"
          }
        ],
        "outlook-com": [
          {
            "2020-04": "y"
          },
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-04": "a #3"
          }
        ],
        "ios": [
          {
            "2020-04": "a #3"
          }
        ],
        "android": [
          {
            "2020-04": "a #3"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-04": "a #3"
          }
        ],
        "ios": [
          {
            "2020-04": "a #3"
          }
        ],
        "android": [
          {
            "2020-04": "a #3"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-04": "a #4"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": "Tests and support are based on the CSS Level 2 specification. `<custom-ident>`, `symbols()` and `<string>` values are not tested here.",
    "notes_by_num": {
      "1": "`list-style-image` values are not supported. The entire `list-style` property is removed if present.",
      "2": "Only `list-style-type` values are supported.",
      "3": "`list-style-image` values are not supported but the rest of the `list-style` property is kept.",
      "4": "`url()` is transformed into `proton-url()` for `list-style-type` values, invalidating the entire property."
    }
  },
  {
    "slug": "css-margin-block-start-end",
    "title": "margin-block-start & margin-block-end",
    "description": "Support for the `margin-block-start` and `margin-block-end` css properties.",
    "url": "https://www.caniemail.com/features/css-margin-block-start-end/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "margin-block-start, margin-block-end",
    "last_test_date": "2022-07-13",
    "test_url": "https://www.caniemail.com/tests/css-margin-logical-properties.html",
    "test_results_url": "https://testi.at/proj/qAmuL03Fg51cE6hkbNSVrXik",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "y"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-margin-inline-block",
    "title": "margin-inline & margin-block",
    "description": "Support for the `margin-inline` and `margin-block` shorthand properties.",
    "url": "https://www.caniemail.com/features/css-margin-inline-block/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "margin-inline, margin-block",
    "last_test_date": "2022-07-12",
    "test_url": "https://www.caniemail.com/tests/css-margin-logical-properties.html",
    "test_results_url": "https://testi.at/proj/qAmuL03Fg51cE6hkbNSVrXik",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "n"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          },
          {
            "11": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-margin-inline-start-end",
    "title": "margin-inline-start & margin-inline-end",
    "description": "Support for the `margin-inline-start` and `margin-inline-end` css properties.",
    "url": "https://www.caniemail.com/features/css-margin-inline-start-end/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "margin-inline-start, margin-inline-end",
    "last_test_date": "2022-07-13",
    "test_url": "https://www.caniemail.com/tests/css-margin-logical-properties.html",
    "test_results_url": "https://testi.at/proj/qAmuL03Fg51cE6hkbNSVrXik",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "y"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-margin-inline",
    "title": "margin-inline & margin-block",
    "description": "Support for the `margin-inline` and `margin-block` shorthand properties.",
    "url": "https://www.caniemail.com/features/css-margin-inline/",
    "category": "css",
    "tags": [],
    "keywords": "margin-inline, margin-block",
    "last_test_date": "2022-07-01",
    "test_url": "https://www.caniemail.com/tests/css-margin-logical-properties.html",
    "test_results_url": "https://testi.at/proj/qAmuL03Fg51cE6hkbNSVrXik",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "n"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-margin",
    "title": "margin",
    "description": "Support for the `margin` shorthand property and the `margin-left`, `margin-right`, `margin-top`, `margin-bottom` properties.",
    "url": "https://www.caniemail.com/features/css-margin/",
    "category": "css",
    "tags": [],
    "keywords": "margin-left, margin-right, margin-top, margin-bottom",
    "last_test_date": "2019-10-01",
    "test_url": "https://www.caniemail.com/tests/css-margin.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/UmR6V6XenYY9bQiABuLGZRRrdP3fj2ZraiJjEyi4WKBho/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "a #1"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "a #1 #2 #3 #4"
          },
          {
            "2010": "a #1 #2 #3 #4"
          },
          {
            "2013": "a #1 #2 #3 #4"
          },
          {
            "2016": "a #1 #2 #3 #4"
          },
          {
            "2019": "a #1 #2 #3 #4"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "a #1 #2 #3"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2023-12": "a #1"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.3.1": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "a #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Negative values are not supported.",
      "2": "Partial. Not supported on `<span>` and `<body>` elements.",
      "3": "Buggy. `background-color` is included inside the `margin`.",
      "4": "Partial. `auto` value is not supported."
    }
  },
  {
    "slug": "css-max-block-size",
    "title": "max-block-size",
    "description": "",
    "url": "https://www.caniemail.com/features/css-max-block-size/",
    "category": "css",
    "tags": [],
    "keywords": "max, block, size",
    "last_test_date": "2022-09-01",
    "test_url": "https://www.caniemail.com/tests/css-max-block-size.html",
    "test_results_url": "https://testi.at/proj/1y7SkPH3W7FPg0HwxS9lEiY",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          },
          {
            "17": "y"
          },
          {
            "18": "y"
          },
          {
            "19": "y"
          },
          {
            "20": "y"
          },
          {
            "21": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-max-height",
    "title": "max-height property",
    "description": "Sets the maximum height of an element.",
    "url": "https://www.caniemail.com/features/css-max-height/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-11-29",
    "test_url": "https://www.caniemail.com/tests/css-width-height.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/OyakEYuRTOxGB2hvK9C0F3lsjxpwtUJXZJPrixqyF8gEI/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-11": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-11": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "y"
          },
          {
            "91.3.2": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-max-inline-size",
    "title": "max-inline-size",
    "description": "Defines the horizontal or vertical maximum size of an element's block, depending on its writing mode",
    "url": "https://www.caniemail.com/features/css-max-inline-size/",
    "category": "css",
    "tags": [],
    "keywords": "max, inline, size",
    "last_test_date": "2024-05-31",
    "test_url": "https://www.caniemail.com/tests/css-max-inline-size.html",
    "test_results_url": "https://testi.at/proj/8r8g0dn81y8jc72z09",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-05": "y"
          }
        ],
        "ios": [
          {
            "2024-05": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-05": "n"
          }
        ],
        "macos": [
          {
            "2024-05": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-05": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-max-width",
    "title": "max-width",
    "description": "This is the description of the `max-width` property.",
    "url": "https://www.caniemail.com/features/css-max-width/",
    "category": "css",
    "tags": [],
    "keywords": "size",
    "last_test_date": "2019-08-02",
    "test_url": "https://www.caniemail.com/tests/css-width-height.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/dP8XNPcCLZGrogYGvFgCRRjJJO2nTWxchQ0WZSu0Pxcyb/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "y"
          }
        ],
        "ios": [
          {
            "5.1": "a #2"
          },
          {
            "6.1": "a #2"
          },
          {
            "10.3": "y"
          },
          {
            "12.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "a #2"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "a #1"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "a #1"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-08": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "a #2"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "a #2"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "a #2"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only works on `<table>` elements.",
      "2": "Partial. Doesn't work on `<table>` elements, as per [CSS 2.1 specification](https://www.w3.org/TR/CSS2/visudet.html#min-max-widths)."
    }
  },
  {
    "slug": "css-min-block-size",
    "title": "min-block-size",
    "description": "Defines the minimum horizontal or vertical size of an element's block, depending on its writing mode",
    "url": "https://www.caniemail.com/features/css-min-block-size/",
    "category": "css",
    "tags": [],
    "keywords": "min, block, size",
    "last_test_date": "2024-05-31",
    "test_url": "https://www.caniemail.com/tests/css-min-block-size.html",
    "test_results_url": "https://testi.at/proj/73yg05zgtpk3cez6ua5",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-05": "y"
          }
        ],
        "ios": [
          {
            "2024-05": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-05": "n"
          }
        ],
        "macos": [
          {
            "2024-05": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-05": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-min-height",
    "title": "min-height property",
    "description": "Sets the minimum height of an element.",
    "url": "https://www.caniemail.com/features/css-min-height/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-11-29",
    "test_url": "https://www.caniemail.com/tests/css-width-height.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/OyakEYuRTOxGB2hvK9C0F3lsjxpwtUJXZJPrixqyF8gEI/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-11": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-11": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "n"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "y"
          },
          {
            "91.3.2": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "n"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-min-inline-size",
    "title": "min-inline-size",
    "description": "",
    "url": "https://www.caniemail.com/features/css-min-inline-size/",
    "category": "css",
    "tags": [],
    "keywords": "min, inline, size",
    "last_test_date": "2022-08-30",
    "test_url": "https://www.caniemail.com/tests/css-min-inline-size.html",
    "test_results_url": "https://testi.at/proj/6m0cx5puENPh8pLi9rpSPzJSB",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          },
          {
            "17": "y"
          },
          {
            "18": "y"
          },
          {
            "19": "y"
          },
          {
            "20": "y"
          },
          {
            "21": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-min-width",
    "title": "min-width property",
    "description": "Sets the minimum width of an element.",
    "url": "https://www.caniemail.com/features/css-min-width/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-11-29",
    "test_url": "https://www.caniemail.com/tests/css-width-height.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/OyakEYuRTOxGB2hvK9C0F3lsjxpwtUJXZJPrixqyF8gEI/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-11": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-11": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "y"
          },
          {
            "91.3.2": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ],
        "ios": [
          {
            "2021-11": "y"
          }
        ],
        "android": [
          {
            "2021-11": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-11": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-mix-blend-mode",
    "title": "mix-blend-mode",
    "description": "",
    "url": "https://www.caniemail.com/features/css-mix-blend-mode/",
    "category": "css",
    "tags": [],
    "keywords": "mix-blend-mode,blend,filter",
    "last_test_date": "2020-12-12",
    "test_url": "https://www.caniemail.com/tests/css-mix-blend-mode.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/Yh6M44osu9gXxAcqLb2TBazoUxeQYOXHgdiEWg2wYbEhj/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "a #1"
          }
        ],
        "android": [
          {
            "2020-12": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-12": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-12": "n"
          }
        ],
        "macos": [
          {
            "2020-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-12": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "2020-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-12": "n"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.30.30": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "2020-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "2020-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-modern-color",
    "title": "lch(), oklch(), lab(), oklab()",
    "description": "Modern color values: lch, lab, oklch and oklab",
    "url": "https://www.caniemail.com/features/css-modern-color/",
    "category": "css",
    "tags": [],
    "keywords": "color",
    "last_test_date": "2023-01-18",
    "test_url": "https://www.caniemail.com/tests/css-modern-color.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13.1": "y"
          }
        ],
        "ios": [
          {
            "16.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-01": "n #2"
          }
        ],
        "ios": [
          {
            "2023-01": "n #2"
          }
        ],
        "android": [
          {
            "2023-01": "n #2"
          }
        ],
        "mobile-webmail": [
          {
            "2023-01": "n #2"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-01": "u"
          }
        ],
        "ios": [
          {
            "2023-01": "u"
          }
        ],
        "android": [
          {
            "2023-01": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-01": "u"
          }
        ],
        "macos": [
          {
            "2023-01": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-01": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.74.5": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-12": "u"
          }
        ],
        "ios": [
          {
            "2020-12": "u"
          }
        ],
        "android": [
          {
            "2020-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-01": "y #1"
          }
        ],
        "ios": [
          {
            "2023-01": "y"
          }
        ],
        "android": [
          {
            "2023-01": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-01": "y #1"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-01": "y #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-01": "y #1"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Depends on browser support.",
      "2": "Using this syntax for an inline style will remove all inline styles applied to that element."
    }
  },
  {
    "slug": "css-nesting",
    "title": "CSS Nesting",
    "description": "A syntax for nesting selectors, providing the ability to nest one style rule inside another.",
    "url": "https://www.caniemail.com/features/css-nesting/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2023-08-31",
    "test_url": "https://www.caniemail.com/tests/css-nesting.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/8z9ecWkyaSHebmYl0r6dlWFfcia0VNfeKu6s01l5Fw3M0/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16.0": "a #1"
          }
        ],
        "ios": [
          {
            "16.6": "a #1"
          },
          {
            "17.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-08": "n"
          }
        ],
        "ios": [
          {
            "2023-08": "n"
          }
        ],
        "android": [
          {
            "2023-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2023-08": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-08": "a #2"
          }
        ],
        "ios": [
          {
            "2023-08": "a #2"
          }
        ],
        "android": [
          {
            "2023-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-08": "n"
          }
        ],
        "macos": [
          {
            "16.78": "a #1"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-08": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2023-08": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "u"
          },
          {
            "6.1.90.16": "a #4"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-08": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2023-08": "n"
          }
        ],
        "android": [
          {
            "2023-08": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.15": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-01": "n #3"
          }
        ],
        "ios": [
          {
            "2023-08": "u"
          }
        ],
        "android": [
          {
            "2023-08": "u"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-08": "n #3"
          }
        ],
        "ios": [
          {
            "2023-08": "n #3"
          }
        ],
        "android": [
          {
            "2024-03": "n #3"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-08": "u"
          }
        ],
        "ios": [
          {
            "2023-08": "u"
          }
        ],
        "android": [
          {
            "2023-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-01": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-08": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-08": "u"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2023-08": "u"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2023-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2021-12": "u"
          }
        ],
        "ios": [
          {
            "2021-12": "u"
          }
        ],
        "android": [
          {
            "2021-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2021-12": "u"
          }
        ],
        "ios": [
          {
            "2021-12": "u"
          }
        ],
        "android": [
          {
            "2021-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2021-12": "u"
          }
        ],
        "android": [
          {
            "2021-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `E { F {}}` doesn’t work, but `E { & F {}}` does. Full support was added in macOS 14.2.",
      "2": "Buggy. The syntax is supported, but nested selectors are prefixed by the webmail, which might invalidate the selector.",
      "3": "Not supported. The nested selectors are removed, making the nested properties apply to the parent selector.",
      "4": "Partial. Not supported with Hotmail/Outlook accounts."
    }
  },
  {
    "slug": "css-object-fit",
    "title": "object-fit",
    "description": "The `object-fit` CSS property sets how the content of a replaced element, such as an `<img>` or `<video>`, should be resized to fit its container.",
    "url": "https://www.caniemail.com/features/css-object-fit/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-07-15",
    "test_url": "https://www.caniemail.com/tests/css-object.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/Rg26n7zpfSw6bcxjGdDU9eF0aieX8XR7QoXfSfjbOEKXt/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          },
          {
            "14.6": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "a #1"
          }
        ],
        "android": [
          {
            "2021-07": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ],
        "ios": [
          {
            "2021-07": "n"
          }
        ],
        "android": [
          {
            "2021-07": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-07": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "2019": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-07": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ],
        "ios": [
          {
            "2021-07": "n"
          }
        ],
        "android": [
          {
            "2021-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ],
        "ios": [
          {
            "2021-07": "n"
          }
        ],
        "android": [
          {
            "2021-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-object-position",
    "title": "object-position",
    "description": "The `object-position` CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.",
    "url": "https://www.caniemail.com/features/css-object-position/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-07-15",
    "test_url": "https://www.caniemail.com/tests/css-object.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/Rg26n7zpfSw6bcxjGdDU9eF0aieX8XR7QoXfSfjbOEKXt/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          },
          {
            "14.6": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "a #1"
          }
        ],
        "android": [
          {
            "2021-07": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ],
        "ios": [
          {
            "2021-07": "n"
          }
        ],
        "android": [
          {
            "2021-07": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-07": "n"
          }
        ],
        "macos": [
          {
            "2016": "n"
          },
          {
            "2019": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-07": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ],
        "ios": [
          {
            "2021-07": "n"
          }
        ],
        "android": [
          {
            "2021-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ],
        "ios": [
          {
            "2021-07": "n"
          }
        ],
        "android": [
          {
            "2021-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ],
        "ios": [
          {
            "2021-07": "y"
          }
        ],
        "android": [
          {
            "2021-07": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-opacity",
    "title": "opacity",
    "description": "",
    "url": "https://www.caniemail.com/features/css-opacity/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-visual-effects.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/DhTRmGsVH6uobU4pHD3CasJywfBL4HnEjA1LOF8f9ctso/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-orphans",
    "title": "orphans",
    "description": "Sets the minimum number of lines in a block container split on an old page, region or column.",
    "url": "https://www.caniemail.com/features/css-orphans/",
    "category": "css",
    "tags": [],
    "keywords": "columns",
    "last_test_date": "2024-06-13",
    "test_url": "https://www.caniemail.com/tests/css-widows.html",
    "test_results_url": "https://testi.at/proj/6vd8udzx1b5l1vrnsr",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-05": "y"
          }
        ],
        "ios": [
          {
            "2024-05": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-05": "n #4"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n #3"
          }
        ],
        "mobile-webmail": [
          {
            "2024-05": "n #1 #2"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-05": "n"
          }
        ],
        "macos": [
          {
            "2024-05": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-05": "y"
          }
        ],
        "ios": [
          {
            "2024-05": "y"
          }
        ],
        "android": [
          {
            "2024-05": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-05": "n"
          }
        ],
        "ios": [
          {
            "2024-05": "n"
          }
        ],
        "android": [
          {
            "2024-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-05": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-05": "y #4"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-05": "n #1 #4"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-05": "n #1 #4"
          }
        ],
        "ios": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-05": "u"
          }
        ],
        "android": [
          {
            "2024-05": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. `columns` property is stripped which is required for `orphans` to work",
      "2": "Buggy. `orphans` property value is replaced by `auto`",
      "3": "Not supported, but Gmail's default styles on the email message container includes the `orphans` property. These values are inherited by children elements",
      "4": "Webmail rendering depends on browser support"
    }
  },
  {
    "slug": "css-outline-offset",
    "title": "outline-offset",
    "description": "Controls the position of an outline.",
    "url": "https://www.caniemail.com/features/css-outline-offset/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2022-12-26",
    "test_url": "https://www.caniemail.com/tests/css-outline-offset.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16.0": "y"
          }
        ],
        "ios": [
          {
            "16.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-12": "n"
          }
        ],
        "macos": [
          {
            "16.68": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-12": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6.1": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": null
  },
  {
    "slug": "css-outline",
    "title": "outline",
    "description": "Sets a line outside of the element's border.",
    "url": "https://www.caniemail.com/features/css-outline/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2022-03-17",
    "test_url": "https://www.caniemail.com/tests/css-outline.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/lNFpqGgdxFrmgevoZciqnebVLZKXIWKyHp5HCLRCDt9GB/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16.0": "y"
          }
        ],
        "ios": [
          {
            "15.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ],
        "ios": [
          {
            "2022-03": "y"
          }
        ],
        "android": [
          {
            "2022-03": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2022-03": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-03": "n"
          }
        ],
        "ios": [
          {
            "2022-03": "n"
          }
        ],
        "android": [
          {
            "2022-03": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-03": "n"
          }
        ],
        "macos": [
          {
            "16.60": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-03": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2022-03": "y"
          }
        ],
        "android": [
          {
            "2022-03": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ],
        "ios": [
          {
            "2022-03": "y"
          }
        ],
        "android": [
          {
            "2022-03": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ],
        "ios": [
          {
            "2022-03": "y"
          }
        ],
        "android": [
          {
            "2022-03": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ],
        "ios": [
          {
            "2022-03": "y"
          }
        ],
        "android": [
          {
            "2022-03": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ],
        "ios": [
          {
            "2022-03": "y"
          }
        ],
        "android": [
          {
            "2022-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-03": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": "WebKit renders square outline even when using `border-radius`.",
    "notes_by_num": null
  },
  {
    "slug": "css-overflow-wrap",
    "title": "overflow-wrap",
    "description": "",
    "url": "https://www.caniemail.com/features/css-overflow-wrap/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2022-08-03",
    "test_url": "https://www.caniemail.com/tests/css-overflow-wrap.html",
    "test_results_url": "https://testi.at/proj/zxOsWrYsJqztvWC7JYF8xrUgn",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "n"
          },
          {
            "17": "n"
          },
          {
            "18": "n"
          },
          {
            "19": "n"
          },
          {
            "20": "n"
          },
          {
            "21": "n"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-08": "n"
          }
        ],
        "macos": [
          {
            "2022-08": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ],
        "ios": [
          {
            "2022-08": "u"
          }
        ],
        "android": [
          {
            "2022-08": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-08": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-overflow",
    "title": "overflow",
    "description": "",
    "url": "https://www.caniemail.com/features/css-overflow/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "a #1"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "n #2"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. Cannot scroll through to hidden content.",
      "2": "Not supported. `overflow` is replaced by `java-script`."
    }
  },
  {
    "slug": "css-padding-block-start-end",
    "title": "padding-block-start & padding-block-end",
    "description": "Support for the `padding-block-start` and `padding-block-end` css properties.",
    "url": "https://www.caniemail.com/features/css-padding-block-start-end/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "padding-block-start, padding-block-end",
    "last_test_date": "2022-07-13",
    "test_url": "https://www.caniemail.com/tests/css-padding-logical-properties.html",
    "test_results_url": "https://testi.at/proj/Y91uDXJIDLc6M0FkVXipW",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "y"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-padding-inline-block",
    "title": "padding-inline & padding-block",
    "description": "Support for the `padding-inline` and `padding-block` shorthand properties.",
    "url": "https://www.caniemail.com/features/css-padding-inline-block/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "padding-inline, padding-block",
    "last_test_date": "2022-07-13",
    "test_url": "https://www.caniemail.com/tests/css-padding-logical-properties.html",
    "test_results_url": "https://testi.at/proj/Y91uDXJIDLc6M0FkVXipW",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "n"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          },
          {
            "11": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-padding-inline-start-end",
    "title": "padding-inline-start & padding-inline-end",
    "description": "Support for the `padding-inline-start` and `padding-inline-end` css properties.",
    "url": "https://www.caniemail.com/features/css-padding-inline-start-end/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "padding-inline-start, padding-inline-end",
    "last_test_date": "2022-07-13",
    "test_url": "https://www.caniemail.com/tests/css-padding-logical-properties.html",
    "test_results_url": "https://testi.at/proj/Y91uDXJIDLc6M0FkVXipW",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.12.6": "n"
          },
          {
            "10.13.6": "n"
          },
          {
            "10.15.7": "y"
          },
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "11.4": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-padding",
    "title": "padding",
    "description": "This test includes support for the `padding` shorthand property as well as for `padding-left`, `padding-right`, `padding-top` and `padding-bottom`.",
    "url": "https://www.caniemail.com/features/css-padding/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-07-25",
    "test_url": "https://www.caniemail.com/tests/css-padding.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/bT9ZMtvO5cZkTTbfskZRDbdCOMlSpCTSVUd4lMkrGU68b/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.3": "y"
          }
        ],
        "ios": [
          {
            "10.3": "y"
          },
          {
            "12.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-05": "y"
          }
        ],
        "ios": [
          {
            "2019-05": "y"
          }
        ],
        "android": [
          {
            "2019-05": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-05": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-05": "y"
          }
        ],
        "android": [
          {
            "2019-05": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "a #1 #2"
          },
          {
            "2010": "a #1 #2"
          },
          {
            "2013": "a #1 #2"
          },
          {
            "2016": "a #1 #2"
          },
          {
            "2019": "a #1 #2"
          }
        ],
        "windows-mail": [
          {
            "2020-01": "a #1 #2"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-05": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-05": "y"
          }
        ],
        "android": [
          {
            "2019-05": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-05": "y"
          }
        ],
        "ios": [
          {
            "2019-05": "y"
          }
        ],
        "android": [
          {
            "2019-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-05": "y"
          }
        ],
        "ios": [
          {
            "2019-05": "y"
          }
        ],
        "android": [
          {
            "2019-05": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on table cells.",
      "2": "Buggy. Vertical padding will be the same for all cells of a same row, adopting the biggest value."
    }
  },
  {
    "slug": "css-position",
    "title": "position",
    "description": "Tests for CSS positioning include `relative`, `absolute`, `fixed` and `sticky`.",
    "url": "https://www.caniemail.com/features/css-position/",
    "category": "css",
    "tags": [],
    "keywords": "absolute, sticky, fixed, relative, static",
    "last_test_date": "2021-05-16",
    "test_url": "https://www.caniemail.com/tests/css-positioning.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/E45AW3a9IiIhUSBpv3dc1qPfMiMN8mLepy5BsvqtpXhhy/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14": "a #1"
          }
        ],
        "ios": [
          {
            "14.5": "a #1"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "a #1"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "2021-05": "a #1"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-05": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.50": "y"
          },
          {
            "16.80": "a #2"
          }
        ],
        "outlook-com": [
          {
            "2021-05": "a #2"
          },
          {
            "2023-12": "a #2"
          }
        ],
        "ios": [
          {
            "2021-05": "n"
          }
        ],
        "android": [
          {
            "2021-05": "a #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "a #1"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "a #4"
          }
        ],
        "ios": [
          {
            "2021-05": "a #4"
          }
        ],
        "android": [
          {
            "2021-05": "a #4"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "a #3"
          }
        ],
        "ios": [
          {
            "2021-05": "a #3"
          }
        ],
        "android": [
          {
            "2021-05": "a #3"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-05": "a #3"
          }
        ],
        "ios": [
          {
            "2021-05": "a #3"
          }
        ],
        "android": [
          {
            "2021-05": "a #3"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "a #4"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "a #1 #6"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "a #4"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y #5"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y #5"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y #5"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Supports `relative`, `absolute` but not `sticky` and `fixed`.",
      "2": "Partial. Supports `sticky` but not `relative`, `absolute` and `fixed`.",
      "3": "Partial. Supports `relative` but not  `absolute`, `sticky` and `fixed`.",
      "4": "Partial. Supports `relative` and `sticky` but not `absolute` and `fixed`.",
      "5": "Buggy. `fixed` elements scroll with page.",
      "6": "Buggy. `fixed` is replaced by `absolute`."
    }
  },
  {
    "slug": "css-pseudo-class-active",
    "title": ":active",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-active/",
    "category": "css",
    "tags": [
      "accessibility"
    ],
    "keywords": "pseudo-class",
    "last_test_date": "2019-10-28",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "n"
          }
        ],
        "ios": [
          {
            "13.1": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0.04.6": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-checked",
    "title": ":checked",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-checked/",
    "category": "css",
    "tags": [],
    "keywords": "check, interactive, pseudo-class",
    "last_test_date": "2020-03-10",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/jRZRnTXxdqCwNM60saxYK4Ee7783SAj1qQKytJlOoB7dO/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.3": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-03": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-03": "n #2"
          },
          {
            "2021-03": "n #2"
          }
        ],
        "ios": [
          {
            "2020-03": "n #2"
          }
        ],
        "android": [
          {
            "2020-03": "n #2"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-03": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2020-03": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2020-03": "a #1"
          }
        ],
        "android": [
          {
            "2020-03": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-03": "n #2"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.5": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "n #2"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors.",
      "2": "Not supported. `<input>` elements are transformed into `<noinput>`."
    }
  },
  {
    "slug": "css-pseudo-class-first-child",
    "title": ":first-child",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-first-child/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-16",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-first-of-type",
    "title": ":first-of-type",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-first-of-type/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-16",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-focus",
    "title": ":focus",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-focus/",
    "category": "css",
    "tags": [
      "accessibility"
    ],
    "keywords": "pseudo-class",
    "last_test_date": "2019-10-28",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "n"
          }
        ],
        "ios": [
          {
            "13.1": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-has",
    "title": ":has()",
    "description": "Represents an element if any of the selectors passed as parameters match at least one element.",
    "url": "https://www.caniemail.com/features/css-pseudo-class-has/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2022-03-15",
    "test_url": "https://www.caniemail.com/tests/css-has.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15.0": "n"
          },
          {
            "16.0": "y"
          }
        ],
        "ios": [
          {
            "15.1": "n"
          },
          {
            "15.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-12": "n"
          }
        ],
        "macos": [
          {
            "16.56": "n"
          },
          {
            "16.73": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "n"
          },
          {
            "6.1.82": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "n"
          },
          {
            "115.2": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-12": "n #1"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-12": "n #1"
          },
          {
            "2023-09": "n #1"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-12": "n #2"
          },
          {
            "2023-09": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "y"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          },
          {
            "2023-09": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          },
          {
            "2023-09": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": "As of december 2021, `:has()` is only supported in [Safari Technology Preview 137](https://webkit.org/blog/12156/release-notes-for-safari-technology-preview-137/). As of march 2022, it is supported in Safari 15.4.",
    "notes_by_num": {
      "1": "Not supported. `:has(…)` is replaced by `:has`.",
      "2": "Not supported. But the pseudo-class seems interpreted and computed server side."
    }
  },
  {
    "slug": "css-pseudo-class-hover",
    "title": ":hover",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-hover/",
    "category": "css",
    "tags": [
      "accessibility"
    ],
    "keywords": "rollover, pseudo-class",
    "last_test_date": "2019-10-23",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          },
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "a #2"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #2"
          },
          {
            "2024-01": "a #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          },
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-lang",
    "title": "lang()",
    "description": "Matches elements based on the language they are determined to be in.",
    "url": "https://www.caniemail.com/features/css-pseudo-class-lang/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": null,
    "last_test_date": "2022-07-12",
    "test_url": "https://www.caniemail.com/tests/css-pseudo-selectors-lang.html",
    "test_results_url": "https://testi.at/proj/gGZHWn1FNVBHweeCPYAFL4MSXy",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "y"
          },
          {
            "11": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-pseudo-class-last-child",
    "title": ":last-child",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-last-child/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-last-of-type",
    "title": ":last-of-type",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-last-of-type/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-link",
    "title": ":link",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-link/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-class",
    "last_test_date": "2019-10-23",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.7.1": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-pseudo-class-not",
    "title": ":not",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-not/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-class",
    "last_test_date": "2019-10-23",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.7.1": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-pseudo-class-nth-child",
    "title": ":nth-child",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-nth-child/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.7.1": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors.",
      "2": "Not supported. Removes the parenthesis part."
    }
  },
  {
    "slug": "css-pseudo-class-nth-last-child",
    "title": ":nth-last-child",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-nth-last-child/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.7.1": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors.",
      "2": "Not supported. Removes the parenthesis part."
    }
  },
  {
    "slug": "css-pseudo-class-nth-last-of-type",
    "title": ":nth-last-of-type",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-nth-last-of-type/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.7.1": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors.",
      "2": "Not supported. Removes the parenthesis part."
    }
  },
  {
    "slug": "css-pseudo-class-nth-of-type",
    "title": ":nth-of-type",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-nth-of-type/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.7.1": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n #2"
          }
        ],
        "android": [
          {
            "2019-10": "n #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors.",
      "2": "Not supported. Removes the parenthesis part."
    }
  },
  {
    "slug": "css-pseudo-class-only-child",
    "title": ":only-child",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-only-child/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-only-of-type",
    "title": ":only-of-type",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-only-of-type/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-19",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-class-target",
    "title": ":target",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-target/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-class",
    "last_test_date": "2019-10-28",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "n"
          }
        ],
        "ios": [
          {
            "13.1": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "n #2"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "a #1 #2"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1 #2"
          },
          {
            "2024-01": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0.04.6": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n #2"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "n #2"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors.",
      "2": "Buggy. Not filtered but doesn't work."
    }
  },
  {
    "slug": "css-pseudo-class-visited",
    "title": ":visited",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-class-visited/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-class",
    "last_test_date": "2019-10-28",
    "test_url": "https://www.caniemail.com/tests/css-selectors-pseudo-classes.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cl8ZYgIGE372fkVVuJkwNJDd7B4JUpo23Nz6qANcSlRUA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "n"
          }
        ],
        "ios": [
          {
            "13.1": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "a #1"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "a #1"
          },
          {
            "2024-01": "a #1"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0.04.6": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-element-after",
    "title": "::after",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-element-after/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-element",
    "last_test_date": "2020-05-21",
    "test_url": "https://www.caniemail.com/tests/css-pseudo-elements.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/qXO9EwD1KSCSCrmUEccVDxVOl3Cyc4LPAbb83ElW2OFge/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          },
          {
            "2021-03": "n #2"
          },
          {
            "2024-04": "n #2"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "a #1"
          },
          {
            "16.80": "a #1 #3"
          }
        ],
        "outlook-com": [
          {
            "2020-05": "n"
          },
          {
            "2024-01": "a #3"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.38.0": "n"
          },
          {
            "4.2352.0": "a #3"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.8": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported with non Outlook accounts.",
      "2": "The pseudo-element is supported but the `content` property is not.",
      "3": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-element-before",
    "title": "::before",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-element-before/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-element",
    "last_test_date": "2020-05-21",
    "test_url": "https://www.caniemail.com/tests/css-pseudo-elements.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/qXO9EwD1KSCSCrmUEccVDxVOl3Cyc4LPAbb83ElW2OFge/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          },
          {
            "2021-03": "n #2"
          },
          {
            "2024-04": "n #2"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "a #1"
          },
          {
            "16.80": "a #1 #3"
          }
        ],
        "outlook-com": [
          {
            "2020-05": "n"
          },
          {
            "2024-01": "a #3"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.38.0": "n"
          },
          {
            "4.2352.0": "a #3"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.8": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported with non Outlook accounts.",
      "2": "The pseudo-element is supported but the `content` property is not.",
      "3": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-element-first-letter",
    "title": "::first-letter",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-element-first-letter/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-element",
    "last_test_date": "2020-05-21",
    "test_url": "https://www.caniemail.com/tests/css-pseudo-elements.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/qXO9EwD1KSCSCrmUEccVDxVOl3Cyc4LPAbb83ElW2OFge/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "a #1"
          },
          {
            "16.80": "a #1 #2"
          }
        ],
        "outlook-com": [
          {
            "2020-05": "n"
          },
          {
            "2024-01": "a #2"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.38.0": "n"
          },
          {
            "4.2352.0": "a #2"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.8": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported with non Outlook accounts.",
      "2": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-element-first-line",
    "title": "::first-line",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-element-first-line/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-element",
    "last_test_date": "2020-05-21",
    "test_url": "https://www.caniemail.com/tests/css-pseudo-elements.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/qXO9EwD1KSCSCrmUEccVDxVOl3Cyc4LPAbb83ElW2OFge/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "a #1"
          },
          {
            "16.80": "a #1 #2"
          }
        ],
        "outlook-com": [
          {
            "2020-05": "n"
          },
          {
            "2024-01": "a #2"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.38.0": "n"
          },
          {
            "4.2352.0": "a #2"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.8": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported with non Outlook accounts.",
      "2": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-pseudo-element-marker",
    "title": "::marker",
    "description": "Selects the marker box of a list item (typically a bullet or number).",
    "url": "https://www.caniemail.com/features/css-pseudo-element-marker/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-element",
    "last_test_date": "2022-12-28",
    "test_url": "https://www.caniemail.com/tests/css-marker.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/7ebtlnke6f0814MElvJWzdRU5lTKcZULpbP9ef9OCuxv3/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "16.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2022-12": "n"
          }
        ],
        "macos": [
          {
            "2022-12": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-12": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "n"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-12": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported. But `@list` declarations can achieve the same thing."
    }
  },
  {
    "slug": "css-pseudo-element-placeholder",
    "title": "::placeholder",
    "description": null,
    "url": "https://www.caniemail.com/features/css-pseudo-element-placeholder/",
    "category": "css",
    "tags": [],
    "keywords": "pseudo-element",
    "last_test_date": "2020-05-21",
    "test_url": "https://www.caniemail.com/tests/css-pseudo-elements.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/qXO9EwD1KSCSCrmUEccVDxVOl3Cyc4LPAbb83ElW2OFge/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-05": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          },
          {
            "2021-03": "n #2"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-05": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "a #1"
          },
          {
            "16.80": "a #1 #2"
          }
        ],
        "outlook-com": [
          {
            "2020-05": "n"
          },
          {
            "2024-01": "a #2"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.38.0": "n"
          },
          {
            "4.2352.0": "a #2"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.8": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-05": "y"
          }
        ],
        "ios": [
          {
            "2020-05": "y"
          }
        ],
        "android": [
          {
            "2020-05": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-05": "n"
          }
        ],
        "ios": [
          {
            "2020-05": "n"
          }
        ],
        "android": [
          {
            "2020-05": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "n"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "n #2"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported with non Outlook accounts.",
      "2": "The pseudo-element is supported but `<input>` elements are not.",
      "3": "Partial. Only supported on type selectors."
    }
  },
  {
    "slug": "css-radial-gradient",
    "title": "radial-gradient()",
    "description": "Creates an image consisting of a progressive transition between two or more colors that radiate from an origin.",
    "url": "https://www.caniemail.com/features/css-radial-gradient/",
    "category": "css",
    "tags": [],
    "keywords": "gradients",
    "last_test_date": "2021-12-29",
    "test_url": "https://www.caniemail.com/tests/css-gradients.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/8FCYDYSPXot6jquGzeiqGsfoeCU4tvCeRpnVG0z6luNLr/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n #1"
          },
          {
            "2010": "n #1"
          },
          {
            "2013": "n #1"
          },
          {
            "2016": "n #1"
          },
          {
            "2019": "n #1"
          }
        ],
        "windows-mail": [
          {
            "2021-12": "n"
          }
        ],
        "macos": [
          {
            "16.57": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-12": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2.51.1": "y"
          },
          {
            "4.2148.2": "n"
          }
        ],
        "android": [
          {
            "4.2147.4": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "91.4.1": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-12": "n"
          }
        ],
        "ios": [
          {
            "2021-12": "n"
          }
        ],
        "android": [
          {
            "2021-12": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ],
        "ios": [
          {
            "2021-12": "y"
          }
        ],
        "android": [
          {
            "2021-12": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2021-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Gradients can be created in VML using `type=\"gradientRadial\"` on a `<v:fill>`. See [VML documentation](https://docs.microsoft.com/en-us/windows/win32/vml/web-workshop---how-to-use-vml-on-web-pages-----fill--element#gradient-fill)."
    }
  },
  {
    "slug": "css-resize",
    "title": "resize",
    "description": "Sets whether an element is resizable, and in which directions.",
    "url": "https://www.caniemail.com/features/css-resize/",
    "category": "css",
    "tags": [],
    "keywords": "textarea",
    "last_test_date": "2024-01-17",
    "test_url": "https://www.caniemail.com/tests/css-resize.html",
    "test_results_url": "https://testi.at/proj/6vd212zjibljibxkt9",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-01": "a #2"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-01": "n #1"
          }
        ],
        "ios": [
          {
            "2024-01": "n #1"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-01": "n"
          }
        ],
        "macos": [
          {
            "2024-01": "n #1"
          }
        ],
        "outlook-com": [
          {
            "2024-01": "n #1"
          }
        ],
        "ios": [
          {
            "2024-01": "n #1"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-01": "n #1"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-01": "n #1"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-01": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-01": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-01": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-01": "n #1"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-01": "n #1"
          }
        ],
        "ios": [
          {
            "2024-01": "n"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-01": "u"
          }
        ],
        "android": [
          {
            "2024-01": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "`resize` property is stripped from style tag",
      "2": "Does not support `inline` and `block` values"
    }
  },
  {
    "slug": "css-rgb",
    "title": "rgb()",
    "description": "RGB functional notation (`rgb()`)",
    "url": "https://www.caniemail.com/features/css-rgb/",
    "category": "css",
    "tags": [],
    "keywords": "rgb,color",
    "last_test_date": "2021-05-14",
    "test_url": "https://www.caniemail.com/tests/css-colors.html",
    "test_results_url": "https://testi.at/proj/w7XizGjCyAYCZgDFP1OSGekFm",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "a #1"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-08": "a #1 #3"
          }
        ],
        "ios": [
          {
            "2021-08": "a #1 #3"
          }
        ],
        "android": [
          {
            "2021-08": "a #1 #3"
          }
        ],
        "mobile-webmail": [
          {
            "2021-08": "a #1 #3"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1 #2"
          }
        ],
        "android": [
          {
            "2021-05": "a #1 #2"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #1 #2"
          },
          {
            "2010": "a #1 #2"
          },
          {
            "2013": "a #1 #2"
          },
          {
            "2016": "a #1 #2"
          },
          {
            "2019": "a #1 #2"
          }
        ],
        "windows-mail": [
          {
            "2021-01": "a #1 #2"
          }
        ],
        "macos": [
          {
            "2011": "a #1 #2"
          },
          {
            "2016": "a #1 #2"
          },
          {
            "2021-01": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-01": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "4.2101.0": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "6.16.2.1519779": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "2021-05": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Whitespace syntax is not supported (`rgb(0 128 0 / 1)`).",
      "2": "Alpha value is not supported (`rgb(0, 128, 0, 0.5)`).",
      "3": "whitespace syntax (`rgb(0 128 0)`): when used in the `style` attribute of an element, the whole attribute is stripped. When used inside `<style>`, the whole `<style>` block is stripped."
    }
  },
  {
    "slug": "css-rgba",
    "title": "rgba()",
    "description": "RGB functional notation with alpha-channel transparency value (`rgba()`)",
    "url": "https://www.caniemail.com/features/css-rgba/",
    "category": "css",
    "tags": [],
    "keywords": "rgb,rgba,color,alpha",
    "last_test_date": "2021-05-14",
    "test_url": "https://www.caniemail.com/tests/css-colors.html",
    "test_results_url": "https://testi.at/proj/w7XizGjCyAYCZgDFP1OSGekFm",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "a #1"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-08": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2021-08": "a #1 #2"
          }
        ],
        "android": [
          {
            "2021-08": "a #1 #2"
          }
        ],
        "mobile-webmail": [
          {
            "2021-08": "a #1 #2"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-05": "n"
          }
        ],
        "ios": [
          {
            "2021-01": "n"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-01": "n"
          }
        ],
        "macos": [
          {
            "2021-01": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-01": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "4.2101.0": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "2021-01": "a #1"
          }
        ],
        "android": [
          {
            "6.16.2.1519779": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-05": "a #1"
          }
        ],
        "ios": [
          {
            "2021-05": "a #1"
          }
        ],
        "android": [
          {
            "2021-05": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.10": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ],
        "ios": [
          {
            "2021-05": "y"
          }
        ],
        "android": [
          {
            "2021-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-05": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Whitespace syntax is not supported (`rgb(0 128 0 / 1)`).",
      "2": "whitespace syntax (`rgba(0 128 0 / 1)`): when used in the `style` attribute of an element, the whole attribute is stripped. When used inside `<style>`, the whole `<style>` block is stripped."
    }
  },
  {
    "slug": "css-scroll-snap",
    "title": "scroll-snap",
    "description": "Controls panning and scrolling behaviour with snap positions.",
    "url": "https://www.caniemail.com/features/css-scroll-snap/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2023-02-27",
    "test_url": "https://www.caniemail.com/tests/css-scroll-snap.html",
    "test_results_url": "https://testi.at/proj/O5rtNMDHo58i8YirVtvyUvG",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          }
        ],
        "ios": [
          {
            "16": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-02": "n"
          }
        ],
        "ios": [
          {
            "2023-02": "n"
          }
        ],
        "android": [
          {
            "2023-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2023-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-04": "n"
          }
        ],
        "ios": [
          {
            "2023-04": "n"
          }
        ],
        "android": [
          {
            "2023-05": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-02": "n"
          }
        ],
        "macos": [
          {
            "16.73": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-02": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2023-02": "n"
          }
        ],
        "android": [
          {
            "2023-05": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-02": "n"
          }
        ],
        "ios": [
          {
            "2023-02": "n"
          }
        ],
        "android": [
          {
            "2023-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-02": "n"
          }
        ],
        "ios": [
          {
            "2023-02": "n"
          }
        ],
        "android": [
          {
            "2023-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-02": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-02": "y"
          }
        ],
        "ios": [
          {
            "2023-02": "y"
          }
        ],
        "android": [
          {
            "2023-05": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.10.1": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-04": "y"
          }
        ],
        "ios": [
          {
            "2023-04": "y"
          }
        ],
        "android": [
          {
            "2023-05": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-04": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-02": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-04": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-04": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-selector-adjacent-sibling",
    "title": "Adjacent sibling combinator",
    "description": "The adjacent sibling combinator (`h1 + p`) allows to target an element that is directly after another.",
    "url": "https://www.caniemail.com/features/css-selector-adjacent-sibling/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-03-11",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/ZOGHmMjaZIUfa2M44xDIdv9lwqol3UQN00PDO7G5kK21Y/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.3": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "a #1"
          }
        ],
        "android": [
          {
            "2020-03": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-03": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-03": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-03": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.5": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #2"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Partial. Only when used as class or ID selectors"
    }
  },
  {
    "slug": "css-selector-attribute",
    "title": "Attribute selector",
    "description": "The attribute selector (`[attr]`) targets elements with this specific attribute.",
    "url": "https://www.caniemail.com/features/css-selector-attribute/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-12-15",
    "test_url": "https://www.caniemail.com/tests/css-selectors-attribute.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/xHppIhPmgvxZQPvA3geS9WGCicLxVuR87NTZu70eWaAF8/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14.0": "y"
          }
        ],
        "ios": [
          {
            "14.3": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-12": "a #5"
          },
          {
            "2023-02": "a #5"
          }
        ],
        "ios": [
          {
            "2020-12": "a #5 #6"
          },
          {
            "2023-02": "a #5 #6"
          }
        ],
        "android": [
          {
            "2020-12": "a #5 #6"
          },
          {
            "2023-02": "a #5 #6"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "y"
          }
        ],
        "android": [
          {
            "2020-12": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-12": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "a #1 #2 #3"
          }
        ],
        "outlook-com": [
          {
            "2020-12": "a #1 #2 #3"
          },
          {
            "2024-01": "a #1 #2 #3"
          }
        ],
        "ios": [
          {
            "2020-12": "a #1 #2"
          }
        ],
        "android": [
          {
            "2020-12": "a #1 #2"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-12": "y"
          }
        ],
        "ios": [
          {
            "2020-12": "n"
          }
        ],
        "android": [
          {
            "2020-12": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.5": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-12": "a #4"
          }
        ],
        "ios": [
          {
            "2020-12": "a #4"
          }
        ],
        "android": [
          {
            "2020-12": "a #4"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-12": "a #4"
          }
        ],
        "ios": [
          {
            "2020-12": "a #4"
          }
        ],
        "android": [
          {
            "2020-12": "a #4"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "a #4"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": "This page reflects support for different syntaxes: `[attr]`, `[attr=\"value\"]`, `[attr~=\"value\"]`, `[attr|=\"value\"]`, `[attr^=\"value\"]`, `[attr$=\"value\"]`, `[attr*=\"value\"]`.",
    "notes_by_num": {
      "1": "Partial. Can not be used with a class selector (`.test[class]`). Must be used solo (`[class]`) or with an element selector (`td[class]`).",
      "2": "Partial. Only supports `[attr]`, `[attr=value]`, `[attr~=value]`, `[attr|=value]` syntaxes.",
      "3": "Buggy. A `class=\"test\"` in the HTML is prefixed `class=\"x_test\"`, but an attribute selector stays unprefixed `[class=\"test\"]`.",
      "4": "Partial. Only supports `[attr=value]` syntax.",
      "5": "Partial. Only supports `[attr~=value]` syntax. Only `class` as an attribute name is known to be supported.",
      "6": "Partial. Doesn't work with non Google accounts."
    }
  },
  {
    "slug": "css-selector-chaining",
    "title": "Chaining selectors",
    "description": "Chaining selectors (`.foo.bar`) allows to apply styles to elements matching all the corresponding selectors.",
    "url": "https://www.caniemail.com/features/css-selector-chaining/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n #3"
          },
          {
            "2010": "n #3"
          },
          {
            "2013": "n #3"
          },
          {
            "2016": "n #3"
          },
          {
            "2019": "n #3"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n #3"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "n #4"
          },
          {
            "2024-01": "n #4"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #5"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #5"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element.",
      "3": "Buggy. Styles will be applied to the first selector of the chain.",
      "4": "Buggy. Only the first selector of the chain is prefixed in the styles, but all classes are prefixed in the HTML.",
      "5": "Partial. Only when used as class or ID selectors"
    }
  },
  {
    "slug": "css-selector-child",
    "title": "Child combinator",
    "description": "The child combinator is represented by a superior sign (`>`) between two selectors and matches the second selector if it is a direct child of the first selector.",
    "url": "https://www.caniemail.com/features/css-selector-child/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-06": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element."
    }
  },
  {
    "slug": "css-selector-class",
    "title": "Class selector",
    "description": "The class selector (`.className`) allows to apply styles to a group of elements with the corresponding `class` attribute.",
    "url": "https://www.caniemail.com/features/css-selector-class/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element."
    }
  },
  {
    "slug": "css-selector-descendant",
    "title": "Descendant combinator",
    "description": "The descendant combinator is represented by a space (` `) between two selectors and matches the second selector if it has ancestor matching the first selector.",
    "url": "https://www.caniemail.com/features/css-selector-descendant/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #3"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #3"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element.",
      "3": "Partial. Only when used as class or ID selectors"
    }
  },
  {
    "slug": "css-selector-general-sibling",
    "title": "General sibling combinator",
    "description": "The general sibling combinator (`img ~ p`) allows to target any element that after another (directly or indirectly).",
    "url": "https://www.caniemail.com/features/css-selector-general-sibling/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2020-03-11",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/ZOGHmMjaZIUfa2M44xDIdv9lwqol3UQN00PDO7G5kK21Y/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.3": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "a #1"
          }
        ],
        "android": [
          {
            "2020-03": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-03": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-03": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-03": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.5": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-selector-grouping",
    "title": "Grouping selectors",
    "description": "Grouping selectors (`.foo, .bar`) allows to apply the same styles to the different corresponding elements.",
    "url": "https://www.caniemail.com/features/css-selector-grouping/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "a #3"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "a #3"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element.",
      "3": "Partial. Only when used as class or ID selectors"
    }
  },
  {
    "slug": "css-selector-id",
    "title": "ID selector",
    "description": "The ID selector (`#id`) allows to apply styles to an element with the corresponding `id` attribute.",
    "url": "https://www.caniemail.com/features/css-selector-id/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element."
    }
  },
  {
    "slug": "css-selector-type",
    "title": "Type selector",
    "description": "Type selector or element selectors allow to apply styles by HTML element names.",
    "url": "https://www.caniemail.com/features/css-selector-type/",
    "category": "css",
    "tags": [],
    "keywords": "element",
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "y"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "n"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element."
    }
  },
  {
    "slug": "css-selector-universal",
    "title": "Universal selector *",
    "description": "The universal selector (`*`) allows to apply styles to every elements.",
    "url": "https://www.caniemail.com/features/css-selector-universal/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-10-13",
    "test_url": "https://www.caniemail.com/tests/css-selectors.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/kQbnzGXMSxMg2NDGmrcxIXOHrROwokTB29RcSssnkoPlS/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "13.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "a #1"
          }
        ],
        "android": [
          {
            "2019-10": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-10": "n"
          }
        ],
        "macos": [
          {
            "2011": "y"
          },
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-10": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "n"
          }
        ],
        "android": [
          {
            "2019-10": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.3": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-10": "y"
          }
        ],
        "ios": [
          {
            "2019-10": "y"
          }
        ],
        "android": [
          {
            "2019-10": "a #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "n"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n #3"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "ios": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-06": "y"
          }
        ],
        "android": [
          {
            "2022-06": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Buggy. The first `<head>` in the HTML is removed, so `<style>` elements need to be in a second `<head>` element.",
      "3": "Not supported. The selector is removed and left prefixed with the outer most parent element."
    }
  },
  {
    "slug": "css-shape-margin",
    "title": "shape-margin",
    "description": "Sets a margin for a CSS shape created using `shape-outside`",
    "url": "https://www.caniemail.com/features/css-shape-margin/",
    "category": "css",
    "tags": [],
    "keywords": "shape, margin",
    "last_test_date": "2024-03-13",
    "test_url": "https://www.caniemail.com/tests/css-shape-margin.html",
    "test_results_url": "https://testi.at/proj/l2xyho58cl2yfnknhb",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-03": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-03": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-03": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-03": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-shape-outside",
    "title": "shape-outside",
    "description": "Defines a shape, which may be non-rectangular, around which adjacent inline content should wrap.",
    "url": "https://www.caniemail.com/features/css-shape-outside/",
    "category": "css",
    "tags": [],
    "keywords": "shape",
    "last_test_date": "2024-02-28",
    "test_url": "https://www.caniemail.com/tests/css-shape-outside.html",
    "test_results_url": "https://testi.at/proj/6vdjc5l6ungvfjgu94",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "15": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-02": "n"
          }
        ],
        "ios": [
          {
            "2024-02": "n"
          }
        ],
        "android": [
          {
            "2024-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-02": "n"
          }
        ],
        "macos": [
          {
            "16.56": "y"
          }
        ],
        "outlook-com": [
          {
            "2024-02": "n"
          }
        ],
        "ios": [
          {
            "2024-02": "n"
          }
        ],
        "android": [
          {
            "2024-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-02": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-02": "n"
          }
        ],
        "ios": [
          {
            "2024-02": "n"
          }
        ],
        "android": [
          {
            "2024-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-02": "n"
          }
        ],
        "ios": [
          {
            "2024-02": "n"
          }
        ],
        "android": [
          {
            "2024-02": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ],
        "ios": [
          {
            "2024-02": "u"
          }
        ],
        "android": [
          {
            "2024-02": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-02": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-02": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-sytem-ui",
    "title": "system-ui, ui-serif, ui-sans-serif, ui-rounded, ui-monospace",
    "description": "CSS keywords for specifying system fonts for `font-family`.",
    "url": "https://www.caniemail.com/features/css-sytem-ui/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2022-12-30",
    "test_url": "https://www.caniemail.com/tests/css-system-fonts.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/cylY3QfQE3JBZdvEGzDrCa9D78HmSgry19cYKLZGKqWpA/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13.1": "y"
          }
        ],
        "ios": [
          {
            "16.2": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2022-12": "y #2"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-12": "y"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-12": "n"
          }
        ],
        "macos": [
          {
            "2022-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-12": "y #2"
          },
          {
            "2024-01": "y #2"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.73.1": "a #1"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "102.6": "a #1"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ],
        "ios": [
          {
            "2022-12": "y"
          }
        ],
        "android": [
          {
            "2022-12": "a #1"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-12": "y #2"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2023-01": "y #2"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2021-12": "y #2"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Supports `system-ui` only.",
      "2": "Partial. Depends on browser support. `system-ui` works in all browsers. `ui-serif`, `ui-sans-serif`, `ui-rounded` and `ui-monospace` are supported on all browsers on iOS and Safari on MacOS."
    }
  },
  {
    "slug": "css-tab-size",
    "title": "tab-size",
    "description": "",
    "url": "https://www.caniemail.com/features/css-tab-size/",
    "category": "css",
    "tags": [],
    "keywords": "tab,size",
    "last_test_date": "2022-07-21",
    "test_url": "https://www.caniemail.com/tests/css-tab-size.html",
    "test_results_url": "https://testi.at/proj/Rk9H1m9ubAYH1DwUqZu8G",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          },
          {
            "17": "y"
          },
          {
            "18": "y"
          },
          {
            "19": "y"
          },
          {
            "20": "y"
          },
          {
            "21": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "y"
          },
          {
            "16.80": "y #2"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "y #2"
          },
          {
            "2024-01": "y #2"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "n #1"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "n"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "n"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "n"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Supports `tab-size` but doesn't support `white-space`. Therefore, `tab-size` is not effectively visible",
      "2": "Supports `tab-size` but strips the tab character `&#0009;`"
    }
  },
  {
    "slug": "css-table-layout",
    "title": "table-layout",
    "description": "The table-layout property defines the algorithm used to lay out table cells, rows, and columns.",
    "url": "https://www.caniemail.com/features/css-table-layout/",
    "category": "css",
    "tags": [],
    "keywords": "table,layout",
    "last_test_date": "2022-07-20",
    "test_url": "https://www.caniemail.com/tests/css-table-layout.html",
    "test_results_url": "https://testi.at/proj/G4buV6sBBxUr6quykrtVA3sk",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16": "y"
          },
          {
            "17": "y"
          },
          {
            "18": "y"
          },
          {
            "19": "y"
          },
          {
            "20": "y"
          },
          {
            "21": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "y"
          },
          {
            "16.80": "n #1"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Not supported. All tables are forced to `table-layout:fixed`."
    }
  },
  {
    "slug": "css-text-align-last",
    "title": "text-align-last",
    "description": "The `text-align-last` CSS property sets how the last line of a block or a line right before a forced line break is aligned.",
    "url": "https://www.caniemail.com/features/css-text-align-last/",
    "category": "css",
    "tags": [],
    "keywords": "align, align-last",
    "last_test_date": "2022-08-31",
    "test_url": "https://www.caniemail.com/tests/css-text-align-last.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/LxplTmJT9Ilq9GUyn8Aq8MVK6EO427qmx1Ic4A7jc7bOJ/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2022-10": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "n"
          },
          {
            "14": "n"
          },
          {
            "15": "n"
          },
          {
            "16.0": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "macos": [
          {
            "2022-08": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2022-08": "y"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "n"
          }
        ],
        "android": [
          {
            "2022-08": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          },
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.51.1": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-align",
    "title": "text-align",
    "description": "Sets the horizontal alignment of the content.",
    "url": "https://www.caniemail.com/features/css-text-align/",
    "category": "css",
    "tags": [],
    "keywords": "align",
    "last_test_date": "2021-09-24",
    "test_url": "https://www.caniemail.com/tests/css-text-align.html",
    "test_results_url": "https://testi.at/proj/G4YtBn8fBxEsLx6uybqcxD",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "a #2"
          }
        ],
        "android": [
          {
            "2021-09": "a #2"
          }
        ],
        "mobile-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-09": "a #1"
          }
        ],
        "ios": [
          {
            "2021-09": "a #1"
          }
        ],
        "android": [
          {
            "2021-09": "a #1"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #1"
          },
          {
            "2010": "a #1"
          },
          {
            "2013": "a #1"
          },
          {
            "2016": "a #1"
          },
          {
            "2019": "a #1"
          }
        ],
        "windows-mail": [
          {
            "2021-09": "a #1"
          }
        ],
        "macos": [
          {
            "2021-09": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-09": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-09": "a #1"
          }
        ],
        "ios": [
          {
            "2021-09": "a #1"
          }
        ],
        "android": [
          {
            "6.37": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-09": "a #1"
          }
        ],
        "ios": [
          {
            "2021-09": "a #1"
          }
        ],
        "android": [
          {
            "2021-09": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.51.1": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2021-09": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y #1"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y #1"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Flow-relative values `start` and `end` are not supported.",
      "2": "Partial. Flow-relative values `start` and `end` are not supported with non Gmail account."
    }
  },
  {
    "slug": "css-text-decoration-color",
    "title": "text-decoration-color",
    "description": null,
    "url": "https://www.caniemail.com/features/css-text-decoration-color/",
    "category": "css",
    "tags": [],
    "keywords": "underline",
    "last_test_date": "2020-04-30",
    "test_url": "https://www.caniemail.com/tests/css-text-decoration.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/VYmPi84Nw2pMoQLeljigICaH0QudjS2xc2CgpvPbEW7FZ/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12": "a #1"
          },
          {
            "13.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "a #3"
          }
        ],
        "android": [
          {
            "2020-04": "a #3"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n #2"
          },
          {
            "2010": "n #2"
          },
          {
            "2013": "n #2"
          },
          {
            "2016": "n #2"
          },
          {
            "2019": "n #2"
          }
        ],
        "windows-mail": [
          {
            "2020-04": "n #2"
          }
        ],
        "macos": [
          {
            "2011": "a #1"
          },
          {
            "2016": "a #1"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-04": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": "`text-decoration-color` is not supported in Internet Explorer.",
    "notes_by_num": {
      "1": "Supported with prefix `-webkit-`.",
      "2": "Not supported, but the proprietary `text-underline-color` property can be used instead.",
      "3": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-text-decoration-line",
    "title": "text-decoration-line",
    "description": "Sets the kind of decoration that is used on text in an element, such as an underline or overline.",
    "url": "https://www.caniemail.com/features/css-text-decoration-line/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "underline, overline, line-through",
    "last_test_date": "2023-12-06",
    "test_url": "https://www.caniemail.com/tests/css-text-decoration-line.html",
    "test_results_url": "https://testi.at/proj/kg6y1a4eiynkf8z7t4",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "6": "n"
          },
          {
            "7": "n"
          },
          {
            "8": "y"
          },
          {
            "9": "y"
          },
          {
            "10": "y"
          },
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "n"
          }
        ],
        "macos": [
          {
            "2023-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-decoration-skip-ink",
    "title": "text-decoration-skip-ink",
    "description": "Specifies how overlines and underlines are drawn when they pass over glyph ascenders and descenders.",
    "url": "https://www.caniemail.com/features/css-text-decoration-skip-ink/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "underline",
    "last_test_date": "2023-12-08",
    "test_url": "https://www.caniemail.com/tests/css-text-decoration-skip-ink.html",
    "test_results_url": "https://testi.at/proj/n477u94ixnz0kbrh6",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.15": "n"
          },
          {
            "11.7": "n"
          },
          {
            "12.7": "y"
          },
          {
            "13.6": "y"
          }
        ],
        "ios": [
          {
            "10": "n"
          },
          {
            "11": "n"
          },
          {
            "12": "n"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "n"
          }
        ],
        "macos": [
          {
            "2023-12": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-decoration-style",
    "title": "text-decoration-style",
    "description": "Sets the style of the lines specified by text-decoration-line.",
    "url": "https://www.caniemail.com/features/css-text-decoration-style/",
    "category": "css",
    "tags": [],
    "keywords": "underline",
    "last_test_date": "2023-12-06",
    "test_url": "https://www.caniemail.com/tests/css-text-decoration-style.html",
    "test_results_url": "https://testi.at/proj/jalr04oy0yrxfd7kuo",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "11": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "6": "n"
          },
          {
            "7": "n"
          },
          {
            "8": "y"
          },
          {
            "9": "y"
          },
          {
            "10": "y"
          },
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "n"
          }
        ],
        "macos": [
          {
            "2023-12": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "y"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-decoration-thickness",
    "title": "text-decoration-thickness",
    "description": null,
    "url": "https://www.caniemail.com/features/css-text-decoration-thickness/",
    "category": "css",
    "tags": [],
    "keywords": "underline",
    "last_test_date": "2023-01-16",
    "test_url": "https://www.caniemail.com/tests/css-text-decoration.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/VYmPi84Nw2pMoQLeljigICaH0QudjS2xc2CgpvPbEW7FZ/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12": "a #1"
          },
          {
            "13.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-04": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n #2"
          },
          {
            "2010": "n #2"
          },
          {
            "2013": "n #2"
          },
          {
            "2016": "n #2"
          },
          {
            "2019": "n #2"
          }
        ],
        "windows-mail": [
          {
            "2020-04": "n #2"
          }
        ],
        "macos": [
          {
            "2011": "n"
          },
          {
            "2016": "n"
          },
          {
            "2023-01": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2020-04": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "n"
          },
          {
            "10": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.7": "n"
          },
          {
            "102.6": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-04": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-04": "n"
          }
        ],
        "ios": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-04": "y"
          }
        ],
        "ios": [
          {
            "2020-04": "y"
          }
        ],
        "android": [
          {
            "2020-04": "n"
          },
          {
            "2023-01": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Supported with prefix `-webkit-`.",
      "2": "Not supported, but the proprietary `text-underline-style` property can be used instead with the keyword value `thick`."
    }
  },
  {
    "slug": "css-text-decoration",
    "title": "text-decoration",
    "description": "Tested with the values `overline`, `underline` and `line-through`.",
    "url": "https://www.caniemail.com/features/css-text-decoration/",
    "category": "css",
    "tags": [],
    "keywords": "underline",
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-text.html",
    "test_results_url": "https: //app.emailonacid.com/app/acidtest/DkqbHs69ek5UnK6uhZ7Uj0n5GVQNTP4Z1FvgXvnKyEoTM/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          }
        ],
        "android": [
          {
            "2019-02": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #2 #3"
          },
          {
            "2010": "a #2 #3"
          },
          {
            "2013": "a #2 #3"
          },
          {
            "2016": "a #2 #3"
          },
          {
            "2019": "a #2 #3"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "a #2 #3"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "n"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "n"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "a #4"
          }
        ],
        "ios": [
          {
            "2022-07": "a #5"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "a #4"
          }
        ],
        "ios": [
          {
            "2022-07": "a #5"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Partial. Not supported with multiple values.",
      "3": "Partial. `overline` is not supported.",
      "4": "Partial. Only supports the line property, not style, color or thickness.",
      "5": "Partial. Only supports style, color or thickness when written with long hand selectors."
    }
  },
  {
    "slug": "css-text-emphasis-position",
    "title": "text-emphasis-position",
    "description": "Determines the position of the emphasis mark.",
    "url": "https://www.caniemail.com/features/css-text-emphasis-position/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": null,
    "last_test_date": "2022-07-07",
    "test_url": "https://www.caniemail.com/tests/css-text-emphasis.html",
    "test_results_url": "https://testi.at/proj/O0yCP6t6l3sZ1xFrLZuEx6I5O",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          },
          {
            "11": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-emphasis",
    "title": "text-emphasis",
    "description": "Applies emphasis marks to text commonly used in East Asian languages. Tests with text-emphasis, text-emphasis-color & text-emphasis-style properties.",
    "url": "https://www.caniemail.com/features/css-text-emphasis/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": null,
    "last_test_date": "2022-07-07",
    "test_url": "https://www.caniemail.com/tests/css-text-emphasis.html",
    "test_results_url": "https://testi.at/proj/O0yCP6t6l3sZ1xFrLZuEx6I5O",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2022-07": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2022-07": "n"
          }
        ],
        "macos": [
          {
            "2022-07": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2022-07": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "10": "n"
          },
          {
            "11": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.14": "u"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2022-07": "n"
          }
        ],
        "ios": [
          {
            "2022-07": "n"
          }
        ],
        "android": [
          {
            "2022-07": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ],
        "ios": [
          {
            "2022-07": "u"
          }
        ],
        "android": [
          {
            "2022-07": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2022-07": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-09": "n"
          }
        ],
        "ios": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-09": "y"
          }
        ],
        "android": [
          {
            "2022-09": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-indent",
    "title": "text-indent",
    "description": "Support below refers to supporting a `<length>` value only. This does not include the new `each-line` or `hanging` keywords.",
    "url": "https://www.caniemail.com/features/css-text-indent/",
    "category": "css",
    "tags": [],
    "keywords": "indent",
    "last_test_date": "2021-01-31",
    "test_url": "https://www.caniemail.com/tests/css-text-indent.html",
    "test_results_url": "https://testi.at/proj/Ew5f99Cy8NuRM0iPMVFoyYI8",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "11": "y"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "2021-01": "a #1"
          }
        ],
        "android": [
          {
            "2021-01": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2021-01": "a #1"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2021-01": "y"
          }
        ],
        "macos": [
          {
            "2021-01": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-01": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "4.2101.1": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "6.21.1": "a #1"
          }
        ],
        "android": [
          {
            "6.16.2.1525679": "a #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-01": "a #1"
          }
        ],
        "ios": [
          {
            "6.0.0": "a #1"
          }
        ],
        "android": [
          {
            "5.15.0": "a #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.31.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2021-01": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-01": "a #2"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "ios": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-07": "y"
          }
        ],
        "android": [
          {
            "2022-07": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Negative values are not supported.",
      "2": "Partial. Hard-coded negative values are not supported, but negative values as a result of the `calc()` function are supported."
    }
  },
  {
    "slug": "css-text-justify",
    "title": "text-justify",
    "description": "Sets what type of justification should be applied to text when `text-align: justify;` is set on an element.",
    "url": "https://www.caniemail.com/features/css-text-justify/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-04-17",
    "test_url": "https://www.caniemail.com/tests/css-text-justify.html",
    "test_results_url": "https://testi.at/proj/z7b61px4fel2ivk9sb2",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-04": "n #1"
          }
        ],
        "ios": [
          {
            "2024-04": "n #1"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-04": "a #2"
          }
        ],
        "ios": [
          {
            "2024-04": "n #1"
          }
        ],
        "android": [
          {
            "2024-04": "n #1"
          }
        ],
        "mobile-webmail": [
          {
            "2024-04": "a #2"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "a #3"
          },
          {
            "2016": "a #3"
          },
          {
            "2019": "a #3"
          },
          {
            "2021": "a #3"
          }
        ],
        "windows-mail": [
          {
            "2024-04": "n #5"
          }
        ],
        "macos": [
          {
            "2024-04": "n #1"
          }
        ],
        "outlook-com": [
          {
            "2024-04": "a #2"
          }
        ],
        "ios": [
          {
            "2024-04": "n #1"
          }
        ],
        "android": [
          {
            "2024-04": "n #1"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-04": "a #2 #4"
          }
        ],
        "ios": [
          {
            "2024-04": "n #1"
          }
        ],
        "android": [
          {
            "2024-04": "n #1"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-04": "n #2 #4"
          }
        ],
        "ios": [
          {
            "2024-04": "n #1"
          }
        ],
        "android": [
          {
            "2024-04": "n #1"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-04": "n #1"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-04": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-04": "a #2"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-04": "a #2"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-04": "n #1"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Buggy. `text-justify` is stripped",
      "2": "Partial. Depends on browser support",
      "3": "Partial. `text-justify` is stripped except when the value is `inter-character`",
      "4": "Partial. `text-justify` is stripped except when the value is `inter-word` or `distribute`",
      "5": "Buggy. `text-justify` values `none`, `inter-word` and `distribute` are replaced with `inter-ideograph`"
    }
  },
  {
    "slug": "css-text-orientation",
    "title": "text-orientation",
    "description": "Sets the orientation of the text characters in vertical mode.",
    "url": "https://www.caniemail.com/features/css-text-orientation/",
    "category": "css",
    "tags": [],
    "keywords": "vertical orientation",
    "last_test_date": "2023-12-08",
    "test_url": "https://www.caniemail.com/tests/css-text-orientation.html",
    "test_results_url": "https://testi.at/proj/6vppidbfjxnczrxh4",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "10.15": "a #1"
          },
          {
            "11.7": "y"
          },
          {
            "12.7": "y"
          },
          {
            "13.6": "y"
          },
          {
            "14.1": "y"
          }
        ],
        "ios": [
          {
            "10": "n"
          },
          {
            "11": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "10": "n"
          },
          {
            "11": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "n"
          }
        ],
        "macos": [
          {
            "2023-12": "n"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "10": "n"
          },
          {
            "11": "n"
          },
          {
            "12": "y"
          },
          {
            "13": "y"
          },
          {
            "14": "y"
          },
          {
            "15": "y"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `sideways` is not supported"
    }
  },
  {
    "slug": "css-text-overflow",
    "title": "text-overflow",
    "description": "Tested with the value `ellipsis`.",
    "url": "https://www.caniemail.com/features/css-text-overflow/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-text.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/DkqbHs69ek5UnK6uhZ7Uj0n5GVQNTP4Z1FvgXvnKyEoTM/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "a #1"
          }
        ],
        "android": [
          {
            "2019-02": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-01": "n #2"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts.",
      "2": "Not supported. `overflow` is replaced by `java-script`."
    }
  },
  {
    "slug": "css-text-shadow",
    "title": "text-shadow",
    "description": "",
    "url": "https://www.caniemail.com/features/css-text-shadow/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-box-model.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/pyPQFHSYLFrhbRShalju0B2fYNwUgLuyKTLx4MLqiw5mE/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "y"
          }
        ],
        "ios": [
          {
            "2019-02": "y"
          }
        ],
        "android": [
          {
            "2019-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.5": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-transform",
    "title": "text-transform",
    "description": "Each of the six `text-transform` values defined by MDN (`capitalize`, `uppercase`, `lowercase`, `none`, `full-width`, `full-size-kana`).",
    "url": "https://www.caniemail.com/features/css-text-transform/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2021-09-19",
    "test_url": "https://www.caniemail.com/tests/css-text-transform.html",
    "test_results_url": "https://app.emailonacid.com/shared-preview/R6niSqR1SM",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ],
        "ios": [
          {
            "2021-08": "y"
          }
        ],
        "android": [
          {
            "2021-08": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "a #1"
          },
          {
            "2010": "a #1"
          },
          {
            "2013": "a #1"
          },
          {
            "2016": "a #1"
          },
          {
            "2019": "a #1"
          }
        ],
        "windows-mail": [
          {
            "2021-09": "a #1"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2021-08": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ],
        "ios": [
          {
            "2021-09": "y"
          }
        ],
        "android": [
          {
            "2021-09": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-09": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "Currently, only Firefox supports the `full-width` and `full-size-kana` property values. Web clients on Firefox will support these properties.",
    "notes_by_num": {
      "1": "Partial. `lowercase` value is not supported."
    }
  },
  {
    "slug": "css-text-underline-offset",
    "title": "text-underline-offset",
    "description": null,
    "url": "https://www.caniemail.com/features/css-text-underline-offset/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "underline",
    "last_test_date": "2023-01-16",
    "test_url": "https://www.caniemail.com/tests/css-text-decoration.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/Zo8XyakhcacSbta8lYvU5vSTAWnaTLi7XIcWtQ7B218Cj/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "14.0": "y"
          }
        ],
        "ios": [
          {
            "14.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "ios": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2021-01": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          },
          {
            "2021-03": "n"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2021-01": "n"
          }
        ],
        "macos": [
          {
            "2016": "n"
          },
          {
            "16.46": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2021-01": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "7.0": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "78.6": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2021-01": "n"
          }
        ],
        "ios": [
          {
            "2021-01": "n"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2021-01": "n"
          }
        ],
        "ios": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ],
        "ios": [
          {
            "2021-01": "y"
          }
        ],
        "android": [
          {
            "2021-01": "n"
          },
          {
            "2023-01": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2021-01": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-text-underline-position",
    "title": "text-underline-position",
    "description": "Specifies the position of the underline which is set using the `text-decoration property`'s underline value.",
    "url": "https://www.caniemail.com/features/css-text-underline-position/",
    "category": "css",
    "tags": [
      "i18n"
    ],
    "keywords": "underline",
    "last_test_date": "2023-12-08",
    "test_url": "https://www.caniemail.com/tests/css-text-underline-position.html",
    "test_results_url": "https://testi.at/proj/yd99u8e12nvh97jcv",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2023-12": "a #1"
          }
        ],
        "ios": [
          {
            "2023-12": "a #1"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "a #1"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2023-12": "n"
          }
        ],
        "macos": [
          {
            "2023-12": "n"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2023-12": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2023-12": "a #1"
          }
        ],
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "n"
          }
        ],
        "android": [
          {
            "2023-12": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2023-12": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2023-12": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2023-12": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2023-12": "n"
          }
        ],
        "ios": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2023-12": "u"
          }
        ],
        "android": [
          {
            "2023-12": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. Supports `under` but not `right` and `left`"
    }
  },
  {
    "slug": "css-text-wrap",
    "title": "text-wrap",
    "description": "Controls how text inside an element is wrapped",
    "url": "https://www.caniemail.com/features/css-text-wrap/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2024-04-03",
    "test_url": "https://www.caniemail.com/tests/css-text-wrap.html",
    "test_results_url": "https://testi.at/proj/xle5u5a5i9eh9opi7a",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "15": "y"
          },
          {
            "14": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2024-04": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-04": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          },
          {
            "2021": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-04": "n"
          }
        ],
        "macos": [
          {
            "2024-04": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-04": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2024-04": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2024-04": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2024-04": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "2024-04": "u"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-04": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-04": "u"
          }
        ],
        "android": [
          {
            "2024-04": "u"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": null
  },
  {
    "slug": "css-transform",
    "title": "transform",
    "description": "Tested with values `matrix`, `translate`, `scale`, `rotate`, `skew`, `scale translate`.",
    "url": "https://www.caniemail.com/features/css-transform/",
    "category": "css",
    "tags": [],
    "keywords": null,
    "last_test_date": "2019-02-28",
    "test_url": "https://www.caniemail.com/tests/css-visual-effects.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/DhTRmGsVH6uobU4pHD3CasJywfBL4HnEjA1LOF8f9ctso/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "12.4": "y"
          }
        ],
        "ios": [
          {
            "12.1": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2019-08": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2019-08": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2019-02": "n"
          }
        ],
        "macos": [
          {
            "2019-02": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2019-02": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "60.8": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2019-02": "n"
          }
        ],
        "ios": [
          {
            "2019-02": "n"
          }
        ],
        "android": [
          {
            "2019-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "5.0.10.2": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-01": "y"
          }
        ],
        "ios": [
          {
            "2020-01": "y"
          }
        ],
        "android": [
          {
            "2020-01": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "n"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": null,
    "notes_by_num": {
      "1": "Partial. `scale translate` is not supported."
    }
  },
  {
    "slug": "css-transition",
    "title": "transition",
    "description": "Creates a visual transition when changing CSS properties.",
    "url": "https://www.caniemail.com/features/css-transition/",
    "category": "css",
    "tags": [],
    "keywords": "animation",
    "last_test_date": "2024-03-29",
    "test_url": "https://www.caniemail.com/tests/css-transition.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/04RtAsXcEt68kJzhGogIDE8xcmwE7xuKdGPlz2b07ZfJY/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "16.0": "y"
          }
        ],
        "ios": [
          {
            "17.4": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ],
        "mobile-webmail": [
          {
            "2024-03": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2024-03": "n"
          }
        ],
        "macos": [
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2024-03": "n"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "6.1.90.16": "a #5"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "n"
          }
        ]
      },
      "thunderbird": {
        "macos": [
          {
            "115.9.0": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2024-03": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2024-03": "a #1 #2"
          }
        ],
        "android": [
          {
            "2024-03": "a #1 #2"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2024-03": "a #1 #2"
          }
        ],
        "ios": [
          {
            "2024-03": "a #1 #2"
          }
        ],
        "android": [
          {
            "2024-03": "a #1 #2"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ],
        "ios": [
          {
            "2024-03": "n"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2024-03": "a #3"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2024-03": "y #4"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ]
      },
      "free-fr": {
        "desktop-webmail": [
          {
            "2024-03": "y"
          }
        ]
      },
      "t-online-de": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "ios": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2024-03": "u"
          }
        ],
        "android": [
          {
            "2024-03": "u"
          }
        ]
      }
    },
    "notes": "This page accounts for the shorthand `transition` property and the longhand properties `transition-delay`, `transition-duration`, `transition-property` and `transition-timing-function`.",
    "notes_by_num": {
      "1": "Partial. Longhand properties are not supported.",
      "2": "Buggy. The `all` keyword is not supported.",
      "3": "Buggy. `transition-duration` is forced to `0` on a global reset style.",
      "4": "Transition properties are supported but pseudo-classes like `:hover` are not.",
      "5": "Partial. Not supported with Outlook accounts."
    }
  },
  {
    "slug": "css-unit-calc",
    "title": "CSS calc() function",
    "description": "Support for CSS calc function.",
    "url": "https://www.caniemail.com/features/css-unit-calc/",
    "category": "css",
    "tags": [],
    "keywords": "unit, calc",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "a #1"
          }
        ],
        "android": [
          {
            "2020-02": "a #1"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "n"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "n"
          },
          {
            "2024-01": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {
      "1": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-unit-ch",
    "title": "ch unit",
    "description": "Support for ch unit, relative to the width of a '0'.",
    "url": "https://www.caniemail.com/features/css-unit-ch/",
    "category": "css",
    "tags": [],
    "keywords": "unit, ch",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-cm",
    "title": "cm unit",
    "description": "Support for centimeters unit",
    "url": "https://www.caniemail.com/features/css-unit-cm/",
    "category": "css",
    "tags": [],
    "keywords": "unit, cm",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-em",
    "title": "em unit",
    "description": "Support for em unit, relative to the current font-size.",
    "url": "https://www.caniemail.com/features/css-unit-em/",
    "category": "css",
    "tags": [],
    "keywords": "unit, em",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-ex",
    "title": "ex unit",
    "description": "Support for ex unit, relative to the height of an 'x'.",
    "url": "https://www.caniemail.com/features/css-unit-ex/",
    "category": "css",
    "tags": [],
    "keywords": "unit, ex",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-in",
    "title": "in unit",
    "description": "Support for inches unit",
    "url": "https://www.caniemail.com/features/css-unit-in/",
    "category": "css",
    "tags": [],
    "keywords": "unit, in",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-initial",
    "title": "initial unit",
    "description": "Support for initial keyword value.",
    "url": "https://www.caniemail.com/features/css-unit-initial/",
    "category": "css",
    "tags": [],
    "keywords": "unit, initial",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "a #1"
          }
        ],
        "ios": [
          {
            "2020-02": "a #2"
          }
        ],
        "android": [
          {
            "2020-02": "a #2"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "a #1"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {
      "1": "Partial. Webmail rendering doesn't work in IE.",
      "2": "Partial. Not supported with non Google accounts."
    }
  },
  {
    "slug": "css-unit-mm",
    "title": "mm unit",
    "description": "Support for millimeters unit",
    "url": "https://www.caniemail.com/features/css-unit-mm/",
    "category": "css",
    "tags": [],
    "keywords": "unit, mm",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-pc",
    "title": "pc unit",
    "description": "Support for picas unit",
    "url": "https://www.caniemail.com/features/css-unit-pc/",
    "category": "css",
    "tags": [],
    "keywords": "unit, pc",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-percent",
    "title": "% unit",
    "description": "Support for percentage unit",
    "url": "https://www.caniemail.com/features/css-unit-percent/",
    "category": "css",
    "tags": [],
    "keywords": "unit, %",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-pt",
    "title": "pt unit",
    "description": "Support for points unit",
    "url": "https://www.caniemail.com/features/css-unit-pt/",
    "category": "css",
    "tags": [],
    "keywords": "unit, pt",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          },
          {
            "2021-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-px",
    "title": "px unit",
    "description": "Support for pixels unit",
    "url": "https://www.caniemail.com/features/css-unit-px/",
    "category": "css",
    "tags": [],
    "keywords": "unit, px",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "y"
          },
          {
            "2007": "y"
          },
          {
            "2010": "y"
          },
          {
            "2013": "y"
          },
          {
            "2016": "y"
          },
          {
            "2019": "y"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "y"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-rem",
    "title": "rem unit",
    "description": "Support for rem unit, relative to the root font-size.",
    "url": "https://www.caniemail.com/features/css-unit-rem/",
    "category": "css",
    "tags": [],
    "keywords": "unit, rem",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {}
  },
  {
    "slug": "css-unit-vh",
    "title": "vh unit",
    "description": "Support for viewport height unit.",
    "url": "https://www.caniemail.com/features/css-unit-vh/",
    "category": "css",
    "tags": [],
    "keywords": "unit, vh",
    "last_test_date": "2023-10-01",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "https://app.emailonacid.com/app/acidtest/AhzTJnsoWULAInwe2B8h7uzlsa6vGOgAkVK1VA6BbuKaW/list",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          },
          {
            "15": "a #2"
          },
          {
            "17": "a #2"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "n"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "a #2"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "a #2"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y #1"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {
      "1": "Buggy. Can affect the preview window size, meaning content can get lost.",
      "2": "Buggy. Value resolves to zero"
    }
  },
  {
    "slug": "css-unit-vmax",
    "title": "vmax unit",
    "description": "Support for viewport maximum unit.",
    "url": "https://www.caniemail.com/features/css-unit-vmax/",
    "category": "css",
    "tags": [],
    "keywords": "unit, vmax",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "a #2"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "a #2"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y #1"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {
      "1": "Buggy. VH values can affect the preview window size, meaning content can get lost.",
      "2": "Buggy. VH values resolves to zero"
    }
  },
  {
    "slug": "css-unit-vmin",
    "title": "vmin unit",
    "description": "Support for viewport minimum unit.",
    "url": "https://www.caniemail.com/features/css-unit-vmin/",
    "category": "css",
    "tags": [],
    "keywords": "unit, vmin",
    "last_test_date": "2020-02-25",
    "test_url": "https://www.caniemail.com/tests/css-units.html",
    "test_results_url": "",
    "stats": {
      "apple-mail": {
        "macos": [
          {
            "13": "y"
          }
        ],
        "ios": [
          {
            "13": "y"
          }
        ]
      },
      "gmail": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ],
        "mobile-webmail": [
          {
            "2020-02": "y"
          }
        ]
      },
      "outlook": {
        "windows": [
          {
            "2003": "n"
          },
          {
            "2007": "n"
          },
          {
            "2010": "n"
          },
          {
            "2013": "n"
          },
          {
            "2016": "n"
          },
          {
            "2019": "n"
          }
        ],
        "windows-mail": [
          {
            "2020-02": "n"
          }
        ],
        "macos": [
          {
            "2016": "y"
          },
          {
            "16.80": "y"
          }
        ],
        "outlook-com": [
          {
            "2020-02": "y"
          },
          {
            "2024-01": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          }
        ]
      },
      "samsung-email": {
        "android": [
          {
            "9.0": "y"
          }
        ]
      },
      "thunderbird": {
        "windows": [
          {
            "2020-02": "y"
          }
        ],
        "macos": [
          {
            "68.4": "y"
          }
        ]
      },
      "aol": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "yahoo": {
        "desktop-webmail": [
          {
            "2020-02": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "n"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "orange": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          },
          {
            "2021-03": "n"
          },
          {
            "2024-04": "n"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ],
        "android": [
          {
            "2020-02": "y"
          },
          {
            "2024-04": "n"
          }
        ]
      },
      "sfr": {
        "desktop-webmail": [
          {
            "2020-02": "y"
          }
        ],
        "ios": [
          {
            "2020-02": "y"
          }
        ],
        "android": [
          {
            "2020-02": "n"
          }
        ]
      },
      "protonmail": {
        "desktop-webmail": [
          {
            "2020-03": "y"
          }
        ],
        "ios": [
          {
            "2020-03": "y"
          }
        ],
        "android": [
          {
            "2020-03": "y"
          }
        ]
      },
      "hey": {
        "desktop-webmail": [
          {
            "2020-06": "y"
          }
        ]
      },
      "mail-ru": {
        "desktop-webmail": [
          {
            "2020-10": "y"
          }
        ]
      },
      "fastmail": {
        "desktop-webmail": [
          {
            "2021-07": "y"
          }
        ]
      },
      "laposte": {
        "desktop-webmail": [
          {
            "2021-08": "y"
          }
        ]
      },
      "gmx": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "a #2"
          }
        ]
      },
      "web-de": {
        "desktop-webmail": [
          {
            "2022-08": "n"
          }
        ],
        "ios": [
          {
            "2022-08": "y"
          }
        ],
        "android": [
          {
            "2022-08": "a #2"
          }
        ]
      },
      "ionos-1and1": {
        "desktop-webmail": [
          {
            "2022-08": "y #1"
          }
        ],
        "android": [
          {
            "2022-08": "y"
          }
        ]
      }
    },
    "notes": "",
    "notes_by_num": {
      "1": "Buggy. VH values can affect the preview window size, meaning content can get lost.",
      "2": "Buggy. VH values resolves to zero"
    }
  },
  {
    "slug": "css-unit-vw",
    "title": "vw unit",
    "description": "Support for viewport width unit.",
    "url": "https://www.caniemail.com/features/css-unit-vw/",
    "category": "css",
    "tags": [],
    "keywords": "unit, vw",
    "last_test_date": "2020-02-25",
    "stats": {
    }