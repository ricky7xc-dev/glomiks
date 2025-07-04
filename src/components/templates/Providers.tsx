// components/providers.tsx
"use client";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Nunito Sans, sans-serif",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Nunito Sans, sans-serif" },
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <MantineProvider theme={theme}>{children}</MantineProvider>;
}
