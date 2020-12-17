import { SetupContext } from '@vue/composition-api'
export const CardWidth = ({root}: SetupContext): number => {
  const name = root.$vuetify.breakpoint.name
  if (name == "xs") {
    return 350
  } else if (name == "sm") {
    return 350
  } else if (name == "md") {
    return 600
  } else if (name == "lg") {
    return 600
  } else {
    return 600
  }
}

export const HeaderHeight = ({root}: SetupContext): number => {
  const name = root.$vuetify.breakpoint.name
  if (name == "xs") {
    return 75
  } else if (name == "sm") {
    return 75
  } else if (name == "md") {
    return 100
  } else if (name == "lg") {
    return 100
  } else {
    return 100
  }
}
