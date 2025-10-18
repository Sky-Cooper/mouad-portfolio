/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.08)",
      },
      transitionDuration: {
        300: "300ms",
        400: "400ms",
        500: "500ms",
        900: "900ms",
      },
      backgroundImage: {
        "light-gradient": "linear-gradient(120deg, #007AFF, #5A3CEE, #AD03DE)",
        "dark-gradient": "linear-gradient(120deg, #022F66, #41077E, #44067F)",
      },
      colors: {
        brand: {
          50: "#f5eaff",
          100: "#ebd4ff",
          200: "#d6a8ff",
          300: "#c07bff",
          400: "#ab4fff",
          500: "#951fff",
          600: "#7600e6",
          700: "#5d00b4",
          800: "#440082",
          900: "#2b0051",
          950: "#1a0037",
          DEFAULT: "#951fff",
        },
        neutral: {
          100: "#F9FAFB",
          200: "#E5E7EB",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        secondary: {
          50: "#e3f9ab",
          100: "#c5f482",
          200: "#a7e85a",
          300: "#88e033",
          400: "#70d60e",
          500: "#C2E812",
          600: "#a3c10f",
          700: "#83a50d",
          800: "#63890a",
          900: "#4b6e08",
          950: "#1a0037",
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        xs: "10px",
        sm: "13px",
        base: "16px",
        lg: "20px",
        xlg: "25px",
        huge: "31px",
        xh: "36px",
        sxh: "41px",
        xsxh: "50px",
      },
      fontFamily: {
        grot: ["Overused Grotesk", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  darkMode: ["class", "class"],
};
