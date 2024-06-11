type Mods = Record<string, boolean | string>

export function classNames(className: string, mods: Mods, additional: string[]):string {
  return [
    className,
    ...additional,
    ...Object.entries(mods)
    .filter(([className, value]) => Boolean(value))
    .map(([className, value]) => className)
  ]
  .join(' ')
}

classNames('remove-btn', {hovered: false, selectable: true, red: true}, [''])

