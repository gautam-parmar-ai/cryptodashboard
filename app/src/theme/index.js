import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  globalCss: {
    "html, body, #root": {
      height: "100%",
      color: "black.900",
      backgroundColor: "gray.50",
    },

    body: {
      fontFamily: "Ubuntu, sans-serif",
    },
  },

  theme: {
    semanticTokens: {
      colors: {
        colorPalette: {
          value: "{colors.primary}",
        },
      },
    },
    tokens: {
      colors: {
        primary: { value: "#5F00D9" },

        brand: {
          purple: { value: "#5F00D9" },
        },

        gray: {
          50: { value: "#f3f3f7" },
          100: { value: "#EEEEF4" },
          200: { value: "#D8DDE2" },
          400: { value: "#BABAC4" },
          600: { value: "#797E82" },
          800: { value: "#535D66" },
        },

        black: {
          900: { value: "#171717" },
        },
      },

      fonts: {
        heading: { value: "Ubuntu, sans-serif" },
        body: { value: "Ubuntu, sans-serif" },
      },

      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        md: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "20px" },
        "2xl": { value: "24px" },
        "3xl": { value: "28px" },
        "4xl": { value: "32px" },
      },

      fontWeights: {
        normal: { value: "400" },
        medium: { value: "500" },
        semibold: { value: "600" },
        bold: { value: "700" },
      },
    },

    textStyles: {
      h1: {
        value: {
          fontSize: { base: "30px", md: "32px" },
          fontWeight: "600",
          lineHeight: { base: "34px", md: "36px" },
          color: "{colors.black.900}",
        },
      },

      h2: {
        value: {
          fontSize: { base: "24px", md: "28px" },
          fontWeight: "600",
          lineHeight: { base: "28px", md: "32px" },
          color: "{colors.black.900}",
        },
      },

      h3: {
        value: {
          fontSize: { base: "22px", md: "24px", xl: "32px" },
          fontWeight: "600",
          lineHeight: { base: "26px", md: "28px", xl: "36px" },
          color: "{colors.black.900}",
        },
      },

      h4: {
        value: {
          fontSize: { base: "20px", md: "22px" },
          fontWeight: "500",
          lineHeight: { base: "24px", md: "26px" },
          color: "{colors.black.900}",
        },
      },

      h5: {
        value: {
          fontSize: { base: "18px", md: "20px" },
          fontWeight: "500",
          lineHeight: { base: "22px", md: "24px" },
          color: "{colors.black.900}",
        },
      },

      h6: {
        value: {
          fontSize: { base: "16px", md: "18px" },
          fontWeight: "500",
          lineHeight: { base: "20px", md: "22px" },
          color: "{colors.black.900}",
        },
      },
    },

    recipes: {
      button: {
        base: {
          borderRadius: "md",
          fontWeight: "bold",
          borderRadius: "10px",
        },

        variants: {
          variant: {
            solid: {
              bg: "{colors.primary}",
              color: "white",
            },

            gray: {
              bg: "{colors.gray.400}",
              color: "white",
              _hover: {
                bg: "{colors.gray.600}",
              },
            },

            outline: {
              border: "1px solid",
              borderColor: "{colors.primary}",
              color: "{colors.primary}",
            },

            ghost: {
              color: "{colors.primary}",
            },
          },
        },
      },
    },
    slotRecipes: {
      field: {
        slots: ["root", "label", "helperText", "errorText"],
        base: {
          root: {
            mb: "2",
          },
          label: {
            fontSize: "sm",
            fontWeight: "medium",
            color: "black.900",
            mb: "1",
          },
          helperText: {
            fontSize: "xs",
            color: "gray.600",
          },
          errorText: {
            fontSize: "xs",
            color: "red.500",
          },
        },
      },

      checkbox: {
        slots: ["root", "control", "label", "indicator"],
        base: {
          control: {
            borderRadius: "4px",
            borderColor: "gray.400",
            _checked: {
              bg: "{colors.primary}",
              borderColor: "{colors.primary}",
            },
            _focus: {
              boxShadow: "0 0 0 2px {colors.primary}",
            },
          },
          label: {
            fontSize: "sm",
            color: "black.900",
          },
        },
      },
    },
  },
});
