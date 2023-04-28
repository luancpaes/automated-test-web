/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type statsPage = typeof import('./pages/stats-page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, statsPage: statsPage }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
