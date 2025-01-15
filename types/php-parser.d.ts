declare module 'php-parser' {
  export class Engine {
    constructor(options: {
      parser?: {
        debug?: boolean
        locations?: boolean
        extractDoc?: boolean
        php7?: boolean
      }
      ast?: {
        withPositions?: boolean
      }
    })

    parseCode(code: string, filename?: string): any
  }

  export class Parser {
    parse(code: string, filename?: string): any
  }
} 