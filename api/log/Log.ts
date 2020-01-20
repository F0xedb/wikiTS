/*
 * The Log class contains the definition to log certain data to the terminal on stdout
 */

/*
 * Contains the types that you can use to log
 * @param ELogType.ERROR logs the current string as an error message
 * @param ELogType.WARN logs the current string as an warn message
 * @param ELogType.DEBUG logs the current string as an debug message
 */
export enum ELogType {
  ERROR,
  WARN,
  DEBUG
}
/*
 * Log the current value straight to stdout
 * @param payload the message to log
 * @param type the ELogType wish is used to display the message correctly
 */
export function log(payload: any, type: ELogType = ELogType.DEBUG) {
  console.log(payload);
}
