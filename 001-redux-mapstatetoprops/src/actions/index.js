export const UPDATE_APP_NAME = 'UPDATE_APP_NAME'
export const UPDATE_APP_INTRO = 'UPDATE_APP_INTRO'

export const updateAppName = (text) => ({
    type: UPDATE_APP_NAME,
    text
})

export const updateAppIntro = (text) => ({
  type: UPDATE_APP_INTRO,
  text
})
