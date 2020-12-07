import { SetupContext } from '@vue/composition-api'
export default({root}: SetupContext): number => {
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
