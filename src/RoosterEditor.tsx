import { useMemo } from "react";
import { getDarkColor } from "roosterjs";
import {
  createRibbonPlugin,
  getButtons,
  Ribbon,
  RibbonButton,
  Rooster,
  AllButtonKeys,
} from "roosterjs-react";
import { initializeIcons } from "@fluentui/react/lib/Icons";
import { ThemeProvider, DefaultPalette } from "@fluentui/react";

const darkPalette = Object.entries(DefaultPalette).reduce(
  (result, [name, color]) => ({ ...result, [name]: getDarkColor(color) }),
  { ...DefaultPalette }
);

initializeIcons();

export function RoosterEditor({ value }: { value?: string }) {
  const themeMode = "dark"; // using a custom provider with a different name + hook in the actual code
  const ribbonPlugin = useMemo(createRibbonPlugin, []);
  const plugins = useMemo(() => [ribbonPlugin], [ribbonPlugin]);
  const buttons = useMemo(() => getButtons(AllButtonKeys), []) as RibbonButton<string>[];

  const inDarkMode = themeMode === "dark";
  const themePalette = inDarkMode ? darkPalette : DefaultPalette;
  const theme = { palette: themePalette };

  return (
    <ThemeProvider theme={theme} applyTo="body">
      <Ribbon plugin={ribbonPlugin} buttons={buttons} />
      <Rooster plugins={plugins} initialContent={value} inDarkMode={inDarkMode} />
    </ThemeProvider>
  );
}
