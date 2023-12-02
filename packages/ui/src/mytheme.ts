
const light = {

  background: '#FFFDEF', // default background light
  backgroundHover: '#76714A9E',
  backgroundPress: '#918a50',
  backgroundFocus: '#76714A9E',
  backgroundLight: '#76714A28',
  borderColor: '#83503C',
  borderColorHover: '#b87d65',
  borderColorPress: '#83503C',
  borderColorFocus: '#83503C',
  placeholderColor: '#0A0C08',
  color: '#121610',
  colorHover: '#3A4733',
  colorPress: '#272F22',
  colorFocus: '#0A0C08',
  shadowColor: '#0A0C08',
  shadowColorHover: '#121610',
  color1: '#121610',
  color2: '#121610', 
  color3: 'hsl(0, 0%, 95.1%)',
  color4: 'hsl(0, 0%, 93.0%)',
  color5: 'hsl(0, 0%, 90.9%)',
  color6: 'hsl(0, 0%, 88.7%)',
  color7: 'hsl(0, 0%, 85.8%)',
  color8: 'hsl(0, 0%, 78.0%)',
  color9: 'hsl(0, 0%, 56.1%)',
  color10: 'hsl(0, 0%, 52.3%)',
  color11: 'hsl(0, 0%, 43.5%)',
  color12: 'hsl(0, 0%, 9.0%)',
}

type BaseTheme = typeof light

const dark: BaseTheme = {
  background: '#FFFDEF', // default background light
  backgroundHover: '#76714A9E',
  backgroundPress: '#918a50',
  backgroundFocus: '#76714A9E',
  backgroundLight: '#76714A28',
  borderColor: '#83503C',
  borderColorHover: '#b87d65',
  borderColorPress: '#83503C',
  borderColorFocus: '#83503C',
  placeholderColor: '#0A0C08',
  color: '#121610',
  colorHover: '#3A4733',
  colorPress: '#272F22',
  colorFocus: '#0A0C08',
  shadowColor: '#0A0C08',
  shadowColorHover: '#121610',
  color1: '#121610',
  color2: '#121610', 
  color3: 'hsl(0, 0%, 95.1%)',
  color4: 'hsl(0, 0%, 93.0%)',
  color5: 'hsl(0, 0%, 90.9%)',
  color6: 'hsl(0, 0%, 88.7%)',
  color7: 'hsl(0, 0%, 85.8%)',
  color8: 'hsl(0, 0%, 78.0%)',
  color9: 'hsl(0, 0%, 56.1%)',
  color10: 'hsl(0, 0%, 52.3%)',
  color11: 'hsl(0, 0%, 43.5%)',
  color12: 'hsl(0, 0%, 9.0%)',
}

const allThemes = {
  dark,
  light
}

type ThemeName = keyof typeof allThemes

type Themes = {

  [key in ThemeName]: BaseTheme

}
// 4. finally, export it with the stricter type

export const themes: Themes = allThemes
