#!/usr/bin/env node
// This file was generated on Tue Sep 13, 2022 15:33 (UTC-03) by REx v5.55 which is Copyright (c) 1979-2022 by Gunther Rademacher <grd@gmx.net>
// REx command line: Web-C.ebnf -backtrack -javascript -tree

function Web_C(string, parsingEventHandler)
{
  init(string, parsingEventHandler);

  var thisParser = this;

  this.ParseException = function(b, e, s, o, x)
  {
    var begin = b;
    var end = e;
    var state = s;
    var offending = o;
    var expected = x;

    this.getBegin = function() {return begin;};
    this.getEnd = function() {return end;};
    this.getState = function() {return state;};
    this.getExpected = function() {return expected;};
    this.getOffending = function() {return offending;};
    this.isAmbiguousInput = function() {return false;};

    this.getMessage = function()
    {
      return offending < 0
           ? "lexical analysis failed"
           : "syntax error";
    };
  };

  function init(source, parsingEventHandler)
  {
    eventHandler = parsingEventHandler;
    input = source;
    size = source.length;
    reset(0, 0, 0);
  }

  this.getInput = function()
  {
    return input;
  };

  this.getTokenOffset = function()
  {
    return b0;
  };

  this.getTokenEnd = function()
  {
    return e0;
  };

  function reset(l, b, e)
  {
            b0 = b; e0 = b;
    l1 = l; b1 = b; e1 = e;
    l2 = 0; b2 = 0; e2 = 0;
    l3 = 0; b3 = 0; e3 = 0;
    end = e;
    ex = -1;
    memo = {};
    eventHandler.reset(input);
  }

  this.reset = function(l, b, e)
  {
    reset(l, b, e);
  };

  this.getOffendingToken = function(e)
  {
    var o = e.getOffending();
    return o >= 0 ? Web_C.TOKEN[o] : null;
  };

  this.getExpectedTokenSet = function(e)
  {
    var expected;
    if (e.getExpected() < 0)
    {
      expected = Web_C.getTokenSet(- e.getState());
    }
    else
    {
      expected = [Web_C.TOKEN[e.getExpected()]];
    }
    return expected;
  };

  this.getErrorMessage = function(e)
  {
    var message = e.getMessage();
    var found = this.getOffendingToken(e);
    var tokenSet = this.getExpectedTokenSet(e);
    var size = e.getEnd() - e.getBegin();
    message += (found == null ? "" : ", found " + found)
            + "\nwhile expecting "
            + (tokenSet.length == 1 ? tokenSet[0] : ("[" + tokenSet.join(", ") + "]"))
            + "\n"
            + (size == 0 || found != null ? "" : "after successfully scanning " + size + " characters beginning ");
    var prefix = input.substring(0, e.getBegin());
    var lines = prefix.split("\n");
    var line = lines.length;
    var column = lines[line - 1].length + 1;
    return message
         + "at line " + line + ", column " + column + ":\n..."
         + input.substring(e.getBegin(), Math.min(input.length, e.getBegin() + 64))
         + "...";
  };

  this.parse_Program = function()
  {
    eventHandler.startNonterminal("Program", e0);
    lookahead1W(34);                // END | EOF | Identifier | Null | True | False | Character | String | Real |
                                    // Comment | WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
    switch (l1)
    {
    case 2:                         // EOF
      consume(2);                   // EOF
      break;
    default:
      for (;;)
      {
        lookahead1W(28);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        if (l1 == 1)                // END
        {
          break;
        }
        whitespace();
        parse_Expression();
      }
    }
    eventHandler.endNonterminal("Program", e0);
  };

  function parse_Expression()
  {
    eventHandler.startNonterminal("Expression", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(46);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 3587:                    // Identifier '('
        lookahead3W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 90:                        // '{'
      lookahead2W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      switch (lk)
      {
      case 474:                     // '{' Identifier
        lookahead3W(44);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ':' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // '^' | '^=' | 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 1114:                    // '{' String
        lookahead3W(43);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ';' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' | '^' | '^=' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 2394:                    // '{' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2778:                    // '{' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7258:                    // '{' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11610:                   // '{' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9050:                    // '{' 'enum'
      case 10970:                   // '{' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1370:                    // '{' Comment
      case 5722:                    // '{' ';'
      case 7898:                    // '{' 'break'
      case 8410:                    // '{' 'continue'
        lookahead3W(37);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 1882:                    // '{' '#define'
      case 2522:                    // '{' '#ifdef'
      case 2650:                    // '{' '#ifndef'
      case 2906:                    // '{' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9434:                    // '{' 'for'
      case 9562:                    // '{' 'if'
      case 10714:                   // '{' 'switch'
      case 11482:                   // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 602:                     // '{' Null
      case 730:                     // '{' True
      case 858:                     // '{' False
      case 986:                     // '{' Character
      case 1242:                    // '{' Real
        lookahead3W(42);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ';' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' | '^' | '^=' | 'auto' |
                                    // 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' |
                                    // 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' |
                                    // 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' |
                                    // 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1626:                    // '{' '!'
      case 4314:                    // '{' '++'
      case 4826:                    // '{' '--'
      case 10330:                   // '{' 'sizeof'
      case 12250:                   // '{' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3674:                    // '{' '('
      case 8666:                    // '{' 'do'
      case 9946:                    // '{' 'return'
      case 10586:                   // '{' 'struct'
      case 10842:                   // '{' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 7770:                    // '{' 'auto'
      case 8282:                    // '{' 'const'
      case 9178:                    // '{' 'extern'
      case 10202:                   // '{' 'signed'
      case 10458:                   // '{' 'static'
      case 11098:                   // '{' 'unsigned'
      case 11354:                   // '{' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8154:                    // '{' 'char'
      case 8794:                    // '{' 'double'
      case 9306:                    // '{' 'float'
      case 9690:                    // '{' 'int'
      case 9818:                    // '{' 'long'
      case 10074:                   // '{' 'short'
      case 11226:                   // '{' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 4                     // Null
     && lk != 5                     // True
     && lk != 6                     // False
     && lk != 7                     // Character
     && lk != 8                     // String
     && lk != 9                     // Real
     && lk != 10                    // Comment
     && lk != 12                    // '!'
     && lk != 14                    // '#define'
     && lk != 18                    // '#if'
     && lk != 19                    // '#ifdef'
     && lk != 20                    // '#ifndef'
     && lk != 21                    // '#include'
     && lk != 22                    // '#undef'
     && lk != 28                    // '('
     && lk != 33                    // '++'
     && lk != 37                    // '--'
     && lk != 44                    // ';'
     && lk != 56                    // '['
     && lk != 60                    // 'auto'
     && lk != 61                    // 'break'
     && lk != 63                    // 'char'
     && lk != 64                    // 'const'
     && lk != 65                    // 'continue'
     && lk != 67                    // 'do'
     && lk != 68                    // 'double'
     && lk != 70                    // 'enum'
     && lk != 71                    // 'extern'
     && lk != 72                    // 'float'
     && lk != 73                    // 'for'
     && lk != 74                    // 'if'
     && lk != 75                    // 'int'
     && lk != 76                    // 'long'
     && lk != 77                    // 'return'
     && lk != 78                    // 'short'
     && lk != 79                    // 'signed'
     && lk != 80                    // 'sizeof'
     && lk != 81                    // 'static'
     && lk != 82                    // 'struct'
     && lk != 83                    // 'switch'
     && lk != 84                    // 'typedef'
     && lk != 85                    // 'union'
     && lk != 86                    // 'unsigned'
     && lk != 87                    // 'void'
     && lk != 88                    // 'volatile'
     && lk != 89                    // 'while'
     && lk != 95                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Null
     && lk != 643                   // Identifier True
     && lk != 771                   // Identifier False
     && lk != 899                   // Identifier Character
     && lk != 1027                  // Identifier String
     && lk != 1155                  // Identifier Real
     && lk != 1283                  // Identifier Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1795                  // Identifier '#define'
     && lk != 1923                  // Identifier '#elif'
     && lk != 2051                  // Identifier '#else'
     && lk != 2179                  // Identifier '#endif'
     && lk != 2307                  // Identifier '#if'
     && lk != 2435                  // Identifier '#ifdef'
     && lk != 2563                  // Identifier '#ifndef'
     && lk != 2691                  // Identifier '#include'
     && lk != 2819                  // Identifier '#undef'
     && lk != 2947                  // Identifier '%'
     && lk != 3075                  // Identifier '%='
     && lk != 3203                  // Identifier '&'
     && lk != 3331                  // Identifier '&&'
     && lk != 3459                  // Identifier '&='
     && lk != 3715                  // Identifier ')'
     && lk != 3843                  // Identifier '*'
     && lk != 3971                  // Identifier '*='
     && lk != 4099                  // Identifier '+'
     && lk != 4227                  // Identifier '++'
     && lk != 4355                  // Identifier '+='
     && lk != 4483                  // Identifier ','
     && lk != 4611                  // Identifier '-'
     && lk != 4739                  // Identifier '--'
     && lk != 4867                  // Identifier '-='
     && lk != 4995                  // Identifier '->'
     && lk != 5123                  // Identifier '.'
     && lk != 5251                  // Identifier '/'
     && lk != 5379                  // Identifier '/='
     && lk != 5507                  // Identifier ':'
     && lk != 5635                  // Identifier ';'
     && lk != 5763                  // Identifier '<'
     && lk != 5891                  // Identifier '<<'
     && lk != 6019                  // Identifier '<<='
     && lk != 6147                  // Identifier '<='
     && lk != 6275                  // Identifier '='
     && lk != 6403                  // Identifier '=='
     && lk != 6531                  // Identifier '>'
     && lk != 6659                  // Identifier '>='
     && lk != 6787                  // Identifier '>>'
     && lk != 6915                  // Identifier '>>='
     && lk != 7043                  // Identifier '?'
     && lk != 7171                  // Identifier '['
     && lk != 7299                  // Identifier ']'
     && lk != 7427                  // Identifier '^'
     && lk != 7555                  // Identifier '^='
     && lk != 7683                  // Identifier 'auto'
     && lk != 7811                  // Identifier 'break'
     && lk != 7939                  // Identifier 'case'
     && lk != 8067                  // Identifier 'char'
     && lk != 8195                  // Identifier 'const'
     && lk != 8323                  // Identifier 'continue'
     && lk != 8451                  // Identifier 'default'
     && lk != 8579                  // Identifier 'do'
     && lk != 8707                  // Identifier 'double'
     && lk != 8835                  // Identifier 'else'
     && lk != 8963                  // Identifier 'enum'
     && lk != 9091                  // Identifier 'extern'
     && lk != 9219                  // Identifier 'float'
     && lk != 9347                  // Identifier 'for'
     && lk != 9475                  // Identifier 'if'
     && lk != 9603                  // Identifier 'int'
     && lk != 9731                  // Identifier 'long'
     && lk != 9859                  // Identifier 'return'
     && lk != 9987                  // Identifier 'short'
     && lk != 10115                 // Identifier 'signed'
     && lk != 10243                 // Identifier 'sizeof'
     && lk != 10371                 // Identifier 'static'
     && lk != 10499                 // Identifier 'struct'
     && lk != 10627                 // Identifier 'switch'
     && lk != 10755                 // Identifier 'typedef'
     && lk != 10883                 // Identifier 'union'
     && lk != 11011                 // Identifier 'unsigned'
     && lk != 11139                 // Identifier 'void'
     && lk != 11267                 // Identifier 'volatile'
     && lk != 11395                 // Identifier 'while'
     && lk != 11523                 // Identifier '{'
     && lk != 11651                 // Identifier '|'
     && lk != 11779                 // Identifier '|='
     && lk != 11907                 // Identifier '||'
     && lk != 12035                 // Identifier '}'
     && lk != 12122                 // '{' '}'
     && lk != 12163                 // Identifier '~'
     && lk != 49626                 // '{' Identifier Identifier
     && lk != 49754                 // '{' Null Identifier
     && lk != 49882                 // '{' True Identifier
     && lk != 50010                 // '{' False Identifier
     && lk != 50138                 // '{' Character Identifier
     && lk != 50266                 // '{' String Identifier
     && lk != 50394                 // '{' Real Identifier
     && lk != 50522                 // '{' Comment Identifier
     && lk != 54874                 // '{' ';' Identifier
     && lk != 57050                 // '{' 'break' Identifier
     && lk != 57562                 // '{' 'continue' Identifier
     && lk != 66010                 // '{' Identifier Null
     && lk != 66138                 // '{' Null Null
     && lk != 66266                 // '{' True Null
     && lk != 66394                 // '{' False Null
     && lk != 66522                 // '{' Character Null
     && lk != 66650                 // '{' String Null
     && lk != 66778                 // '{' Real Null
     && lk != 66906                 // '{' Comment Null
     && lk != 71258                 // '{' ';' Null
     && lk != 73434                 // '{' 'break' Null
     && lk != 73946                 // '{' 'continue' Null
     && lk != 82394                 // '{' Identifier True
     && lk != 82522                 // '{' Null True
     && lk != 82650                 // '{' True True
     && lk != 82778                 // '{' False True
     && lk != 82906                 // '{' Character True
     && lk != 83034                 // '{' String True
     && lk != 83162                 // '{' Real True
     && lk != 83290                 // '{' Comment True
     && lk != 87642                 // '{' ';' True
     && lk != 89818                 // '{' 'break' True
     && lk != 90330                 // '{' 'continue' True
     && lk != 98778                 // '{' Identifier False
     && lk != 98906                 // '{' Null False
     && lk != 99034                 // '{' True False
     && lk != 99162                 // '{' False False
     && lk != 99290                 // '{' Character False
     && lk != 99418                 // '{' String False
     && lk != 99546                 // '{' Real False
     && lk != 99674                 // '{' Comment False
     && lk != 104026                // '{' ';' False
     && lk != 106202                // '{' 'break' False
     && lk != 106714                // '{' 'continue' False
     && lk != 115162                // '{' Identifier Character
     && lk != 115290                // '{' Null Character
     && lk != 115418                // '{' True Character
     && lk != 115546                // '{' False Character
     && lk != 115674                // '{' Character Character
     && lk != 115802                // '{' String Character
     && lk != 115930                // '{' Real Character
     && lk != 116058                // '{' Comment Character
     && lk != 120410                // '{' ';' Character
     && lk != 122586                // '{' 'break' Character
     && lk != 123098                // '{' 'continue' Character
     && lk != 131546                // '{' Identifier String
     && lk != 131674                // '{' Null String
     && lk != 131802                // '{' True String
     && lk != 131930                // '{' False String
     && lk != 132058                // '{' Character String
     && lk != 132186                // '{' String String
     && lk != 132314                // '{' Real String
     && lk != 132442                // '{' Comment String
     && lk != 136794                // '{' ';' String
     && lk != 138970                // '{' 'break' String
     && lk != 139482                // '{' 'continue' String
     && lk != 147930                // '{' Identifier Real
     && lk != 148058                // '{' Null Real
     && lk != 148186                // '{' True Real
     && lk != 148314                // '{' False Real
     && lk != 148442                // '{' Character Real
     && lk != 148570                // '{' String Real
     && lk != 148698                // '{' Real Real
     && lk != 148826                // '{' Comment Real
     && lk != 153178                // '{' ';' Real
     && lk != 155354                // '{' 'break' Real
     && lk != 155866                // '{' 'continue' Real
     && lk != 164314                // '{' Identifier Comment
     && lk != 164442                // '{' Null Comment
     && lk != 164570                // '{' True Comment
     && lk != 164698                // '{' False Comment
     && lk != 164826                // '{' Character Comment
     && lk != 164954                // '{' String Comment
     && lk != 165082                // '{' Real Comment
     && lk != 165210                // '{' Comment Comment
     && lk != 169562                // '{' ';' Comment
     && lk != 171738                // '{' 'break' Comment
     && lk != 172250                // '{' 'continue' Comment
     && lk != 197082                // '{' Identifier '!'
     && lk != 197210                // '{' Null '!'
     && lk != 197338                // '{' True '!'
     && lk != 197466                // '{' False '!'
     && lk != 197594                // '{' Character '!'
     && lk != 197722                // '{' String '!'
     && lk != 197850                // '{' Real '!'
     && lk != 197978                // '{' Comment '!'
     && lk != 202330                // '{' ';' '!'
     && lk != 204506                // '{' 'break' '!'
     && lk != 205018                // '{' 'continue' '!'
     && lk != 229850                // '{' Identifier '#define'
     && lk != 229978                // '{' Null '#define'
     && lk != 230106                // '{' True '#define'
     && lk != 230234                // '{' False '#define'
     && lk != 230362                // '{' Character '#define'
     && lk != 230490                // '{' String '#define'
     && lk != 230618                // '{' Real '#define'
     && lk != 230746                // '{' Comment '#define'
     && lk != 235098                // '{' ';' '#define'
     && lk != 237274                // '{' 'break' '#define'
     && lk != 237786                // '{' 'continue' '#define'
     && lk != 295386                // '{' Identifier '#if'
     && lk != 295514                // '{' Null '#if'
     && lk != 295642                // '{' True '#if'
     && lk != 295770                // '{' False '#if'
     && lk != 295898                // '{' Character '#if'
     && lk != 296026                // '{' String '#if'
     && lk != 296154                // '{' Real '#if'
     && lk != 296282                // '{' Comment '#if'
     && lk != 300634                // '{' ';' '#if'
     && lk != 302810                // '{' 'break' '#if'
     && lk != 303322                // '{' 'continue' '#if'
     && lk != 311770                // '{' Identifier '#ifdef'
     && lk != 311898                // '{' Null '#ifdef'
     && lk != 312026                // '{' True '#ifdef'
     && lk != 312154                // '{' False '#ifdef'
     && lk != 312282                // '{' Character '#ifdef'
     && lk != 312410                // '{' String '#ifdef'
     && lk != 312538                // '{' Real '#ifdef'
     && lk != 312666                // '{' Comment '#ifdef'
     && lk != 317018                // '{' ';' '#ifdef'
     && lk != 319194                // '{' 'break' '#ifdef'
     && lk != 319706                // '{' 'continue' '#ifdef'
     && lk != 328154                // '{' Identifier '#ifndef'
     && lk != 328282                // '{' Null '#ifndef'
     && lk != 328410                // '{' True '#ifndef'
     && lk != 328538                // '{' False '#ifndef'
     && lk != 328666                // '{' Character '#ifndef'
     && lk != 328794                // '{' String '#ifndef'
     && lk != 328922                // '{' Real '#ifndef'
     && lk != 329050                // '{' Comment '#ifndef'
     && lk != 333402                // '{' ';' '#ifndef'
     && lk != 335578                // '{' 'break' '#ifndef'
     && lk != 336090                // '{' 'continue' '#ifndef'
     && lk != 344538                // '{' Identifier '#include'
     && lk != 344666                // '{' Null '#include'
     && lk != 344794                // '{' True '#include'
     && lk != 344922                // '{' False '#include'
     && lk != 345050                // '{' Character '#include'
     && lk != 345178                // '{' String '#include'
     && lk != 345306                // '{' Real '#include'
     && lk != 345434                // '{' Comment '#include'
     && lk != 349786                // '{' ';' '#include'
     && lk != 351962                // '{' 'break' '#include'
     && lk != 352474                // '{' 'continue' '#include'
     && lk != 360922                // '{' Identifier '#undef'
     && lk != 361050                // '{' Null '#undef'
     && lk != 361178                // '{' True '#undef'
     && lk != 361306                // '{' False '#undef'
     && lk != 361434                // '{' Character '#undef'
     && lk != 361562                // '{' String '#undef'
     && lk != 361690                // '{' Real '#undef'
     && lk != 361818                // '{' Comment '#undef'
     && lk != 366170                // '{' ';' '#undef'
     && lk != 368346                // '{' 'break' '#undef'
     && lk != 368858                // '{' 'continue' '#undef'
     && lk != 459354                // '{' Null '('
     && lk != 459482                // '{' True '('
     && lk != 459610                // '{' False '('
     && lk != 459738                // '{' Character '('
     && lk != 459866                // '{' String '('
     && lk != 459994                // '{' Real '('
     && lk != 460122                // '{' Comment '('
     && lk != 464474                // '{' ';' '('
     && lk != 466650                // '{' 'break' '('
     && lk != 467162                // '{' 'continue' '('
     && lk != 542042                // '{' Comment '++'
     && lk != 546394                // '{' ';' '++'
     && lk != 548570                // '{' 'break' '++'
     && lk != 549082                // '{' 'continue' '++'
     && lk != 573914                // '{' Identifier ','
     && lk != 574042                // '{' Null ','
     && lk != 574170                // '{' True ','
     && lk != 574298                // '{' False ','
     && lk != 574426                // '{' Character ','
     && lk != 574554                // '{' String ','
     && lk != 574682                // '{' Real ','
     && lk != 574810                // '{' Comment ','
     && lk != 579162                // '{' ';' ','
     && lk != 581338                // '{' 'break' ','
     && lk != 581850                // '{' 'continue' ','
     && lk != 607578                // '{' Comment '--'
     && lk != 611930                // '{' ';' '--'
     && lk != 614106                // '{' 'break' '--'
     && lk != 614618                // '{' 'continue' '--'
     && lk != 704986                // '{' Identifier ':'
     && lk != 705626                // '{' String ':'
     && lk != 721370                // '{' Identifier ';'
     && lk != 721498                // '{' Null ';'
     && lk != 721626                // '{' True ';'
     && lk != 721754                // '{' False ';'
     && lk != 721882                // '{' Character ';'
     && lk != 722010                // '{' String ';'
     && lk != 722138                // '{' Real ';'
     && lk != 722266                // '{' Comment ';'
     && lk != 726618                // '{' ';' ';'
     && lk != 728794                // '{' 'break' ';'
     && lk != 729306                // '{' 'continue' ';'
     && lk != 918106                // '{' Null '['
     && lk != 918234                // '{' True '['
     && lk != 918362                // '{' False '['
     && lk != 918490                // '{' Character '['
     && lk != 918618                // '{' String '['
     && lk != 918746                // '{' Real '['
     && lk != 918874                // '{' Comment '['
     && lk != 923226                // '{' ';' '['
     && lk != 925402                // '{' 'break' '['
     && lk != 925914                // '{' 'continue' '['
     && lk != 983514                // '{' Identifier 'auto'
     && lk != 983642                // '{' Null 'auto'
     && lk != 983770                // '{' True 'auto'
     && lk != 983898                // '{' False 'auto'
     && lk != 984026                // '{' Character 'auto'
     && lk != 984154                // '{' String 'auto'
     && lk != 984282                // '{' Real 'auto'
     && lk != 984410                // '{' Comment 'auto'
     && lk != 988762                // '{' ';' 'auto'
     && lk != 990938                // '{' 'break' 'auto'
     && lk != 991450                // '{' 'continue' 'auto'
     && lk != 999898                // '{' Identifier 'break'
     && lk != 1000026               // '{' Null 'break'
     && lk != 1000154               // '{' True 'break'
     && lk != 1000282               // '{' False 'break'
     && lk != 1000410               // '{' Character 'break'
     && lk != 1000538               // '{' String 'break'
     && lk != 1000666               // '{' Real 'break'
     && lk != 1000794               // '{' Comment 'break'
     && lk != 1005146               // '{' ';' 'break'
     && lk != 1007322               // '{' 'break' 'break'
     && lk != 1007834               // '{' 'continue' 'break'
     && lk != 1032666               // '{' Identifier 'char'
     && lk != 1032794               // '{' Null 'char'
     && lk != 1032922               // '{' True 'char'
     && lk != 1033050               // '{' False 'char'
     && lk != 1033178               // '{' Character 'char'
     && lk != 1033306               // '{' String 'char'
     && lk != 1033434               // '{' Real 'char'
     && lk != 1033562               // '{' Comment 'char'
     && lk != 1037914               // '{' ';' 'char'
     && lk != 1040090               // '{' 'break' 'char'
     && lk != 1040602               // '{' 'continue' 'char'
     && lk != 1049050               // '{' Identifier 'const'
     && lk != 1049178               // '{' Null 'const'
     && lk != 1049306               // '{' True 'const'
     && lk != 1049434               // '{' False 'const'
     && lk != 1049562               // '{' Character 'const'
     && lk != 1049690               // '{' String 'const'
     && lk != 1049818               // '{' Real 'const'
     && lk != 1049946               // '{' Comment 'const'
     && lk != 1054298               // '{' ';' 'const'
     && lk != 1056474               // '{' 'break' 'const'
     && lk != 1056986               // '{' 'continue' 'const'
     && lk != 1065434               // '{' Identifier 'continue'
     && lk != 1065562               // '{' Null 'continue'
     && lk != 1065690               // '{' True 'continue'
     && lk != 1065818               // '{' False 'continue'
     && lk != 1065946               // '{' Character 'continue'
     && lk != 1066074               // '{' String 'continue'
     && lk != 1066202               // '{' Real 'continue'
     && lk != 1066330               // '{' Comment 'continue'
     && lk != 1070682               // '{' ';' 'continue'
     && lk != 1072858               // '{' 'break' 'continue'
     && lk != 1073370               // '{' 'continue' 'continue'
     && lk != 1098202               // '{' Identifier 'do'
     && lk != 1098330               // '{' Null 'do'
     && lk != 1098458               // '{' True 'do'
     && lk != 1098586               // '{' False 'do'
     && lk != 1098714               // '{' Character 'do'
     && lk != 1098842               // '{' String 'do'
     && lk != 1098970               // '{' Real 'do'
     && lk != 1099098               // '{' Comment 'do'
     && lk != 1103450               // '{' ';' 'do'
     && lk != 1105626               // '{' 'break' 'do'
     && lk != 1106138               // '{' 'continue' 'do'
     && lk != 1114586               // '{' Identifier 'double'
     && lk != 1114714               // '{' Null 'double'
     && lk != 1114842               // '{' True 'double'
     && lk != 1114970               // '{' False 'double'
     && lk != 1115098               // '{' Character 'double'
     && lk != 1115226               // '{' String 'double'
     && lk != 1115354               // '{' Real 'double'
     && lk != 1115482               // '{' Comment 'double'
     && lk != 1119834               // '{' ';' 'double'
     && lk != 1122010               // '{' 'break' 'double'
     && lk != 1122522               // '{' 'continue' 'double'
     && lk != 1147354               // '{' Identifier 'enum'
     && lk != 1147482               // '{' Null 'enum'
     && lk != 1147610               // '{' True 'enum'
     && lk != 1147738               // '{' False 'enum'
     && lk != 1147866               // '{' Character 'enum'
     && lk != 1147994               // '{' String 'enum'
     && lk != 1148122               // '{' Real 'enum'
     && lk != 1148250               // '{' Comment 'enum'
     && lk != 1152602               // '{' ';' 'enum'
     && lk != 1154778               // '{' 'break' 'enum'
     && lk != 1155290               // '{' 'continue' 'enum'
     && lk != 1163738               // '{' Identifier 'extern'
     && lk != 1163866               // '{' Null 'extern'
     && lk != 1163994               // '{' True 'extern'
     && lk != 1164122               // '{' False 'extern'
     && lk != 1164250               // '{' Character 'extern'
     && lk != 1164378               // '{' String 'extern'
     && lk != 1164506               // '{' Real 'extern'
     && lk != 1164634               // '{' Comment 'extern'
     && lk != 1168986               // '{' ';' 'extern'
     && lk != 1171162               // '{' 'break' 'extern'
     && lk != 1171674               // '{' 'continue' 'extern'
     && lk != 1180122               // '{' Identifier 'float'
     && lk != 1180250               // '{' Null 'float'
     && lk != 1180378               // '{' True 'float'
     && lk != 1180506               // '{' False 'float'
     && lk != 1180634               // '{' Character 'float'
     && lk != 1180762               // '{' String 'float'
     && lk != 1180890               // '{' Real 'float'
     && lk != 1181018               // '{' Comment 'float'
     && lk != 1185370               // '{' ';' 'float'
     && lk != 1187546               // '{' 'break' 'float'
     && lk != 1188058               // '{' 'continue' 'float'
     && lk != 1196506               // '{' Identifier 'for'
     && lk != 1196634               // '{' Null 'for'
     && lk != 1196762               // '{' True 'for'
     && lk != 1196890               // '{' False 'for'
     && lk != 1197018               // '{' Character 'for'
     && lk != 1197146               // '{' String 'for'
     && lk != 1197274               // '{' Real 'for'
     && lk != 1197402               // '{' Comment 'for'
     && lk != 1201754               // '{' ';' 'for'
     && lk != 1203930               // '{' 'break' 'for'
     && lk != 1204442               // '{' 'continue' 'for'
     && lk != 1212890               // '{' Identifier 'if'
     && lk != 1213018               // '{' Null 'if'
     && lk != 1213146               // '{' True 'if'
     && lk != 1213274               // '{' False 'if'
     && lk != 1213402               // '{' Character 'if'
     && lk != 1213530               // '{' String 'if'
     && lk != 1213658               // '{' Real 'if'
     && lk != 1213786               // '{' Comment 'if'
     && lk != 1218138               // '{' ';' 'if'
     && lk != 1220314               // '{' 'break' 'if'
     && lk != 1220826               // '{' 'continue' 'if'
     && lk != 1229274               // '{' Identifier 'int'
     && lk != 1229402               // '{' Null 'int'
     && lk != 1229530               // '{' True 'int'
     && lk != 1229658               // '{' False 'int'
     && lk != 1229786               // '{' Character 'int'
     && lk != 1229914               // '{' String 'int'
     && lk != 1230042               // '{' Real 'int'
     && lk != 1230170               // '{' Comment 'int'
     && lk != 1234522               // '{' ';' 'int'
     && lk != 1236698               // '{' 'break' 'int'
     && lk != 1237210               // '{' 'continue' 'int'
     && lk != 1245658               // '{' Identifier 'long'
     && lk != 1245786               // '{' Null 'long'
     && lk != 1245914               // '{' True 'long'
     && lk != 1246042               // '{' False 'long'
     && lk != 1246170               // '{' Character 'long'
     && lk != 1246298               // '{' String 'long'
     && lk != 1246426               // '{' Real 'long'
     && lk != 1246554               // '{' Comment 'long'
     && lk != 1250906               // '{' ';' 'long'
     && lk != 1253082               // '{' 'break' 'long'
     && lk != 1253594               // '{' 'continue' 'long'
     && lk != 1262042               // '{' Identifier 'return'
     && lk != 1262170               // '{' Null 'return'
     && lk != 1262298               // '{' True 'return'
     && lk != 1262426               // '{' False 'return'
     && lk != 1262554               // '{' Character 'return'
     && lk != 1262682               // '{' String 'return'
     && lk != 1262810               // '{' Real 'return'
     && lk != 1262938               // '{' Comment 'return'
     && lk != 1267290               // '{' ';' 'return'
     && lk != 1269466               // '{' 'break' 'return'
     && lk != 1269978               // '{' 'continue' 'return'
     && lk != 1278426               // '{' Identifier 'short'
     && lk != 1278554               // '{' Null 'short'
     && lk != 1278682               // '{' True 'short'
     && lk != 1278810               // '{' False 'short'
     && lk != 1278938               // '{' Character 'short'
     && lk != 1279066               // '{' String 'short'
     && lk != 1279194               // '{' Real 'short'
     && lk != 1279322               // '{' Comment 'short'
     && lk != 1283674               // '{' ';' 'short'
     && lk != 1285850               // '{' 'break' 'short'
     && lk != 1286362               // '{' 'continue' 'short'
     && lk != 1294810               // '{' Identifier 'signed'
     && lk != 1294938               // '{' Null 'signed'
     && lk != 1295066               // '{' True 'signed'
     && lk != 1295194               // '{' False 'signed'
     && lk != 1295322               // '{' Character 'signed'
     && lk != 1295450               // '{' String 'signed'
     && lk != 1295578               // '{' Real 'signed'
     && lk != 1295706               // '{' Comment 'signed'
     && lk != 1300058               // '{' ';' 'signed'
     && lk != 1302234               // '{' 'break' 'signed'
     && lk != 1302746               // '{' 'continue' 'signed'
     && lk != 1311194               // '{' Identifier 'sizeof'
     && lk != 1311322               // '{' Null 'sizeof'
     && lk != 1311450               // '{' True 'sizeof'
     && lk != 1311578               // '{' False 'sizeof'
     && lk != 1311706               // '{' Character 'sizeof'
     && lk != 1311834               // '{' String 'sizeof'
     && lk != 1311962               // '{' Real 'sizeof'
     && lk != 1312090               // '{' Comment 'sizeof'
     && lk != 1316442               // '{' ';' 'sizeof'
     && lk != 1318618               // '{' 'break' 'sizeof'
     && lk != 1319130               // '{' 'continue' 'sizeof'
     && lk != 1327578               // '{' Identifier 'static'
     && lk != 1327706               // '{' Null 'static'
     && lk != 1327834               // '{' True 'static'
     && lk != 1327962               // '{' False 'static'
     && lk != 1328090               // '{' Character 'static'
     && lk != 1328218               // '{' String 'static'
     && lk != 1328346               // '{' Real 'static'
     && lk != 1328474               // '{' Comment 'static'
     && lk != 1332826               // '{' ';' 'static'
     && lk != 1335002               // '{' 'break' 'static'
     && lk != 1335514               // '{' 'continue' 'static'
     && lk != 1343962               // '{' Identifier 'struct'
     && lk != 1344090               // '{' Null 'struct'
     && lk != 1344218               // '{' True 'struct'
     && lk != 1344346               // '{' False 'struct'
     && lk != 1344474               // '{' Character 'struct'
     && lk != 1344602               // '{' String 'struct'
     && lk != 1344730               // '{' Real 'struct'
     && lk != 1344858               // '{' Comment 'struct'
     && lk != 1349210               // '{' ';' 'struct'
     && lk != 1351386               // '{' 'break' 'struct'
     && lk != 1351898               // '{' 'continue' 'struct'
     && lk != 1360346               // '{' Identifier 'switch'
     && lk != 1360474               // '{' Null 'switch'
     && lk != 1360602               // '{' True 'switch'
     && lk != 1360730               // '{' False 'switch'
     && lk != 1360858               // '{' Character 'switch'
     && lk != 1360986               // '{' String 'switch'
     && lk != 1361114               // '{' Real 'switch'
     && lk != 1361242               // '{' Comment 'switch'
     && lk != 1365594               // '{' ';' 'switch'
     && lk != 1367770               // '{' 'break' 'switch'
     && lk != 1368282               // '{' 'continue' 'switch'
     && lk != 1376730               // '{' Identifier 'typedef'
     && lk != 1376858               // '{' Null 'typedef'
     && lk != 1376986               // '{' True 'typedef'
     && lk != 1377114               // '{' False 'typedef'
     && lk != 1377242               // '{' Character 'typedef'
     && lk != 1377370               // '{' String 'typedef'
     && lk != 1377498               // '{' Real 'typedef'
     && lk != 1377626               // '{' Comment 'typedef'
     && lk != 1381978               // '{' ';' 'typedef'
     && lk != 1384154               // '{' 'break' 'typedef'
     && lk != 1384666               // '{' 'continue' 'typedef'
     && lk != 1393114               // '{' Identifier 'union'
     && lk != 1393242               // '{' Null 'union'
     && lk != 1393370               // '{' True 'union'
     && lk != 1393498               // '{' False 'union'
     && lk != 1393626               // '{' Character 'union'
     && lk != 1393754               // '{' String 'union'
     && lk != 1393882               // '{' Real 'union'
     && lk != 1394010               // '{' Comment 'union'
     && lk != 1398362               // '{' ';' 'union'
     && lk != 1400538               // '{' 'break' 'union'
     && lk != 1401050               // '{' 'continue' 'union'
     && lk != 1409498               // '{' Identifier 'unsigned'
     && lk != 1409626               // '{' Null 'unsigned'
     && lk != 1409754               // '{' True 'unsigned'
     && lk != 1409882               // '{' False 'unsigned'
     && lk != 1410010               // '{' Character 'unsigned'
     && lk != 1410138               // '{' String 'unsigned'
     && lk != 1410266               // '{' Real 'unsigned'
     && lk != 1410394               // '{' Comment 'unsigned'
     && lk != 1414746               // '{' ';' 'unsigned'
     && lk != 1416922               // '{' 'break' 'unsigned'
     && lk != 1417434               // '{' 'continue' 'unsigned'
     && lk != 1425882               // '{' Identifier 'void'
     && lk != 1426010               // '{' Null 'void'
     && lk != 1426138               // '{' True 'void'
     && lk != 1426266               // '{' False 'void'
     && lk != 1426394               // '{' Character 'void'
     && lk != 1426522               // '{' String 'void'
     && lk != 1426650               // '{' Real 'void'
     && lk != 1426778               // '{' Comment 'void'
     && lk != 1431130               // '{' ';' 'void'
     && lk != 1433306               // '{' 'break' 'void'
     && lk != 1433818               // '{' 'continue' 'void'
     && lk != 1442266               // '{' Identifier 'volatile'
     && lk != 1442394               // '{' Null 'volatile'
     && lk != 1442522               // '{' True 'volatile'
     && lk != 1442650               // '{' False 'volatile'
     && lk != 1442778               // '{' Character 'volatile'
     && lk != 1442906               // '{' String 'volatile'
     && lk != 1443034               // '{' Real 'volatile'
     && lk != 1443162               // '{' Comment 'volatile'
     && lk != 1447514               // '{' ';' 'volatile'
     && lk != 1449690               // '{' 'break' 'volatile'
     && lk != 1450202               // '{' 'continue' 'volatile'
     && lk != 1458650               // '{' Identifier 'while'
     && lk != 1458778               // '{' Null 'while'
     && lk != 1458906               // '{' True 'while'
     && lk != 1459034               // '{' False 'while'
     && lk != 1459162               // '{' Character 'while'
     && lk != 1459290               // '{' String 'while'
     && lk != 1459418               // '{' Real 'while'
     && lk != 1459546               // '{' Comment 'while'
     && lk != 1463898               // '{' ';' 'while'
     && lk != 1466074               // '{' 'break' 'while'
     && lk != 1466586               // '{' 'continue' 'while'
     && lk != 1475034               // '{' Identifier '{'
     && lk != 1475162               // '{' Null '{'
     && lk != 1475290               // '{' True '{'
     && lk != 1475418               // '{' False '{'
     && lk != 1475546               // '{' Character '{'
     && lk != 1475674               // '{' String '{'
     && lk != 1475802               // '{' Real '{'
     && lk != 1475930               // '{' Comment '{'
     && lk != 1480282               // '{' ';' '{'
     && lk != 1482458               // '{' 'break' '{'
     && lk != 1482970               // '{' 'continue' '{'
     && lk != 1556954               // '{' Identifier '~'
     && lk != 1557082               // '{' Null '~'
     && lk != 1557210               // '{' True '~'
     && lk != 1557338               // '{' False '~'
     && lk != 1557466               // '{' Character '~'
     && lk != 1557594               // '{' String '~'
     && lk != 1557722               // '{' Real '~'
     && lk != 1557850               // '{' Comment '~'
     && lk != 1562202               // '{' ';' '~'
     && lk != 1564378               // '{' 'break' '~'
     && lk != 1564890)              // '{' 'continue' '~'
    {
      lk = memoized(0, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Block();
          lk = -2;
        }
        catch (p2A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            try_Operation();
            lk = -3;
          }
          catch (p3A)
          {
            lk = -4;
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(0, e0, lk);
      }
    }
    switch (lk)
    {
    case 10:                        // Comment
      consume(10);                  // Comment
      break;
    case -3:
    case 4:                         // Null
    case 5:                         // True
    case 6:                         // False
    case 7:                         // Character
    case 8:                         // String
    case 9:                         // Real
    case 12:                        // '!'
    case 28:                        // '('
    case 33:                        // '++'
    case 37:                        // '--'
    case 56:                        // '['
    case 80:                        // 'sizeof'
    case 95:                        // '~'
    case 131:                       // Identifier END
    case 387:                       // Identifier Identifier
    case 515:                       // Identifier Null
    case 643:                       // Identifier True
    case 771:                       // Identifier False
    case 899:                       // Identifier Character
    case 1027:                      // Identifier String
    case 1155:                      // Identifier Real
    case 1283:                      // Identifier Comment
    case 1539:                      // Identifier '!'
    case 1667:                      // Identifier '!='
    case 1795:                      // Identifier '#define'
    case 1923:                      // Identifier '#elif'
    case 2051:                      // Identifier '#else'
    case 2179:                      // Identifier '#endif'
    case 2307:                      // Identifier '#if'
    case 2435:                      // Identifier '#ifdef'
    case 2563:                      // Identifier '#ifndef'
    case 2691:                      // Identifier '#include'
    case 2819:                      // Identifier '#undef'
    case 2947:                      // Identifier '%'
    case 3075:                      // Identifier '%='
    case 3203:                      // Identifier '&'
    case 3331:                      // Identifier '&&'
    case 3459:                      // Identifier '&='
    case 3715:                      // Identifier ')'
    case 3843:                      // Identifier '*'
    case 3971:                      // Identifier '*='
    case 4099:                      // Identifier '+'
    case 4227:                      // Identifier '++'
    case 4355:                      // Identifier '+='
    case 4483:                      // Identifier ','
    case 4611:                      // Identifier '-'
    case 4739:                      // Identifier '--'
    case 4867:                      // Identifier '-='
    case 4995:                      // Identifier '->'
    case 5123:                      // Identifier '.'
    case 5251:                      // Identifier '/'
    case 5379:                      // Identifier '/='
    case 5507:                      // Identifier ':'
    case 5635:                      // Identifier ';'
    case 5763:                      // Identifier '<'
    case 5891:                      // Identifier '<<'
    case 6019:                      // Identifier '<<='
    case 6147:                      // Identifier '<='
    case 6275:                      // Identifier '='
    case 6403:                      // Identifier '=='
    case 6531:                      // Identifier '>'
    case 6659:                      // Identifier '>='
    case 6787:                      // Identifier '>>'
    case 6915:                      // Identifier '>>='
    case 7043:                      // Identifier '?'
    case 7171:                      // Identifier '['
    case 7299:                      // Identifier ']'
    case 7427:                      // Identifier '^'
    case 7555:                      // Identifier '^='
    case 7683:                      // Identifier 'auto'
    case 7811:                      // Identifier 'break'
    case 7939:                      // Identifier 'case'
    case 8067:                      // Identifier 'char'
    case 8195:                      // Identifier 'const'
    case 8323:                      // Identifier 'continue'
    case 8451:                      // Identifier 'default'
    case 8579:                      // Identifier 'do'
    case 8707:                      // Identifier 'double'
    case 8835:                      // Identifier 'else'
    case 8963:                      // Identifier 'enum'
    case 9091:                      // Identifier 'extern'
    case 9219:                      // Identifier 'float'
    case 9347:                      // Identifier 'for'
    case 9475:                      // Identifier 'if'
    case 9603:                      // Identifier 'int'
    case 9731:                      // Identifier 'long'
    case 9859:                      // Identifier 'return'
    case 9987:                      // Identifier 'short'
    case 10115:                     // Identifier 'signed'
    case 10243:                     // Identifier 'sizeof'
    case 10371:                     // Identifier 'static'
    case 10499:                     // Identifier 'struct'
    case 10627:                     // Identifier 'switch'
    case 10755:                     // Identifier 'typedef'
    case 10883:                     // Identifier 'union'
    case 11011:                     // Identifier 'unsigned'
    case 11139:                     // Identifier 'void'
    case 11267:                     // Identifier 'volatile'
    case 11395:                     // Identifier 'while'
    case 11523:                     // Identifier '{'
    case 11651:                     // Identifier '|'
    case 11779:                     // Identifier '|='
    case 11907:                     // Identifier '||'
    case 12035:                     // Identifier '}'
    case 12163:                     // Identifier '~'
    case 573914:                    // '{' Identifier ','
    case 574042:                    // '{' Null ','
    case 574170:                    // '{' True ','
    case 574298:                    // '{' False ','
    case 574426:                    // '{' Character ','
    case 574554:                    // '{' String ','
    case 574682:                    // '{' Real ','
    case 574810:                    // '{' Comment ','
    case 579162:                    // '{' ';' ','
    case 581338:                    // '{' 'break' ','
    case 581850:                    // '{' 'continue' ','
    case 704986:                    // '{' Identifier ':'
    case 705626:                    // '{' String ':'
      parse_Operation();
      break;
    case -4:
    case 44:                        // ';'
    case 60:                        // 'auto'
    case 61:                        // 'break'
    case 63:                        // 'char'
    case 64:                        // 'const'
    case 65:                        // 'continue'
    case 67:                        // 'do'
    case 68:                        // 'double'
    case 70:                        // 'enum'
    case 71:                        // 'extern'
    case 72:                        // 'float'
    case 73:                        // 'for'
    case 74:                        // 'if'
    case 75:                        // 'int'
    case 76:                        // 'long'
    case 77:                        // 'return'
    case 78:                        // 'short'
    case 79:                        // 'signed'
    case 81:                        // 'static'
    case 82:                        // 'struct'
    case 83:                        // 'switch'
    case 84:                        // 'typedef'
    case 85:                        // 'union'
    case 86:                        // 'unsigned'
    case 87:                        // 'void'
    case 88:                        // 'volatile'
    case 89:                        // 'while'
      parse_Statement();
      break;
    case 14:                        // '#define'
    case 18:                        // '#if'
    case 19:                        // '#ifdef'
    case 20:                        // '#ifndef'
    case 21:                        // '#include'
    case 22:                        // '#undef'
      parse_PreprocessorDirective();
      break;
    default:
      parse_Block();
    }
    eventHandler.endNonterminal("Expression", e0);
  }

  function try_Expression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(46);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 3587:                    // Identifier '('
        lookahead3W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 90:                        // '{'
      lookahead2W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      switch (lk)
      {
      case 474:                     // '{' Identifier
        lookahead3W(44);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ':' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // '^' | '^=' | 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 1114:                    // '{' String
        lookahead3W(43);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | ';' | '<' | '<<' |
                                    // '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' | '^' | '^=' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 2394:                    // '{' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2778:                    // '{' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7258:                    // '{' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11610:                   // '{' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9050:                    // '{' 'enum'
      case 10970:                   // '{' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1370:                    // '{' Comment
      case 5722:                    // '{' ';'
      case 7898:                    // '{' 'break'
      case 8410:                    // '{' 'continue'
        lookahead3W(37);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '}' | '~'
        break;
      case 1882:                    // '{' '#define'
      case 2522:                    // '{' '#ifdef'
      case 2650:                    // '{' '#ifndef'
      case 2906:                    // '{' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9434:                    // '{' 'for'
      case 9562:                    // '{' 'if'
      case 10714:                   // '{' 'switch'
      case 11482:                   // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 602:                     // '{' Null
      case 730:                     // '{' True
      case 858:                     // '{' False
      case 986:                     // '{' Character
      case 1242:                    // '{' Real
        lookahead3W(42);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ';' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' | '^' | '^=' | 'auto' |
                                    // 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' |
                                    // 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' |
                                    // 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' |
                                    // 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 1626:                    // '{' '!'
      case 4314:                    // '{' '++'
      case 4826:                    // '{' '--'
      case 10330:                   // '{' 'sizeof'
      case 12250:                   // '{' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3674:                    // '{' '('
      case 8666:                    // '{' 'do'
      case 9946:                    // '{' 'return'
      case 10586:                   // '{' 'struct'
      case 10842:                   // '{' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 7770:                    // '{' 'auto'
      case 8282:                    // '{' 'const'
      case 9178:                    // '{' 'extern'
      case 10202:                   // '{' 'signed'
      case 10458:                   // '{' 'static'
      case 11098:                   // '{' 'unsigned'
      case 11354:                   // '{' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8154:                    // '{' 'char'
      case 8794:                    // '{' 'double'
      case 9306:                    // '{' 'float'
      case 9690:                    // '{' 'int'
      case 9818:                    // '{' 'long'
      case 10074:                   // '{' 'short'
      case 11226:                   // '{' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 4                     // Null
     && lk != 5                     // True
     && lk != 6                     // False
     && lk != 7                     // Character
     && lk != 8                     // String
     && lk != 9                     // Real
     && lk != 10                    // Comment
     && lk != 12                    // '!'
     && lk != 14                    // '#define'
     && lk != 18                    // '#if'
     && lk != 19                    // '#ifdef'
     && lk != 20                    // '#ifndef'
     && lk != 21                    // '#include'
     && lk != 22                    // '#undef'
     && lk != 28                    // '('
     && lk != 33                    // '++'
     && lk != 37                    // '--'
     && lk != 44                    // ';'
     && lk != 56                    // '['
     && lk != 60                    // 'auto'
     && lk != 61                    // 'break'
     && lk != 63                    // 'char'
     && lk != 64                    // 'const'
     && lk != 65                    // 'continue'
     && lk != 67                    // 'do'
     && lk != 68                    // 'double'
     && lk != 70                    // 'enum'
     && lk != 71                    // 'extern'
     && lk != 72                    // 'float'
     && lk != 73                    // 'for'
     && lk != 74                    // 'if'
     && lk != 75                    // 'int'
     && lk != 76                    // 'long'
     && lk != 77                    // 'return'
     && lk != 78                    // 'short'
     && lk != 79                    // 'signed'
     && lk != 80                    // 'sizeof'
     && lk != 81                    // 'static'
     && lk != 82                    // 'struct'
     && lk != 83                    // 'switch'
     && lk != 84                    // 'typedef'
     && lk != 85                    // 'union'
     && lk != 86                    // 'unsigned'
     && lk != 87                    // 'void'
     && lk != 88                    // 'volatile'
     && lk != 89                    // 'while'
     && lk != 95                    // '~'
     && lk != 131                   // Identifier END
     && lk != 387                   // Identifier Identifier
     && lk != 515                   // Identifier Null
     && lk != 643                   // Identifier True
     && lk != 771                   // Identifier False
     && lk != 899                   // Identifier Character
     && lk != 1027                  // Identifier String
     && lk != 1155                  // Identifier Real
     && lk != 1283                  // Identifier Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1795                  // Identifier '#define'
     && lk != 1923                  // Identifier '#elif'
     && lk != 2051                  // Identifier '#else'
     && lk != 2179                  // Identifier '#endif'
     && lk != 2307                  // Identifier '#if'
     && lk != 2435                  // Identifier '#ifdef'
     && lk != 2563                  // Identifier '#ifndef'
     && lk != 2691                  // Identifier '#include'
     && lk != 2819                  // Identifier '#undef'
     && lk != 2947                  // Identifier '%'
     && lk != 3075                  // Identifier '%='
     && lk != 3203                  // Identifier '&'
     && lk != 3331                  // Identifier '&&'
     && lk != 3459                  // Identifier '&='
     && lk != 3715                  // Identifier ')'
     && lk != 3843                  // Identifier '*'
     && lk != 3971                  // Identifier '*='
     && lk != 4099                  // Identifier '+'
     && lk != 4227                  // Identifier '++'
     && lk != 4355                  // Identifier '+='
     && lk != 4483                  // Identifier ','
     && lk != 4611                  // Identifier '-'
     && lk != 4739                  // Identifier '--'
     && lk != 4867                  // Identifier '-='
     && lk != 4995                  // Identifier '->'
     && lk != 5123                  // Identifier '.'
     && lk != 5251                  // Identifier '/'
     && lk != 5379                  // Identifier '/='
     && lk != 5507                  // Identifier ':'
     && lk != 5635                  // Identifier ';'
     && lk != 5763                  // Identifier '<'
     && lk != 5891                  // Identifier '<<'
     && lk != 6019                  // Identifier '<<='
     && lk != 6147                  // Identifier '<='
     && lk != 6275                  // Identifier '='
     && lk != 6403                  // Identifier '=='
     && lk != 6531                  // Identifier '>'
     && lk != 6659                  // Identifier '>='
     && lk != 6787                  // Identifier '>>'
     && lk != 6915                  // Identifier '>>='
     && lk != 7043                  // Identifier '?'
     && lk != 7171                  // Identifier '['
     && lk != 7299                  // Identifier ']'
     && lk != 7427                  // Identifier '^'
     && lk != 7555                  // Identifier '^='
     && lk != 7683                  // Identifier 'auto'
     && lk != 7811                  // Identifier 'break'
     && lk != 7939                  // Identifier 'case'
     && lk != 8067                  // Identifier 'char'
     && lk != 8195                  // Identifier 'const'
     && lk != 8323                  // Identifier 'continue'
     && lk != 8451                  // Identifier 'default'
     && lk != 8579                  // Identifier 'do'
     && lk != 8707                  // Identifier 'double'
     && lk != 8835                  // Identifier 'else'
     && lk != 8963                  // Identifier 'enum'
     && lk != 9091                  // Identifier 'extern'
     && lk != 9219                  // Identifier 'float'
     && lk != 9347                  // Identifier 'for'
     && lk != 9475                  // Identifier 'if'
     && lk != 9603                  // Identifier 'int'
     && lk != 9731                  // Identifier 'long'
     && lk != 9859                  // Identifier 'return'
     && lk != 9987                  // Identifier 'short'
     && lk != 10115                 // Identifier 'signed'
     && lk != 10243                 // Identifier 'sizeof'
     && lk != 10371                 // Identifier 'static'
     && lk != 10499                 // Identifier 'struct'
     && lk != 10627                 // Identifier 'switch'
     && lk != 10755                 // Identifier 'typedef'
     && lk != 10883                 // Identifier 'union'
     && lk != 11011                 // Identifier 'unsigned'
     && lk != 11139                 // Identifier 'void'
     && lk != 11267                 // Identifier 'volatile'
     && lk != 11395                 // Identifier 'while'
     && lk != 11523                 // Identifier '{'
     && lk != 11651                 // Identifier '|'
     && lk != 11779                 // Identifier '|='
     && lk != 11907                 // Identifier '||'
     && lk != 12035                 // Identifier '}'
     && lk != 12122                 // '{' '}'
     && lk != 12163                 // Identifier '~'
     && lk != 49626                 // '{' Identifier Identifier
     && lk != 49754                 // '{' Null Identifier
     && lk != 49882                 // '{' True Identifier
     && lk != 50010                 // '{' False Identifier
     && lk != 50138                 // '{' Character Identifier
     && lk != 50266                 // '{' String Identifier
     && lk != 50394                 // '{' Real Identifier
     && lk != 50522                 // '{' Comment Identifier
     && lk != 54874                 // '{' ';' Identifier
     && lk != 57050                 // '{' 'break' Identifier
     && lk != 57562                 // '{' 'continue' Identifier
     && lk != 66010                 // '{' Identifier Null
     && lk != 66138                 // '{' Null Null
     && lk != 66266                 // '{' True Null
     && lk != 66394                 // '{' False Null
     && lk != 66522                 // '{' Character Null
     && lk != 66650                 // '{' String Null
     && lk != 66778                 // '{' Real Null
     && lk != 66906                 // '{' Comment Null
     && lk != 71258                 // '{' ';' Null
     && lk != 73434                 // '{' 'break' Null
     && lk != 73946                 // '{' 'continue' Null
     && lk != 82394                 // '{' Identifier True
     && lk != 82522                 // '{' Null True
     && lk != 82650                 // '{' True True
     && lk != 82778                 // '{' False True
     && lk != 82906                 // '{' Character True
     && lk != 83034                 // '{' String True
     && lk != 83162                 // '{' Real True
     && lk != 83290                 // '{' Comment True
     && lk != 87642                 // '{' ';' True
     && lk != 89818                 // '{' 'break' True
     && lk != 90330                 // '{' 'continue' True
     && lk != 98778                 // '{' Identifier False
     && lk != 98906                 // '{' Null False
     && lk != 99034                 // '{' True False
     && lk != 99162                 // '{' False False
     && lk != 99290                 // '{' Character False
     && lk != 99418                 // '{' String False
     && lk != 99546                 // '{' Real False
     && lk != 99674                 // '{' Comment False
     && lk != 104026                // '{' ';' False
     && lk != 106202                // '{' 'break' False
     && lk != 106714                // '{' 'continue' False
     && lk != 115162                // '{' Identifier Character
     && lk != 115290                // '{' Null Character
     && lk != 115418                // '{' True Character
     && lk != 115546                // '{' False Character
     && lk != 115674                // '{' Character Character
     && lk != 115802                // '{' String Character
     && lk != 115930                // '{' Real Character
     && lk != 116058                // '{' Comment Character
     && lk != 120410                // '{' ';' Character
     && lk != 122586                // '{' 'break' Character
     && lk != 123098                // '{' 'continue' Character
     && lk != 131546                // '{' Identifier String
     && lk != 131674                // '{' Null String
     && lk != 131802                // '{' True String
     && lk != 131930                // '{' False String
     && lk != 132058                // '{' Character String
     && lk != 132186                // '{' String String
     && lk != 132314                // '{' Real String
     && lk != 132442                // '{' Comment String
     && lk != 136794                // '{' ';' String
     && lk != 138970                // '{' 'break' String
     && lk != 139482                // '{' 'continue' String
     && lk != 147930                // '{' Identifier Real
     && lk != 148058                // '{' Null Real
     && lk != 148186                // '{' True Real
     && lk != 148314                // '{' False Real
     && lk != 148442                // '{' Character Real
     && lk != 148570                // '{' String Real
     && lk != 148698                // '{' Real Real
     && lk != 148826                // '{' Comment Real
     && lk != 153178                // '{' ';' Real
     && lk != 155354                // '{' 'break' Real
     && lk != 155866                // '{' 'continue' Real
     && lk != 164314                // '{' Identifier Comment
     && lk != 164442                // '{' Null Comment
     && lk != 164570                // '{' True Comment
     && lk != 164698                // '{' False Comment
     && lk != 164826                // '{' Character Comment
     && lk != 164954                // '{' String Comment
     && lk != 165082                // '{' Real Comment
     && lk != 165210                // '{' Comment Comment
     && lk != 169562                // '{' ';' Comment
     && lk != 171738                // '{' 'break' Comment
     && lk != 172250                // '{' 'continue' Comment
     && lk != 197082                // '{' Identifier '!'
     && lk != 197210                // '{' Null '!'
     && lk != 197338                // '{' True '!'
     && lk != 197466                // '{' False '!'
     && lk != 197594                // '{' Character '!'
     && lk != 197722                // '{' String '!'
     && lk != 197850                // '{' Real '!'
     && lk != 197978                // '{' Comment '!'
     && lk != 202330                // '{' ';' '!'
     && lk != 204506                // '{' 'break' '!'
     && lk != 205018                // '{' 'continue' '!'
     && lk != 229850                // '{' Identifier '#define'
     && lk != 229978                // '{' Null '#define'
     && lk != 230106                // '{' True '#define'
     && lk != 230234                // '{' False '#define'
     && lk != 230362                // '{' Character '#define'
     && lk != 230490                // '{' String '#define'
     && lk != 230618                // '{' Real '#define'
     && lk != 230746                // '{' Comment '#define'
     && lk != 235098                // '{' ';' '#define'
     && lk != 237274                // '{' 'break' '#define'
     && lk != 237786                // '{' 'continue' '#define'
     && lk != 295386                // '{' Identifier '#if'
     && lk != 295514                // '{' Null '#if'
     && lk != 295642                // '{' True '#if'
     && lk != 295770                // '{' False '#if'
     && lk != 295898                // '{' Character '#if'
     && lk != 296026                // '{' String '#if'
     && lk != 296154                // '{' Real '#if'
     && lk != 296282                // '{' Comment '#if'
     && lk != 300634                // '{' ';' '#if'
     && lk != 302810                // '{' 'break' '#if'
     && lk != 303322                // '{' 'continue' '#if'
     && lk != 311770                // '{' Identifier '#ifdef'
     && lk != 311898                // '{' Null '#ifdef'
     && lk != 312026                // '{' True '#ifdef'
     && lk != 312154                // '{' False '#ifdef'
     && lk != 312282                // '{' Character '#ifdef'
     && lk != 312410                // '{' String '#ifdef'
     && lk != 312538                // '{' Real '#ifdef'
     && lk != 312666                // '{' Comment '#ifdef'
     && lk != 317018                // '{' ';' '#ifdef'
     && lk != 319194                // '{' 'break' '#ifdef'
     && lk != 319706                // '{' 'continue' '#ifdef'
     && lk != 328154                // '{' Identifier '#ifndef'
     && lk != 328282                // '{' Null '#ifndef'
     && lk != 328410                // '{' True '#ifndef'
     && lk != 328538                // '{' False '#ifndef'
     && lk != 328666                // '{' Character '#ifndef'
     && lk != 328794                // '{' String '#ifndef'
     && lk != 328922                // '{' Real '#ifndef'
     && lk != 329050                // '{' Comment '#ifndef'
     && lk != 333402                // '{' ';' '#ifndef'
     && lk != 335578                // '{' 'break' '#ifndef'
     && lk != 336090                // '{' 'continue' '#ifndef'
     && lk != 344538                // '{' Identifier '#include'
     && lk != 344666                // '{' Null '#include'
     && lk != 344794                // '{' True '#include'
     && lk != 344922                // '{' False '#include'
     && lk != 345050                // '{' Character '#include'
     && lk != 345178                // '{' String '#include'
     && lk != 345306                // '{' Real '#include'
     && lk != 345434                // '{' Comment '#include'
     && lk != 349786                // '{' ';' '#include'
     && lk != 351962                // '{' 'break' '#include'
     && lk != 352474                // '{' 'continue' '#include'
     && lk != 360922                // '{' Identifier '#undef'
     && lk != 361050                // '{' Null '#undef'
     && lk != 361178                // '{' True '#undef'
     && lk != 361306                // '{' False '#undef'
     && lk != 361434                // '{' Character '#undef'
     && lk != 361562                // '{' String '#undef'
     && lk != 361690                // '{' Real '#undef'
     && lk != 361818                // '{' Comment '#undef'
     && lk != 366170                // '{' ';' '#undef'
     && lk != 368346                // '{' 'break' '#undef'
     && lk != 368858                // '{' 'continue' '#undef'
     && lk != 459354                // '{' Null '('
     && lk != 459482                // '{' True '('
     && lk != 459610                // '{' False '('
     && lk != 459738                // '{' Character '('
     && lk != 459866                // '{' String '('
     && lk != 459994                // '{' Real '('
     && lk != 460122                // '{' Comment '('
     && lk != 464474                // '{' ';' '('
     && lk != 466650                // '{' 'break' '('
     && lk != 467162                // '{' 'continue' '('
     && lk != 542042                // '{' Comment '++'
     && lk != 546394                // '{' ';' '++'
     && lk != 548570                // '{' 'break' '++'
     && lk != 549082                // '{' 'continue' '++'
     && lk != 573914                // '{' Identifier ','
     && lk != 574042                // '{' Null ','
     && lk != 574170                // '{' True ','
     && lk != 574298                // '{' False ','
     && lk != 574426                // '{' Character ','
     && lk != 574554                // '{' String ','
     && lk != 574682                // '{' Real ','
     && lk != 574810                // '{' Comment ','
     && lk != 579162                // '{' ';' ','
     && lk != 581338                // '{' 'break' ','
     && lk != 581850                // '{' 'continue' ','
     && lk != 607578                // '{' Comment '--'
     && lk != 611930                // '{' ';' '--'
     && lk != 614106                // '{' 'break' '--'
     && lk != 614618                // '{' 'continue' '--'
     && lk != 704986                // '{' Identifier ':'
     && lk != 705626                // '{' String ':'
     && lk != 721370                // '{' Identifier ';'
     && lk != 721498                // '{' Null ';'
     && lk != 721626                // '{' True ';'
     && lk != 721754                // '{' False ';'
     && lk != 721882                // '{' Character ';'
     && lk != 722010                // '{' String ';'
     && lk != 722138                // '{' Real ';'
     && lk != 722266                // '{' Comment ';'
     && lk != 726618                // '{' ';' ';'
     && lk != 728794                // '{' 'break' ';'
     && lk != 729306                // '{' 'continue' ';'
     && lk != 918106                // '{' Null '['
     && lk != 918234                // '{' True '['
     && lk != 918362                // '{' False '['
     && lk != 918490                // '{' Character '['
     && lk != 918618                // '{' String '['
     && lk != 918746                // '{' Real '['
     && lk != 918874                // '{' Comment '['
     && lk != 923226                // '{' ';' '['
     && lk != 925402                // '{' 'break' '['
     && lk != 925914                // '{' 'continue' '['
     && lk != 983514                // '{' Identifier 'auto'
     && lk != 983642                // '{' Null 'auto'
     && lk != 983770                // '{' True 'auto'
     && lk != 983898                // '{' False 'auto'
     && lk != 984026                // '{' Character 'auto'
     && lk != 984154                // '{' String 'auto'
     && lk != 984282                // '{' Real 'auto'
     && lk != 984410                // '{' Comment 'auto'
     && lk != 988762                // '{' ';' 'auto'
     && lk != 990938                // '{' 'break' 'auto'
     && lk != 991450                // '{' 'continue' 'auto'
     && lk != 999898                // '{' Identifier 'break'
     && lk != 1000026               // '{' Null 'break'
     && lk != 1000154               // '{' True 'break'
     && lk != 1000282               // '{' False 'break'
     && lk != 1000410               // '{' Character 'break'
     && lk != 1000538               // '{' String 'break'
     && lk != 1000666               // '{' Real 'break'
     && lk != 1000794               // '{' Comment 'break'
     && lk != 1005146               // '{' ';' 'break'
     && lk != 1007322               // '{' 'break' 'break'
     && lk != 1007834               // '{' 'continue' 'break'
     && lk != 1032666               // '{' Identifier 'char'
     && lk != 1032794               // '{' Null 'char'
     && lk != 1032922               // '{' True 'char'
     && lk != 1033050               // '{' False 'char'
     && lk != 1033178               // '{' Character 'char'
     && lk != 1033306               // '{' String 'char'
     && lk != 1033434               // '{' Real 'char'
     && lk != 1033562               // '{' Comment 'char'
     && lk != 1037914               // '{' ';' 'char'
     && lk != 1040090               // '{' 'break' 'char'
     && lk != 1040602               // '{' 'continue' 'char'
     && lk != 1049050               // '{' Identifier 'const'
     && lk != 1049178               // '{' Null 'const'
     && lk != 1049306               // '{' True 'const'
     && lk != 1049434               // '{' False 'const'
     && lk != 1049562               // '{' Character 'const'
     && lk != 1049690               // '{' String 'const'
     && lk != 1049818               // '{' Real 'const'
     && lk != 1049946               // '{' Comment 'const'
     && lk != 1054298               // '{' ';' 'const'
     && lk != 1056474               // '{' 'break' 'const'
     && lk != 1056986               // '{' 'continue' 'const'
     && lk != 1065434               // '{' Identifier 'continue'
     && lk != 1065562               // '{' Null 'continue'
     && lk != 1065690               // '{' True 'continue'
     && lk != 1065818               // '{' False 'continue'
     && lk != 1065946               // '{' Character 'continue'
     && lk != 1066074               // '{' String 'continue'
     && lk != 1066202               // '{' Real 'continue'
     && lk != 1066330               // '{' Comment 'continue'
     && lk != 1070682               // '{' ';' 'continue'
     && lk != 1072858               // '{' 'break' 'continue'
     && lk != 1073370               // '{' 'continue' 'continue'
     && lk != 1098202               // '{' Identifier 'do'
     && lk != 1098330               // '{' Null 'do'
     && lk != 1098458               // '{' True 'do'
     && lk != 1098586               // '{' False 'do'
     && lk != 1098714               // '{' Character 'do'
     && lk != 1098842               // '{' String 'do'
     && lk != 1098970               // '{' Real 'do'
     && lk != 1099098               // '{' Comment 'do'
     && lk != 1103450               // '{' ';' 'do'
     && lk != 1105626               // '{' 'break' 'do'
     && lk != 1106138               // '{' 'continue' 'do'
     && lk != 1114586               // '{' Identifier 'double'
     && lk != 1114714               // '{' Null 'double'
     && lk != 1114842               // '{' True 'double'
     && lk != 1114970               // '{' False 'double'
     && lk != 1115098               // '{' Character 'double'
     && lk != 1115226               // '{' String 'double'
     && lk != 1115354               // '{' Real 'double'
     && lk != 1115482               // '{' Comment 'double'
     && lk != 1119834               // '{' ';' 'double'
     && lk != 1122010               // '{' 'break' 'double'
     && lk != 1122522               // '{' 'continue' 'double'
     && lk != 1147354               // '{' Identifier 'enum'
     && lk != 1147482               // '{' Null 'enum'
     && lk != 1147610               // '{' True 'enum'
     && lk != 1147738               // '{' False 'enum'
     && lk != 1147866               // '{' Character 'enum'
     && lk != 1147994               // '{' String 'enum'
     && lk != 1148122               // '{' Real 'enum'
     && lk != 1148250               // '{' Comment 'enum'
     && lk != 1152602               // '{' ';' 'enum'
     && lk != 1154778               // '{' 'break' 'enum'
     && lk != 1155290               // '{' 'continue' 'enum'
     && lk != 1163738               // '{' Identifier 'extern'
     && lk != 1163866               // '{' Null 'extern'
     && lk != 1163994               // '{' True 'extern'
     && lk != 1164122               // '{' False 'extern'
     && lk != 1164250               // '{' Character 'extern'
     && lk != 1164378               // '{' String 'extern'
     && lk != 1164506               // '{' Real 'extern'
     && lk != 1164634               // '{' Comment 'extern'
     && lk != 1168986               // '{' ';' 'extern'
     && lk != 1171162               // '{' 'break' 'extern'
     && lk != 1171674               // '{' 'continue' 'extern'
     && lk != 1180122               // '{' Identifier 'float'
     && lk != 1180250               // '{' Null 'float'
     && lk != 1180378               // '{' True 'float'
     && lk != 1180506               // '{' False 'float'
     && lk != 1180634               // '{' Character 'float'
     && lk != 1180762               // '{' String 'float'
     && lk != 1180890               // '{' Real 'float'
     && lk != 1181018               // '{' Comment 'float'
     && lk != 1185370               // '{' ';' 'float'
     && lk != 1187546               // '{' 'break' 'float'
     && lk != 1188058               // '{' 'continue' 'float'
     && lk != 1196506               // '{' Identifier 'for'
     && lk != 1196634               // '{' Null 'for'
     && lk != 1196762               // '{' True 'for'
     && lk != 1196890               // '{' False 'for'
     && lk != 1197018               // '{' Character 'for'
     && lk != 1197146               // '{' String 'for'
     && lk != 1197274               // '{' Real 'for'
     && lk != 1197402               // '{' Comment 'for'
     && lk != 1201754               // '{' ';' 'for'
     && lk != 1203930               // '{' 'break' 'for'
     && lk != 1204442               // '{' 'continue' 'for'
     && lk != 1212890               // '{' Identifier 'if'
     && lk != 1213018               // '{' Null 'if'
     && lk != 1213146               // '{' True 'if'
     && lk != 1213274               // '{' False 'if'
     && lk != 1213402               // '{' Character 'if'
     && lk != 1213530               // '{' String 'if'
     && lk != 1213658               // '{' Real 'if'
     && lk != 1213786               // '{' Comment 'if'
     && lk != 1218138               // '{' ';' 'if'
     && lk != 1220314               // '{' 'break' 'if'
     && lk != 1220826               // '{' 'continue' 'if'
     && lk != 1229274               // '{' Identifier 'int'
     && lk != 1229402               // '{' Null 'int'
     && lk != 1229530               // '{' True 'int'
     && lk != 1229658               // '{' False 'int'
     && lk != 1229786               // '{' Character 'int'
     && lk != 1229914               // '{' String 'int'
     && lk != 1230042               // '{' Real 'int'
     && lk != 1230170               // '{' Comment 'int'
     && lk != 1234522               // '{' ';' 'int'
     && lk != 1236698               // '{' 'break' 'int'
     && lk != 1237210               // '{' 'continue' 'int'
     && lk != 1245658               // '{' Identifier 'long'
     && lk != 1245786               // '{' Null 'long'
     && lk != 1245914               // '{' True 'long'
     && lk != 1246042               // '{' False 'long'
     && lk != 1246170               // '{' Character 'long'
     && lk != 1246298               // '{' String 'long'
     && lk != 1246426               // '{' Real 'long'
     && lk != 1246554               // '{' Comment 'long'
     && lk != 1250906               // '{' ';' 'long'
     && lk != 1253082               // '{' 'break' 'long'
     && lk != 1253594               // '{' 'continue' 'long'
     && lk != 1262042               // '{' Identifier 'return'
     && lk != 1262170               // '{' Null 'return'
     && lk != 1262298               // '{' True 'return'
     && lk != 1262426               // '{' False 'return'
     && lk != 1262554               // '{' Character 'return'
     && lk != 1262682               // '{' String 'return'
     && lk != 1262810               // '{' Real 'return'
     && lk != 1262938               // '{' Comment 'return'
     && lk != 1267290               // '{' ';' 'return'
     && lk != 1269466               // '{' 'break' 'return'
     && lk != 1269978               // '{' 'continue' 'return'
     && lk != 1278426               // '{' Identifier 'short'
     && lk != 1278554               // '{' Null 'short'
     && lk != 1278682               // '{' True 'short'
     && lk != 1278810               // '{' False 'short'
     && lk != 1278938               // '{' Character 'short'
     && lk != 1279066               // '{' String 'short'
     && lk != 1279194               // '{' Real 'short'
     && lk != 1279322               // '{' Comment 'short'
     && lk != 1283674               // '{' ';' 'short'
     && lk != 1285850               // '{' 'break' 'short'
     && lk != 1286362               // '{' 'continue' 'short'
     && lk != 1294810               // '{' Identifier 'signed'
     && lk != 1294938               // '{' Null 'signed'
     && lk != 1295066               // '{' True 'signed'
     && lk != 1295194               // '{' False 'signed'
     && lk != 1295322               // '{' Character 'signed'
     && lk != 1295450               // '{' String 'signed'
     && lk != 1295578               // '{' Real 'signed'
     && lk != 1295706               // '{' Comment 'signed'
     && lk != 1300058               // '{' ';' 'signed'
     && lk != 1302234               // '{' 'break' 'signed'
     && lk != 1302746               // '{' 'continue' 'signed'
     && lk != 1311194               // '{' Identifier 'sizeof'
     && lk != 1311322               // '{' Null 'sizeof'
     && lk != 1311450               // '{' True 'sizeof'
     && lk != 1311578               // '{' False 'sizeof'
     && lk != 1311706               // '{' Character 'sizeof'
     && lk != 1311834               // '{' String 'sizeof'
     && lk != 1311962               // '{' Real 'sizeof'
     && lk != 1312090               // '{' Comment 'sizeof'
     && lk != 1316442               // '{' ';' 'sizeof'
     && lk != 1318618               // '{' 'break' 'sizeof'
     && lk != 1319130               // '{' 'continue' 'sizeof'
     && lk != 1327578               // '{' Identifier 'static'
     && lk != 1327706               // '{' Null 'static'
     && lk != 1327834               // '{' True 'static'
     && lk != 1327962               // '{' False 'static'
     && lk != 1328090               // '{' Character 'static'
     && lk != 1328218               // '{' String 'static'
     && lk != 1328346               // '{' Real 'static'
     && lk != 1328474               // '{' Comment 'static'
     && lk != 1332826               // '{' ';' 'static'
     && lk != 1335002               // '{' 'break' 'static'
     && lk != 1335514               // '{' 'continue' 'static'
     && lk != 1343962               // '{' Identifier 'struct'
     && lk != 1344090               // '{' Null 'struct'
     && lk != 1344218               // '{' True 'struct'
     && lk != 1344346               // '{' False 'struct'
     && lk != 1344474               // '{' Character 'struct'
     && lk != 1344602               // '{' String 'struct'
     && lk != 1344730               // '{' Real 'struct'
     && lk != 1344858               // '{' Comment 'struct'
     && lk != 1349210               // '{' ';' 'struct'
     && lk != 1351386               // '{' 'break' 'struct'
     && lk != 1351898               // '{' 'continue' 'struct'
     && lk != 1360346               // '{' Identifier 'switch'
     && lk != 1360474               // '{' Null 'switch'
     && lk != 1360602               // '{' True 'switch'
     && lk != 1360730               // '{' False 'switch'
     && lk != 1360858               // '{' Character 'switch'
     && lk != 1360986               // '{' String 'switch'
     && lk != 1361114               // '{' Real 'switch'
     && lk != 1361242               // '{' Comment 'switch'
     && lk != 1365594               // '{' ';' 'switch'
     && lk != 1367770               // '{' 'break' 'switch'
     && lk != 1368282               // '{' 'continue' 'switch'
     && lk != 1376730               // '{' Identifier 'typedef'
     && lk != 1376858               // '{' Null 'typedef'
     && lk != 1376986               // '{' True 'typedef'
     && lk != 1377114               // '{' False 'typedef'
     && lk != 1377242               // '{' Character 'typedef'
     && lk != 1377370               // '{' String 'typedef'
     && lk != 1377498               // '{' Real 'typedef'
     && lk != 1377626               // '{' Comment 'typedef'
     && lk != 1381978               // '{' ';' 'typedef'
     && lk != 1384154               // '{' 'break' 'typedef'
     && lk != 1384666               // '{' 'continue' 'typedef'
     && lk != 1393114               // '{' Identifier 'union'
     && lk != 1393242               // '{' Null 'union'
     && lk != 1393370               // '{' True 'union'
     && lk != 1393498               // '{' False 'union'
     && lk != 1393626               // '{' Character 'union'
     && lk != 1393754               // '{' String 'union'
     && lk != 1393882               // '{' Real 'union'
     && lk != 1394010               // '{' Comment 'union'
     && lk != 1398362               // '{' ';' 'union'
     && lk != 1400538               // '{' 'break' 'union'
     && lk != 1401050               // '{' 'continue' 'union'
     && lk != 1409498               // '{' Identifier 'unsigned'
     && lk != 1409626               // '{' Null 'unsigned'
     && lk != 1409754               // '{' True 'unsigned'
     && lk != 1409882               // '{' False 'unsigned'
     && lk != 1410010               // '{' Character 'unsigned'
     && lk != 1410138               // '{' String 'unsigned'
     && lk != 1410266               // '{' Real 'unsigned'
     && lk != 1410394               // '{' Comment 'unsigned'
     && lk != 1414746               // '{' ';' 'unsigned'
     && lk != 1416922               // '{' 'break' 'unsigned'
     && lk != 1417434               // '{' 'continue' 'unsigned'
     && lk != 1425882               // '{' Identifier 'void'
     && lk != 1426010               // '{' Null 'void'
     && lk != 1426138               // '{' True 'void'
     && lk != 1426266               // '{' False 'void'
     && lk != 1426394               // '{' Character 'void'
     && lk != 1426522               // '{' String 'void'
     && lk != 1426650               // '{' Real 'void'
     && lk != 1426778               // '{' Comment 'void'
     && lk != 1431130               // '{' ';' 'void'
     && lk != 1433306               // '{' 'break' 'void'
     && lk != 1433818               // '{' 'continue' 'void'
     && lk != 1442266               // '{' Identifier 'volatile'
     && lk != 1442394               // '{' Null 'volatile'
     && lk != 1442522               // '{' True 'volatile'
     && lk != 1442650               // '{' False 'volatile'
     && lk != 1442778               // '{' Character 'volatile'
     && lk != 1442906               // '{' String 'volatile'
     && lk != 1443034               // '{' Real 'volatile'
     && lk != 1443162               // '{' Comment 'volatile'
     && lk != 1447514               // '{' ';' 'volatile'
     && lk != 1449690               // '{' 'break' 'volatile'
     && lk != 1450202               // '{' 'continue' 'volatile'
     && lk != 1458650               // '{' Identifier 'while'
     && lk != 1458778               // '{' Null 'while'
     && lk != 1458906               // '{' True 'while'
     && lk != 1459034               // '{' False 'while'
     && lk != 1459162               // '{' Character 'while'
     && lk != 1459290               // '{' String 'while'
     && lk != 1459418               // '{' Real 'while'
     && lk != 1459546               // '{' Comment 'while'
     && lk != 1463898               // '{' ';' 'while'
     && lk != 1466074               // '{' 'break' 'while'
     && lk != 1466586               // '{' 'continue' 'while'
     && lk != 1475034               // '{' Identifier '{'
     && lk != 1475162               // '{' Null '{'
     && lk != 1475290               // '{' True '{'
     && lk != 1475418               // '{' False '{'
     && lk != 1475546               // '{' Character '{'
     && lk != 1475674               // '{' String '{'
     && lk != 1475802               // '{' Real '{'
     && lk != 1475930               // '{' Comment '{'
     && lk != 1480282               // '{' ';' '{'
     && lk != 1482458               // '{' 'break' '{'
     && lk != 1482970               // '{' 'continue' '{'
     && lk != 1556954               // '{' Identifier '~'
     && lk != 1557082               // '{' Null '~'
     && lk != 1557210               // '{' True '~'
     && lk != 1557338               // '{' False '~'
     && lk != 1557466               // '{' Character '~'
     && lk != 1557594               // '{' String '~'
     && lk != 1557722               // '{' Real '~'
     && lk != 1557850               // '{' Comment '~'
     && lk != 1562202               // '{' ';' '~'
     && lk != 1564378               // '{' 'break' '~'
     && lk != 1564890)              // '{' 'continue' '~'
    {
      lk = memoized(0, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Block();
          memoize(0, e0A, -2);
          lk = -6;
        }
        catch (p2A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            try_Operation();
            memoize(0, e0A, -3);
            lk = -6;
          }
          catch (p3A)
          {
            lk = -4;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(0, e0A, -4);
          }
        }
      }
    }
    switch (lk)
    {
    case 10:                        // Comment
      consumeT(10);                 // Comment
      break;
    case -3:
    case 4:                         // Null
    case 5:                         // True
    case 6:                         // False
    case 7:                         // Character
    case 8:                         // String
    case 9:                         // Real
    case 12:                        // '!'
    case 28:                        // '('
    case 33:                        // '++'
    case 37:                        // '--'
    case 56:                        // '['
    case 80:                        // 'sizeof'
    case 95:                        // '~'
    case 131:                       // Identifier END
    case 387:                       // Identifier Identifier
    case 515:                       // Identifier Null
    case 643:                       // Identifier True
    case 771:                       // Identifier False
    case 899:                       // Identifier Character
    case 1027:                      // Identifier String
    case 1155:                      // Identifier Real
    case 1283:                      // Identifier Comment
    case 1539:                      // Identifier '!'
    case 1667:                      // Identifier '!='
    case 1795:                      // Identifier '#define'
    case 1923:                      // Identifier '#elif'
    case 2051:                      // Identifier '#else'
    case 2179:                      // Identifier '#endif'
    case 2307:                      // Identifier '#if'
    case 2435:                      // Identifier '#ifdef'
    case 2563:                      // Identifier '#ifndef'
    case 2691:                      // Identifier '#include'
    case 2819:                      // Identifier '#undef'
    case 2947:                      // Identifier '%'
    case 3075:                      // Identifier '%='
    case 3203:                      // Identifier '&'
    case 3331:                      // Identifier '&&'
    case 3459:                      // Identifier '&='
    case 3715:                      // Identifier ')'
    case 3843:                      // Identifier '*'
    case 3971:                      // Identifier '*='
    case 4099:                      // Identifier '+'
    case 4227:                      // Identifier '++'
    case 4355:                      // Identifier '+='
    case 4483:                      // Identifier ','
    case 4611:                      // Identifier '-'
    case 4739:                      // Identifier '--'
    case 4867:                      // Identifier '-='
    case 4995:                      // Identifier '->'
    case 5123:                      // Identifier '.'
    case 5251:                      // Identifier '/'
    case 5379:                      // Identifier '/='
    case 5507:                      // Identifier ':'
    case 5635:                      // Identifier ';'
    case 5763:                      // Identifier '<'
    case 5891:                      // Identifier '<<'
    case 6019:                      // Identifier '<<='
    case 6147:                      // Identifier '<='
    case 6275:                      // Identifier '='
    case 6403:                      // Identifier '=='
    case 6531:                      // Identifier '>'
    case 6659:                      // Identifier '>='
    case 6787:                      // Identifier '>>'
    case 6915:                      // Identifier '>>='
    case 7043:                      // Identifier '?'
    case 7171:                      // Identifier '['
    case 7299:                      // Identifier ']'
    case 7427:                      // Identifier '^'
    case 7555:                      // Identifier '^='
    case 7683:                      // Identifier 'auto'
    case 7811:                      // Identifier 'break'
    case 7939:                      // Identifier 'case'
    case 8067:                      // Identifier 'char'
    case 8195:                      // Identifier 'const'
    case 8323:                      // Identifier 'continue'
    case 8451:                      // Identifier 'default'
    case 8579:                      // Identifier 'do'
    case 8707:                      // Identifier 'double'
    case 8835:                      // Identifier 'else'
    case 8963:                      // Identifier 'enum'
    case 9091:                      // Identifier 'extern'
    case 9219:                      // Identifier 'float'
    case 9347:                      // Identifier 'for'
    case 9475:                      // Identifier 'if'
    case 9603:                      // Identifier 'int'
    case 9731:                      // Identifier 'long'
    case 9859:                      // Identifier 'return'
    case 9987:                      // Identifier 'short'
    case 10115:                     // Identifier 'signed'
    case 10243:                     // Identifier 'sizeof'
    case 10371:                     // Identifier 'static'
    case 10499:                     // Identifier 'struct'
    case 10627:                     // Identifier 'switch'
    case 10755:                     // Identifier 'typedef'
    case 10883:                     // Identifier 'union'
    case 11011:                     // Identifier 'unsigned'
    case 11139:                     // Identifier 'void'
    case 11267:                     // Identifier 'volatile'
    case 11395:                     // Identifier 'while'
    case 11523:                     // Identifier '{'
    case 11651:                     // Identifier '|'
    case 11779:                     // Identifier '|='
    case 11907:                     // Identifier '||'
    case 12035:                     // Identifier '}'
    case 12163:                     // Identifier '~'
    case 573914:                    // '{' Identifier ','
    case 574042:                    // '{' Null ','
    case 574170:                    // '{' True ','
    case 574298:                    // '{' False ','
    case 574426:                    // '{' Character ','
    case 574554:                    // '{' String ','
    case 574682:                    // '{' Real ','
    case 574810:                    // '{' Comment ','
    case 579162:                    // '{' ';' ','
    case 581338:                    // '{' 'break' ','
    case 581850:                    // '{' 'continue' ','
    case 704986:                    // '{' Identifier ':'
    case 705626:                    // '{' String ':'
      try_Operation();
      break;
    case -4:
    case 44:                        // ';'
    case 60:                        // 'auto'
    case 61:                        // 'break'
    case 63:                        // 'char'
    case 64:                        // 'const'
    case 65:                        // 'continue'
    case 67:                        // 'do'
    case 68:                        // 'double'
    case 70:                        // 'enum'
    case 71:                        // 'extern'
    case 72:                        // 'float'
    case 73:                        // 'for'
    case 74:                        // 'if'
    case 75:                        // 'int'
    case 76:                        // 'long'
    case 77:                        // 'return'
    case 78:                        // 'short'
    case 79:                        // 'signed'
    case 81:                        // 'static'
    case 82:                        // 'struct'
    case 83:                        // 'switch'
    case 84:                        // 'typedef'
    case 85:                        // 'union'
    case 86:                        // 'unsigned'
    case 87:                        // 'void'
    case 88:                        // 'volatile'
    case 89:                        // 'while'
      try_Statement();
      break;
    case 14:                        // '#define'
    case 18:                        // '#if'
    case 19:                        // '#ifdef'
    case 20:                        // '#ifndef'
    case 21:                        // '#include'
    case 22:                        // '#undef'
      try_PreprocessorDirective();
      break;
    case -6:
      break;
    default:
      try_Block();
    }
  }

  function parse_Block()
  {
    eventHandler.startNonterminal("Block", e0);
    consume(90);                    // '{'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(94);                    // '}'
    eventHandler.endNonterminal("Block", e0);
  }

  function try_Block()
  {
    consumeT(90);                   // '{'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(94);                   // '}'
  }

  function parse_Operation()
  {
    eventHandler.startNonterminal("Operation", e0);
    parse_VariableAssignment();
    eventHandler.endNonterminal("Operation", e0);
  }

  function try_Operation()
  {
    try_VariableAssignment();
  }

  function parse_VariableAssignment()
  {
    eventHandler.startNonterminal("VariableAssignment", e0);
    parse_ConditionalExpression();
    for (;;)
    {
      switch (l1)
      {
      case 24:                      // '%='
      case 27:                      // '&='
      case 31:                      // '*='
      case 34:                      // '+='
      case 38:                      // '-='
      case 42:                      // '/='
      case 47:                      // '<<='
      case 49:                      // '='
      case 54:                      // '>>='
      case 59:                      // '^='
      case 92:                      // '|='
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
        switch (lk)
        {
        case 408:                   // '%=' Identifier
        case 411:                   // '&=' Identifier
        case 415:                   // '*=' Identifier
        case 418:                   // '+=' Identifier
        case 422:                   // '-=' Identifier
        case 426:                   // '/=' Identifier
        case 431:                   // '<<=' Identifier
        case 433:                   // '=' Identifier
        case 438:                   // '>>=' Identifier
        case 443:                   // '^=' Identifier
        case 476:                   // '|=' Identifier
          lookahead3W(46);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 7192:                  // '%=' '['
        case 7195:                  // '&=' '['
        case 7199:                  // '*=' '['
        case 7202:                  // '+=' '['
        case 7206:                  // '-=' '['
        case 7210:                  // '/=' '['
        case 7215:                  // '<<=' '['
        case 7217:                  // '=' '['
        case 7222:                  // '>>=' '['
        case 7227:                  // '^=' '['
        case 7260:                  // '|=' '['
          lookahead3W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        case 3608:                  // '%=' '('
        case 11544:                 // '%=' '{'
        case 3611:                  // '&=' '('
        case 11547:                 // '&=' '{'
        case 3615:                  // '*=' '('
        case 11551:                 // '*=' '{'
        case 3618:                  // '+=' '('
        case 11554:                 // '+=' '{'
        case 3622:                  // '-=' '('
        case 11558:                 // '-=' '{'
        case 3626:                  // '/=' '('
        case 11562:                 // '/=' '{'
        case 3631:                  // '<<=' '('
        case 11567:                 // '<<=' '{'
        case 3633:                  // '=' '('
        case 11569:                 // '=' '{'
        case 3638:                  // '>>=' '('
        case 11574:                 // '>>=' '{'
        case 3643:                  // '^=' '('
        case 11579:                 // '^=' '{'
        case 3676:                  // '|=' '('
        case 11612:                 // '|=' '{'
          lookahead3W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          break;
        case 1560:                  // '%=' '!'
        case 4248:                  // '%=' '++'
        case 4760:                  // '%=' '--'
        case 10264:                 // '%=' 'sizeof'
        case 12184:                 // '%=' '~'
        case 1563:                  // '&=' '!'
        case 4251:                  // '&=' '++'
        case 4763:                  // '&=' '--'
        case 10267:                 // '&=' 'sizeof'
        case 12187:                 // '&=' '~'
        case 1567:                  // '*=' '!'
        case 4255:                  // '*=' '++'
        case 4767:                  // '*=' '--'
        case 10271:                 // '*=' 'sizeof'
        case 12191:                 // '*=' '~'
        case 1570:                  // '+=' '!'
        case 4258:                  // '+=' '++'
        case 4770:                  // '+=' '--'
        case 10274:                 // '+=' 'sizeof'
        case 12194:                 // '+=' '~'
        case 1574:                  // '-=' '!'
        case 4262:                  // '-=' '++'
        case 4774:                  // '-=' '--'
        case 10278:                 // '-=' 'sizeof'
        case 12198:                 // '-=' '~'
        case 1578:                  // '/=' '!'
        case 4266:                  // '/=' '++'
        case 4778:                  // '/=' '--'
        case 10282:                 // '/=' 'sizeof'
        case 12202:                 // '/=' '~'
        case 1583:                  // '<<=' '!'
        case 4271:                  // '<<=' '++'
        case 4783:                  // '<<=' '--'
        case 10287:                 // '<<=' 'sizeof'
        case 12207:                 // '<<=' '~'
        case 1585:                  // '=' '!'
        case 4273:                  // '=' '++'
        case 4785:                  // '=' '--'
        case 10289:                 // '=' 'sizeof'
        case 12209:                 // '=' '~'
        case 1590:                  // '>>=' '!'
        case 4278:                  // '>>=' '++'
        case 4790:                  // '>>=' '--'
        case 10294:                 // '>>=' 'sizeof'
        case 12214:                 // '>>=' '~'
        case 1595:                  // '^=' '!'
        case 4283:                  // '^=' '++'
        case 4795:                  // '^=' '--'
        case 10299:                 // '^=' 'sizeof'
        case 12219:                 // '^=' '~'
        case 1628:                  // '|=' '!'
        case 4316:                  // '|=' '++'
        case 4828:                  // '|=' '--'
        case 10332:                 // '|=' 'sizeof'
        case 12252:                 // '|=' '~'
          lookahead3W(17);          // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
          break;
        case 536:                   // '%=' Null
        case 664:                   // '%=' True
        case 792:                   // '%=' False
        case 920:                   // '%=' Character
        case 1048:                  // '%=' String
        case 1176:                  // '%=' Real
        case 539:                   // '&=' Null
        case 667:                   // '&=' True
        case 795:                   // '&=' False
        case 923:                   // '&=' Character
        case 1051:                  // '&=' String
        case 1179:                  // '&=' Real
        case 543:                   // '*=' Null
        case 671:                   // '*=' True
        case 799:                   // '*=' False
        case 927:                   // '*=' Character
        case 1055:                  // '*=' String
        case 1183:                  // '*=' Real
        case 546:                   // '+=' Null
        case 674:                   // '+=' True
        case 802:                   // '+=' False
        case 930:                   // '+=' Character
        case 1058:                  // '+=' String
        case 1186:                  // '+=' Real
        case 550:                   // '-=' Null
        case 678:                   // '-=' True
        case 806:                   // '-=' False
        case 934:                   // '-=' Character
        case 1062:                  // '-=' String
        case 1190:                  // '-=' Real
        case 554:                   // '/=' Null
        case 682:                   // '/=' True
        case 810:                   // '/=' False
        case 938:                   // '/=' Character
        case 1066:                  // '/=' String
        case 1194:                  // '/=' Real
        case 559:                   // '<<=' Null
        case 687:                   // '<<=' True
        case 815:                   // '<<=' False
        case 943:                   // '<<=' Character
        case 1071:                  // '<<=' String
        case 1199:                  // '<<=' Real
        case 561:                   // '=' Null
        case 689:                   // '=' True
        case 817:                   // '=' False
        case 945:                   // '=' Character
        case 1073:                  // '=' String
        case 1201:                  // '=' Real
        case 566:                   // '>>=' Null
        case 694:                   // '>>=' True
        case 822:                   // '>>=' False
        case 950:                   // '>>=' Character
        case 1078:                  // '>>=' String
        case 1206:                  // '>>=' Real
        case 571:                   // '^=' Null
        case 699:                   // '^=' True
        case 827:                   // '^=' False
        case 955:                   // '^=' Character
        case 1083:                  // '^=' String
        case 1211:                  // '^=' Real
        case 604:                   // '|=' Null
        case 732:                   // '|=' True
        case 860:                   // '|=' False
        case 988:                   // '|=' Character
        case 1116:                  // '|=' String
        case 1244:                  // '|=' Real
          lookahead3W(45);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Real
       && lk != 10                  // Comment
       && lk != 12                  // '!'
       && lk != 14                  // '#define'
       && lk != 15                  // '#elif'
       && lk != 16                  // '#else'
       && lk != 17                  // '#endif'
       && lk != 18                  // '#if'
       && lk != 19                  // '#ifdef'
       && lk != 20                  // '#ifndef'
       && lk != 21                  // '#include'
       && lk != 22                  // '#undef'
       && lk != 28                  // '('
       && lk != 29                  // ')'
       && lk != 33                  // '++'
       && lk != 35                  // ','
       && lk != 37                  // '--'
       && lk != 43                  // ':'
       && lk != 44                  // ';'
       && lk != 51                  // '>'
       && lk != 56                  // '['
       && lk != 57                  // ']'
       && lk != 60                  // 'auto'
       && lk != 61                  // 'break'
       && lk != 62                  // 'case'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 65                  // 'continue'
       && lk != 66                  // 'default'
       && lk != 67                  // 'do'
       && lk != 68                  // 'double'
       && lk != 69                  // 'else'
       && lk != 70                  // 'enum'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 73                  // 'for'
       && lk != 74                  // 'if'
       && lk != 75                  // 'int'
       && lk != 76                  // 'long'
       && lk != 77                  // 'return'
       && lk != 78                  // 'short'
       && lk != 79                  // 'signed'
       && lk != 80                  // 'sizeof'
       && lk != 81                  // 'static'
       && lk != 82                  // 'struct'
       && lk != 83                  // 'switch'
       && lk != 84                  // 'typedef'
       && lk != 85                  // 'union'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 89                  // 'while'
       && lk != 90                  // '{'
       && lk != 94                  // '}'
       && lk != 95)                 // '~'
      {
        lk = memoized(1, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            switch (l1)
            {
            case 49:                // '='
              consumeT(49);         // '='
              break;
            case 31:                // '*='
              consumeT(31);         // '*='
              break;
            case 42:                // '/='
              consumeT(42);         // '/='
              break;
            case 24:                // '%='
              consumeT(24);         // '%='
              break;
            case 34:                // '+='
              consumeT(34);         // '+='
              break;
            case 38:                // '-='
              consumeT(38);         // '-='
              break;
            case 47:                // '<<='
              consumeT(47);         // '<<='
              break;
            case 54:                // '>>='
              consumeT(54);         // '>>='
              break;
            case 27:                // '&='
              consumeT(27);         // '&='
              break;
            case 59:                // '^='
              consumeT(59);         // '^='
              break;
            default:
              consumeT(92);         // '|='
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
            try_ConditionalExpression();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(1, e0, lk);
        }
      }
      if (lk != -1)
      {
        break;
      }
      switch (l1)
      {
      case 49:                      // '='
        consume(49);                // '='
        break;
      case 31:                      // '*='
        consume(31);                // '*='
        break;
      case 42:                      // '/='
        consume(42);                // '/='
        break;
      case 24:                      // '%='
        consume(24);                // '%='
        break;
      case 34:                      // '+='
        consume(34);                // '+='
        break;
      case 38:                      // '-='
        consume(38);                // '-='
        break;
      case 47:                      // '<<='
        consume(47);                // '<<='
        break;
      case 54:                      // '>>='
        consume(54);                // '>>='
        break;
      case 27:                      // '&='
        consume(27);                // '&='
        break;
      case 59:                      // '^='
        consume(59);                // '^='
        break;
      default:
        consume(92);                // '|='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_ConditionalExpression();
    }
    eventHandler.endNonterminal("VariableAssignment", e0);
  }

  function try_VariableAssignment()
  {
    try_ConditionalExpression();
    for (;;)
    {
      switch (l1)
      {
      case 24:                      // '%='
      case 27:                      // '&='
      case 31:                      // '*='
      case 34:                      // '+='
      case 38:                      // '-='
      case 42:                      // '/='
      case 47:                      // '<<='
      case 49:                      // '='
      case 54:                      // '>>='
      case 59:                      // '^='
      case 92:                      // '|='
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
        switch (lk)
        {
        case 408:                   // '%=' Identifier
        case 411:                   // '&=' Identifier
        case 415:                   // '*=' Identifier
        case 418:                   // '+=' Identifier
        case 422:                   // '-=' Identifier
        case 426:                   // '/=' Identifier
        case 431:                   // '<<=' Identifier
        case 433:                   // '=' Identifier
        case 438:                   // '>>=' Identifier
        case 443:                   // '^=' Identifier
        case 476:                   // '|=' Identifier
          lookahead3W(46);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 7192:                  // '%=' '['
        case 7195:                  // '&=' '['
        case 7199:                  // '*=' '['
        case 7202:                  // '+=' '['
        case 7206:                  // '-=' '['
        case 7210:                  // '/=' '['
        case 7215:                  // '<<=' '['
        case 7217:                  // '=' '['
        case 7222:                  // '>>=' '['
        case 7227:                  // '^=' '['
        case 7260:                  // '|=' '['
          lookahead3W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        case 3608:                  // '%=' '('
        case 11544:                 // '%=' '{'
        case 3611:                  // '&=' '('
        case 11547:                 // '&=' '{'
        case 3615:                  // '*=' '('
        case 11551:                 // '*=' '{'
        case 3618:                  // '+=' '('
        case 11554:                 // '+=' '{'
        case 3622:                  // '-=' '('
        case 11558:                 // '-=' '{'
        case 3626:                  // '/=' '('
        case 11562:                 // '/=' '{'
        case 3631:                  // '<<=' '('
        case 11567:                 // '<<=' '{'
        case 3633:                  // '=' '('
        case 11569:                 // '=' '{'
        case 3638:                  // '>>=' '('
        case 11574:                 // '>>=' '{'
        case 3643:                  // '^=' '('
        case 11579:                 // '^=' '{'
        case 3676:                  // '|=' '('
        case 11612:                 // '|=' '{'
          lookahead3W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          break;
        case 1560:                  // '%=' '!'
        case 4248:                  // '%=' '++'
        case 4760:                  // '%=' '--'
        case 10264:                 // '%=' 'sizeof'
        case 12184:                 // '%=' '~'
        case 1563:                  // '&=' '!'
        case 4251:                  // '&=' '++'
        case 4763:                  // '&=' '--'
        case 10267:                 // '&=' 'sizeof'
        case 12187:                 // '&=' '~'
        case 1567:                  // '*=' '!'
        case 4255:                  // '*=' '++'
        case 4767:                  // '*=' '--'
        case 10271:                 // '*=' 'sizeof'
        case 12191:                 // '*=' '~'
        case 1570:                  // '+=' '!'
        case 4258:                  // '+=' '++'
        case 4770:                  // '+=' '--'
        case 10274:                 // '+=' 'sizeof'
        case 12194:                 // '+=' '~'
        case 1574:                  // '-=' '!'
        case 4262:                  // '-=' '++'
        case 4774:                  // '-=' '--'
        case 10278:                 // '-=' 'sizeof'
        case 12198:                 // '-=' '~'
        case 1578:                  // '/=' '!'
        case 4266:                  // '/=' '++'
        case 4778:                  // '/=' '--'
        case 10282:                 // '/=' 'sizeof'
        case 12202:                 // '/=' '~'
        case 1583:                  // '<<=' '!'
        case 4271:                  // '<<=' '++'
        case 4783:                  // '<<=' '--'
        case 10287:                 // '<<=' 'sizeof'
        case 12207:                 // '<<=' '~'
        case 1585:                  // '=' '!'
        case 4273:                  // '=' '++'
        case 4785:                  // '=' '--'
        case 10289:                 // '=' 'sizeof'
        case 12209:                 // '=' '~'
        case 1590:                  // '>>=' '!'
        case 4278:                  // '>>=' '++'
        case 4790:                  // '>>=' '--'
        case 10294:                 // '>>=' 'sizeof'
        case 12214:                 // '>>=' '~'
        case 1595:                  // '^=' '!'
        case 4283:                  // '^=' '++'
        case 4795:                  // '^=' '--'
        case 10299:                 // '^=' 'sizeof'
        case 12219:                 // '^=' '~'
        case 1628:                  // '|=' '!'
        case 4316:                  // '|=' '++'
        case 4828:                  // '|=' '--'
        case 10332:                 // '|=' 'sizeof'
        case 12252:                 // '|=' '~'
          lookahead3W(17);          // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
          break;
        case 536:                   // '%=' Null
        case 664:                   // '%=' True
        case 792:                   // '%=' False
        case 920:                   // '%=' Character
        case 1048:                  // '%=' String
        case 1176:                  // '%=' Real
        case 539:                   // '&=' Null
        case 667:                   // '&=' True
        case 795:                   // '&=' False
        case 923:                   // '&=' Character
        case 1051:                  // '&=' String
        case 1179:                  // '&=' Real
        case 543:                   // '*=' Null
        case 671:                   // '*=' True
        case 799:                   // '*=' False
        case 927:                   // '*=' Character
        case 1055:                  // '*=' String
        case 1183:                  // '*=' Real
        case 546:                   // '+=' Null
        case 674:                   // '+=' True
        case 802:                   // '+=' False
        case 930:                   // '+=' Character
        case 1058:                  // '+=' String
        case 1186:                  // '+=' Real
        case 550:                   // '-=' Null
        case 678:                   // '-=' True
        case 806:                   // '-=' False
        case 934:                   // '-=' Character
        case 1062:                  // '-=' String
        case 1190:                  // '-=' Real
        case 554:                   // '/=' Null
        case 682:                   // '/=' True
        case 810:                   // '/=' False
        case 938:                   // '/=' Character
        case 1066:                  // '/=' String
        case 1194:                  // '/=' Real
        case 559:                   // '<<=' Null
        case 687:                   // '<<=' True
        case 815:                   // '<<=' False
        case 943:                   // '<<=' Character
        case 1071:                  // '<<=' String
        case 1199:                  // '<<=' Real
        case 561:                   // '=' Null
        case 689:                   // '=' True
        case 817:                   // '=' False
        case 945:                   // '=' Character
        case 1073:                  // '=' String
        case 1201:                  // '=' Real
        case 566:                   // '>>=' Null
        case 694:                   // '>>=' True
        case 822:                   // '>>=' False
        case 950:                   // '>>=' Character
        case 1078:                  // '>>=' String
        case 1206:                  // '>>=' Real
        case 571:                   // '^=' Null
        case 699:                   // '^=' True
        case 827:                   // '^=' False
        case 955:                   // '^=' Character
        case 1083:                  // '^=' String
        case 1211:                  // '^=' Real
        case 604:                   // '|=' Null
        case 732:                   // '|=' True
        case 860:                   // '|=' False
        case 988:                   // '|=' Character
        case 1116:                  // '|=' String
        case 1244:                  // '|=' Real
          lookahead3W(45);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Real
       && lk != 10                  // Comment
       && lk != 12                  // '!'
       && lk != 14                  // '#define'
       && lk != 15                  // '#elif'
       && lk != 16                  // '#else'
       && lk != 17                  // '#endif'
       && lk != 18                  // '#if'
       && lk != 19                  // '#ifdef'
       && lk != 20                  // '#ifndef'
       && lk != 21                  // '#include'
       && lk != 22                  // '#undef'
       && lk != 28                  // '('
       && lk != 29                  // ')'
       && lk != 33                  // '++'
       && lk != 35                  // ','
       && lk != 37                  // '--'
       && lk != 43                  // ':'
       && lk != 44                  // ';'
       && lk != 51                  // '>'
       && lk != 56                  // '['
       && lk != 57                  // ']'
       && lk != 60                  // 'auto'
       && lk != 61                  // 'break'
       && lk != 62                  // 'case'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 65                  // 'continue'
       && lk != 66                  // 'default'
       && lk != 67                  // 'do'
       && lk != 68                  // 'double'
       && lk != 69                  // 'else'
       && lk != 70                  // 'enum'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 73                  // 'for'
       && lk != 74                  // 'if'
       && lk != 75                  // 'int'
       && lk != 76                  // 'long'
       && lk != 77                  // 'return'
       && lk != 78                  // 'short'
       && lk != 79                  // 'signed'
       && lk != 80                  // 'sizeof'
       && lk != 81                  // 'static'
       && lk != 82                  // 'struct'
       && lk != 83                  // 'switch'
       && lk != 84                  // 'typedef'
       && lk != 85                  // 'union'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 89                  // 'while'
       && lk != 90                  // '{'
       && lk != 94                  // '}'
       && lk != 95)                 // '~'
      {
        lk = memoized(1, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            switch (l1)
            {
            case 49:                // '='
              consumeT(49);         // '='
              break;
            case 31:                // '*='
              consumeT(31);         // '*='
              break;
            case 42:                // '/='
              consumeT(42);         // '/='
              break;
            case 24:                // '%='
              consumeT(24);         // '%='
              break;
            case 34:                // '+='
              consumeT(34);         // '+='
              break;
            case 38:                // '-='
              consumeT(38);         // '-='
              break;
            case 47:                // '<<='
              consumeT(47);         // '<<='
              break;
            case 54:                // '>>='
              consumeT(54);         // '>>='
              break;
            case 27:                // '&='
              consumeT(27);         // '&='
              break;
            case 59:                // '^='
              consumeT(59);         // '^='
              break;
            default:
              consumeT(92);         // '|='
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
            try_ConditionalExpression();
            memoize(1, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(1, e0A, -2);
            break;
          }
        }
      }
      if (lk != -1)
      {
        break;
      }
      switch (l1)
      {
      case 49:                      // '='
        consumeT(49);               // '='
        break;
      case 31:                      // '*='
        consumeT(31);               // '*='
        break;
      case 42:                      // '/='
        consumeT(42);               // '/='
        break;
      case 24:                      // '%='
        consumeT(24);               // '%='
        break;
      case 34:                      // '+='
        consumeT(34);               // '+='
        break;
      case 38:                      // '-='
        consumeT(38);               // '-='
        break;
      case 47:                      // '<<='
        consumeT(47);               // '<<='
        break;
      case 54:                      // '>>='
        consumeT(54);               // '>>='
        break;
      case 27:                      // '&='
        consumeT(27);               // '&='
        break;
      case 59:                      // '^='
        consumeT(59);               // '^='
        break;
      default:
        consumeT(92);               // '|='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_ConditionalExpression();
    }
  }

  function parse_ConditionalExpression()
  {
    eventHandler.startNonterminal("ConditionalExpression", e0);
    parse_LogicalORExpression();
    if (l1 == 55)                   // '?'
    {
      consume(55);                  // '?'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
      consume(43);                  // ':'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_VariableAssignment();
    }
    eventHandler.endNonterminal("ConditionalExpression", e0);
  }

  function try_ConditionalExpression()
  {
    try_LogicalORExpression();
    if (l1 == 55)                   // '?'
    {
      consumeT(55);                 // '?'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_VariableAssignment();
      consumeT(43);                 // ':'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_VariableAssignment();
    }
  }

  function parse_LogicalORExpression()
  {
    eventHandler.startNonterminal("LogicalORExpression", e0);
    parse_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 93)                 // '||'
      {
        break;
      }
      consume(93);                  // '||'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_LogicalANDExpression();
    }
    eventHandler.endNonterminal("LogicalORExpression", e0);
  }

  function try_LogicalORExpression()
  {
    try_LogicalANDExpression();
    for (;;)
    {
      if (l1 != 93)                 // '||'
      {
        break;
      }
      consumeT(93);                 // '||'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_LogicalANDExpression();
    }
  }

  function parse_LogicalANDExpression()
  {
    eventHandler.startNonterminal("LogicalANDExpression", e0);
    parse_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 26)                 // '&&'
      {
        break;
      }
      consume(26);                  // '&&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_BitwiseORExpression();
    }
    eventHandler.endNonterminal("LogicalANDExpression", e0);
  }

  function try_LogicalANDExpression()
  {
    try_BitwiseORExpression();
    for (;;)
    {
      if (l1 != 26)                 // '&&'
      {
        break;
      }
      consumeT(26);                 // '&&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_BitwiseORExpression();
    }
  }

  function parse_BitwiseORExpression()
  {
    eventHandler.startNonterminal("BitwiseORExpression", e0);
    parse_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 91)                 // '|'
      {
        break;
      }
      consume(91);                  // '|'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_BitwiseXORExpression();
    }
    eventHandler.endNonterminal("BitwiseORExpression", e0);
  }

  function try_BitwiseORExpression()
  {
    try_BitwiseXORExpression();
    for (;;)
    {
      if (l1 != 91)                 // '|'
      {
        break;
      }
      consumeT(91);                 // '|'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_BitwiseXORExpression();
    }
  }

  function parse_BitwiseXORExpression()
  {
    eventHandler.startNonterminal("BitwiseXORExpression", e0);
    parse_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 58)                 // '^'
      {
        break;
      }
      consume(58);                  // '^'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_BitwiseANDExpression();
    }
    eventHandler.endNonterminal("BitwiseXORExpression", e0);
  }

  function try_BitwiseXORExpression()
  {
    try_BitwiseANDExpression();
    for (;;)
    {
      if (l1 != 58)                 // '^'
      {
        break;
      }
      consumeT(58);                 // '^'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_BitwiseANDExpression();
    }
  }

  function parse_BitwiseANDExpression()
  {
    eventHandler.startNonterminal("BitwiseANDExpression", e0);
    parse_EqualityExpression();
    for (;;)
    {
      if (l1 != 25)                 // '&'
      {
        break;
      }
      consume(25);                  // '&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_EqualityExpression();
    }
    eventHandler.endNonterminal("BitwiseANDExpression", e0);
  }

  function try_BitwiseANDExpression()
  {
    try_EqualityExpression();
    for (;;)
    {
      if (l1 != 25)                 // '&'
      {
        break;
      }
      consumeT(25);                 // '&'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_EqualityExpression();
    }
  }

  function parse_EqualityExpression()
  {
    eventHandler.startNonterminal("EqualityExpression", e0);
    parse_RelationalExpression();
    for (;;)
    {
      if (l1 != 13                  // '!='
       && l1 != 50)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 50:                      // '=='
        consume(50);                // '=='
        break;
      default:
        consume(13);                // '!='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_RelationalExpression();
    }
    eventHandler.endNonterminal("EqualityExpression", e0);
  }

  function try_EqualityExpression()
  {
    try_RelationalExpression();
    for (;;)
    {
      if (l1 != 13                  // '!='
       && l1 != 50)                 // '=='
      {
        break;
      }
      switch (l1)
      {
      case 50:                      // '=='
        consumeT(50);               // '=='
        break;
      default:
        consumeT(13);               // '!='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_RelationalExpression();
    }
  }

  function parse_RelationalExpression()
  {
    eventHandler.startNonterminal("RelationalExpression", e0);
    parse_ShiftExpression();
    for (;;)
    {
      switch (l1)
      {
      case 51:                      // '>'
        lookahead2W(41);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | ')' | '++' | ',' | '--' |
                                    // ':' | ';' | '>' | '[' | ']' | 'auto' | 'break' | 'case' | 'char' | 'const' |
                                    // 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '}' | '~'
        switch (lk)
        {
        case 435:                   // '>' Identifier
          lookahead3W(46);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 3635:                  // '>' '('
          lookahead3W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          break;
        case 7219:                  // '>' '['
          lookahead3W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        case 11571:                 // '>' '{'
          lookahead3W(33);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
          break;
        case 1587:                  // '>' '!'
        case 4275:                  // '>' '++'
        case 4787:                  // '>' '--'
        case 10291:                 // '>' 'sizeof'
        case 12211:                 // '>' '~'
          lookahead3W(17);          // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
          break;
        case 563:                   // '>' Null
        case 691:                   // '>' True
        case 819:                   // '>' False
        case 947:                   // '>' Character
        case 1075:                  // '>' String
        case 1203:                  // '>' Real
          lookahead3W(45);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Real
       && lk != 10                  // Comment
       && lk != 12                  // '!'
       && lk != 13                  // '!='
       && lk != 14                  // '#define'
       && lk != 15                  // '#elif'
       && lk != 16                  // '#else'
       && lk != 17                  // '#endif'
       && lk != 18                  // '#if'
       && lk != 19                  // '#ifdef'
       && lk != 20                  // '#ifndef'
       && lk != 21                  // '#include'
       && lk != 22                  // '#undef'
       && lk != 24                  // '%='
       && lk != 25                  // '&'
       && lk != 26                  // '&&'
       && lk != 27                  // '&='
       && lk != 28                  // '('
       && lk != 29                  // ')'
       && lk != 31                  // '*='
       && lk != 33                  // '++'
       && lk != 34                  // '+='
       && lk != 35                  // ','
       && lk != 37                  // '--'
       && lk != 38                  // '-='
       && lk != 42                  // '/='
       && lk != 43                  // ':'
       && lk != 44                  // ';'
       && lk != 45                  // '<'
       && lk != 47                  // '<<='
       && lk != 48                  // '<='
       && lk != 49                  // '='
       && lk != 50                  // '=='
       && lk != 52                  // '>='
       && lk != 54                  // '>>='
       && lk != 55                  // '?'
       && lk != 56                  // '['
       && lk != 57                  // ']'
       && lk != 58                  // '^'
       && lk != 59                  // '^='
       && lk != 60                  // 'auto'
       && lk != 61                  // 'break'
       && lk != 62                  // 'case'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 65                  // 'continue'
       && lk != 66                  // 'default'
       && lk != 67                  // 'do'
       && lk != 68                  // 'double'
       && lk != 69                  // 'else'
       && lk != 70                  // 'enum'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 73                  // 'for'
       && lk != 74                  // 'if'
       && lk != 75                  // 'int'
       && lk != 76                  // 'long'
       && lk != 77                  // 'return'
       && lk != 78                  // 'short'
       && lk != 79                  // 'signed'
       && lk != 80                  // 'sizeof'
       && lk != 81                  // 'static'
       && lk != 82                  // 'struct'
       && lk != 83                  // 'switch'
       && lk != 84                  // 'typedef'
       && lk != 85                  // 'union'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 89                  // 'while'
       && lk != 90                  // '{'
       && lk != 91                  // '|'
       && lk != 92                  // '|='
       && lk != 93                  // '||'
       && lk != 94                  // '}'
       && lk != 95                  // '~'
       && lk != 179                 // '>' END
       && lk != 1331                // '>' Comment
       && lk != 1843                // '>' '#define'
       && lk != 1971                // '>' '#elif'
       && lk != 2099                // '>' '#else'
       && lk != 2227                // '>' '#endif'
       && lk != 2355                // '>' '#if'
       && lk != 2483                // '>' '#ifdef'
       && lk != 2611                // '>' '#ifndef'
       && lk != 2739                // '>' '#include'
       && lk != 2867                // '>' '#undef'
       && lk != 3763                // '>' ')'
       && lk != 4531                // '>' ','
       && lk != 5555                // '>' ':'
       && lk != 5683                // '>' ';'
       && lk != 6579                // '>' '>'
       && lk != 7347                // '>' ']'
       && lk != 7731                // '>' 'auto'
       && lk != 7859                // '>' 'break'
       && lk != 7987                // '>' 'case'
       && lk != 8115                // '>' 'char'
       && lk != 8243                // '>' 'const'
       && lk != 8371                // '>' 'continue'
       && lk != 8499                // '>' 'default'
       && lk != 8627                // '>' 'do'
       && lk != 8755                // '>' 'double'
       && lk != 8883                // '>' 'else'
       && lk != 9011                // '>' 'enum'
       && lk != 9139                // '>' 'extern'
       && lk != 9267                // '>' 'float'
       && lk != 9395                // '>' 'for'
       && lk != 9523                // '>' 'if'
       && lk != 9651                // '>' 'int'
       && lk != 9779                // '>' 'long'
       && lk != 9907                // '>' 'return'
       && lk != 10035               // '>' 'short'
       && lk != 10163               // '>' 'signed'
       && lk != 10419               // '>' 'static'
       && lk != 10547               // '>' 'struct'
       && lk != 10675               // '>' 'switch'
       && lk != 10803               // '>' 'typedef'
       && lk != 10931               // '>' 'union'
       && lk != 11059               // '>' 'unsigned'
       && lk != 11187               // '>' 'void'
       && lk != 11315               // '>' 'volatile'
       && lk != 11443               // '>' 'while'
       && lk != 12083               // '>' '}'
       && lk != 705075              // '>' Null ':'
       && lk != 705203              // '>' True ':'
       && lk != 705331              // '>' False ':'
       && lk != 705459              // '>' Character ':'
       && lk != 705587              // '>' String ':'
       && lk != 705715              // '>' Real ':'
       && lk != 934451              // '>' Null ']'
       && lk != 934579              // '>' True ']'
       && lk != 934707              // '>' False ']'
       && lk != 934835              // '>' Character ']'
       && lk != 934963              // '>' String ']'
       && lk != 935091              // '>' Real ']'
       && lk != 1131059             // '>' Null 'else'
       && lk != 1131187             // '>' True 'else'
       && lk != 1131315             // '>' False 'else'
       && lk != 1131443             // '>' Character 'else'
       && lk != 1131571             // '>' String 'else'
       && lk != 1131699             // '>' Real 'else'
       && lk != 1551667)            // '>' '{' '}'
      {
        lk = memoized(2, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            switch (l1)
            {
            case 45:                // '<'
              consumeT(45);         // '<'
              break;
            case 51:                // '>'
              consumeT(51);         // '>'
              break;
            case 48:                // '<='
              consumeT(48);         // '<='
              break;
            default:
              consumeT(52);         // '>='
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
            try_ShiftExpression();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(2, e0, lk);
        }
      }
      if (lk != -1
       && lk != 45                  // '<'
       && lk != 48                  // '<='
       && lk != 52                  // '>='
       && lk != 705075              // '>' Null ':'
       && lk != 705203              // '>' True ':'
       && lk != 705331              // '>' False ':'
       && lk != 705459              // '>' Character ':'
       && lk != 705587              // '>' String ':'
       && lk != 705715              // '>' Real ':'
       && lk != 934451              // '>' Null ']'
       && lk != 934579              // '>' True ']'
       && lk != 934707              // '>' False ']'
       && lk != 934835              // '>' Character ']'
       && lk != 934963              // '>' String ']'
       && lk != 935091              // '>' Real ']'
       && lk != 1131059             // '>' Null 'else'
       && lk != 1131187             // '>' True 'else'
       && lk != 1131315             // '>' False 'else'
       && lk != 1131443             // '>' Character 'else'
       && lk != 1131571             // '>' String 'else'
       && lk != 1131699)            // '>' Real 'else'
      {
        break;
      }
      switch (l1)
      {
      case 45:                      // '<'
        consume(45);                // '<'
        break;
      case 51:                      // '>'
        consume(51);                // '>'
        break;
      case 48:                      // '<='
        consume(48);                // '<='
        break;
      default:
        consume(52);                // '>='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_ShiftExpression();
    }
    eventHandler.endNonterminal("RelationalExpression", e0);
  }

  function try_RelationalExpression()
  {
    try_ShiftExpression();
    for (;;)
    {
      switch (l1)
      {
      case 51:                      // '>'
        lookahead2W(41);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | ')' | '++' | ',' | '--' |
                                    // ':' | ';' | '>' | '[' | ']' | 'auto' | 'break' | 'case' | 'char' | 'const' |
                                    // 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '}' | '~'
        switch (lk)
        {
        case 435:                   // '>' Identifier
          lookahead3W(46);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 3635:                  // '>' '('
          lookahead3W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          break;
        case 7219:                  // '>' '['
          lookahead3W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        case 11571:                 // '>' '{'
          lookahead3W(33);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
          break;
        case 1587:                  // '>' '!'
        case 4275:                  // '>' '++'
        case 4787:                  // '>' '--'
        case 10291:                 // '>' 'sizeof'
        case 12211:                 // '>' '~'
          lookahead3W(17);          // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
          break;
        case 563:                   // '>' Null
        case 691:                   // '>' True
        case 819:                   // '>' False
        case 947:                   // '>' Character
        case 1075:                  // '>' String
        case 1203:                  // '>' Real
          lookahead3W(45);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Real
       && lk != 10                  // Comment
       && lk != 12                  // '!'
       && lk != 13                  // '!='
       && lk != 14                  // '#define'
       && lk != 15                  // '#elif'
       && lk != 16                  // '#else'
       && lk != 17                  // '#endif'
       && lk != 18                  // '#if'
       && lk != 19                  // '#ifdef'
       && lk != 20                  // '#ifndef'
       && lk != 21                  // '#include'
       && lk != 22                  // '#undef'
       && lk != 24                  // '%='
       && lk != 25                  // '&'
       && lk != 26                  // '&&'
       && lk != 27                  // '&='
       && lk != 28                  // '('
       && lk != 29                  // ')'
       && lk != 31                  // '*='
       && lk != 33                  // '++'
       && lk != 34                  // '+='
       && lk != 35                  // ','
       && lk != 37                  // '--'
       && lk != 38                  // '-='
       && lk != 42                  // '/='
       && lk != 43                  // ':'
       && lk != 44                  // ';'
       && lk != 45                  // '<'
       && lk != 47                  // '<<='
       && lk != 48                  // '<='
       && lk != 49                  // '='
       && lk != 50                  // '=='
       && lk != 52                  // '>='
       && lk != 54                  // '>>='
       && lk != 55                  // '?'
       && lk != 56                  // '['
       && lk != 57                  // ']'
       && lk != 58                  // '^'
       && lk != 59                  // '^='
       && lk != 60                  // 'auto'
       && lk != 61                  // 'break'
       && lk != 62                  // 'case'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 65                  // 'continue'
       && lk != 66                  // 'default'
       && lk != 67                  // 'do'
       && lk != 68                  // 'double'
       && lk != 69                  // 'else'
       && lk != 70                  // 'enum'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 73                  // 'for'
       && lk != 74                  // 'if'
       && lk != 75                  // 'int'
       && lk != 76                  // 'long'
       && lk != 77                  // 'return'
       && lk != 78                  // 'short'
       && lk != 79                  // 'signed'
       && lk != 80                  // 'sizeof'
       && lk != 81                  // 'static'
       && lk != 82                  // 'struct'
       && lk != 83                  // 'switch'
       && lk != 84                  // 'typedef'
       && lk != 85                  // 'union'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 89                  // 'while'
       && lk != 90                  // '{'
       && lk != 91                  // '|'
       && lk != 92                  // '|='
       && lk != 93                  // '||'
       && lk != 94                  // '}'
       && lk != 95                  // '~'
       && lk != 179                 // '>' END
       && lk != 1331                // '>' Comment
       && lk != 1843                // '>' '#define'
       && lk != 1971                // '>' '#elif'
       && lk != 2099                // '>' '#else'
       && lk != 2227                // '>' '#endif'
       && lk != 2355                // '>' '#if'
       && lk != 2483                // '>' '#ifdef'
       && lk != 2611                // '>' '#ifndef'
       && lk != 2739                // '>' '#include'
       && lk != 2867                // '>' '#undef'
       && lk != 3763                // '>' ')'
       && lk != 4531                // '>' ','
       && lk != 5555                // '>' ':'
       && lk != 5683                // '>' ';'
       && lk != 6579                // '>' '>'
       && lk != 7347                // '>' ']'
       && lk != 7731                // '>' 'auto'
       && lk != 7859                // '>' 'break'
       && lk != 7987                // '>' 'case'
       && lk != 8115                // '>' 'char'
       && lk != 8243                // '>' 'const'
       && lk != 8371                // '>' 'continue'
       && lk != 8499                // '>' 'default'
       && lk != 8627                // '>' 'do'
       && lk != 8755                // '>' 'double'
       && lk != 8883                // '>' 'else'
       && lk != 9011                // '>' 'enum'
       && lk != 9139                // '>' 'extern'
       && lk != 9267                // '>' 'float'
       && lk != 9395                // '>' 'for'
       && lk != 9523                // '>' 'if'
       && lk != 9651                // '>' 'int'
       && lk != 9779                // '>' 'long'
       && lk != 9907                // '>' 'return'
       && lk != 10035               // '>' 'short'
       && lk != 10163               // '>' 'signed'
       && lk != 10419               // '>' 'static'
       && lk != 10547               // '>' 'struct'
       && lk != 10675               // '>' 'switch'
       && lk != 10803               // '>' 'typedef'
       && lk != 10931               // '>' 'union'
       && lk != 11059               // '>' 'unsigned'
       && lk != 11187               // '>' 'void'
       && lk != 11315               // '>' 'volatile'
       && lk != 11443               // '>' 'while'
       && lk != 12083               // '>' '}'
       && lk != 705075              // '>' Null ':'
       && lk != 705203              // '>' True ':'
       && lk != 705331              // '>' False ':'
       && lk != 705459              // '>' Character ':'
       && lk != 705587              // '>' String ':'
       && lk != 705715              // '>' Real ':'
       && lk != 934451              // '>' Null ']'
       && lk != 934579              // '>' True ']'
       && lk != 934707              // '>' False ']'
       && lk != 934835              // '>' Character ']'
       && lk != 934963              // '>' String ']'
       && lk != 935091              // '>' Real ']'
       && lk != 1131059             // '>' Null 'else'
       && lk != 1131187             // '>' True 'else'
       && lk != 1131315             // '>' False 'else'
       && lk != 1131443             // '>' Character 'else'
       && lk != 1131571             // '>' String 'else'
       && lk != 1131699             // '>' Real 'else'
       && lk != 1551667)            // '>' '{' '}'
      {
        lk = memoized(2, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            switch (l1)
            {
            case 45:                // '<'
              consumeT(45);         // '<'
              break;
            case 51:                // '>'
              consumeT(51);         // '>'
              break;
            case 48:                // '<='
              consumeT(48);         // '<='
              break;
            default:
              consumeT(52);         // '>='
            }
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
            try_ShiftExpression();
            memoize(2, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(2, e0A, -2);
            break;
          }
        }
      }
      if (lk != -1
       && lk != 45                  // '<'
       && lk != 48                  // '<='
       && lk != 52                  // '>='
       && lk != 705075              // '>' Null ':'
       && lk != 705203              // '>' True ':'
       && lk != 705331              // '>' False ':'
       && lk != 705459              // '>' Character ':'
       && lk != 705587              // '>' String ':'
       && lk != 705715              // '>' Real ':'
       && lk != 934451              // '>' Null ']'
       && lk != 934579              // '>' True ']'
       && lk != 934707              // '>' False ']'
       && lk != 934835              // '>' Character ']'
       && lk != 934963              // '>' String ']'
       && lk != 935091              // '>' Real ']'
       && lk != 1131059             // '>' Null 'else'
       && lk != 1131187             // '>' True 'else'
       && lk != 1131315             // '>' False 'else'
       && lk != 1131443             // '>' Character 'else'
       && lk != 1131571             // '>' String 'else'
       && lk != 1131699)            // '>' Real 'else'
      {
        break;
      }
      switch (l1)
      {
      case 45:                      // '<'
        consumeT(45);               // '<'
        break;
      case 51:                      // '>'
        consumeT(51);               // '>'
        break;
      case 48:                      // '<='
        consumeT(48);               // '<='
        break;
      default:
        consumeT(52);               // '>='
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_ShiftExpression();
    }
  }

  function parse_ShiftExpression()
  {
    eventHandler.startNonterminal("ShiftExpression", e0);
    parse_AdditiveExpression();
    for (;;)
    {
      if (l1 != 46                  // '<<'
       && l1 != 53)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 46:                      // '<<'
        consume(46);                // '<<'
        break;
      default:
        consume(53);                // '>>'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_AdditiveExpression();
    }
    eventHandler.endNonterminal("ShiftExpression", e0);
  }

  function try_ShiftExpression()
  {
    try_AdditiveExpression();
    for (;;)
    {
      if (l1 != 46                  // '<<'
       && l1 != 53)                 // '>>'
      {
        break;
      }
      switch (l1)
      {
      case 46:                      // '<<'
        consumeT(46);               // '<<'
        break;
      default:
        consumeT(53);               // '>>'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_AdditiveExpression();
    }
  }

  function parse_AdditiveExpression()
  {
    eventHandler.startNonterminal("AdditiveExpression", e0);
    parse_MultiplicativeExpression();
    for (;;)
    {
      if (l1 != 32                  // '+'
       && l1 != 36)                 // '-'
      {
        break;
      }
      switch (l1)
      {
      case 32:                      // '+'
        consume(32);                // '+'
        break;
      default:
        consume(36);                // '-'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_MultiplicativeExpression();
    }
    eventHandler.endNonterminal("AdditiveExpression", e0);
  }

  function try_AdditiveExpression()
  {
    try_MultiplicativeExpression();
    for (;;)
    {
      if (l1 != 32                  // '+'
       && l1 != 36)                 // '-'
      {
        break;
      }
      switch (l1)
      {
      case 32:                      // '+'
        consumeT(32);               // '+'
        break;
      default:
        consumeT(36);               // '-'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_MultiplicativeExpression();
    }
  }

  function parse_MultiplicativeExpression()
  {
    eventHandler.startNonterminal("MultiplicativeExpression", e0);
    parse_PowerExpression();
    for (;;)
    {
      if (l1 != 23                  // '%'
       && l1 != 30                  // '*'
       && l1 != 41)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 30:                      // '*'
        consume(30);                // '*'
        break;
      case 41:                      // '/'
        consume(41);                // '/'
        break;
      default:
        consume(23);                // '%'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_PowerExpression();
    }
    eventHandler.endNonterminal("MultiplicativeExpression", e0);
  }

  function try_MultiplicativeExpression()
  {
    try_PowerExpression();
    for (;;)
    {
      if (l1 != 23                  // '%'
       && l1 != 30                  // '*'
       && l1 != 41)                 // '/'
      {
        break;
      }
      switch (l1)
      {
      case 30:                      // '*'
        consumeT(30);               // '*'
        break;
      case 41:                      // '/'
        consumeT(41);               // '/'
        break;
      default:
        consumeT(23);               // '%'
      }
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_PowerExpression();
    }
  }

  function parse_PowerExpression()
  {
    eventHandler.startNonterminal("PowerExpression", e0);
    parse_UnaryExpression();
    for (;;)
    {
      lookahead1W(45);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (l1)
      {
      case 58:                      // '^'
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
        switch (lk)
        {
        case 442:                   // '^' Identifier
          lookahead3W(46);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 7226:                  // '^' '['
          lookahead3W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        case 3642:                  // '^' '('
        case 11578:                 // '^' '{'
          lookahead3W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          break;
        case 1594:                  // '^' '!'
        case 4282:                  // '^' '++'
        case 4794:                  // '^' '--'
        case 10298:                 // '^' 'sizeof'
        case 12218:                 // '^' '~'
          lookahead3W(17);          // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
          break;
        case 570:                   // '^' Null
        case 698:                   // '^' True
        case 826:                   // '^' False
        case 954:                   // '^' Character
        case 1082:                  // '^' String
        case 1210:                  // '^' Real
          lookahead3W(45);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Real
       && lk != 10                  // Comment
       && lk != 12                  // '!'
       && lk != 13                  // '!='
       && lk != 14                  // '#define'
       && lk != 15                  // '#elif'
       && lk != 16                  // '#else'
       && lk != 17                  // '#endif'
       && lk != 18                  // '#if'
       && lk != 19                  // '#ifdef'
       && lk != 20                  // '#ifndef'
       && lk != 21                  // '#include'
       && lk != 22                  // '#undef'
       && lk != 23                  // '%'
       && lk != 24                  // '%='
       && lk != 25                  // '&'
       && lk != 26                  // '&&'
       && lk != 27                  // '&='
       && lk != 28                  // '('
       && lk != 29                  // ')'
       && lk != 30                  // '*'
       && lk != 31                  // '*='
       && lk != 32                  // '+'
       && lk != 33                  // '++'
       && lk != 34                  // '+='
       && lk != 35                  // ','
       && lk != 36                  // '-'
       && lk != 37                  // '--'
       && lk != 38                  // '-='
       && lk != 41                  // '/'
       && lk != 42                  // '/='
       && lk != 43                  // ':'
       && lk != 44                  // ';'
       && lk != 45                  // '<'
       && lk != 46                  // '<<'
       && lk != 47                  // '<<='
       && lk != 48                  // '<='
       && lk != 49                  // '='
       && lk != 50                  // '=='
       && lk != 51                  // '>'
       && lk != 52                  // '>='
       && lk != 53                  // '>>'
       && lk != 54                  // '>>='
       && lk != 55                  // '?'
       && lk != 56                  // '['
       && lk != 57                  // ']'
       && lk != 59                  // '^='
       && lk != 60                  // 'auto'
       && lk != 61                  // 'break'
       && lk != 62                  // 'case'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 65                  // 'continue'
       && lk != 66                  // 'default'
       && lk != 67                  // 'do'
       && lk != 68                  // 'double'
       && lk != 69                  // 'else'
       && lk != 70                  // 'enum'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 73                  // 'for'
       && lk != 74                  // 'if'
       && lk != 75                  // 'int'
       && lk != 76                  // 'long'
       && lk != 77                  // 'return'
       && lk != 78                  // 'short'
       && lk != 79                  // 'signed'
       && lk != 80                  // 'sizeof'
       && lk != 81                  // 'static'
       && lk != 82                  // 'struct'
       && lk != 83                  // 'switch'
       && lk != 84                  // 'typedef'
       && lk != 85                  // 'union'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 89                  // 'while'
       && lk != 90                  // '{'
       && lk != 91                  // '|'
       && lk != 92                  // '|='
       && lk != 93                  // '||'
       && lk != 94                  // '}'
       && lk != 95)                 // '~'
      {
        lk = memoized(3, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            consumeT(58);           // '^'
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
            try_UnaryExpression();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(3, e0, lk);
        }
      }
      if (lk != -1)
      {
        break;
      }
      consume(58);                  // '^'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      whitespace();
      parse_UnaryExpression();
    }
    eventHandler.endNonterminal("PowerExpression", e0);
  }

  function try_PowerExpression()
  {
    try_UnaryExpression();
    for (;;)
    {
      lookahead1W(45);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (l1)
      {
      case 58:                      // '^'
        lookahead2W(19);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
        switch (lk)
        {
        case 442:                   // '^' Identifier
          lookahead3W(46);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
          break;
        case 7226:                  // '^' '['
          lookahead3W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        case 3642:                  // '^' '('
        case 11578:                 // '^' '{'
          lookahead3W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          break;
        case 1594:                  // '^' '!'
        case 4282:                  // '^' '++'
        case 4794:                  // '^' '--'
        case 10298:                 // '^' 'sizeof'
        case 12218:                 // '^' '~'
          lookahead3W(17);          // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
          break;
        case 570:                   // '^' Null
        case 698:                   // '^' True
        case 826:                   // '^' False
        case 954:                   // '^' Character
        case 1082:                  // '^' String
        case 1210:                  // '^' Real
          lookahead3W(45);          // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 1                   // END
       && lk != 3                   // Identifier
       && lk != 4                   // Null
       && lk != 5                   // True
       && lk != 6                   // False
       && lk != 7                   // Character
       && lk != 8                   // String
       && lk != 9                   // Real
       && lk != 10                  // Comment
       && lk != 12                  // '!'
       && lk != 13                  // '!='
       && lk != 14                  // '#define'
       && lk != 15                  // '#elif'
       && lk != 16                  // '#else'
       && lk != 17                  // '#endif'
       && lk != 18                  // '#if'
       && lk != 19                  // '#ifdef'
       && lk != 20                  // '#ifndef'
       && lk != 21                  // '#include'
       && lk != 22                  // '#undef'
       && lk != 23                  // '%'
       && lk != 24                  // '%='
       && lk != 25                  // '&'
       && lk != 26                  // '&&'
       && lk != 27                  // '&='
       && lk != 28                  // '('
       && lk != 29                  // ')'
       && lk != 30                  // '*'
       && lk != 31                  // '*='
       && lk != 32                  // '+'
       && lk != 33                  // '++'
       && lk != 34                  // '+='
       && lk != 35                  // ','
       && lk != 36                  // '-'
       && lk != 37                  // '--'
       && lk != 38                  // '-='
       && lk != 41                  // '/'
       && lk != 42                  // '/='
       && lk != 43                  // ':'
       && lk != 44                  // ';'
       && lk != 45                  // '<'
       && lk != 46                  // '<<'
       && lk != 47                  // '<<='
       && lk != 48                  // '<='
       && lk != 49                  // '='
       && lk != 50                  // '=='
       && lk != 51                  // '>'
       && lk != 52                  // '>='
       && lk != 53                  // '>>'
       && lk != 54                  // '>>='
       && lk != 55                  // '?'
       && lk != 56                  // '['
       && lk != 57                  // ']'
       && lk != 59                  // '^='
       && lk != 60                  // 'auto'
       && lk != 61                  // 'break'
       && lk != 62                  // 'case'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 65                  // 'continue'
       && lk != 66                  // 'default'
       && lk != 67                  // 'do'
       && lk != 68                  // 'double'
       && lk != 69                  // 'else'
       && lk != 70                  // 'enum'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 73                  // 'for'
       && lk != 74                  // 'if'
       && lk != 75                  // 'int'
       && lk != 76                  // 'long'
       && lk != 77                  // 'return'
       && lk != 78                  // 'short'
       && lk != 79                  // 'signed'
       && lk != 80                  // 'sizeof'
       && lk != 81                  // 'static'
       && lk != 82                  // 'struct'
       && lk != 83                  // 'switch'
       && lk != 84                  // 'typedef'
       && lk != 85                  // 'union'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 89                  // 'while'
       && lk != 90                  // '{'
       && lk != 91                  // '|'
       && lk != 92                  // '|='
       && lk != 93                  // '||'
       && lk != 94                  // '}'
       && lk != 95)                 // '~'
      {
        lk = memoized(3, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            consumeT(58);           // '^'
            lookahead1W(19);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
            try_UnaryExpression();
            memoize(3, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(3, e0A, -2);
            break;
          }
        }
      }
      if (lk != -1)
      {
        break;
      }
      consumeT(58);                 // '^'
      lookahead1W(19);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '!' | '(' | '++' | '--' | '[' | 'sizeof' | '{' | '~'
      try_UnaryExpression();
    }
  }

  function parse_UnaryExpression()
  {
    eventHandler.startNonterminal("UnaryExpression", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(46);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 3587:                    // Identifier '('
        lookahead3W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 7171:                    // Identifier '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 4227:                    // Identifier '++'
      case 4739:                    // Identifier '--'
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 4995:                    // Identifier '->'
      case 5123:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    case 28:                        // '('
      lookahead2W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 412:                     // '(' Identifier
        lookahead3W(24);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' | '^' |
                                    // '^=' | '|' | '|=' | '||'
        break;
      case 2332:                    // '(' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2716:                    // '(' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7196:                    // '(' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11548:                   // '(' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 8988:                    // '(' 'enum'
      case 10908:                   // '(' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1308:                    // '(' Comment
      case 5660:                    // '(' ';'
      case 7836:                    // '(' 'break'
      case 8348:                    // '(' 'continue'
        lookahead3W(3);             // WhiteSpace^token | ')'
        break;
      case 1820:                    // '(' '#define'
      case 2460:                    // '(' '#ifdef'
      case 2588:                    // '(' '#ifndef'
      case 2844:                    // '(' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9372:                    // '(' 'for'
      case 9500:                    // '(' 'if'
      case 10652:                   // '(' 'switch'
      case 11420:                   // '(' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1564:                    // '(' '!'
      case 4252:                    // '(' '++'
      case 4764:                    // '(' '--'
      case 10268:                   // '(' 'sizeof'
      case 12188:                   // '(' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3612:                    // '(' '('
      case 8604:                    // '(' 'do'
      case 9884:                    // '(' 'return'
      case 10524:                   // '(' 'struct'
      case 10780:                   // '(' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 540:                     // '(' Null
      case 668:                     // '(' True
      case 796:                     // '(' False
      case 924:                     // '(' Character
      case 1052:                    // '(' String
      case 1180:                    // '(' Real
        lookahead3W(20);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '*=' |
                                    // '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 7708:                    // '(' 'auto'
      case 8220:                    // '(' 'const'
      case 9116:                    // '(' 'extern'
      case 10140:                   // '(' 'signed'
      case 10396:                   // '(' 'static'
      case 11036:                   // '(' 'unsigned'
      case 11292:                   // '(' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8092:                    // '(' 'char'
      case 8732:                    // '(' 'double'
      case 9244:                    // '(' 'float'
      case 9628:                    // '(' 'int'
      case 9756:                    // '(' 'long'
      case 10012:                   // '(' 'short'
      case 11164:                   // '(' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 56:                        // '['
      lookahead2W(32);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 440:                     // '[' Identifier
        lookahead3W(26);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 2360:                    // '[' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2744:                    // '[' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 5688:                    // '[' ';'
        lookahead3W(36);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
        break;
      case 7224:                    // '[' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 7352:                    // '[' ']'
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 11576:                   // '[' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9016:                    // '[' 'enum'
      case 10936:                   // '[' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1336:                    // '[' Comment
      case 7864:                    // '[' 'break'
      case 8376:                    // '[' 'continue'
        lookahead3W(16);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 1848:                    // '[' '#define'
      case 2488:                    // '[' '#ifdef'
      case 2616:                    // '[' '#ifndef'
      case 2872:                    // '[' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9400:                    // '[' 'for'
      case 9528:                    // '[' 'if'
      case 10680:                   // '[' 'switch'
      case 11448:                   // '[' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1592:                    // '[' '!'
      case 4280:                    // '[' '++'
      case 4792:                    // '[' '--'
      case 10296:                   // '[' 'sizeof'
      case 12216:                   // '[' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3640:                    // '[' '('
      case 8632:                    // '[' 'do'
      case 9912:                    // '[' 'return'
      case 10552:                   // '[' 'struct'
      case 10808:                   // '[' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 568:                     // '[' Null
      case 696:                     // '[' True
      case 824:                     // '[' False
      case 952:                     // '[' Character
      case 1080:                    // '[' String
      case 1208:                    // '[' Real
        lookahead3W(23);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ';' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | ']' | '^' | '^=' | '|' |
                                    // '|=' | '||'
        break;
      case 7736:                    // '[' 'auto'
      case 8248:                    // '[' 'const'
      case 9144:                    // '[' 'extern'
      case 10168:                   // '[' 'signed'
      case 10424:                   // '[' 'static'
      case 11064:                   // '[' 'unsigned'
      case 11320:                   // '[' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8120:                    // '[' 'char'
      case 8760:                    // '[' 'double'
      case 9272:                    // '[' 'float'
      case 9656:                    // '[' 'int'
      case 9784:                    // '[' 'long'
      case 10040:                   // '[' 'short'
      case 11192:                   // '[' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 90:                        // '{'
      lookahead2W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 474:                     // '{' Identifier
        lookahead3W(25);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ':' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 1114:                    // '{' String
        lookahead3W(22);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' |
                                    // '||' | '}'
        break;
      case 2394:                    // '{' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2778:                    // '{' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7258:                    // '{' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11610:                   // '{' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9050:                    // '{' 'enum'
      case 10970:                   // '{' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1370:                    // '{' Comment
      case 5722:                    // '{' ';'
      case 7898:                    // '{' 'break'
      case 8410:                    // '{' 'continue'
        lookahead3W(14);            // WhiteSpace^token | ',' | '}'
        break;
      case 1882:                    // '{' '#define'
      case 2522:                    // '{' '#ifdef'
      case 2650:                    // '{' '#ifndef'
      case 2906:                    // '{' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9434:                    // '{' 'for'
      case 9562:                    // '{' 'if'
      case 10714:                   // '{' 'switch'
      case 11482:                   // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 602:                     // '{' Null
      case 730:                     // '{' True
      case 858:                     // '{' False
      case 986:                     // '{' Character
      case 1242:                    // '{' Real
        lookahead3W(21);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' | '||' |
                                    // '}'
        break;
      case 1626:                    // '{' '!'
      case 4314:                    // '{' '++'
      case 4826:                    // '{' '--'
      case 10330:                   // '{' 'sizeof'
      case 12250:                   // '{' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3674:                    // '{' '('
      case 8666:                    // '{' 'do'
      case 9946:                    // '{' 'return'
      case 10586:                   // '{' 'struct'
      case 10842:                   // '{' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 7770:                    // '{' 'auto'
      case 8282:                    // '{' 'const'
      case 9178:                    // '{' 'extern'
      case 10202:                   // '{' 'signed'
      case 10458:                   // '{' 'static'
      case 11098:                   // '{' 'unsigned'
      case 11354:                   // '{' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8154:                    // '{' 'char'
      case 8794:                    // '{' 'double'
      case 9306:                    // '{' 'float'
      case 9690:                    // '{' 'int'
      case 9818:                    // '{' 'long'
      case 10074:                   // '{' 'short'
      case 11226:                   // '{' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 4:                         // Null
    case 5:                         // True
    case 6:                         // False
    case 7:                         // Character
    case 8:                         // String
    case 9:                         // Real
      lookahead2W(45);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 4228:                    // Null '++'
      case 4740:                    // Null '--'
      case 4229:                    // True '++'
      case 4741:                    // True '--'
      case 4230:                    // False '++'
      case 4742:                    // False '--'
      case 4231:                    // Character '++'
      case 4743:                    // Character '--'
      case 4232:                    // String '++'
      case 4744:                    // String '--'
      case 4233:                    // Real '++'
      case 4745:                    // Real '--'
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 12                    // '!'
     && lk != 33                    // '++'
     && lk != 37                    // '--'
     && lk != 80                    // 'sizeof'
     && lk != 95                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Null END
     && lk != 133                   // True END
     && lk != 134                   // False END
     && lk != 135                   // Character END
     && lk != 136                   // String END
     && lk != 137                   // Real END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Null Identifier
     && lk != 389                   // True Identifier
     && lk != 390                   // False Identifier
     && lk != 391                   // Character Identifier
     && lk != 392                   // String Identifier
     && lk != 393                   // Real Identifier
     && lk != 515                   // Identifier Null
     && lk != 516                   // Null Null
     && lk != 517                   // True Null
     && lk != 518                   // False Null
     && lk != 519                   // Character Null
     && lk != 520                   // String Null
     && lk != 521                   // Real Null
     && lk != 643                   // Identifier True
     && lk != 644                   // Null True
     && lk != 645                   // True True
     && lk != 646                   // False True
     && lk != 647                   // Character True
     && lk != 648                   // String True
     && lk != 649                   // Real True
     && lk != 771                   // Identifier False
     && lk != 772                   // Null False
     && lk != 773                   // True False
     && lk != 774                   // False False
     && lk != 775                   // Character False
     && lk != 776                   // String False
     && lk != 777                   // Real False
     && lk != 899                   // Identifier Character
     && lk != 900                   // Null Character
     && lk != 901                   // True Character
     && lk != 902                   // False Character
     && lk != 903                   // Character Character
     && lk != 904                   // String Character
     && lk != 905                   // Real Character
     && lk != 1027                  // Identifier String
     && lk != 1028                  // Null String
     && lk != 1029                  // True String
     && lk != 1030                  // False String
     && lk != 1031                  // Character String
     && lk != 1032                  // String String
     && lk != 1033                  // Real String
     && lk != 1155                  // Identifier Real
     && lk != 1156                  // Null Real
     && lk != 1157                  // True Real
     && lk != 1158                  // False Real
     && lk != 1159                  // Character Real
     && lk != 1160                  // String Real
     && lk != 1161                  // Real Real
     && lk != 1283                  // Identifier Comment
     && lk != 1284                  // Null Comment
     && lk != 1285                  // True Comment
     && lk != 1286                  // False Comment
     && lk != 1287                  // Character Comment
     && lk != 1288                  // String Comment
     && lk != 1289                  // Real Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1540                  // Null '!'
     && lk != 1541                  // True '!'
     && lk != 1542                  // False '!'
     && lk != 1543                  // Character '!'
     && lk != 1544                  // String '!'
     && lk != 1545                  // Real '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1668                  // Null '!='
     && lk != 1669                  // True '!='
     && lk != 1670                  // False '!='
     && lk != 1671                  // Character '!='
     && lk != 1672                  // String '!='
     && lk != 1673                  // Real '!='
     && lk != 1795                  // Identifier '#define'
     && lk != 1796                  // Null '#define'
     && lk != 1797                  // True '#define'
     && lk != 1798                  // False '#define'
     && lk != 1799                  // Character '#define'
     && lk != 1800                  // String '#define'
     && lk != 1801                  // Real '#define'
     && lk != 1923                  // Identifier '#elif'
     && lk != 1924                  // Null '#elif'
     && lk != 1925                  // True '#elif'
     && lk != 1926                  // False '#elif'
     && lk != 1927                  // Character '#elif'
     && lk != 1928                  // String '#elif'
     && lk != 1929                  // Real '#elif'
     && lk != 2051                  // Identifier '#else'
     && lk != 2052                  // Null '#else'
     && lk != 2053                  // True '#else'
     && lk != 2054                  // False '#else'
     && lk != 2055                  // Character '#else'
     && lk != 2056                  // String '#else'
     && lk != 2057                  // Real '#else'
     && lk != 2179                  // Identifier '#endif'
     && lk != 2180                  // Null '#endif'
     && lk != 2181                  // True '#endif'
     && lk != 2182                  // False '#endif'
     && lk != 2183                  // Character '#endif'
     && lk != 2184                  // String '#endif'
     && lk != 2185                  // Real '#endif'
     && lk != 2307                  // Identifier '#if'
     && lk != 2308                  // Null '#if'
     && lk != 2309                  // True '#if'
     && lk != 2310                  // False '#if'
     && lk != 2311                  // Character '#if'
     && lk != 2312                  // String '#if'
     && lk != 2313                  // Real '#if'
     && lk != 2435                  // Identifier '#ifdef'
     && lk != 2436                  // Null '#ifdef'
     && lk != 2437                  // True '#ifdef'
     && lk != 2438                  // False '#ifdef'
     && lk != 2439                  // Character '#ifdef'
     && lk != 2440                  // String '#ifdef'
     && lk != 2441                  // Real '#ifdef'
     && lk != 2563                  // Identifier '#ifndef'
     && lk != 2564                  // Null '#ifndef'
     && lk != 2565                  // True '#ifndef'
     && lk != 2566                  // False '#ifndef'
     && lk != 2567                  // Character '#ifndef'
     && lk != 2568                  // String '#ifndef'
     && lk != 2569                  // Real '#ifndef'
     && lk != 2691                  // Identifier '#include'
     && lk != 2692                  // Null '#include'
     && lk != 2693                  // True '#include'
     && lk != 2694                  // False '#include'
     && lk != 2695                  // Character '#include'
     && lk != 2696                  // String '#include'
     && lk != 2697                  // Real '#include'
     && lk != 2819                  // Identifier '#undef'
     && lk != 2820                  // Null '#undef'
     && lk != 2821                  // True '#undef'
     && lk != 2822                  // False '#undef'
     && lk != 2823                  // Character '#undef'
     && lk != 2824                  // String '#undef'
     && lk != 2825                  // Real '#undef'
     && lk != 2947                  // Identifier '%'
     && lk != 2948                  // Null '%'
     && lk != 2949                  // True '%'
     && lk != 2950                  // False '%'
     && lk != 2951                  // Character '%'
     && lk != 2952                  // String '%'
     && lk != 2953                  // Real '%'
     && lk != 3075                  // Identifier '%='
     && lk != 3076                  // Null '%='
     && lk != 3077                  // True '%='
     && lk != 3078                  // False '%='
     && lk != 3079                  // Character '%='
     && lk != 3080                  // String '%='
     && lk != 3081                  // Real '%='
     && lk != 3203                  // Identifier '&'
     && lk != 3204                  // Null '&'
     && lk != 3205                  // True '&'
     && lk != 3206                  // False '&'
     && lk != 3207                  // Character '&'
     && lk != 3208                  // String '&'
     && lk != 3209                  // Real '&'
     && lk != 3331                  // Identifier '&&'
     && lk != 3332                  // Null '&&'
     && lk != 3333                  // True '&&'
     && lk != 3334                  // False '&&'
     && lk != 3335                  // Character '&&'
     && lk != 3336                  // String '&&'
     && lk != 3337                  // Real '&&'
     && lk != 3459                  // Identifier '&='
     && lk != 3460                  // Null '&='
     && lk != 3461                  // True '&='
     && lk != 3462                  // False '&='
     && lk != 3463                  // Character '&='
     && lk != 3464                  // String '&='
     && lk != 3465                  // Real '&='
     && lk != 3588                  // Null '('
     && lk != 3589                  // True '('
     && lk != 3590                  // False '('
     && lk != 3591                  // Character '('
     && lk != 3592                  // String '('
     && lk != 3593                  // Real '('
     && lk != 3715                  // Identifier ')'
     && lk != 3716                  // Null ')'
     && lk != 3717                  // True ')'
     && lk != 3718                  // False ')'
     && lk != 3719                  // Character ')'
     && lk != 3720                  // String ')'
     && lk != 3721                  // Real ')'
     && lk != 3843                  // Identifier '*'
     && lk != 3844                  // Null '*'
     && lk != 3845                  // True '*'
     && lk != 3846                  // False '*'
     && lk != 3847                  // Character '*'
     && lk != 3848                  // String '*'
     && lk != 3849                  // Real '*'
     && lk != 3971                  // Identifier '*='
     && lk != 3972                  // Null '*='
     && lk != 3973                  // True '*='
     && lk != 3974                  // False '*='
     && lk != 3975                  // Character '*='
     && lk != 3976                  // String '*='
     && lk != 3977                  // Real '*='
     && lk != 4099                  // Identifier '+'
     && lk != 4100                  // Null '+'
     && lk != 4101                  // True '+'
     && lk != 4102                  // False '+'
     && lk != 4103                  // Character '+'
     && lk != 4104                  // String '+'
     && lk != 4105                  // Real '+'
     && lk != 4355                  // Identifier '+='
     && lk != 4356                  // Null '+='
     && lk != 4357                  // True '+='
     && lk != 4358                  // False '+='
     && lk != 4359                  // Character '+='
     && lk != 4360                  // String '+='
     && lk != 4361                  // Real '+='
     && lk != 4483                  // Identifier ','
     && lk != 4484                  // Null ','
     && lk != 4485                  // True ','
     && lk != 4486                  // False ','
     && lk != 4487                  // Character ','
     && lk != 4488                  // String ','
     && lk != 4489                  // Real ','
     && lk != 4611                  // Identifier '-'
     && lk != 4612                  // Null '-'
     && lk != 4613                  // True '-'
     && lk != 4614                  // False '-'
     && lk != 4615                  // Character '-'
     && lk != 4616                  // String '-'
     && lk != 4617                  // Real '-'
     && lk != 4867                  // Identifier '-='
     && lk != 4868                  // Null '-='
     && lk != 4869                  // True '-='
     && lk != 4870                  // False '-='
     && lk != 4871                  // Character '-='
     && lk != 4872                  // String '-='
     && lk != 4873                  // Real '-='
     && lk != 5251                  // Identifier '/'
     && lk != 5252                  // Null '/'
     && lk != 5253                  // True '/'
     && lk != 5254                  // False '/'
     && lk != 5255                  // Character '/'
     && lk != 5256                  // String '/'
     && lk != 5257                  // Real '/'
     && lk != 5379                  // Identifier '/='
     && lk != 5380                  // Null '/='
     && lk != 5381                  // True '/='
     && lk != 5382                  // False '/='
     && lk != 5383                  // Character '/='
     && lk != 5384                  // String '/='
     && lk != 5385                  // Real '/='
     && lk != 5507                  // Identifier ':'
     && lk != 5508                  // Null ':'
     && lk != 5509                  // True ':'
     && lk != 5510                  // False ':'
     && lk != 5511                  // Character ':'
     && lk != 5512                  // String ':'
     && lk != 5513                  // Real ':'
     && lk != 5635                  // Identifier ';'
     && lk != 5636                  // Null ';'
     && lk != 5637                  // True ';'
     && lk != 5638                  // False ';'
     && lk != 5639                  // Character ';'
     && lk != 5640                  // String ';'
     && lk != 5641                  // Real ';'
     && lk != 5763                  // Identifier '<'
     && lk != 5764                  // Null '<'
     && lk != 5765                  // True '<'
     && lk != 5766                  // False '<'
     && lk != 5767                  // Character '<'
     && lk != 5768                  // String '<'
     && lk != 5769                  // Real '<'
     && lk != 5891                  // Identifier '<<'
     && lk != 5892                  // Null '<<'
     && lk != 5893                  // True '<<'
     && lk != 5894                  // False '<<'
     && lk != 5895                  // Character '<<'
     && lk != 5896                  // String '<<'
     && lk != 5897                  // Real '<<'
     && lk != 6019                  // Identifier '<<='
     && lk != 6020                  // Null '<<='
     && lk != 6021                  // True '<<='
     && lk != 6022                  // False '<<='
     && lk != 6023                  // Character '<<='
     && lk != 6024                  // String '<<='
     && lk != 6025                  // Real '<<='
     && lk != 6147                  // Identifier '<='
     && lk != 6148                  // Null '<='
     && lk != 6149                  // True '<='
     && lk != 6150                  // False '<='
     && lk != 6151                  // Character '<='
     && lk != 6152                  // String '<='
     && lk != 6153                  // Real '<='
     && lk != 6275                  // Identifier '='
     && lk != 6276                  // Null '='
     && lk != 6277                  // True '='
     && lk != 6278                  // False '='
     && lk != 6279                  // Character '='
     && lk != 6280                  // String '='
     && lk != 6281                  // Real '='
     && lk != 6403                  // Identifier '=='
     && lk != 6404                  // Null '=='
     && lk != 6405                  // True '=='
     && lk != 6406                  // False '=='
     && lk != 6407                  // Character '=='
     && lk != 6408                  // String '=='
     && lk != 6409                  // Real '=='
     && lk != 6531                  // Identifier '>'
     && lk != 6532                  // Null '>'
     && lk != 6533                  // True '>'
     && lk != 6534                  // False '>'
     && lk != 6535                  // Character '>'
     && lk != 6536                  // String '>'
     && lk != 6537                  // Real '>'
     && lk != 6659                  // Identifier '>='
     && lk != 6660                  // Null '>='
     && lk != 6661                  // True '>='
     && lk != 6662                  // False '>='
     && lk != 6663                  // Character '>='
     && lk != 6664                  // String '>='
     && lk != 6665                  // Real '>='
     && lk != 6787                  // Identifier '>>'
     && lk != 6788                  // Null '>>'
     && lk != 6789                  // True '>>'
     && lk != 6790                  // False '>>'
     && lk != 6791                  // Character '>>'
     && lk != 6792                  // String '>>'
     && lk != 6793                  // Real '>>'
     && lk != 6915                  // Identifier '>>='
     && lk != 6916                  // Null '>>='
     && lk != 6917                  // True '>>='
     && lk != 6918                  // False '>>='
     && lk != 6919                  // Character '>>='
     && lk != 6920                  // String '>>='
     && lk != 6921                  // Real '>>='
     && lk != 7043                  // Identifier '?'
     && lk != 7044                  // Null '?'
     && lk != 7045                  // True '?'
     && lk != 7046                  // False '?'
     && lk != 7047                  // Character '?'
     && lk != 7048                  // String '?'
     && lk != 7049                  // Real '?'
     && lk != 7172                  // Null '['
     && lk != 7173                  // True '['
     && lk != 7174                  // False '['
     && lk != 7175                  // Character '['
     && lk != 7176                  // String '['
     && lk != 7177                  // Real '['
     && lk != 7299                  // Identifier ']'
     && lk != 7300                  // Null ']'
     && lk != 7301                  // True ']'
     && lk != 7302                  // False ']'
     && lk != 7303                  // Character ']'
     && lk != 7304                  // String ']'
     && lk != 7305                  // Real ']'
     && lk != 7427                  // Identifier '^'
     && lk != 7428                  // Null '^'
     && lk != 7429                  // True '^'
     && lk != 7430                  // False '^'
     && lk != 7431                  // Character '^'
     && lk != 7432                  // String '^'
     && lk != 7433                  // Real '^'
     && lk != 7555                  // Identifier '^='
     && lk != 7556                  // Null '^='
     && lk != 7557                  // True '^='
     && lk != 7558                  // False '^='
     && lk != 7559                  // Character '^='
     && lk != 7560                  // String '^='
     && lk != 7561                  // Real '^='
     && lk != 7683                  // Identifier 'auto'
     && lk != 7684                  // Null 'auto'
     && lk != 7685                  // True 'auto'
     && lk != 7686                  // False 'auto'
     && lk != 7687                  // Character 'auto'
     && lk != 7688                  // String 'auto'
     && lk != 7689                  // Real 'auto'
     && lk != 7811                  // Identifier 'break'
     && lk != 7812                  // Null 'break'
     && lk != 7813                  // True 'break'
     && lk != 7814                  // False 'break'
     && lk != 7815                  // Character 'break'
     && lk != 7816                  // String 'break'
     && lk != 7817                  // Real 'break'
     && lk != 7939                  // Identifier 'case'
     && lk != 7940                  // Null 'case'
     && lk != 7941                  // True 'case'
     && lk != 7942                  // False 'case'
     && lk != 7943                  // Character 'case'
     && lk != 7944                  // String 'case'
     && lk != 7945                  // Real 'case'
     && lk != 8067                  // Identifier 'char'
     && lk != 8068                  // Null 'char'
     && lk != 8069                  // True 'char'
     && lk != 8070                  // False 'char'
     && lk != 8071                  // Character 'char'
     && lk != 8072                  // String 'char'
     && lk != 8073                  // Real 'char'
     && lk != 8195                  // Identifier 'const'
     && lk != 8196                  // Null 'const'
     && lk != 8197                  // True 'const'
     && lk != 8198                  // False 'const'
     && lk != 8199                  // Character 'const'
     && lk != 8200                  // String 'const'
     && lk != 8201                  // Real 'const'
     && lk != 8323                  // Identifier 'continue'
     && lk != 8324                  // Null 'continue'
     && lk != 8325                  // True 'continue'
     && lk != 8326                  // False 'continue'
     && lk != 8327                  // Character 'continue'
     && lk != 8328                  // String 'continue'
     && lk != 8329                  // Real 'continue'
     && lk != 8451                  // Identifier 'default'
     && lk != 8452                  // Null 'default'
     && lk != 8453                  // True 'default'
     && lk != 8454                  // False 'default'
     && lk != 8455                  // Character 'default'
     && lk != 8456                  // String 'default'
     && lk != 8457                  // Real 'default'
     && lk != 8579                  // Identifier 'do'
     && lk != 8580                  // Null 'do'
     && lk != 8581                  // True 'do'
     && lk != 8582                  // False 'do'
     && lk != 8583                  // Character 'do'
     && lk != 8584                  // String 'do'
     && lk != 8585                  // Real 'do'
     && lk != 8707                  // Identifier 'double'
     && lk != 8708                  // Null 'double'
     && lk != 8709                  // True 'double'
     && lk != 8710                  // False 'double'
     && lk != 8711                  // Character 'double'
     && lk != 8712                  // String 'double'
     && lk != 8713                  // Real 'double'
     && lk != 8835                  // Identifier 'else'
     && lk != 8836                  // Null 'else'
     && lk != 8837                  // True 'else'
     && lk != 8838                  // False 'else'
     && lk != 8839                  // Character 'else'
     && lk != 8840                  // String 'else'
     && lk != 8841                  // Real 'else'
     && lk != 8963                  // Identifier 'enum'
     && lk != 8964                  // Null 'enum'
     && lk != 8965                  // True 'enum'
     && lk != 8966                  // False 'enum'
     && lk != 8967                  // Character 'enum'
     && lk != 8968                  // String 'enum'
     && lk != 8969                  // Real 'enum'
     && lk != 9091                  // Identifier 'extern'
     && lk != 9092                  // Null 'extern'
     && lk != 9093                  // True 'extern'
     && lk != 9094                  // False 'extern'
     && lk != 9095                  // Character 'extern'
     && lk != 9096                  // String 'extern'
     && lk != 9097                  // Real 'extern'
     && lk != 9219                  // Identifier 'float'
     && lk != 9220                  // Null 'float'
     && lk != 9221                  // True 'float'
     && lk != 9222                  // False 'float'
     && lk != 9223                  // Character 'float'
     && lk != 9224                  // String 'float'
     && lk != 9225                  // Real 'float'
     && lk != 9347                  // Identifier 'for'
     && lk != 9348                  // Null 'for'
     && lk != 9349                  // True 'for'
     && lk != 9350                  // False 'for'
     && lk != 9351                  // Character 'for'
     && lk != 9352                  // String 'for'
     && lk != 9353                  // Real 'for'
     && lk != 9475                  // Identifier 'if'
     && lk != 9476                  // Null 'if'
     && lk != 9477                  // True 'if'
     && lk != 9478                  // False 'if'
     && lk != 9479                  // Character 'if'
     && lk != 9480                  // String 'if'
     && lk != 9481                  // Real 'if'
     && lk != 9603                  // Identifier 'int'
     && lk != 9604                  // Null 'int'
     && lk != 9605                  // True 'int'
     && lk != 9606                  // False 'int'
     && lk != 9607                  // Character 'int'
     && lk != 9608                  // String 'int'
     && lk != 9609                  // Real 'int'
     && lk != 9731                  // Identifier 'long'
     && lk != 9732                  // Null 'long'
     && lk != 9733                  // True 'long'
     && lk != 9734                  // False 'long'
     && lk != 9735                  // Character 'long'
     && lk != 9736                  // String 'long'
     && lk != 9737                  // Real 'long'
     && lk != 9859                  // Identifier 'return'
     && lk != 9860                  // Null 'return'
     && lk != 9861                  // True 'return'
     && lk != 9862                  // False 'return'
     && lk != 9863                  // Character 'return'
     && lk != 9864                  // String 'return'
     && lk != 9865                  // Real 'return'
     && lk != 9987                  // Identifier 'short'
     && lk != 9988                  // Null 'short'
     && lk != 9989                  // True 'short'
     && lk != 9990                  // False 'short'
     && lk != 9991                  // Character 'short'
     && lk != 9992                  // String 'short'
     && lk != 9993                  // Real 'short'
     && lk != 10115                 // Identifier 'signed'
     && lk != 10116                 // Null 'signed'
     && lk != 10117                 // True 'signed'
     && lk != 10118                 // False 'signed'
     && lk != 10119                 // Character 'signed'
     && lk != 10120                 // String 'signed'
     && lk != 10121                 // Real 'signed'
     && lk != 10243                 // Identifier 'sizeof'
     && lk != 10244                 // Null 'sizeof'
     && lk != 10245                 // True 'sizeof'
     && lk != 10246                 // False 'sizeof'
     && lk != 10247                 // Character 'sizeof'
     && lk != 10248                 // String 'sizeof'
     && lk != 10249                 // Real 'sizeof'
     && lk != 10371                 // Identifier 'static'
     && lk != 10372                 // Null 'static'
     && lk != 10373                 // True 'static'
     && lk != 10374                 // False 'static'
     && lk != 10375                 // Character 'static'
     && lk != 10376                 // String 'static'
     && lk != 10377                 // Real 'static'
     && lk != 10499                 // Identifier 'struct'
     && lk != 10500                 // Null 'struct'
     && lk != 10501                 // True 'struct'
     && lk != 10502                 // False 'struct'
     && lk != 10503                 // Character 'struct'
     && lk != 10504                 // String 'struct'
     && lk != 10505                 // Real 'struct'
     && lk != 10627                 // Identifier 'switch'
     && lk != 10628                 // Null 'switch'
     && lk != 10629                 // True 'switch'
     && lk != 10630                 // False 'switch'
     && lk != 10631                 // Character 'switch'
     && lk != 10632                 // String 'switch'
     && lk != 10633                 // Real 'switch'
     && lk != 10755                 // Identifier 'typedef'
     && lk != 10756                 // Null 'typedef'
     && lk != 10757                 // True 'typedef'
     && lk != 10758                 // False 'typedef'
     && lk != 10759                 // Character 'typedef'
     && lk != 10760                 // String 'typedef'
     && lk != 10761                 // Real 'typedef'
     && lk != 10883                 // Identifier 'union'
     && lk != 10884                 // Null 'union'
     && lk != 10885                 // True 'union'
     && lk != 10886                 // False 'union'
     && lk != 10887                 // Character 'union'
     && lk != 10888                 // String 'union'
     && lk != 10889                 // Real 'union'
     && lk != 11011                 // Identifier 'unsigned'
     && lk != 11012                 // Null 'unsigned'
     && lk != 11013                 // True 'unsigned'
     && lk != 11014                 // False 'unsigned'
     && lk != 11015                 // Character 'unsigned'
     && lk != 11016                 // String 'unsigned'
     && lk != 11017                 // Real 'unsigned'
     && lk != 11139                 // Identifier 'void'
     && lk != 11140                 // Null 'void'
     && lk != 11141                 // True 'void'
     && lk != 11142                 // False 'void'
     && lk != 11143                 // Character 'void'
     && lk != 11144                 // String 'void'
     && lk != 11145                 // Real 'void'
     && lk != 11267                 // Identifier 'volatile'
     && lk != 11268                 // Null 'volatile'
     && lk != 11269                 // True 'volatile'
     && lk != 11270                 // False 'volatile'
     && lk != 11271                 // Character 'volatile'
     && lk != 11272                 // String 'volatile'
     && lk != 11273                 // Real 'volatile'
     && lk != 11395                 // Identifier 'while'
     && lk != 11396                 // Null 'while'
     && lk != 11397                 // True 'while'
     && lk != 11398                 // False 'while'
     && lk != 11399                 // Character 'while'
     && lk != 11400                 // String 'while'
     && lk != 11401                 // Real 'while'
     && lk != 11523                 // Identifier '{'
     && lk != 11524                 // Null '{'
     && lk != 11525                 // True '{'
     && lk != 11526                 // False '{'
     && lk != 11527                 // Character '{'
     && lk != 11528                 // String '{'
     && lk != 11529                 // Real '{'
     && lk != 11651                 // Identifier '|'
     && lk != 11652                 // Null '|'
     && lk != 11653                 // True '|'
     && lk != 11654                 // False '|'
     && lk != 11655                 // Character '|'
     && lk != 11656                 // String '|'
     && lk != 11657                 // Real '|'
     && lk != 11779                 // Identifier '|='
     && lk != 11780                 // Null '|='
     && lk != 11781                 // True '|='
     && lk != 11782                 // False '|='
     && lk != 11783                 // Character '|='
     && lk != 11784                 // String '|='
     && lk != 11785                 // Real '|='
     && lk != 11907                 // Identifier '||'
     && lk != 11908                 // Null '||'
     && lk != 11909                 // True '||'
     && lk != 11910                 // False '||'
     && lk != 11911                 // Character '||'
     && lk != 11912                 // String '||'
     && lk != 11913                 // Real '||'
     && lk != 12035                 // Identifier '}'
     && lk != 12036                 // Null '}'
     && lk != 12037                 // True '}'
     && lk != 12038                 // False '}'
     && lk != 12039                 // Character '}'
     && lk != 12040                 // String '}'
     && lk != 12041                 // Real '}'
     && lk != 12163                 // Identifier '~'
     && lk != 12164                 // Null '~'
     && lk != 12165                 // True '~'
     && lk != 12166                 // False '~'
     && lk != 12167                 // Character '~'
     && lk != 12168                 // String '~'
     && lk != 12169                 // Real '~'
     && lk != 20611                 // Identifier '++' END
     && lk != 20612                 // Null '++' END
     && lk != 20613                 // True '++' END
     && lk != 20614                 // False '++' END
     && lk != 20615                 // Character '++' END
     && lk != 20616                 // String '++' END
     && lk != 20617                 // Real '++' END
     && lk != 21123                 // Identifier '--' END
     && lk != 21124                 // Null '--' END
     && lk != 21125                 // True '--' END
     && lk != 21126                 // False '--' END
     && lk != 21127                 // Character '--' END
     && lk != 21128                 // String '--' END
     && lk != 21129                 // Real '--' END
     && lk != 23736                 // '[' ']' END
     && lk != 56504                 // '[' ']' Identifier
     && lk != 72888                 // '[' ']' Null
     && lk != 89272                 // '[' ']' True
     && lk != 105656                // '[' ']' False
     && lk != 122040                // '[' ']' Character
     && lk != 138424                // '[' ']' String
     && lk != 154808                // '[' ']' Real
     && lk != 168067                // Identifier '++' Comment
     && lk != 168068                // Null '++' Comment
     && lk != 168069                // True '++' Comment
     && lk != 168070                // False '++' Comment
     && lk != 168071                // Character '++' Comment
     && lk != 168072                // String '++' Comment
     && lk != 168073                // Real '++' Comment
     && lk != 168579                // Identifier '--' Comment
     && lk != 168580                // Null '--' Comment
     && lk != 168581                // True '--' Comment
     && lk != 168582                // False '--' Comment
     && lk != 168583                // Character '--' Comment
     && lk != 168584                // String '--' Comment
     && lk != 168585                // Real '--' Comment
     && lk != 171192                // '[' ']' Comment
     && lk != 200835                // Identifier '++' '!'
     && lk != 200836                // Null '++' '!'
     && lk != 200837                // True '++' '!'
     && lk != 200838                // False '++' '!'
     && lk != 200839                // Character '++' '!'
     && lk != 200840                // String '++' '!'
     && lk != 200841                // Real '++' '!'
     && lk != 201347                // Identifier '--' '!'
     && lk != 201348                // Null '--' '!'
     && lk != 201349                // True '--' '!'
     && lk != 201350                // False '--' '!'
     && lk != 201351                // Character '--' '!'
     && lk != 201352                // String '--' '!'
     && lk != 201353                // Real '--' '!'
     && lk != 203960                // '[' ']' '!'
     && lk != 217219                // Identifier '++' '!='
     && lk != 217220                // Null '++' '!='
     && lk != 217221                // True '++' '!='
     && lk != 217222                // False '++' '!='
     && lk != 217223                // Character '++' '!='
     && lk != 217224                // String '++' '!='
     && lk != 217225                // Real '++' '!='
     && lk != 217731                // Identifier '--' '!='
     && lk != 217732                // Null '--' '!='
     && lk != 217733                // True '--' '!='
     && lk != 217734                // False '--' '!='
     && lk != 217735                // Character '--' '!='
     && lk != 217736                // String '--' '!='
     && lk != 217737                // Real '--' '!='
     && lk != 220344                // '[' ']' '!='
     && lk != 233603                // Identifier '++' '#define'
     && lk != 233604                // Null '++' '#define'
     && lk != 233605                // True '++' '#define'
     && lk != 233606                // False '++' '#define'
     && lk != 233607                // Character '++' '#define'
     && lk != 233608                // String '++' '#define'
     && lk != 233609                // Real '++' '#define'
     && lk != 234115                // Identifier '--' '#define'
     && lk != 234116                // Null '--' '#define'
     && lk != 234117                // True '--' '#define'
     && lk != 234118                // False '--' '#define'
     && lk != 234119                // Character '--' '#define'
     && lk != 234120                // String '--' '#define'
     && lk != 234121                // Real '--' '#define'
     && lk != 236728                // '[' ']' '#define'
     && lk != 249987                // Identifier '++' '#elif'
     && lk != 249988                // Null '++' '#elif'
     && lk != 249989                // True '++' '#elif'
     && lk != 249990                // False '++' '#elif'
     && lk != 249991                // Character '++' '#elif'
     && lk != 249992                // String '++' '#elif'
     && lk != 249993                // Real '++' '#elif'
     && lk != 250499                // Identifier '--' '#elif'
     && lk != 250500                // Null '--' '#elif'
     && lk != 250501                // True '--' '#elif'
     && lk != 250502                // False '--' '#elif'
     && lk != 250503                // Character '--' '#elif'
     && lk != 250504                // String '--' '#elif'
     && lk != 250505                // Real '--' '#elif'
     && lk != 253112                // '[' ']' '#elif'
     && lk != 266371                // Identifier '++' '#else'
     && lk != 266372                // Null '++' '#else'
     && lk != 266373                // True '++' '#else'
     && lk != 266374                // False '++' '#else'
     && lk != 266375                // Character '++' '#else'
     && lk != 266376                // String '++' '#else'
     && lk != 266377                // Real '++' '#else'
     && lk != 266883                // Identifier '--' '#else'
     && lk != 266884                // Null '--' '#else'
     && lk != 266885                // True '--' '#else'
     && lk != 266886                // False '--' '#else'
     && lk != 266887                // Character '--' '#else'
     && lk != 266888                // String '--' '#else'
     && lk != 266889                // Real '--' '#else'
     && lk != 269496                // '[' ']' '#else'
     && lk != 282755                // Identifier '++' '#endif'
     && lk != 282756                // Null '++' '#endif'
     && lk != 282757                // True '++' '#endif'
     && lk != 282758                // False '++' '#endif'
     && lk != 282759                // Character '++' '#endif'
     && lk != 282760                // String '++' '#endif'
     && lk != 282761                // Real '++' '#endif'
     && lk != 283267                // Identifier '--' '#endif'
     && lk != 283268                // Null '--' '#endif'
     && lk != 283269                // True '--' '#endif'
     && lk != 283270                // False '--' '#endif'
     && lk != 283271                // Character '--' '#endif'
     && lk != 283272                // String '--' '#endif'
     && lk != 283273                // Real '--' '#endif'
     && lk != 285880                // '[' ']' '#endif'
     && lk != 299139                // Identifier '++' '#if'
     && lk != 299140                // Null '++' '#if'
     && lk != 299141                // True '++' '#if'
     && lk != 299142                // False '++' '#if'
     && lk != 299143                // Character '++' '#if'
     && lk != 299144                // String '++' '#if'
     && lk != 299145                // Real '++' '#if'
     && lk != 299651                // Identifier '--' '#if'
     && lk != 299652                // Null '--' '#if'
     && lk != 299653                // True '--' '#if'
     && lk != 299654                // False '--' '#if'
     && lk != 299655                // Character '--' '#if'
     && lk != 299656                // String '--' '#if'
     && lk != 299657                // Real '--' '#if'
     && lk != 302264                // '[' ']' '#if'
     && lk != 315523                // Identifier '++' '#ifdef'
     && lk != 315524                // Null '++' '#ifdef'
     && lk != 315525                // True '++' '#ifdef'
     && lk != 315526                // False '++' '#ifdef'
     && lk != 315527                // Character '++' '#ifdef'
     && lk != 315528                // String '++' '#ifdef'
     && lk != 315529                // Real '++' '#ifdef'
     && lk != 316035                // Identifier '--' '#ifdef'
     && lk != 316036                // Null '--' '#ifdef'
     && lk != 316037                // True '--' '#ifdef'
     && lk != 316038                // False '--' '#ifdef'
     && lk != 316039                // Character '--' '#ifdef'
     && lk != 316040                // String '--' '#ifdef'
     && lk != 316041                // Real '--' '#ifdef'
     && lk != 318648                // '[' ']' '#ifdef'
     && lk != 331907                // Identifier '++' '#ifndef'
     && lk != 331908                // Null '++' '#ifndef'
     && lk != 331909                // True '++' '#ifndef'
     && lk != 331910                // False '++' '#ifndef'
     && lk != 331911                // Character '++' '#ifndef'
     && lk != 331912                // String '++' '#ifndef'
     && lk != 331913                // Real '++' '#ifndef'
     && lk != 332419                // Identifier '--' '#ifndef'
     && lk != 332420                // Null '--' '#ifndef'
     && lk != 332421                // True '--' '#ifndef'
     && lk != 332422                // False '--' '#ifndef'
     && lk != 332423                // Character '--' '#ifndef'
     && lk != 332424                // String '--' '#ifndef'
     && lk != 332425                // Real '--' '#ifndef'
     && lk != 335032                // '[' ']' '#ifndef'
     && lk != 348291                // Identifier '++' '#include'
     && lk != 348292                // Null '++' '#include'
     && lk != 348293                // True '++' '#include'
     && lk != 348294                // False '++' '#include'
     && lk != 348295                // Character '++' '#include'
     && lk != 348296                // String '++' '#include'
     && lk != 348297                // Real '++' '#include'
     && lk != 348803                // Identifier '--' '#include'
     && lk != 348804                // Null '--' '#include'
     && lk != 348805                // True '--' '#include'
     && lk != 348806                // False '--' '#include'
     && lk != 348807                // Character '--' '#include'
     && lk != 348808                // String '--' '#include'
     && lk != 348809                // Real '--' '#include'
     && lk != 351416                // '[' ']' '#include'
     && lk != 364675                // Identifier '++' '#undef'
     && lk != 364676                // Null '++' '#undef'
     && lk != 364677                // True '++' '#undef'
     && lk != 364678                // False '++' '#undef'
     && lk != 364679                // Character '++' '#undef'
     && lk != 364680                // String '++' '#undef'
     && lk != 364681                // Real '++' '#undef'
     && lk != 365187                // Identifier '--' '#undef'
     && lk != 365188                // Null '--' '#undef'
     && lk != 365189                // True '--' '#undef'
     && lk != 365190                // False '--' '#undef'
     && lk != 365191                // Character '--' '#undef'
     && lk != 365192                // String '--' '#undef'
     && lk != 365193                // Real '--' '#undef'
     && lk != 367800                // '[' ']' '#undef'
     && lk != 381059                // Identifier '++' '%'
     && lk != 381060                // Null '++' '%'
     && lk != 381061                // True '++' '%'
     && lk != 381062                // False '++' '%'
     && lk != 381063                // Character '++' '%'
     && lk != 381064                // String '++' '%'
     && lk != 381065                // Real '++' '%'
     && lk != 381571                // Identifier '--' '%'
     && lk != 381572                // Null '--' '%'
     && lk != 381573                // True '--' '%'
     && lk != 381574                // False '--' '%'
     && lk != 381575                // Character '--' '%'
     && lk != 381576                // String '--' '%'
     && lk != 381577                // Real '--' '%'
     && lk != 384184                // '[' ']' '%'
     && lk != 397443                // Identifier '++' '%='
     && lk != 397444                // Null '++' '%='
     && lk != 397445                // True '++' '%='
     && lk != 397446                // False '++' '%='
     && lk != 397447                // Character '++' '%='
     && lk != 397448                // String '++' '%='
     && lk != 397449                // Real '++' '%='
     && lk != 397955                // Identifier '--' '%='
     && lk != 397956                // Null '--' '%='
     && lk != 397957                // True '--' '%='
     && lk != 397958                // False '--' '%='
     && lk != 397959                // Character '--' '%='
     && lk != 397960                // String '--' '%='
     && lk != 397961                // Real '--' '%='
     && lk != 400568                // '[' ']' '%='
     && lk != 413827                // Identifier '++' '&'
     && lk != 413828                // Null '++' '&'
     && lk != 413829                // True '++' '&'
     && lk != 413830                // False '++' '&'
     && lk != 413831                // Character '++' '&'
     && lk != 413832                // String '++' '&'
     && lk != 413833                // Real '++' '&'
     && lk != 414339                // Identifier '--' '&'
     && lk != 414340                // Null '--' '&'
     && lk != 414341                // True '--' '&'
     && lk != 414342                // False '--' '&'
     && lk != 414343                // Character '--' '&'
     && lk != 414344                // String '--' '&'
     && lk != 414345                // Real '--' '&'
     && lk != 416952                // '[' ']' '&'
     && lk != 430211                // Identifier '++' '&&'
     && lk != 430212                // Null '++' '&&'
     && lk != 430213                // True '++' '&&'
     && lk != 430214                // False '++' '&&'
     && lk != 430215                // Character '++' '&&'
     && lk != 430216                // String '++' '&&'
     && lk != 430217                // Real '++' '&&'
     && lk != 430723                // Identifier '--' '&&'
     && lk != 430724                // Null '--' '&&'
     && lk != 430725                // True '--' '&&'
     && lk != 430726                // False '--' '&&'
     && lk != 430727                // Character '--' '&&'
     && lk != 430728                // String '--' '&&'
     && lk != 430729                // Real '--' '&&'
     && lk != 433336                // '[' ']' '&&'
     && lk != 446595                // Identifier '++' '&='
     && lk != 446596                // Null '++' '&='
     && lk != 446597                // True '++' '&='
     && lk != 446598                // False '++' '&='
     && lk != 446599                // Character '++' '&='
     && lk != 446600                // String '++' '&='
     && lk != 446601                // Real '++' '&='
     && lk != 447107                // Identifier '--' '&='
     && lk != 447108                // Null '--' '&='
     && lk != 447109                // True '--' '&='
     && lk != 447110                // False '--' '&='
     && lk != 447111                // Character '--' '&='
     && lk != 447112                // String '--' '&='
     && lk != 447113                // Real '--' '&='
     && lk != 449720                // '[' ']' '&='
     && lk != 466104                // '[' ']' '('
     && lk != 479363                // Identifier '++' ')'
     && lk != 479364                // Null '++' ')'
     && lk != 479365                // True '++' ')'
     && lk != 479366                // False '++' ')'
     && lk != 479367                // Character '++' ')'
     && lk != 479368                // String '++' ')'
     && lk != 479369                // Real '++' ')'
     && lk != 479875                // Identifier '--' ')'
     && lk != 479876                // Null '--' ')'
     && lk != 479877                // True '--' ')'
     && lk != 479878                // False '--' ')'
     && lk != 479879                // Character '--' ')'
     && lk != 479880                // String '--' ')'
     && lk != 479881                // Real '--' ')'
     && lk != 482488                // '[' ']' ')'
     && lk != 495747                // Identifier '++' '*'
     && lk != 495748                // Null '++' '*'
     && lk != 495749                // True '++' '*'
     && lk != 495750                // False '++' '*'
     && lk != 495751                // Character '++' '*'
     && lk != 495752                // String '++' '*'
     && lk != 495753                // Real '++' '*'
     && lk != 496259                // Identifier '--' '*'
     && lk != 496260                // Null '--' '*'
     && lk != 496261                // True '--' '*'
     && lk != 496262                // False '--' '*'
     && lk != 496263                // Character '--' '*'
     && lk != 496264                // String '--' '*'
     && lk != 496265                // Real '--' '*'
     && lk != 498872                // '[' ']' '*'
     && lk != 512131                // Identifier '++' '*='
     && lk != 512132                // Null '++' '*='
     && lk != 512133                // True '++' '*='
     && lk != 512134                // False '++' '*='
     && lk != 512135                // Character '++' '*='
     && lk != 512136                // String '++' '*='
     && lk != 512137                // Real '++' '*='
     && lk != 512643                // Identifier '--' '*='
     && lk != 512644                // Null '--' '*='
     && lk != 512645                // True '--' '*='
     && lk != 512646                // False '--' '*='
     && lk != 512647                // Character '--' '*='
     && lk != 512648                // String '--' '*='
     && lk != 512649                // Real '--' '*='
     && lk != 515256                // '[' ']' '*='
     && lk != 528515                // Identifier '++' '+'
     && lk != 528516                // Null '++' '+'
     && lk != 528517                // True '++' '+'
     && lk != 528518                // False '++' '+'
     && lk != 528519                // Character '++' '+'
     && lk != 528520                // String '++' '+'
     && lk != 528521                // Real '++' '+'
     && lk != 529027                // Identifier '--' '+'
     && lk != 529028                // Null '--' '+'
     && lk != 529029                // True '--' '+'
     && lk != 529030                // False '--' '+'
     && lk != 529031                // Character '--' '+'
     && lk != 529032                // String '--' '+'
     && lk != 529033                // Real '--' '+'
     && lk != 531640                // '[' ']' '+'
     && lk != 544899                // Identifier '++' '++'
     && lk != 544900                // Null '++' '++'
     && lk != 544901                // True '++' '++'
     && lk != 544902                // False '++' '++'
     && lk != 544903                // Character '++' '++'
     && lk != 544904                // String '++' '++'
     && lk != 544905                // Real '++' '++'
     && lk != 545411                // Identifier '--' '++'
     && lk != 545412                // Null '--' '++'
     && lk != 545413                // True '--' '++'
     && lk != 545414                // False '--' '++'
     && lk != 545415                // Character '--' '++'
     && lk != 545416                // String '--' '++'
     && lk != 545417                // Real '--' '++'
     && lk != 561283                // Identifier '++' '+='
     && lk != 561284                // Null '++' '+='
     && lk != 561285                // True '++' '+='
     && lk != 561286                // False '++' '+='
     && lk != 561287                // Character '++' '+='
     && lk != 561288                // String '++' '+='
     && lk != 561289                // Real '++' '+='
     && lk != 561795                // Identifier '--' '+='
     && lk != 561796                // Null '--' '+='
     && lk != 561797                // True '--' '+='
     && lk != 561798                // False '--' '+='
     && lk != 561799                // Character '--' '+='
     && lk != 561800                // String '--' '+='
     && lk != 561801                // Real '--' '+='
     && lk != 564408                // '[' ']' '+='
     && lk != 577667                // Identifier '++' ','
     && lk != 577668                // Null '++' ','
     && lk != 577669                // True '++' ','
     && lk != 577670                // False '++' ','
     && lk != 577671                // Character '++' ','
     && lk != 577672                // String '++' ','
     && lk != 577673                // Real '++' ','
     && lk != 578179                // Identifier '--' ','
     && lk != 578180                // Null '--' ','
     && lk != 578181                // True '--' ','
     && lk != 578182                // False '--' ','
     && lk != 578183                // Character '--' ','
     && lk != 578184                // String '--' ','
     && lk != 578185                // Real '--' ','
     && lk != 580792                // '[' ']' ','
     && lk != 594051                // Identifier '++' '-'
     && lk != 594052                // Null '++' '-'
     && lk != 594053                // True '++' '-'
     && lk != 594054                // False '++' '-'
     && lk != 594055                // Character '++' '-'
     && lk != 594056                // String '++' '-'
     && lk != 594057                // Real '++' '-'
     && lk != 594563                // Identifier '--' '-'
     && lk != 594564                // Null '--' '-'
     && lk != 594565                // True '--' '-'
     && lk != 594566                // False '--' '-'
     && lk != 594567                // Character '--' '-'
     && lk != 594568                // String '--' '-'
     && lk != 594569                // Real '--' '-'
     && lk != 597176                // '[' ']' '-'
     && lk != 610435                // Identifier '++' '--'
     && lk != 610436                // Null '++' '--'
     && lk != 610437                // True '++' '--'
     && lk != 610438                // False '++' '--'
     && lk != 610439                // Character '++' '--'
     && lk != 610440                // String '++' '--'
     && lk != 610441                // Real '++' '--'
     && lk != 610947                // Identifier '--' '--'
     && lk != 610948                // Null '--' '--'
     && lk != 610949                // True '--' '--'
     && lk != 610950                // False '--' '--'
     && lk != 610951                // Character '--' '--'
     && lk != 610952                // String '--' '--'
     && lk != 610953                // Real '--' '--'
     && lk != 626819                // Identifier '++' '-='
     && lk != 626820                // Null '++' '-='
     && lk != 626821                // True '++' '-='
     && lk != 626822                // False '++' '-='
     && lk != 626823                // Character '++' '-='
     && lk != 626824                // String '++' '-='
     && lk != 626825                // Real '++' '-='
     && lk != 627331                // Identifier '--' '-='
     && lk != 627332                // Null '--' '-='
     && lk != 627333                // True '--' '-='
     && lk != 627334                // False '--' '-='
     && lk != 627335                // Character '--' '-='
     && lk != 627336                // String '--' '-='
     && lk != 627337                // Real '--' '-='
     && lk != 629944                // '[' ']' '-='
     && lk != 675971                // Identifier '++' '/'
     && lk != 675972                // Null '++' '/'
     && lk != 675973                // True '++' '/'
     && lk != 675974                // False '++' '/'
     && lk != 675975                // Character '++' '/'
     && lk != 675976                // String '++' '/'
     && lk != 675977                // Real '++' '/'
     && lk != 676483                // Identifier '--' '/'
     && lk != 676484                // Null '--' '/'
     && lk != 676485                // True '--' '/'
     && lk != 676486                // False '--' '/'
     && lk != 676487                // Character '--' '/'
     && lk != 676488                // String '--' '/'
     && lk != 676489                // Real '--' '/'
     && lk != 679096                // '[' ']' '/'
     && lk != 692355                // Identifier '++' '/='
     && lk != 692356                // Null '++' '/='
     && lk != 692357                // True '++' '/='
     && lk != 692358                // False '++' '/='
     && lk != 692359                // Character '++' '/='
     && lk != 692360                // String '++' '/='
     && lk != 692361                // Real '++' '/='
     && lk != 692867                // Identifier '--' '/='
     && lk != 692868                // Null '--' '/='
     && lk != 692869                // True '--' '/='
     && lk != 692870                // False '--' '/='
     && lk != 692871                // Character '--' '/='
     && lk != 692872                // String '--' '/='
     && lk != 692873                // Real '--' '/='
     && lk != 695480                // '[' ']' '/='
     && lk != 708739                // Identifier '++' ':'
     && lk != 708740                // Null '++' ':'
     && lk != 708741                // True '++' ':'
     && lk != 708742                // False '++' ':'
     && lk != 708743                // Character '++' ':'
     && lk != 708744                // String '++' ':'
     && lk != 708745                // Real '++' ':'
     && lk != 709251                // Identifier '--' ':'
     && lk != 709252                // Null '--' ':'
     && lk != 709253                // True '--' ':'
     && lk != 709254                // False '--' ':'
     && lk != 709255                // Character '--' ':'
     && lk != 709256                // String '--' ':'
     && lk != 709257                // Real '--' ':'
     && lk != 711864                // '[' ']' ':'
     && lk != 725123                // Identifier '++' ';'
     && lk != 725124                // Null '++' ';'
     && lk != 725125                // True '++' ';'
     && lk != 725126                // False '++' ';'
     && lk != 725127                // Character '++' ';'
     && lk != 725128                // String '++' ';'
     && lk != 725129                // Real '++' ';'
     && lk != 725635                // Identifier '--' ';'
     && lk != 725636                // Null '--' ';'
     && lk != 725637                // True '--' ';'
     && lk != 725638                // False '--' ';'
     && lk != 725639                // Character '--' ';'
     && lk != 725640                // String '--' ';'
     && lk != 725641                // Real '--' ';'
     && lk != 728248                // '[' ']' ';'
     && lk != 741507                // Identifier '++' '<'
     && lk != 741508                // Null '++' '<'
     && lk != 741509                // True '++' '<'
     && lk != 741510                // False '++' '<'
     && lk != 741511                // Character '++' '<'
     && lk != 741512                // String '++' '<'
     && lk != 741513                // Real '++' '<'
     && lk != 742019                // Identifier '--' '<'
     && lk != 742020                // Null '--' '<'
     && lk != 742021                // True '--' '<'
     && lk != 742022                // False '--' '<'
     && lk != 742023                // Character '--' '<'
     && lk != 742024                // String '--' '<'
     && lk != 742025                // Real '--' '<'
     && lk != 744632                // '[' ']' '<'
     && lk != 757891                // Identifier '++' '<<'
     && lk != 757892                // Null '++' '<<'
     && lk != 757893                // True '++' '<<'
     && lk != 757894                // False '++' '<<'
     && lk != 757895                // Character '++' '<<'
     && lk != 757896                // String '++' '<<'
     && lk != 757897                // Real '++' '<<'
     && lk != 758403                // Identifier '--' '<<'
     && lk != 758404                // Null '--' '<<'
     && lk != 758405                // True '--' '<<'
     && lk != 758406                // False '--' '<<'
     && lk != 758407                // Character '--' '<<'
     && lk != 758408                // String '--' '<<'
     && lk != 758409                // Real '--' '<<'
     && lk != 761016                // '[' ']' '<<'
     && lk != 774275                // Identifier '++' '<<='
     && lk != 774276                // Null '++' '<<='
     && lk != 774277                // True '++' '<<='
     && lk != 774278                // False '++' '<<='
     && lk != 774279                // Character '++' '<<='
     && lk != 774280                // String '++' '<<='
     && lk != 774281                // Real '++' '<<='
     && lk != 774787                // Identifier '--' '<<='
     && lk != 774788                // Null '--' '<<='
     && lk != 774789                // True '--' '<<='
     && lk != 774790                // False '--' '<<='
     && lk != 774791                // Character '--' '<<='
     && lk != 774792                // String '--' '<<='
     && lk != 774793                // Real '--' '<<='
     && lk != 777400                // '[' ']' '<<='
     && lk != 790659                // Identifier '++' '<='
     && lk != 790660                // Null '++' '<='
     && lk != 790661                // True '++' '<='
     && lk != 790662                // False '++' '<='
     && lk != 790663                // Character '++' '<='
     && lk != 790664                // String '++' '<='
     && lk != 790665                // Real '++' '<='
     && lk != 791171                // Identifier '--' '<='
     && lk != 791172                // Null '--' '<='
     && lk != 791173                // True '--' '<='
     && lk != 791174                // False '--' '<='
     && lk != 791175                // Character '--' '<='
     && lk != 791176                // String '--' '<='
     && lk != 791177                // Real '--' '<='
     && lk != 793784                // '[' ']' '<='
     && lk != 807043                // Identifier '++' '='
     && lk != 807044                // Null '++' '='
     && lk != 807045                // True '++' '='
     && lk != 807046                // False '++' '='
     && lk != 807047                // Character '++' '='
     && lk != 807048                // String '++' '='
     && lk != 807049                // Real '++' '='
     && lk != 807555                // Identifier '--' '='
     && lk != 807556                // Null '--' '='
     && lk != 807557                // True '--' '='
     && lk != 807558                // False '--' '='
     && lk != 807559                // Character '--' '='
     && lk != 807560                // String '--' '='
     && lk != 807561                // Real '--' '='
     && lk != 810168                // '[' ']' '='
     && lk != 823427                // Identifier '++' '=='
     && lk != 823428                // Null '++' '=='
     && lk != 823429                // True '++' '=='
     && lk != 823430                // False '++' '=='
     && lk != 823431                // Character '++' '=='
     && lk != 823432                // String '++' '=='
     && lk != 823433                // Real '++' '=='
     && lk != 823939                // Identifier '--' '=='
     && lk != 823940                // Null '--' '=='
     && lk != 823941                // True '--' '=='
     && lk != 823942                // False '--' '=='
     && lk != 823943                // Character '--' '=='
     && lk != 823944                // String '--' '=='
     && lk != 823945                // Real '--' '=='
     && lk != 826552                // '[' ']' '=='
     && lk != 839811                // Identifier '++' '>'
     && lk != 839812                // Null '++' '>'
     && lk != 839813                // True '++' '>'
     && lk != 839814                // False '++' '>'
     && lk != 839815                // Character '++' '>'
     && lk != 839816                // String '++' '>'
     && lk != 839817                // Real '++' '>'
     && lk != 840323                // Identifier '--' '>'
     && lk != 840324                // Null '--' '>'
     && lk != 840325                // True '--' '>'
     && lk != 840326                // False '--' '>'
     && lk != 840327                // Character '--' '>'
     && lk != 840328                // String '--' '>'
     && lk != 840329                // Real '--' '>'
     && lk != 842936                // '[' ']' '>'
     && lk != 856195                // Identifier '++' '>='
     && lk != 856196                // Null '++' '>='
     && lk != 856197                // True '++' '>='
     && lk != 856198                // False '++' '>='
     && lk != 856199                // Character '++' '>='
     && lk != 856200                // String '++' '>='
     && lk != 856201                // Real '++' '>='
     && lk != 856707                // Identifier '--' '>='
     && lk != 856708                // Null '--' '>='
     && lk != 856709                // True '--' '>='
     && lk != 856710                // False '--' '>='
     && lk != 856711                // Character '--' '>='
     && lk != 856712                // String '--' '>='
     && lk != 856713                // Real '--' '>='
     && lk != 859320                // '[' ']' '>='
     && lk != 872579                // Identifier '++' '>>'
     && lk != 872580                // Null '++' '>>'
     && lk != 872581                // True '++' '>>'
     && lk != 872582                // False '++' '>>'
     && lk != 872583                // Character '++' '>>'
     && lk != 872584                // String '++' '>>'
     && lk != 872585                // Real '++' '>>'
     && lk != 873091                // Identifier '--' '>>'
     && lk != 873092                // Null '--' '>>'
     && lk != 873093                // True '--' '>>'
     && lk != 873094                // False '--' '>>'
     && lk != 873095                // Character '--' '>>'
     && lk != 873096                // String '--' '>>'
     && lk != 873097                // Real '--' '>>'
     && lk != 875704                // '[' ']' '>>'
     && lk != 888963                // Identifier '++' '>>='
     && lk != 888964                // Null '++' '>>='
     && lk != 888965                // True '++' '>>='
     && lk != 888966                // False '++' '>>='
     && lk != 888967                // Character '++' '>>='
     && lk != 888968                // String '++' '>>='
     && lk != 888969                // Real '++' '>>='
     && lk != 889475                // Identifier '--' '>>='
     && lk != 889476                // Null '--' '>>='
     && lk != 889477                // True '--' '>>='
     && lk != 889478                // False '--' '>>='
     && lk != 889479                // Character '--' '>>='
     && lk != 889480                // String '--' '>>='
     && lk != 889481                // Real '--' '>>='
     && lk != 892088                // '[' ']' '>>='
     && lk != 905347                // Identifier '++' '?'
     && lk != 905348                // Null '++' '?'
     && lk != 905349                // True '++' '?'
     && lk != 905350                // False '++' '?'
     && lk != 905351                // Character '++' '?'
     && lk != 905352                // String '++' '?'
     && lk != 905353                // Real '++' '?'
     && lk != 905859                // Identifier '--' '?'
     && lk != 905860                // Null '--' '?'
     && lk != 905861                // True '--' '?'
     && lk != 905862                // False '--' '?'
     && lk != 905863                // Character '--' '?'
     && lk != 905864                // String '--' '?'
     && lk != 905865                // Real '--' '?'
     && lk != 908472                // '[' ']' '?'
     && lk != 924856                // '[' ']' '['
     && lk != 938115                // Identifier '++' ']'
     && lk != 938116                // Null '++' ']'
     && lk != 938117                // True '++' ']'
     && lk != 938118                // False '++' ']'
     && lk != 938119                // Character '++' ']'
     && lk != 938120                // String '++' ']'
     && lk != 938121                // Real '++' ']'
     && lk != 938627                // Identifier '--' ']'
     && lk != 938628                // Null '--' ']'
     && lk != 938629                // True '--' ']'
     && lk != 938630                // False '--' ']'
     && lk != 938631                // Character '--' ']'
     && lk != 938632                // String '--' ']'
     && lk != 938633                // Real '--' ']'
     && lk != 941059                // Identifier '[' ']'
     && lk != 941240                // '[' ']' ']'
     && lk != 954499                // Identifier '++' '^'
     && lk != 954500                // Null '++' '^'
     && lk != 954501                // True '++' '^'
     && lk != 954502                // False '++' '^'
     && lk != 954503                // Character '++' '^'
     && lk != 954504                // String '++' '^'
     && lk != 954505                // Real '++' '^'
     && lk != 955011                // Identifier '--' '^'
     && lk != 955012                // Null '--' '^'
     && lk != 955013                // True '--' '^'
     && lk != 955014                // False '--' '^'
     && lk != 955015                // Character '--' '^'
     && lk != 955016                // String '--' '^'
     && lk != 955017                // Real '--' '^'
     && lk != 957624                // '[' ']' '^'
     && lk != 970883                // Identifier '++' '^='
     && lk != 970884                // Null '++' '^='
     && lk != 970885                // True '++' '^='
     && lk != 970886                // False '++' '^='
     && lk != 970887                // Character '++' '^='
     && lk != 970888                // String '++' '^='
     && lk != 970889                // Real '++' '^='
     && lk != 971395                // Identifier '--' '^='
     && lk != 971396                // Null '--' '^='
     && lk != 971397                // True '--' '^='
     && lk != 971398                // False '--' '^='
     && lk != 971399                // Character '--' '^='
     && lk != 971400                // String '--' '^='
     && lk != 971401                // Real '--' '^='
     && lk != 974008                // '[' ']' '^='
     && lk != 987267                // Identifier '++' 'auto'
     && lk != 987268                // Null '++' 'auto'
     && lk != 987269                // True '++' 'auto'
     && lk != 987270                // False '++' 'auto'
     && lk != 987271                // Character '++' 'auto'
     && lk != 987272                // String '++' 'auto'
     && lk != 987273                // Real '++' 'auto'
     && lk != 987779                // Identifier '--' 'auto'
     && lk != 987780                // Null '--' 'auto'
     && lk != 987781                // True '--' 'auto'
     && lk != 987782                // False '--' 'auto'
     && lk != 987783                // Character '--' 'auto'
     && lk != 987784                // String '--' 'auto'
     && lk != 987785                // Real '--' 'auto'
     && lk != 990392                // '[' ']' 'auto'
     && lk != 1003651               // Identifier '++' 'break'
     && lk != 1003652               // Null '++' 'break'
     && lk != 1003653               // True '++' 'break'
     && lk != 1003654               // False '++' 'break'
     && lk != 1003655               // Character '++' 'break'
     && lk != 1003656               // String '++' 'break'
     && lk != 1003657               // Real '++' 'break'
     && lk != 1004163               // Identifier '--' 'break'
     && lk != 1004164               // Null '--' 'break'
     && lk != 1004165               // True '--' 'break'
     && lk != 1004166               // False '--' 'break'
     && lk != 1004167               // Character '--' 'break'
     && lk != 1004168               // String '--' 'break'
     && lk != 1004169               // Real '--' 'break'
     && lk != 1006776               // '[' ']' 'break'
     && lk != 1020035               // Identifier '++' 'case'
     && lk != 1020036               // Null '++' 'case'
     && lk != 1020037               // True '++' 'case'
     && lk != 1020038               // False '++' 'case'
     && lk != 1020039               // Character '++' 'case'
     && lk != 1020040               // String '++' 'case'
     && lk != 1020041               // Real '++' 'case'
     && lk != 1020547               // Identifier '--' 'case'
     && lk != 1020548               // Null '--' 'case'
     && lk != 1020549               // True '--' 'case'
     && lk != 1020550               // False '--' 'case'
     && lk != 1020551               // Character '--' 'case'
     && lk != 1020552               // String '--' 'case'
     && lk != 1020553               // Real '--' 'case'
     && lk != 1023160               // '[' ']' 'case'
     && lk != 1036419               // Identifier '++' 'char'
     && lk != 1036420               // Null '++' 'char'
     && lk != 1036421               // True '++' 'char'
     && lk != 1036422               // False '++' 'char'
     && lk != 1036423               // Character '++' 'char'
     && lk != 1036424               // String '++' 'char'
     && lk != 1036425               // Real '++' 'char'
     && lk != 1036931               // Identifier '--' 'char'
     && lk != 1036932               // Null '--' 'char'
     && lk != 1036933               // True '--' 'char'
     && lk != 1036934               // False '--' 'char'
     && lk != 1036935               // Character '--' 'char'
     && lk != 1036936               // String '--' 'char'
     && lk != 1036937               // Real '--' 'char'
     && lk != 1039544               // '[' ']' 'char'
     && lk != 1052803               // Identifier '++' 'const'
     && lk != 1052804               // Null '++' 'const'
     && lk != 1052805               // True '++' 'const'
     && lk != 1052806               // False '++' 'const'
     && lk != 1052807               // Character '++' 'const'
     && lk != 1052808               // String '++' 'const'
     && lk != 1052809               // Real '++' 'const'
     && lk != 1053315               // Identifier '--' 'const'
     && lk != 1053316               // Null '--' 'const'
     && lk != 1053317               // True '--' 'const'
     && lk != 1053318               // False '--' 'const'
     && lk != 1053319               // Character '--' 'const'
     && lk != 1053320               // String '--' 'const'
     && lk != 1053321               // Real '--' 'const'
     && lk != 1055928               // '[' ']' 'const'
     && lk != 1069187               // Identifier '++' 'continue'
     && lk != 1069188               // Null '++' 'continue'
     && lk != 1069189               // True '++' 'continue'
     && lk != 1069190               // False '++' 'continue'
     && lk != 1069191               // Character '++' 'continue'
     && lk != 1069192               // String '++' 'continue'
     && lk != 1069193               // Real '++' 'continue'
     && lk != 1069699               // Identifier '--' 'continue'
     && lk != 1069700               // Null '--' 'continue'
     && lk != 1069701               // True '--' 'continue'
     && lk != 1069702               // False '--' 'continue'
     && lk != 1069703               // Character '--' 'continue'
     && lk != 1069704               // String '--' 'continue'
     && lk != 1069705               // Real '--' 'continue'
     && lk != 1072312               // '[' ']' 'continue'
     && lk != 1085571               // Identifier '++' 'default'
     && lk != 1085572               // Null '++' 'default'
     && lk != 1085573               // True '++' 'default'
     && lk != 1085574               // False '++' 'default'
     && lk != 1085575               // Character '++' 'default'
     && lk != 1085576               // String '++' 'default'
     && lk != 1085577               // Real '++' 'default'
     && lk != 1086083               // Identifier '--' 'default'
     && lk != 1086084               // Null '--' 'default'
     && lk != 1086085               // True '--' 'default'
     && lk != 1086086               // False '--' 'default'
     && lk != 1086087               // Character '--' 'default'
     && lk != 1086088               // String '--' 'default'
     && lk != 1086089               // Real '--' 'default'
     && lk != 1088696               // '[' ']' 'default'
     && lk != 1101955               // Identifier '++' 'do'
     && lk != 1101956               // Null '++' 'do'
     && lk != 1101957               // True '++' 'do'
     && lk != 1101958               // False '++' 'do'
     && lk != 1101959               // Character '++' 'do'
     && lk != 1101960               // String '++' 'do'
     && lk != 1101961               // Real '++' 'do'
     && lk != 1102467               // Identifier '--' 'do'
     && lk != 1102468               // Null '--' 'do'
     && lk != 1102469               // True '--' 'do'
     && lk != 1102470               // False '--' 'do'
     && lk != 1102471               // Character '--' 'do'
     && lk != 1102472               // String '--' 'do'
     && lk != 1102473               // Real '--' 'do'
     && lk != 1105080               // '[' ']' 'do'
     && lk != 1118339               // Identifier '++' 'double'
     && lk != 1118340               // Null '++' 'double'
     && lk != 1118341               // True '++' 'double'
     && lk != 1118342               // False '++' 'double'
     && lk != 1118343               // Character '++' 'double'
     && lk != 1118344               // String '++' 'double'
     && lk != 1118345               // Real '++' 'double'
     && lk != 1118851               // Identifier '--' 'double'
     && lk != 1118852               // Null '--' 'double'
     && lk != 1118853               // True '--' 'double'
     && lk != 1118854               // False '--' 'double'
     && lk != 1118855               // Character '--' 'double'
     && lk != 1118856               // String '--' 'double'
     && lk != 1118857               // Real '--' 'double'
     && lk != 1121464               // '[' ']' 'double'
     && lk != 1134723               // Identifier '++' 'else'
     && lk != 1134724               // Null '++' 'else'
     && lk != 1134725               // True '++' 'else'
     && lk != 1134726               // False '++' 'else'
     && lk != 1134727               // Character '++' 'else'
     && lk != 1134728               // String '++' 'else'
     && lk != 1134729               // Real '++' 'else'
     && lk != 1135235               // Identifier '--' 'else'
     && lk != 1135236               // Null '--' 'else'
     && lk != 1135237               // True '--' 'else'
     && lk != 1135238               // False '--' 'else'
     && lk != 1135239               // Character '--' 'else'
     && lk != 1135240               // String '--' 'else'
     && lk != 1135241               // Real '--' 'else'
     && lk != 1137848               // '[' ']' 'else'
     && lk != 1151107               // Identifier '++' 'enum'
     && lk != 1151108               // Null '++' 'enum'
     && lk != 1151109               // True '++' 'enum'
     && lk != 1151110               // False '++' 'enum'
     && lk != 1151111               // Character '++' 'enum'
     && lk != 1151112               // String '++' 'enum'
     && lk != 1151113               // Real '++' 'enum'
     && lk != 1151619               // Identifier '--' 'enum'
     && lk != 1151620               // Null '--' 'enum'
     && lk != 1151621               // True '--' 'enum'
     && lk != 1151622               // False '--' 'enum'
     && lk != 1151623               // Character '--' 'enum'
     && lk != 1151624               // String '--' 'enum'
     && lk != 1151625               // Real '--' 'enum'
     && lk != 1154232               // '[' ']' 'enum'
     && lk != 1167491               // Identifier '++' 'extern'
     && lk != 1167492               // Null '++' 'extern'
     && lk != 1167493               // True '++' 'extern'
     && lk != 1167494               // False '++' 'extern'
     && lk != 1167495               // Character '++' 'extern'
     && lk != 1167496               // String '++' 'extern'
     && lk != 1167497               // Real '++' 'extern'
     && lk != 1168003               // Identifier '--' 'extern'
     && lk != 1168004               // Null '--' 'extern'
     && lk != 1168005               // True '--' 'extern'
     && lk != 1168006               // False '--' 'extern'
     && lk != 1168007               // Character '--' 'extern'
     && lk != 1168008               // String '--' 'extern'
     && lk != 1168009               // Real '--' 'extern'
     && lk != 1170616               // '[' ']' 'extern'
     && lk != 1183875               // Identifier '++' 'float'
     && lk != 1183876               // Null '++' 'float'
     && lk != 1183877               // True '++' 'float'
     && lk != 1183878               // False '++' 'float'
     && lk != 1183879               // Character '++' 'float'
     && lk != 1183880               // String '++' 'float'
     && lk != 1183881               // Real '++' 'float'
     && lk != 1184387               // Identifier '--' 'float'
     && lk != 1184388               // Null '--' 'float'
     && lk != 1184389               // True '--' 'float'
     && lk != 1184390               // False '--' 'float'
     && lk != 1184391               // Character '--' 'float'
     && lk != 1184392               // String '--' 'float'
     && lk != 1184393               // Real '--' 'float'
     && lk != 1187000               // '[' ']' 'float'
     && lk != 1200259               // Identifier '++' 'for'
     && lk != 1200260               // Null '++' 'for'
     && lk != 1200261               // True '++' 'for'
     && lk != 1200262               // False '++' 'for'
     && lk != 1200263               // Character '++' 'for'
     && lk != 1200264               // String '++' 'for'
     && lk != 1200265               // Real '++' 'for'
     && lk != 1200771               // Identifier '--' 'for'
     && lk != 1200772               // Null '--' 'for'
     && lk != 1200773               // True '--' 'for'
     && lk != 1200774               // False '--' 'for'
     && lk != 1200775               // Character '--' 'for'
     && lk != 1200776               // String '--' 'for'
     && lk != 1200777               // Real '--' 'for'
     && lk != 1203384               // '[' ']' 'for'
     && lk != 1216643               // Identifier '++' 'if'
     && lk != 1216644               // Null '++' 'if'
     && lk != 1216645               // True '++' 'if'
     && lk != 1216646               // False '++' 'if'
     && lk != 1216647               // Character '++' 'if'
     && lk != 1216648               // String '++' 'if'
     && lk != 1216649               // Real '++' 'if'
     && lk != 1217155               // Identifier '--' 'if'
     && lk != 1217156               // Null '--' 'if'
     && lk != 1217157               // True '--' 'if'
     && lk != 1217158               // False '--' 'if'
     && lk != 1217159               // Character '--' 'if'
     && lk != 1217160               // String '--' 'if'
     && lk != 1217161               // Real '--' 'if'
     && lk != 1219768               // '[' ']' 'if'
     && lk != 1233027               // Identifier '++' 'int'
     && lk != 1233028               // Null '++' 'int'
     && lk != 1233029               // True '++' 'int'
     && lk != 1233030               // False '++' 'int'
     && lk != 1233031               // Character '++' 'int'
     && lk != 1233032               // String '++' 'int'
     && lk != 1233033               // Real '++' 'int'
     && lk != 1233539               // Identifier '--' 'int'
     && lk != 1233540               // Null '--' 'int'
     && lk != 1233541               // True '--' 'int'
     && lk != 1233542               // False '--' 'int'
     && lk != 1233543               // Character '--' 'int'
     && lk != 1233544               // String '--' 'int'
     && lk != 1233545               // Real '--' 'int'
     && lk != 1236152               // '[' ']' 'int'
     && lk != 1249411               // Identifier '++' 'long'
     && lk != 1249412               // Null '++' 'long'
     && lk != 1249413               // True '++' 'long'
     && lk != 1249414               // False '++' 'long'
     && lk != 1249415               // Character '++' 'long'
     && lk != 1249416               // String '++' 'long'
     && lk != 1249417               // Real '++' 'long'
     && lk != 1249923               // Identifier '--' 'long'
     && lk != 1249924               // Null '--' 'long'
     && lk != 1249925               // True '--' 'long'
     && lk != 1249926               // False '--' 'long'
     && lk != 1249927               // Character '--' 'long'
     && lk != 1249928               // String '--' 'long'
     && lk != 1249929               // Real '--' 'long'
     && lk != 1252536               // '[' ']' 'long'
     && lk != 1265795               // Identifier '++' 'return'
     && lk != 1265796               // Null '++' 'return'
     && lk != 1265797               // True '++' 'return'
     && lk != 1265798               // False '++' 'return'
     && lk != 1265799               // Character '++' 'return'
     && lk != 1265800               // String '++' 'return'
     && lk != 1265801               // Real '++' 'return'
     && lk != 1266307               // Identifier '--' 'return'
     && lk != 1266308               // Null '--' 'return'
     && lk != 1266309               // True '--' 'return'
     && lk != 1266310               // False '--' 'return'
     && lk != 1266311               // Character '--' 'return'
     && lk != 1266312               // String '--' 'return'
     && lk != 1266313               // Real '--' 'return'
     && lk != 1268920               // '[' ']' 'return'
     && lk != 1282179               // Identifier '++' 'short'
     && lk != 1282180               // Null '++' 'short'
     && lk != 1282181               // True '++' 'short'
     && lk != 1282182               // False '++' 'short'
     && lk != 1282183               // Character '++' 'short'
     && lk != 1282184               // String '++' 'short'
     && lk != 1282185               // Real '++' 'short'
     && lk != 1282691               // Identifier '--' 'short'
     && lk != 1282692               // Null '--' 'short'
     && lk != 1282693               // True '--' 'short'
     && lk != 1282694               // False '--' 'short'
     && lk != 1282695               // Character '--' 'short'
     && lk != 1282696               // String '--' 'short'
     && lk != 1282697               // Real '--' 'short'
     && lk != 1285304               // '[' ']' 'short'
     && lk != 1298563               // Identifier '++' 'signed'
     && lk != 1298564               // Null '++' 'signed'
     && lk != 1298565               // True '++' 'signed'
     && lk != 1298566               // False '++' 'signed'
     && lk != 1298567               // Character '++' 'signed'
     && lk != 1298568               // String '++' 'signed'
     && lk != 1298569               // Real '++' 'signed'
     && lk != 1299075               // Identifier '--' 'signed'
     && lk != 1299076               // Null '--' 'signed'
     && lk != 1299077               // True '--' 'signed'
     && lk != 1299078               // False '--' 'signed'
     && lk != 1299079               // Character '--' 'signed'
     && lk != 1299080               // String '--' 'signed'
     && lk != 1299081               // Real '--' 'signed'
     && lk != 1301688               // '[' ']' 'signed'
     && lk != 1314947               // Identifier '++' 'sizeof'
     && lk != 1314948               // Null '++' 'sizeof'
     && lk != 1314949               // True '++' 'sizeof'
     && lk != 1314950               // False '++' 'sizeof'
     && lk != 1314951               // Character '++' 'sizeof'
     && lk != 1314952               // String '++' 'sizeof'
     && lk != 1314953               // Real '++' 'sizeof'
     && lk != 1315459               // Identifier '--' 'sizeof'
     && lk != 1315460               // Null '--' 'sizeof'
     && lk != 1315461               // True '--' 'sizeof'
     && lk != 1315462               // False '--' 'sizeof'
     && lk != 1315463               // Character '--' 'sizeof'
     && lk != 1315464               // String '--' 'sizeof'
     && lk != 1315465               // Real '--' 'sizeof'
     && lk != 1318072               // '[' ']' 'sizeof'
     && lk != 1331331               // Identifier '++' 'static'
     && lk != 1331332               // Null '++' 'static'
     && lk != 1331333               // True '++' 'static'
     && lk != 1331334               // False '++' 'static'
     && lk != 1331335               // Character '++' 'static'
     && lk != 1331336               // String '++' 'static'
     && lk != 1331337               // Real '++' 'static'
     && lk != 1331843               // Identifier '--' 'static'
     && lk != 1331844               // Null '--' 'static'
     && lk != 1331845               // True '--' 'static'
     && lk != 1331846               // False '--' 'static'
     && lk != 1331847               // Character '--' 'static'
     && lk != 1331848               // String '--' 'static'
     && lk != 1331849               // Real '--' 'static'
     && lk != 1334456               // '[' ']' 'static'
     && lk != 1347715               // Identifier '++' 'struct'
     && lk != 1347716               // Null '++' 'struct'
     && lk != 1347717               // True '++' 'struct'
     && lk != 1347718               // False '++' 'struct'
     && lk != 1347719               // Character '++' 'struct'
     && lk != 1347720               // String '++' 'struct'
     && lk != 1347721               // Real '++' 'struct'
     && lk != 1348227               // Identifier '--' 'struct'
     && lk != 1348228               // Null '--' 'struct'
     && lk != 1348229               // True '--' 'struct'
     && lk != 1348230               // False '--' 'struct'
     && lk != 1348231               // Character '--' 'struct'
     && lk != 1348232               // String '--' 'struct'
     && lk != 1348233               // Real '--' 'struct'
     && lk != 1350840               // '[' ']' 'struct'
     && lk != 1364099               // Identifier '++' 'switch'
     && lk != 1364100               // Null '++' 'switch'
     && lk != 1364101               // True '++' 'switch'
     && lk != 1364102               // False '++' 'switch'
     && lk != 1364103               // Character '++' 'switch'
     && lk != 1364104               // String '++' 'switch'
     && lk != 1364105               // Real '++' 'switch'
     && lk != 1364611               // Identifier '--' 'switch'
     && lk != 1364612               // Null '--' 'switch'
     && lk != 1364613               // True '--' 'switch'
     && lk != 1364614               // False '--' 'switch'
     && lk != 1364615               // Character '--' 'switch'
     && lk != 1364616               // String '--' 'switch'
     && lk != 1364617               // Real '--' 'switch'
     && lk != 1367224               // '[' ']' 'switch'
     && lk != 1380483               // Identifier '++' 'typedef'
     && lk != 1380484               // Null '++' 'typedef'
     && lk != 1380485               // True '++' 'typedef'
     && lk != 1380486               // False '++' 'typedef'
     && lk != 1380487               // Character '++' 'typedef'
     && lk != 1380488               // String '++' 'typedef'
     && lk != 1380489               // Real '++' 'typedef'
     && lk != 1380995               // Identifier '--' 'typedef'
     && lk != 1380996               // Null '--' 'typedef'
     && lk != 1380997               // True '--' 'typedef'
     && lk != 1380998               // False '--' 'typedef'
     && lk != 1380999               // Character '--' 'typedef'
     && lk != 1381000               // String '--' 'typedef'
     && lk != 1381001               // Real '--' 'typedef'
     && lk != 1383608               // '[' ']' 'typedef'
     && lk != 1396867               // Identifier '++' 'union'
     && lk != 1396868               // Null '++' 'union'
     && lk != 1396869               // True '++' 'union'
     && lk != 1396870               // False '++' 'union'
     && lk != 1396871               // Character '++' 'union'
     && lk != 1396872               // String '++' 'union'
     && lk != 1396873               // Real '++' 'union'
     && lk != 1397379               // Identifier '--' 'union'
     && lk != 1397380               // Null '--' 'union'
     && lk != 1397381               // True '--' 'union'
     && lk != 1397382               // False '--' 'union'
     && lk != 1397383               // Character '--' 'union'
     && lk != 1397384               // String '--' 'union'
     && lk != 1397385               // Real '--' 'union'
     && lk != 1399992               // '[' ']' 'union'
     && lk != 1413251               // Identifier '++' 'unsigned'
     && lk != 1413252               // Null '++' 'unsigned'
     && lk != 1413253               // True '++' 'unsigned'
     && lk != 1413254               // False '++' 'unsigned'
     && lk != 1413255               // Character '++' 'unsigned'
     && lk != 1413256               // String '++' 'unsigned'
     && lk != 1413257               // Real '++' 'unsigned'
     && lk != 1413763               // Identifier '--' 'unsigned'
     && lk != 1413764               // Null '--' 'unsigned'
     && lk != 1413765               // True '--' 'unsigned'
     && lk != 1413766               // False '--' 'unsigned'
     && lk != 1413767               // Character '--' 'unsigned'
     && lk != 1413768               // String '--' 'unsigned'
     && lk != 1413769               // Real '--' 'unsigned'
     && lk != 1416376               // '[' ']' 'unsigned'
     && lk != 1429635               // Identifier '++' 'void'
     && lk != 1429636               // Null '++' 'void'
     && lk != 1429637               // True '++' 'void'
     && lk != 1429638               // False '++' 'void'
     && lk != 1429639               // Character '++' 'void'
     && lk != 1429640               // String '++' 'void'
     && lk != 1429641               // Real '++' 'void'
     && lk != 1430147               // Identifier '--' 'void'
     && lk != 1430148               // Null '--' 'void'
     && lk != 1430149               // True '--' 'void'
     && lk != 1430150               // False '--' 'void'
     && lk != 1430151               // Character '--' 'void'
     && lk != 1430152               // String '--' 'void'
     && lk != 1430153               // Real '--' 'void'
     && lk != 1432760               // '[' ']' 'void'
     && lk != 1446019               // Identifier '++' 'volatile'
     && lk != 1446020               // Null '++' 'volatile'
     && lk != 1446021               // True '++' 'volatile'
     && lk != 1446022               // False '++' 'volatile'
     && lk != 1446023               // Character '++' 'volatile'
     && lk != 1446024               // String '++' 'volatile'
     && lk != 1446025               // Real '++' 'volatile'
     && lk != 1446531               // Identifier '--' 'volatile'
     && lk != 1446532               // Null '--' 'volatile'
     && lk != 1446533               // True '--' 'volatile'
     && lk != 1446534               // False '--' 'volatile'
     && lk != 1446535               // Character '--' 'volatile'
     && lk != 1446536               // String '--' 'volatile'
     && lk != 1446537               // Real '--' 'volatile'
     && lk != 1449144               // '[' ']' 'volatile'
     && lk != 1462403               // Identifier '++' 'while'
     && lk != 1462404               // Null '++' 'while'
     && lk != 1462405               // True '++' 'while'
     && lk != 1462406               // False '++' 'while'
     && lk != 1462407               // Character '++' 'while'
     && lk != 1462408               // String '++' 'while'
     && lk != 1462409               // Real '++' 'while'
     && lk != 1462915               // Identifier '--' 'while'
     && lk != 1462916               // Null '--' 'while'
     && lk != 1462917               // True '--' 'while'
     && lk != 1462918               // False '--' 'while'
     && lk != 1462919               // Character '--' 'while'
     && lk != 1462920               // String '--' 'while'
     && lk != 1462921               // Real '--' 'while'
     && lk != 1465528               // '[' ']' 'while'
     && lk != 1481912               // '[' ']' '{'
     && lk != 1495171               // Identifier '++' '|'
     && lk != 1495172               // Null '++' '|'
     && lk != 1495173               // True '++' '|'
     && lk != 1495174               // False '++' '|'
     && lk != 1495175               // Character '++' '|'
     && lk != 1495176               // String '++' '|'
     && lk != 1495177               // Real '++' '|'
     && lk != 1495683               // Identifier '--' '|'
     && lk != 1495684               // Null '--' '|'
     && lk != 1495685               // True '--' '|'
     && lk != 1495686               // False '--' '|'
     && lk != 1495687               // Character '--' '|'
     && lk != 1495688               // String '--' '|'
     && lk != 1495689               // Real '--' '|'
     && lk != 1498296               // '[' ']' '|'
     && lk != 1511555               // Identifier '++' '|='
     && lk != 1511556               // Null '++' '|='
     && lk != 1511557               // True '++' '|='
     && lk != 1511558               // False '++' '|='
     && lk != 1511559               // Character '++' '|='
     && lk != 1511560               // String '++' '|='
     && lk != 1511561               // Real '++' '|='
     && lk != 1512067               // Identifier '--' '|='
     && lk != 1512068               // Null '--' '|='
     && lk != 1512069               // True '--' '|='
     && lk != 1512070               // False '--' '|='
     && lk != 1512071               // Character '--' '|='
     && lk != 1512072               // String '--' '|='
     && lk != 1512073               // Real '--' '|='
     && lk != 1514680               // '[' ']' '|='
     && lk != 1527939               // Identifier '++' '||'
     && lk != 1527940               // Null '++' '||'
     && lk != 1527941               // True '++' '||'
     && lk != 1527942               // False '++' '||'
     && lk != 1527943               // Character '++' '||'
     && lk != 1527944               // String '++' '||'
     && lk != 1527945               // Real '++' '||'
     && lk != 1528451               // Identifier '--' '||'
     && lk != 1528452               // Null '--' '||'
     && lk != 1528453               // True '--' '||'
     && lk != 1528454               // False '--' '||'
     && lk != 1528455               // Character '--' '||'
     && lk != 1528456               // String '--' '||'
     && lk != 1528457               // Real '--' '||'
     && lk != 1531064               // '[' ']' '||'
     && lk != 1544323               // Identifier '++' '}'
     && lk != 1544324               // Null '++' '}'
     && lk != 1544325               // True '++' '}'
     && lk != 1544326               // False '++' '}'
     && lk != 1544327               // Character '++' '}'
     && lk != 1544328               // String '++' '}'
     && lk != 1544329               // Real '++' '}'
     && lk != 1544835               // Identifier '--' '}'
     && lk != 1544836               // Null '--' '}'
     && lk != 1544837               // True '--' '}'
     && lk != 1544838               // False '--' '}'
     && lk != 1544839               // Character '--' '}'
     && lk != 1544840               // String '--' '}'
     && lk != 1544841               // Real '--' '}'
     && lk != 1547448               // '[' ']' '}'
     && lk != 1560707               // Identifier '++' '~'
     && lk != 1560708               // Null '++' '~'
     && lk != 1560709               // True '++' '~'
     && lk != 1560710               // False '++' '~'
     && lk != 1560711               // Character '++' '~'
     && lk != 1560712               // String '++' '~'
     && lk != 1560713               // Real '++' '~'
     && lk != 1561219               // Identifier '--' '~'
     && lk != 1561220               // Null '--' '~'
     && lk != 1561221               // True '--' '~'
     && lk != 1561222               // False '--' '~'
     && lk != 1561223               // Character '--' '~'
     && lk != 1561224               // String '--' '~'
     && lk != 1561225               // Real '--' '~'
     && lk != 1563832)              // '[' ']' '~'
    {
      lk = memoized(4, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Primary();
          lookahead1W(4);           // WhiteSpace^token | '++'
          consumeT(33);             // '++'
          lk = -6;
        }
        catch (p6A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            try_Primary();
            lookahead1W(5);         // WhiteSpace^token | '--'
            consumeT(37);           // '--'
            lk = -7;
          }
          catch (p7A)
          {
            lk = -8;
          }
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(4, e0, lk);
      }
    }
    switch (lk)
    {
    case 80:                        // 'sizeof'
      consume(80);                  // 'sizeof'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 95:                        // '~'
      consume(95);                  // '~'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 12:                        // '!'
      consume(12);                  // '!'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 33:                        // '++'
      consume(33);                  // '++'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case 37:                        // '--'
      consume(37);                  // '--'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      whitespace();
      parse_Primary();
      break;
    case -6:
    case 20611:                     // Identifier '++' END
    case 20612:                     // Null '++' END
    case 20613:                     // True '++' END
    case 20614:                     // False '++' END
    case 20615:                     // Character '++' END
    case 20616:                     // String '++' END
    case 20617:                     // Real '++' END
    case 168067:                    // Identifier '++' Comment
    case 168068:                    // Null '++' Comment
    case 168069:                    // True '++' Comment
    case 168070:                    // False '++' Comment
    case 168071:                    // Character '++' Comment
    case 168072:                    // String '++' Comment
    case 168073:                    // Real '++' Comment
    case 200835:                    // Identifier '++' '!'
    case 200836:                    // Null '++' '!'
    case 200837:                    // True '++' '!'
    case 200838:                    // False '++' '!'
    case 200839:                    // Character '++' '!'
    case 200840:                    // String '++' '!'
    case 200841:                    // Real '++' '!'
    case 217219:                    // Identifier '++' '!='
    case 217220:                    // Null '++' '!='
    case 217221:                    // True '++' '!='
    case 217222:                    // False '++' '!='
    case 217223:                    // Character '++' '!='
    case 217224:                    // String '++' '!='
    case 217225:                    // Real '++' '!='
    case 233603:                    // Identifier '++' '#define'
    case 233604:                    // Null '++' '#define'
    case 233605:                    // True '++' '#define'
    case 233606:                    // False '++' '#define'
    case 233607:                    // Character '++' '#define'
    case 233608:                    // String '++' '#define'
    case 233609:                    // Real '++' '#define'
    case 249987:                    // Identifier '++' '#elif'
    case 249988:                    // Null '++' '#elif'
    case 249989:                    // True '++' '#elif'
    case 249990:                    // False '++' '#elif'
    case 249991:                    // Character '++' '#elif'
    case 249992:                    // String '++' '#elif'
    case 249993:                    // Real '++' '#elif'
    case 266371:                    // Identifier '++' '#else'
    case 266372:                    // Null '++' '#else'
    case 266373:                    // True '++' '#else'
    case 266374:                    // False '++' '#else'
    case 266375:                    // Character '++' '#else'
    case 266376:                    // String '++' '#else'
    case 266377:                    // Real '++' '#else'
    case 282755:                    // Identifier '++' '#endif'
    case 282756:                    // Null '++' '#endif'
    case 282757:                    // True '++' '#endif'
    case 282758:                    // False '++' '#endif'
    case 282759:                    // Character '++' '#endif'
    case 282760:                    // String '++' '#endif'
    case 282761:                    // Real '++' '#endif'
    case 299139:                    // Identifier '++' '#if'
    case 299140:                    // Null '++' '#if'
    case 299141:                    // True '++' '#if'
    case 299142:                    // False '++' '#if'
    case 299143:                    // Character '++' '#if'
    case 299144:                    // String '++' '#if'
    case 299145:                    // Real '++' '#if'
    case 315523:                    // Identifier '++' '#ifdef'
    case 315524:                    // Null '++' '#ifdef'
    case 315525:                    // True '++' '#ifdef'
    case 315526:                    // False '++' '#ifdef'
    case 315527:                    // Character '++' '#ifdef'
    case 315528:                    // String '++' '#ifdef'
    case 315529:                    // Real '++' '#ifdef'
    case 331907:                    // Identifier '++' '#ifndef'
    case 331908:                    // Null '++' '#ifndef'
    case 331909:                    // True '++' '#ifndef'
    case 331910:                    // False '++' '#ifndef'
    case 331911:                    // Character '++' '#ifndef'
    case 331912:                    // String '++' '#ifndef'
    case 331913:                    // Real '++' '#ifndef'
    case 348291:                    // Identifier '++' '#include'
    case 348292:                    // Null '++' '#include'
    case 348293:                    // True '++' '#include'
    case 348294:                    // False '++' '#include'
    case 348295:                    // Character '++' '#include'
    case 348296:                    // String '++' '#include'
    case 348297:                    // Real '++' '#include'
    case 364675:                    // Identifier '++' '#undef'
    case 364676:                    // Null '++' '#undef'
    case 364677:                    // True '++' '#undef'
    case 364678:                    // False '++' '#undef'
    case 364679:                    // Character '++' '#undef'
    case 364680:                    // String '++' '#undef'
    case 364681:                    // Real '++' '#undef'
    case 381059:                    // Identifier '++' '%'
    case 381060:                    // Null '++' '%'
    case 381061:                    // True '++' '%'
    case 381062:                    // False '++' '%'
    case 381063:                    // Character '++' '%'
    case 381064:                    // String '++' '%'
    case 381065:                    // Real '++' '%'
    case 397443:                    // Identifier '++' '%='
    case 397444:                    // Null '++' '%='
    case 397445:                    // True '++' '%='
    case 397446:                    // False '++' '%='
    case 397447:                    // Character '++' '%='
    case 397448:                    // String '++' '%='
    case 397449:                    // Real '++' '%='
    case 413827:                    // Identifier '++' '&'
    case 413828:                    // Null '++' '&'
    case 413829:                    // True '++' '&'
    case 413830:                    // False '++' '&'
    case 413831:                    // Character '++' '&'
    case 413832:                    // String '++' '&'
    case 413833:                    // Real '++' '&'
    case 430211:                    // Identifier '++' '&&'
    case 430212:                    // Null '++' '&&'
    case 430213:                    // True '++' '&&'
    case 430214:                    // False '++' '&&'
    case 430215:                    // Character '++' '&&'
    case 430216:                    // String '++' '&&'
    case 430217:                    // Real '++' '&&'
    case 446595:                    // Identifier '++' '&='
    case 446596:                    // Null '++' '&='
    case 446597:                    // True '++' '&='
    case 446598:                    // False '++' '&='
    case 446599:                    // Character '++' '&='
    case 446600:                    // String '++' '&='
    case 446601:                    // Real '++' '&='
    case 479363:                    // Identifier '++' ')'
    case 479364:                    // Null '++' ')'
    case 479365:                    // True '++' ')'
    case 479366:                    // False '++' ')'
    case 479367:                    // Character '++' ')'
    case 479368:                    // String '++' ')'
    case 479369:                    // Real '++' ')'
    case 495747:                    // Identifier '++' '*'
    case 495748:                    // Null '++' '*'
    case 495749:                    // True '++' '*'
    case 495750:                    // False '++' '*'
    case 495751:                    // Character '++' '*'
    case 495752:                    // String '++' '*'
    case 495753:                    // Real '++' '*'
    case 512131:                    // Identifier '++' '*='
    case 512132:                    // Null '++' '*='
    case 512133:                    // True '++' '*='
    case 512134:                    // False '++' '*='
    case 512135:                    // Character '++' '*='
    case 512136:                    // String '++' '*='
    case 512137:                    // Real '++' '*='
    case 528515:                    // Identifier '++' '+'
    case 528516:                    // Null '++' '+'
    case 528517:                    // True '++' '+'
    case 528518:                    // False '++' '+'
    case 528519:                    // Character '++' '+'
    case 528520:                    // String '++' '+'
    case 528521:                    // Real '++' '+'
    case 544899:                    // Identifier '++' '++'
    case 544900:                    // Null '++' '++'
    case 544901:                    // True '++' '++'
    case 544902:                    // False '++' '++'
    case 544903:                    // Character '++' '++'
    case 544904:                    // String '++' '++'
    case 544905:                    // Real '++' '++'
    case 561283:                    // Identifier '++' '+='
    case 561284:                    // Null '++' '+='
    case 561285:                    // True '++' '+='
    case 561286:                    // False '++' '+='
    case 561287:                    // Character '++' '+='
    case 561288:                    // String '++' '+='
    case 561289:                    // Real '++' '+='
    case 577667:                    // Identifier '++' ','
    case 577668:                    // Null '++' ','
    case 577669:                    // True '++' ','
    case 577670:                    // False '++' ','
    case 577671:                    // Character '++' ','
    case 577672:                    // String '++' ','
    case 577673:                    // Real '++' ','
    case 594051:                    // Identifier '++' '-'
    case 594052:                    // Null '++' '-'
    case 594053:                    // True '++' '-'
    case 594054:                    // False '++' '-'
    case 594055:                    // Character '++' '-'
    case 594056:                    // String '++' '-'
    case 594057:                    // Real '++' '-'
    case 610435:                    // Identifier '++' '--'
    case 610436:                    // Null '++' '--'
    case 610437:                    // True '++' '--'
    case 610438:                    // False '++' '--'
    case 610439:                    // Character '++' '--'
    case 610440:                    // String '++' '--'
    case 610441:                    // Real '++' '--'
    case 626819:                    // Identifier '++' '-='
    case 626820:                    // Null '++' '-='
    case 626821:                    // True '++' '-='
    case 626822:                    // False '++' '-='
    case 626823:                    // Character '++' '-='
    case 626824:                    // String '++' '-='
    case 626825:                    // Real '++' '-='
    case 675971:                    // Identifier '++' '/'
    case 675972:                    // Null '++' '/'
    case 675973:                    // True '++' '/'
    case 675974:                    // False '++' '/'
    case 675975:                    // Character '++' '/'
    case 675976:                    // String '++' '/'
    case 675977:                    // Real '++' '/'
    case 692355:                    // Identifier '++' '/='
    case 692356:                    // Null '++' '/='
    case 692357:                    // True '++' '/='
    case 692358:                    // False '++' '/='
    case 692359:                    // Character '++' '/='
    case 692360:                    // String '++' '/='
    case 692361:                    // Real '++' '/='
    case 708739:                    // Identifier '++' ':'
    case 708740:                    // Null '++' ':'
    case 708741:                    // True '++' ':'
    case 708742:                    // False '++' ':'
    case 708743:                    // Character '++' ':'
    case 708744:                    // String '++' ':'
    case 708745:                    // Real '++' ':'
    case 725123:                    // Identifier '++' ';'
    case 725124:                    // Null '++' ';'
    case 725125:                    // True '++' ';'
    case 725126:                    // False '++' ';'
    case 725127:                    // Character '++' ';'
    case 725128:                    // String '++' ';'
    case 725129:                    // Real '++' ';'
    case 741507:                    // Identifier '++' '<'
    case 741508:                    // Null '++' '<'
    case 741509:                    // True '++' '<'
    case 741510:                    // False '++' '<'
    case 741511:                    // Character '++' '<'
    case 741512:                    // String '++' '<'
    case 741513:                    // Real '++' '<'
    case 757891:                    // Identifier '++' '<<'
    case 757892:                    // Null '++' '<<'
    case 757893:                    // True '++' '<<'
    case 757894:                    // False '++' '<<'
    case 757895:                    // Character '++' '<<'
    case 757896:                    // String '++' '<<'
    case 757897:                    // Real '++' '<<'
    case 774275:                    // Identifier '++' '<<='
    case 774276:                    // Null '++' '<<='
    case 774277:                    // True '++' '<<='
    case 774278:                    // False '++' '<<='
    case 774279:                    // Character '++' '<<='
    case 774280:                    // String '++' '<<='
    case 774281:                    // Real '++' '<<='
    case 790659:                    // Identifier '++' '<='
    case 790660:                    // Null '++' '<='
    case 790661:                    // True '++' '<='
    case 790662:                    // False '++' '<='
    case 790663:                    // Character '++' '<='
    case 790664:                    // String '++' '<='
    case 790665:                    // Real '++' '<='
    case 807043:                    // Identifier '++' '='
    case 807044:                    // Null '++' '='
    case 807045:                    // True '++' '='
    case 807046:                    // False '++' '='
    case 807047:                    // Character '++' '='
    case 807048:                    // String '++' '='
    case 807049:                    // Real '++' '='
    case 823427:                    // Identifier '++' '=='
    case 823428:                    // Null '++' '=='
    case 823429:                    // True '++' '=='
    case 823430:                    // False '++' '=='
    case 823431:                    // Character '++' '=='
    case 823432:                    // String '++' '=='
    case 823433:                    // Real '++' '=='
    case 839811:                    // Identifier '++' '>'
    case 839812:                    // Null '++' '>'
    case 839813:                    // True '++' '>'
    case 839814:                    // False '++' '>'
    case 839815:                    // Character '++' '>'
    case 839816:                    // String '++' '>'
    case 839817:                    // Real '++' '>'
    case 856195:                    // Identifier '++' '>='
    case 856196:                    // Null '++' '>='
    case 856197:                    // True '++' '>='
    case 856198:                    // False '++' '>='
    case 856199:                    // Character '++' '>='
    case 856200:                    // String '++' '>='
    case 856201:                    // Real '++' '>='
    case 872579:                    // Identifier '++' '>>'
    case 872580:                    // Null '++' '>>'
    case 872581:                    // True '++' '>>'
    case 872582:                    // False '++' '>>'
    case 872583:                    // Character '++' '>>'
    case 872584:                    // String '++' '>>'
    case 872585:                    // Real '++' '>>'
    case 888963:                    // Identifier '++' '>>='
    case 888964:                    // Null '++' '>>='
    case 888965:                    // True '++' '>>='
    case 888966:                    // False '++' '>>='
    case 888967:                    // Character '++' '>>='
    case 888968:                    // String '++' '>>='
    case 888969:                    // Real '++' '>>='
    case 905347:                    // Identifier '++' '?'
    case 905348:                    // Null '++' '?'
    case 905349:                    // True '++' '?'
    case 905350:                    // False '++' '?'
    case 905351:                    // Character '++' '?'
    case 905352:                    // String '++' '?'
    case 905353:                    // Real '++' '?'
    case 938115:                    // Identifier '++' ']'
    case 938116:                    // Null '++' ']'
    case 938117:                    // True '++' ']'
    case 938118:                    // False '++' ']'
    case 938119:                    // Character '++' ']'
    case 938120:                    // String '++' ']'
    case 938121:                    // Real '++' ']'
    case 954499:                    // Identifier '++' '^'
    case 954500:                    // Null '++' '^'
    case 954501:                    // True '++' '^'
    case 954502:                    // False '++' '^'
    case 954503:                    // Character '++' '^'
    case 954504:                    // String '++' '^'
    case 954505:                    // Real '++' '^'
    case 970883:                    // Identifier '++' '^='
    case 970884:                    // Null '++' '^='
    case 970885:                    // True '++' '^='
    case 970886:                    // False '++' '^='
    case 970887:                    // Character '++' '^='
    case 970888:                    // String '++' '^='
    case 970889:                    // Real '++' '^='
    case 987267:                    // Identifier '++' 'auto'
    case 987268:                    // Null '++' 'auto'
    case 987269:                    // True '++' 'auto'
    case 987270:                    // False '++' 'auto'
    case 987271:                    // Character '++' 'auto'
    case 987272:                    // String '++' 'auto'
    case 987273:                    // Real '++' 'auto'
    case 1003651:                   // Identifier '++' 'break'
    case 1003652:                   // Null '++' 'break'
    case 1003653:                   // True '++' 'break'
    case 1003654:                   // False '++' 'break'
    case 1003655:                   // Character '++' 'break'
    case 1003656:                   // String '++' 'break'
    case 1003657:                   // Real '++' 'break'
    case 1020035:                   // Identifier '++' 'case'
    case 1020036:                   // Null '++' 'case'
    case 1020037:                   // True '++' 'case'
    case 1020038:                   // False '++' 'case'
    case 1020039:                   // Character '++' 'case'
    case 1020040:                   // String '++' 'case'
    case 1020041:                   // Real '++' 'case'
    case 1036419:                   // Identifier '++' 'char'
    case 1036420:                   // Null '++' 'char'
    case 1036421:                   // True '++' 'char'
    case 1036422:                   // False '++' 'char'
    case 1036423:                   // Character '++' 'char'
    case 1036424:                   // String '++' 'char'
    case 1036425:                   // Real '++' 'char'
    case 1052803:                   // Identifier '++' 'const'
    case 1052804:                   // Null '++' 'const'
    case 1052805:                   // True '++' 'const'
    case 1052806:                   // False '++' 'const'
    case 1052807:                   // Character '++' 'const'
    case 1052808:                   // String '++' 'const'
    case 1052809:                   // Real '++' 'const'
    case 1069187:                   // Identifier '++' 'continue'
    case 1069188:                   // Null '++' 'continue'
    case 1069189:                   // True '++' 'continue'
    case 1069190:                   // False '++' 'continue'
    case 1069191:                   // Character '++' 'continue'
    case 1069192:                   // String '++' 'continue'
    case 1069193:                   // Real '++' 'continue'
    case 1085571:                   // Identifier '++' 'default'
    case 1085572:                   // Null '++' 'default'
    case 1085573:                   // True '++' 'default'
    case 1085574:                   // False '++' 'default'
    case 1085575:                   // Character '++' 'default'
    case 1085576:                   // String '++' 'default'
    case 1085577:                   // Real '++' 'default'
    case 1101955:                   // Identifier '++' 'do'
    case 1101956:                   // Null '++' 'do'
    case 1101957:                   // True '++' 'do'
    case 1101958:                   // False '++' 'do'
    case 1101959:                   // Character '++' 'do'
    case 1101960:                   // String '++' 'do'
    case 1101961:                   // Real '++' 'do'
    case 1118339:                   // Identifier '++' 'double'
    case 1118340:                   // Null '++' 'double'
    case 1118341:                   // True '++' 'double'
    case 1118342:                   // False '++' 'double'
    case 1118343:                   // Character '++' 'double'
    case 1118344:                   // String '++' 'double'
    case 1118345:                   // Real '++' 'double'
    case 1134723:                   // Identifier '++' 'else'
    case 1134724:                   // Null '++' 'else'
    case 1134725:                   // True '++' 'else'
    case 1134726:                   // False '++' 'else'
    case 1134727:                   // Character '++' 'else'
    case 1134728:                   // String '++' 'else'
    case 1134729:                   // Real '++' 'else'
    case 1151107:                   // Identifier '++' 'enum'
    case 1151108:                   // Null '++' 'enum'
    case 1151109:                   // True '++' 'enum'
    case 1151110:                   // False '++' 'enum'
    case 1151111:                   // Character '++' 'enum'
    case 1151112:                   // String '++' 'enum'
    case 1151113:                   // Real '++' 'enum'
    case 1167491:                   // Identifier '++' 'extern'
    case 1167492:                   // Null '++' 'extern'
    case 1167493:                   // True '++' 'extern'
    case 1167494:                   // False '++' 'extern'
    case 1167495:                   // Character '++' 'extern'
    case 1167496:                   // String '++' 'extern'
    case 1167497:                   // Real '++' 'extern'
    case 1183875:                   // Identifier '++' 'float'
    case 1183876:                   // Null '++' 'float'
    case 1183877:                   // True '++' 'float'
    case 1183878:                   // False '++' 'float'
    case 1183879:                   // Character '++' 'float'
    case 1183880:                   // String '++' 'float'
    case 1183881:                   // Real '++' 'float'
    case 1200259:                   // Identifier '++' 'for'
    case 1200260:                   // Null '++' 'for'
    case 1200261:                   // True '++' 'for'
    case 1200262:                   // False '++' 'for'
    case 1200263:                   // Character '++' 'for'
    case 1200264:                   // String '++' 'for'
    case 1200265:                   // Real '++' 'for'
    case 1216643:                   // Identifier '++' 'if'
    case 1216644:                   // Null '++' 'if'
    case 1216645:                   // True '++' 'if'
    case 1216646:                   // False '++' 'if'
    case 1216647:                   // Character '++' 'if'
    case 1216648:                   // String '++' 'if'
    case 1216649:                   // Real '++' 'if'
    case 1233027:                   // Identifier '++' 'int'
    case 1233028:                   // Null '++' 'int'
    case 1233029:                   // True '++' 'int'
    case 1233030:                   // False '++' 'int'
    case 1233031:                   // Character '++' 'int'
    case 1233032:                   // String '++' 'int'
    case 1233033:                   // Real '++' 'int'
    case 1249411:                   // Identifier '++' 'long'
    case 1249412:                   // Null '++' 'long'
    case 1249413:                   // True '++' 'long'
    case 1249414:                   // False '++' 'long'
    case 1249415:                   // Character '++' 'long'
    case 1249416:                   // String '++' 'long'
    case 1249417:                   // Real '++' 'long'
    case 1265795:                   // Identifier '++' 'return'
    case 1265796:                   // Null '++' 'return'
    case 1265797:                   // True '++' 'return'
    case 1265798:                   // False '++' 'return'
    case 1265799:                   // Character '++' 'return'
    case 1265800:                   // String '++' 'return'
    case 1265801:                   // Real '++' 'return'
    case 1282179:                   // Identifier '++' 'short'
    case 1282180:                   // Null '++' 'short'
    case 1282181:                   // True '++' 'short'
    case 1282182:                   // False '++' 'short'
    case 1282183:                   // Character '++' 'short'
    case 1282184:                   // String '++' 'short'
    case 1282185:                   // Real '++' 'short'
    case 1298563:                   // Identifier '++' 'signed'
    case 1298564:                   // Null '++' 'signed'
    case 1298565:                   // True '++' 'signed'
    case 1298566:                   // False '++' 'signed'
    case 1298567:                   // Character '++' 'signed'
    case 1298568:                   // String '++' 'signed'
    case 1298569:                   // Real '++' 'signed'
    case 1314947:                   // Identifier '++' 'sizeof'
    case 1314948:                   // Null '++' 'sizeof'
    case 1314949:                   // True '++' 'sizeof'
    case 1314950:                   // False '++' 'sizeof'
    case 1314951:                   // Character '++' 'sizeof'
    case 1314952:                   // String '++' 'sizeof'
    case 1314953:                   // Real '++' 'sizeof'
    case 1331331:                   // Identifier '++' 'static'
    case 1331332:                   // Null '++' 'static'
    case 1331333:                   // True '++' 'static'
    case 1331334:                   // False '++' 'static'
    case 1331335:                   // Character '++' 'static'
    case 1331336:                   // String '++' 'static'
    case 1331337:                   // Real '++' 'static'
    case 1347715:                   // Identifier '++' 'struct'
    case 1347716:                   // Null '++' 'struct'
    case 1347717:                   // True '++' 'struct'
    case 1347718:                   // False '++' 'struct'
    case 1347719:                   // Character '++' 'struct'
    case 1347720:                   // String '++' 'struct'
    case 1347721:                   // Real '++' 'struct'
    case 1364099:                   // Identifier '++' 'switch'
    case 1364100:                   // Null '++' 'switch'
    case 1364101:                   // True '++' 'switch'
    case 1364102:                   // False '++' 'switch'
    case 1364103:                   // Character '++' 'switch'
    case 1364104:                   // String '++' 'switch'
    case 1364105:                   // Real '++' 'switch'
    case 1380483:                   // Identifier '++' 'typedef'
    case 1380484:                   // Null '++' 'typedef'
    case 1380485:                   // True '++' 'typedef'
    case 1380486:                   // False '++' 'typedef'
    case 1380487:                   // Character '++' 'typedef'
    case 1380488:                   // String '++' 'typedef'
    case 1380489:                   // Real '++' 'typedef'
    case 1396867:                   // Identifier '++' 'union'
    case 1396868:                   // Null '++' 'union'
    case 1396869:                   // True '++' 'union'
    case 1396870:                   // False '++' 'union'
    case 1396871:                   // Character '++' 'union'
    case 1396872:                   // String '++' 'union'
    case 1396873:                   // Real '++' 'union'
    case 1413251:                   // Identifier '++' 'unsigned'
    case 1413252:                   // Null '++' 'unsigned'
    case 1413253:                   // True '++' 'unsigned'
    case 1413254:                   // False '++' 'unsigned'
    case 1413255:                   // Character '++' 'unsigned'
    case 1413256:                   // String '++' 'unsigned'
    case 1413257:                   // Real '++' 'unsigned'
    case 1429635:                   // Identifier '++' 'void'
    case 1429636:                   // Null '++' 'void'
    case 1429637:                   // True '++' 'void'
    case 1429638:                   // False '++' 'void'
    case 1429639:                   // Character '++' 'void'
    case 1429640:                   // String '++' 'void'
    case 1429641:                   // Real '++' 'void'
    case 1446019:                   // Identifier '++' 'volatile'
    case 1446020:                   // Null '++' 'volatile'
    case 1446021:                   // True '++' 'volatile'
    case 1446022:                   // False '++' 'volatile'
    case 1446023:                   // Character '++' 'volatile'
    case 1446024:                   // String '++' 'volatile'
    case 1446025:                   // Real '++' 'volatile'
    case 1462403:                   // Identifier '++' 'while'
    case 1462404:                   // Null '++' 'while'
    case 1462405:                   // True '++' 'while'
    case 1462406:                   // False '++' 'while'
    case 1462407:                   // Character '++' 'while'
    case 1462408:                   // String '++' 'while'
    case 1462409:                   // Real '++' 'while'
    case 1495171:                   // Identifier '++' '|'
    case 1495172:                   // Null '++' '|'
    case 1495173:                   // True '++' '|'
    case 1495174:                   // False '++' '|'
    case 1495175:                   // Character '++' '|'
    case 1495176:                   // String '++' '|'
    case 1495177:                   // Real '++' '|'
    case 1511555:                   // Identifier '++' '|='
    case 1511556:                   // Null '++' '|='
    case 1511557:                   // True '++' '|='
    case 1511558:                   // False '++' '|='
    case 1511559:                   // Character '++' '|='
    case 1511560:                   // String '++' '|='
    case 1511561:                   // Real '++' '|='
    case 1527939:                   // Identifier '++' '||'
    case 1527940:                   // Null '++' '||'
    case 1527941:                   // True '++' '||'
    case 1527942:                   // False '++' '||'
    case 1527943:                   // Character '++' '||'
    case 1527944:                   // String '++' '||'
    case 1527945:                   // Real '++' '||'
    case 1544323:                   // Identifier '++' '}'
    case 1544324:                   // Null '++' '}'
    case 1544325:                   // True '++' '}'
    case 1544326:                   // False '++' '}'
    case 1544327:                   // Character '++' '}'
    case 1544328:                   // String '++' '}'
    case 1544329:                   // Real '++' '}'
    case 1560707:                   // Identifier '++' '~'
    case 1560708:                   // Null '++' '~'
    case 1560709:                   // True '++' '~'
    case 1560710:                   // False '++' '~'
    case 1560711:                   // Character '++' '~'
    case 1560712:                   // String '++' '~'
    case 1560713:                   // Real '++' '~'
      parse_Primary();
      lookahead1W(4);               // WhiteSpace^token | '++'
      consume(33);                  // '++'
      break;
    case -7:
    case 21123:                     // Identifier '--' END
    case 21124:                     // Null '--' END
    case 21125:                     // True '--' END
    case 21126:                     // False '--' END
    case 21127:                     // Character '--' END
    case 21128:                     // String '--' END
    case 21129:                     // Real '--' END
    case 168579:                    // Identifier '--' Comment
    case 168580:                    // Null '--' Comment
    case 168581:                    // True '--' Comment
    case 168582:                    // False '--' Comment
    case 168583:                    // Character '--' Comment
    case 168584:                    // String '--' Comment
    case 168585:                    // Real '--' Comment
    case 201347:                    // Identifier '--' '!'
    case 201348:                    // Null '--' '!'
    case 201349:                    // True '--' '!'
    case 201350:                    // False '--' '!'
    case 201351:                    // Character '--' '!'
    case 201352:                    // String '--' '!'
    case 201353:                    // Real '--' '!'
    case 217731:                    // Identifier '--' '!='
    case 217732:                    // Null '--' '!='
    case 217733:                    // True '--' '!='
    case 217734:                    // False '--' '!='
    case 217735:                    // Character '--' '!='
    case 217736:                    // String '--' '!='
    case 217737:                    // Real '--' '!='
    case 234115:                    // Identifier '--' '#define'
    case 234116:                    // Null '--' '#define'
    case 234117:                    // True '--' '#define'
    case 234118:                    // False '--' '#define'
    case 234119:                    // Character '--' '#define'
    case 234120:                    // String '--' '#define'
    case 234121:                    // Real '--' '#define'
    case 250499:                    // Identifier '--' '#elif'
    case 250500:                    // Null '--' '#elif'
    case 250501:                    // True '--' '#elif'
    case 250502:                    // False '--' '#elif'
    case 250503:                    // Character '--' '#elif'
    case 250504:                    // String '--' '#elif'
    case 250505:                    // Real '--' '#elif'
    case 266883:                    // Identifier '--' '#else'
    case 266884:                    // Null '--' '#else'
    case 266885:                    // True '--' '#else'
    case 266886:                    // False '--' '#else'
    case 266887:                    // Character '--' '#else'
    case 266888:                    // String '--' '#else'
    case 266889:                    // Real '--' '#else'
    case 283267:                    // Identifier '--' '#endif'
    case 283268:                    // Null '--' '#endif'
    case 283269:                    // True '--' '#endif'
    case 283270:                    // False '--' '#endif'
    case 283271:                    // Character '--' '#endif'
    case 283272:                    // String '--' '#endif'
    case 283273:                    // Real '--' '#endif'
    case 299651:                    // Identifier '--' '#if'
    case 299652:                    // Null '--' '#if'
    case 299653:                    // True '--' '#if'
    case 299654:                    // False '--' '#if'
    case 299655:                    // Character '--' '#if'
    case 299656:                    // String '--' '#if'
    case 299657:                    // Real '--' '#if'
    case 316035:                    // Identifier '--' '#ifdef'
    case 316036:                    // Null '--' '#ifdef'
    case 316037:                    // True '--' '#ifdef'
    case 316038:                    // False '--' '#ifdef'
    case 316039:                    // Character '--' '#ifdef'
    case 316040:                    // String '--' '#ifdef'
    case 316041:                    // Real '--' '#ifdef'
    case 332419:                    // Identifier '--' '#ifndef'
    case 332420:                    // Null '--' '#ifndef'
    case 332421:                    // True '--' '#ifndef'
    case 332422:                    // False '--' '#ifndef'
    case 332423:                    // Character '--' '#ifndef'
    case 332424:                    // String '--' '#ifndef'
    case 332425:                    // Real '--' '#ifndef'
    case 348803:                    // Identifier '--' '#include'
    case 348804:                    // Null '--' '#include'
    case 348805:                    // True '--' '#include'
    case 348806:                    // False '--' '#include'
    case 348807:                    // Character '--' '#include'
    case 348808:                    // String '--' '#include'
    case 348809:                    // Real '--' '#include'
    case 365187:                    // Identifier '--' '#undef'
    case 365188:                    // Null '--' '#undef'
    case 365189:                    // True '--' '#undef'
    case 365190:                    // False '--' '#undef'
    case 365191:                    // Character '--' '#undef'
    case 365192:                    // String '--' '#undef'
    case 365193:                    // Real '--' '#undef'
    case 381571:                    // Identifier '--' '%'
    case 381572:                    // Null '--' '%'
    case 381573:                    // True '--' '%'
    case 381574:                    // False '--' '%'
    case 381575:                    // Character '--' '%'
    case 381576:                    // String '--' '%'
    case 381577:                    // Real '--' '%'
    case 397955:                    // Identifier '--' '%='
    case 397956:                    // Null '--' '%='
    case 397957:                    // True '--' '%='
    case 397958:                    // False '--' '%='
    case 397959:                    // Character '--' '%='
    case 397960:                    // String '--' '%='
    case 397961:                    // Real '--' '%='
    case 414339:                    // Identifier '--' '&'
    case 414340:                    // Null '--' '&'
    case 414341:                    // True '--' '&'
    case 414342:                    // False '--' '&'
    case 414343:                    // Character '--' '&'
    case 414344:                    // String '--' '&'
    case 414345:                    // Real '--' '&'
    case 430723:                    // Identifier '--' '&&'
    case 430724:                    // Null '--' '&&'
    case 430725:                    // True '--' '&&'
    case 430726:                    // False '--' '&&'
    case 430727:                    // Character '--' '&&'
    case 430728:                    // String '--' '&&'
    case 430729:                    // Real '--' '&&'
    case 447107:                    // Identifier '--' '&='
    case 447108:                    // Null '--' '&='
    case 447109:                    // True '--' '&='
    case 447110:                    // False '--' '&='
    case 447111:                    // Character '--' '&='
    case 447112:                    // String '--' '&='
    case 447113:                    // Real '--' '&='
    case 479875:                    // Identifier '--' ')'
    case 479876:                    // Null '--' ')'
    case 479877:                    // True '--' ')'
    case 479878:                    // False '--' ')'
    case 479879:                    // Character '--' ')'
    case 479880:                    // String '--' ')'
    case 479881:                    // Real '--' ')'
    case 496259:                    // Identifier '--' '*'
    case 496260:                    // Null '--' '*'
    case 496261:                    // True '--' '*'
    case 496262:                    // False '--' '*'
    case 496263:                    // Character '--' '*'
    case 496264:                    // String '--' '*'
    case 496265:                    // Real '--' '*'
    case 512643:                    // Identifier '--' '*='
    case 512644:                    // Null '--' '*='
    case 512645:                    // True '--' '*='
    case 512646:                    // False '--' '*='
    case 512647:                    // Character '--' '*='
    case 512648:                    // String '--' '*='
    case 512649:                    // Real '--' '*='
    case 529027:                    // Identifier '--' '+'
    case 529028:                    // Null '--' '+'
    case 529029:                    // True '--' '+'
    case 529030:                    // False '--' '+'
    case 529031:                    // Character '--' '+'
    case 529032:                    // String '--' '+'
    case 529033:                    // Real '--' '+'
    case 545411:                    // Identifier '--' '++'
    case 545412:                    // Null '--' '++'
    case 545413:                    // True '--' '++'
    case 545414:                    // False '--' '++'
    case 545415:                    // Character '--' '++'
    case 545416:                    // String '--' '++'
    case 545417:                    // Real '--' '++'
    case 561795:                    // Identifier '--' '+='
    case 561796:                    // Null '--' '+='
    case 561797:                    // True '--' '+='
    case 561798:                    // False '--' '+='
    case 561799:                    // Character '--' '+='
    case 561800:                    // String '--' '+='
    case 561801:                    // Real '--' '+='
    case 578179:                    // Identifier '--' ','
    case 578180:                    // Null '--' ','
    case 578181:                    // True '--' ','
    case 578182:                    // False '--' ','
    case 578183:                    // Character '--' ','
    case 578184:                    // String '--' ','
    case 578185:                    // Real '--' ','
    case 594563:                    // Identifier '--' '-'
    case 594564:                    // Null '--' '-'
    case 594565:                    // True '--' '-'
    case 594566:                    // False '--' '-'
    case 594567:                    // Character '--' '-'
    case 594568:                    // String '--' '-'
    case 594569:                    // Real '--' '-'
    case 610947:                    // Identifier '--' '--'
    case 610948:                    // Null '--' '--'
    case 610949:                    // True '--' '--'
    case 610950:                    // False '--' '--'
    case 610951:                    // Character '--' '--'
    case 610952:                    // String '--' '--'
    case 610953:                    // Real '--' '--'
    case 627331:                    // Identifier '--' '-='
    case 627332:                    // Null '--' '-='
    case 627333:                    // True '--' '-='
    case 627334:                    // False '--' '-='
    case 627335:                    // Character '--' '-='
    case 627336:                    // String '--' '-='
    case 627337:                    // Real '--' '-='
    case 676483:                    // Identifier '--' '/'
    case 676484:                    // Null '--' '/'
    case 676485:                    // True '--' '/'
    case 676486:                    // False '--' '/'
    case 676487:                    // Character '--' '/'
    case 676488:                    // String '--' '/'
    case 676489:                    // Real '--' '/'
    case 692867:                    // Identifier '--' '/='
    case 692868:                    // Null '--' '/='
    case 692869:                    // True '--' '/='
    case 692870:                    // False '--' '/='
    case 692871:                    // Character '--' '/='
    case 692872:                    // String '--' '/='
    case 692873:                    // Real '--' '/='
    case 709251:                    // Identifier '--' ':'
    case 709252:                    // Null '--' ':'
    case 709253:                    // True '--' ':'
    case 709254:                    // False '--' ':'
    case 709255:                    // Character '--' ':'
    case 709256:                    // String '--' ':'
    case 709257:                    // Real '--' ':'
    case 725635:                    // Identifier '--' ';'
    case 725636:                    // Null '--' ';'
    case 725637:                    // True '--' ';'
    case 725638:                    // False '--' ';'
    case 725639:                    // Character '--' ';'
    case 725640:                    // String '--' ';'
    case 725641:                    // Real '--' ';'
    case 742019:                    // Identifier '--' '<'
    case 742020:                    // Null '--' '<'
    case 742021:                    // True '--' '<'
    case 742022:                    // False '--' '<'
    case 742023:                    // Character '--' '<'
    case 742024:                    // String '--' '<'
    case 742025:                    // Real '--' '<'
    case 758403:                    // Identifier '--' '<<'
    case 758404:                    // Null '--' '<<'
    case 758405:                    // True '--' '<<'
    case 758406:                    // False '--' '<<'
    case 758407:                    // Character '--' '<<'
    case 758408:                    // String '--' '<<'
    case 758409:                    // Real '--' '<<'
    case 774787:                    // Identifier '--' '<<='
    case 774788:                    // Null '--' '<<='
    case 774789:                    // True '--' '<<='
    case 774790:                    // False '--' '<<='
    case 774791:                    // Character '--' '<<='
    case 774792:                    // String '--' '<<='
    case 774793:                    // Real '--' '<<='
    case 791171:                    // Identifier '--' '<='
    case 791172:                    // Null '--' '<='
    case 791173:                    // True '--' '<='
    case 791174:                    // False '--' '<='
    case 791175:                    // Character '--' '<='
    case 791176:                    // String '--' '<='
    case 791177:                    // Real '--' '<='
    case 807555:                    // Identifier '--' '='
    case 807556:                    // Null '--' '='
    case 807557:                    // True '--' '='
    case 807558:                    // False '--' '='
    case 807559:                    // Character '--' '='
    case 807560:                    // String '--' '='
    case 807561:                    // Real '--' '='
    case 823939:                    // Identifier '--' '=='
    case 823940:                    // Null '--' '=='
    case 823941:                    // True '--' '=='
    case 823942:                    // False '--' '=='
    case 823943:                    // Character '--' '=='
    case 823944:                    // String '--' '=='
    case 823945:                    // Real '--' '=='
    case 840323:                    // Identifier '--' '>'
    case 840324:                    // Null '--' '>'
    case 840325:                    // True '--' '>'
    case 840326:                    // False '--' '>'
    case 840327:                    // Character '--' '>'
    case 840328:                    // String '--' '>'
    case 840329:                    // Real '--' '>'
    case 856707:                    // Identifier '--' '>='
    case 856708:                    // Null '--' '>='
    case 856709:                    // True '--' '>='
    case 856710:                    // False '--' '>='
    case 856711:                    // Character '--' '>='
    case 856712:                    // String '--' '>='
    case 856713:                    // Real '--' '>='
    case 873091:                    // Identifier '--' '>>'
    case 873092:                    // Null '--' '>>'
    case 873093:                    // True '--' '>>'
    case 873094:                    // False '--' '>>'
    case 873095:                    // Character '--' '>>'
    case 873096:                    // String '--' '>>'
    case 873097:                    // Real '--' '>>'
    case 889475:                    // Identifier '--' '>>='
    case 889476:                    // Null '--' '>>='
    case 889477:                    // True '--' '>>='
    case 889478:                    // False '--' '>>='
    case 889479:                    // Character '--' '>>='
    case 889480:                    // String '--' '>>='
    case 889481:                    // Real '--' '>>='
    case 905859:                    // Identifier '--' '?'
    case 905860:                    // Null '--' '?'
    case 905861:                    // True '--' '?'
    case 905862:                    // False '--' '?'
    case 905863:                    // Character '--' '?'
    case 905864:                    // String '--' '?'
    case 905865:                    // Real '--' '?'
    case 938627:                    // Identifier '--' ']'
    case 938628:                    // Null '--' ']'
    case 938629:                    // True '--' ']'
    case 938630:                    // False '--' ']'
    case 938631:                    // Character '--' ']'
    case 938632:                    // String '--' ']'
    case 938633:                    // Real '--' ']'
    case 955011:                    // Identifier '--' '^'
    case 955012:                    // Null '--' '^'
    case 955013:                    // True '--' '^'
    case 955014:                    // False '--' '^'
    case 955015:                    // Character '--' '^'
    case 955016:                    // String '--' '^'
    case 955017:                    // Real '--' '^'
    case 971395:                    // Identifier '--' '^='
    case 971396:                    // Null '--' '^='
    case 971397:                    // True '--' '^='
    case 971398:                    // False '--' '^='
    case 971399:                    // Character '--' '^='
    case 971400:                    // String '--' '^='
    case 971401:                    // Real '--' '^='
    case 987779:                    // Identifier '--' 'auto'
    case 987780:                    // Null '--' 'auto'
    case 987781:                    // True '--' 'auto'
    case 987782:                    // False '--' 'auto'
    case 987783:                    // Character '--' 'auto'
    case 987784:                    // String '--' 'auto'
    case 987785:                    // Real '--' 'auto'
    case 1004163:                   // Identifier '--' 'break'
    case 1004164:                   // Null '--' 'break'
    case 1004165:                   // True '--' 'break'
    case 1004166:                   // False '--' 'break'
    case 1004167:                   // Character '--' 'break'
    case 1004168:                   // String '--' 'break'
    case 1004169:                   // Real '--' 'break'
    case 1020547:                   // Identifier '--' 'case'
    case 1020548:                   // Null '--' 'case'
    case 1020549:                   // True '--' 'case'
    case 1020550:                   // False '--' 'case'
    case 1020551:                   // Character '--' 'case'
    case 1020552:                   // String '--' 'case'
    case 1020553:                   // Real '--' 'case'
    case 1036931:                   // Identifier '--' 'char'
    case 1036932:                   // Null '--' 'char'
    case 1036933:                   // True '--' 'char'
    case 1036934:                   // False '--' 'char'
    case 1036935:                   // Character '--' 'char'
    case 1036936:                   // String '--' 'char'
    case 1036937:                   // Real '--' 'char'
    case 1053315:                   // Identifier '--' 'const'
    case 1053316:                   // Null '--' 'const'
    case 1053317:                   // True '--' 'const'
    case 1053318:                   // False '--' 'const'
    case 1053319:                   // Character '--' 'const'
    case 1053320:                   // String '--' 'const'
    case 1053321:                   // Real '--' 'const'
    case 1069699:                   // Identifier '--' 'continue'
    case 1069700:                   // Null '--' 'continue'
    case 1069701:                   // True '--' 'continue'
    case 1069702:                   // False '--' 'continue'
    case 1069703:                   // Character '--' 'continue'
    case 1069704:                   // String '--' 'continue'
    case 1069705:                   // Real '--' 'continue'
    case 1086083:                   // Identifier '--' 'default'
    case 1086084:                   // Null '--' 'default'
    case 1086085:                   // True '--' 'default'
    case 1086086:                   // False '--' 'default'
    case 1086087:                   // Character '--' 'default'
    case 1086088:                   // String '--' 'default'
    case 1086089:                   // Real '--' 'default'
    case 1102467:                   // Identifier '--' 'do'
    case 1102468:                   // Null '--' 'do'
    case 1102469:                   // True '--' 'do'
    case 1102470:                   // False '--' 'do'
    case 1102471:                   // Character '--' 'do'
    case 1102472:                   // String '--' 'do'
    case 1102473:                   // Real '--' 'do'
    case 1118851:                   // Identifier '--' 'double'
    case 1118852:                   // Null '--' 'double'
    case 1118853:                   // True '--' 'double'
    case 1118854:                   // False '--' 'double'
    case 1118855:                   // Character '--' 'double'
    case 1118856:                   // String '--' 'double'
    case 1118857:                   // Real '--' 'double'
    case 1135235:                   // Identifier '--' 'else'
    case 1135236:                   // Null '--' 'else'
    case 1135237:                   // True '--' 'else'
    case 1135238:                   // False '--' 'else'
    case 1135239:                   // Character '--' 'else'
    case 1135240:                   // String '--' 'else'
    case 1135241:                   // Real '--' 'else'
    case 1151619:                   // Identifier '--' 'enum'
    case 1151620:                   // Null '--' 'enum'
    case 1151621:                   // True '--' 'enum'
    case 1151622:                   // False '--' 'enum'
    case 1151623:                   // Character '--' 'enum'
    case 1151624:                   // String '--' 'enum'
    case 1151625:                   // Real '--' 'enum'
    case 1168003:                   // Identifier '--' 'extern'
    case 1168004:                   // Null '--' 'extern'
    case 1168005:                   // True '--' 'extern'
    case 1168006:                   // False '--' 'extern'
    case 1168007:                   // Character '--' 'extern'
    case 1168008:                   // String '--' 'extern'
    case 1168009:                   // Real '--' 'extern'
    case 1184387:                   // Identifier '--' 'float'
    case 1184388:                   // Null '--' 'float'
    case 1184389:                   // True '--' 'float'
    case 1184390:                   // False '--' 'float'
    case 1184391:                   // Character '--' 'float'
    case 1184392:                   // String '--' 'float'
    case 1184393:                   // Real '--' 'float'
    case 1200771:                   // Identifier '--' 'for'
    case 1200772:                   // Null '--' 'for'
    case 1200773:                   // True '--' 'for'
    case 1200774:                   // False '--' 'for'
    case 1200775:                   // Character '--' 'for'
    case 1200776:                   // String '--' 'for'
    case 1200777:                   // Real '--' 'for'
    case 1217155:                   // Identifier '--' 'if'
    case 1217156:                   // Null '--' 'if'
    case 1217157:                   // True '--' 'if'
    case 1217158:                   // False '--' 'if'
    case 1217159:                   // Character '--' 'if'
    case 1217160:                   // String '--' 'if'
    case 1217161:                   // Real '--' 'if'
    case 1233539:                   // Identifier '--' 'int'
    case 1233540:                   // Null '--' 'int'
    case 1233541:                   // True '--' 'int'
    case 1233542:                   // False '--' 'int'
    case 1233543:                   // Character '--' 'int'
    case 1233544:                   // String '--' 'int'
    case 1233545:                   // Real '--' 'int'
    case 1249923:                   // Identifier '--' 'long'
    case 1249924:                   // Null '--' 'long'
    case 1249925:                   // True '--' 'long'
    case 1249926:                   // False '--' 'long'
    case 1249927:                   // Character '--' 'long'
    case 1249928:                   // String '--' 'long'
    case 1249929:                   // Real '--' 'long'
    case 1266307:                   // Identifier '--' 'return'
    case 1266308:                   // Null '--' 'return'
    case 1266309:                   // True '--' 'return'
    case 1266310:                   // False '--' 'return'
    case 1266311:                   // Character '--' 'return'
    case 1266312:                   // String '--' 'return'
    case 1266313:                   // Real '--' 'return'
    case 1282691:                   // Identifier '--' 'short'
    case 1282692:                   // Null '--' 'short'
    case 1282693:                   // True '--' 'short'
    case 1282694:                   // False '--' 'short'
    case 1282695:                   // Character '--' 'short'
    case 1282696:                   // String '--' 'short'
    case 1282697:                   // Real '--' 'short'
    case 1299075:                   // Identifier '--' 'signed'
    case 1299076:                   // Null '--' 'signed'
    case 1299077:                   // True '--' 'signed'
    case 1299078:                   // False '--' 'signed'
    case 1299079:                   // Character '--' 'signed'
    case 1299080:                   // String '--' 'signed'
    case 1299081:                   // Real '--' 'signed'
    case 1315459:                   // Identifier '--' 'sizeof'
    case 1315460:                   // Null '--' 'sizeof'
    case 1315461:                   // True '--' 'sizeof'
    case 1315462:                   // False '--' 'sizeof'
    case 1315463:                   // Character '--' 'sizeof'
    case 1315464:                   // String '--' 'sizeof'
    case 1315465:                   // Real '--' 'sizeof'
    case 1331843:                   // Identifier '--' 'static'
    case 1331844:                   // Null '--' 'static'
    case 1331845:                   // True '--' 'static'
    case 1331846:                   // False '--' 'static'
    case 1331847:                   // Character '--' 'static'
    case 1331848:                   // String '--' 'static'
    case 1331849:                   // Real '--' 'static'
    case 1348227:                   // Identifier '--' 'struct'
    case 1348228:                   // Null '--' 'struct'
    case 1348229:                   // True '--' 'struct'
    case 1348230:                   // False '--' 'struct'
    case 1348231:                   // Character '--' 'struct'
    case 1348232:                   // String '--' 'struct'
    case 1348233:                   // Real '--' 'struct'
    case 1364611:                   // Identifier '--' 'switch'
    case 1364612:                   // Null '--' 'switch'
    case 1364613:                   // True '--' 'switch'
    case 1364614:                   // False '--' 'switch'
    case 1364615:                   // Character '--' 'switch'
    case 1364616:                   // String '--' 'switch'
    case 1364617:                   // Real '--' 'switch'
    case 1380995:                   // Identifier '--' 'typedef'
    case 1380996:                   // Null '--' 'typedef'
    case 1380997:                   // True '--' 'typedef'
    case 1380998:                   // False '--' 'typedef'
    case 1380999:                   // Character '--' 'typedef'
    case 1381000:                   // String '--' 'typedef'
    case 1381001:                   // Real '--' 'typedef'
    case 1397379:                   // Identifier '--' 'union'
    case 1397380:                   // Null '--' 'union'
    case 1397381:                   // True '--' 'union'
    case 1397382:                   // False '--' 'union'
    case 1397383:                   // Character '--' 'union'
    case 1397384:                   // String '--' 'union'
    case 1397385:                   // Real '--' 'union'
    case 1413763:                   // Identifier '--' 'unsigned'
    case 1413764:                   // Null '--' 'unsigned'
    case 1413765:                   // True '--' 'unsigned'
    case 1413766:                   // False '--' 'unsigned'
    case 1413767:                   // Character '--' 'unsigned'
    case 1413768:                   // String '--' 'unsigned'
    case 1413769:                   // Real '--' 'unsigned'
    case 1430147:                   // Identifier '--' 'void'
    case 1430148:                   // Null '--' 'void'
    case 1430149:                   // True '--' 'void'
    case 1430150:                   // False '--' 'void'
    case 1430151:                   // Character '--' 'void'
    case 1430152:                   // String '--' 'void'
    case 1430153:                   // Real '--' 'void'
    case 1446531:                   // Identifier '--' 'volatile'
    case 1446532:                   // Null '--' 'volatile'
    case 1446533:                   // True '--' 'volatile'
    case 1446534:                   // False '--' 'volatile'
    case 1446535:                   // Character '--' 'volatile'
    case 1446536:                   // String '--' 'volatile'
    case 1446537:                   // Real '--' 'volatile'
    case 1462915:                   // Identifier '--' 'while'
    case 1462916:                   // Null '--' 'while'
    case 1462917:                   // True '--' 'while'
    case 1462918:                   // False '--' 'while'
    case 1462919:                   // Character '--' 'while'
    case 1462920:                   // String '--' 'while'
    case 1462921:                   // Real '--' 'while'
    case 1495683:                   // Identifier '--' '|'
    case 1495684:                   // Null '--' '|'
    case 1495685:                   // True '--' '|'
    case 1495686:                   // False '--' '|'
    case 1495687:                   // Character '--' '|'
    case 1495688:                   // String '--' '|'
    case 1495689:                   // Real '--' '|'
    case 1512067:                   // Identifier '--' '|='
    case 1512068:                   // Null '--' '|='
    case 1512069:                   // True '--' '|='
    case 1512070:                   // False '--' '|='
    case 1512071:                   // Character '--' '|='
    case 1512072:                   // String '--' '|='
    case 1512073:                   // Real '--' '|='
    case 1528451:                   // Identifier '--' '||'
    case 1528452:                   // Null '--' '||'
    case 1528453:                   // True '--' '||'
    case 1528454:                   // False '--' '||'
    case 1528455:                   // Character '--' '||'
    case 1528456:                   // String '--' '||'
    case 1528457:                   // Real '--' '||'
    case 1544835:                   // Identifier '--' '}'
    case 1544836:                   // Null '--' '}'
    case 1544837:                   // True '--' '}'
    case 1544838:                   // False '--' '}'
    case 1544839:                   // Character '--' '}'
    case 1544840:                   // String '--' '}'
    case 1544841:                   // Real '--' '}'
    case 1561219:                   // Identifier '--' '~'
    case 1561220:                   // Null '--' '~'
    case 1561221:                   // True '--' '~'
    case 1561222:                   // False '--' '~'
    case 1561223:                   // Character '--' '~'
    case 1561224:                   // String '--' '~'
    case 1561225:                   // Real '--' '~'
      parse_Primary();
      lookahead1W(5);               // WhiteSpace^token | '--'
      consume(37);                  // '--'
      break;
    default:
      parse_Primary();
    }
    eventHandler.endNonterminal("UnaryExpression", e0);
  }

  function try_UnaryExpression()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(46);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 3587:                    // Identifier '('
        lookahead3W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 7171:                    // Identifier '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 4227:                    // Identifier '++'
      case 4739:                    // Identifier '--'
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 4995:                    // Identifier '->'
      case 5123:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    case 28:                        // '('
      lookahead2W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 412:                     // '(' Identifier
        lookahead3W(24);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | ')' | '*' |
                                    // '*=' | '+' | '++' | '+=' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | '<' |
                                    // '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' | '^' |
                                    // '^=' | '|' | '|=' | '||'
        break;
      case 2332:                    // '(' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2716:                    // '(' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7196:                    // '(' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11548:                   // '(' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 8988:                    // '(' 'enum'
      case 10908:                   // '(' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1308:                    // '(' Comment
      case 5660:                    // '(' ';'
      case 7836:                    // '(' 'break'
      case 8348:                    // '(' 'continue'
        lookahead3W(3);             // WhiteSpace^token | ')'
        break;
      case 1820:                    // '(' '#define'
      case 2460:                    // '(' '#ifdef'
      case 2588:                    // '(' '#ifndef'
      case 2844:                    // '(' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9372:                    // '(' 'for'
      case 9500:                    // '(' 'if'
      case 10652:                   // '(' 'switch'
      case 11420:                   // '(' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1564:                    // '(' '!'
      case 4252:                    // '(' '++'
      case 4764:                    // '(' '--'
      case 10268:                   // '(' 'sizeof'
      case 12188:                   // '(' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3612:                    // '(' '('
      case 8604:                    // '(' 'do'
      case 9884:                    // '(' 'return'
      case 10524:                   // '(' 'struct'
      case 10780:                   // '(' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 540:                     // '(' Null
      case 668:                     // '(' True
      case 796:                     // '(' False
      case 924:                     // '(' Character
      case 1052:                    // '(' String
      case 1180:                    // '(' Real
        lookahead3W(20);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | ')' | '*' | '*=' |
                                    // '+' | '++' | '+=' | '-' | '--' | '-=' | '/' | '/=' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 7708:                    // '(' 'auto'
      case 8220:                    // '(' 'const'
      case 9116:                    // '(' 'extern'
      case 10140:                   // '(' 'signed'
      case 10396:                   // '(' 'static'
      case 11036:                   // '(' 'unsigned'
      case 11292:                   // '(' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8092:                    // '(' 'char'
      case 8732:                    // '(' 'double'
      case 9244:                    // '(' 'float'
      case 9628:                    // '(' 'int'
      case 9756:                    // '(' 'long'
      case 10012:                   // '(' 'short'
      case 11164:                   // '(' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 56:                        // '['
      lookahead2W(32);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 440:                     // '[' Identifier
        lookahead3W(26);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // ']' | '^' | '^=' | '|' | '|=' | '||'
        break;
      case 2360:                    // '[' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2744:                    // '[' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 5688:                    // '[' ';'
        lookahead3W(36);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
        break;
      case 7224:                    // '[' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 7352:                    // '[' ']'
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 11576:                   // '[' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9016:                    // '[' 'enum'
      case 10936:                   // '[' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1336:                    // '[' Comment
      case 7864:                    // '[' 'break'
      case 8376:                    // '[' 'continue'
        lookahead3W(16);            // WhiteSpace^token | ',' | ';' | ']'
        break;
      case 1848:                    // '[' '#define'
      case 2488:                    // '[' '#ifdef'
      case 2616:                    // '[' '#ifndef'
      case 2872:                    // '[' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9400:                    // '[' 'for'
      case 9528:                    // '[' 'if'
      case 10680:                   // '[' 'switch'
      case 11448:                   // '[' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1592:                    // '[' '!'
      case 4280:                    // '[' '++'
      case 4792:                    // '[' '--'
      case 10296:                   // '[' 'sizeof'
      case 12216:                   // '[' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3640:                    // '[' '('
      case 8632:                    // '[' 'do'
      case 9912:                    // '[' 'return'
      case 10552:                   // '[' 'struct'
      case 10808:                   // '[' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 568:                     // '[' Null
      case 696:                     // '[' True
      case 824:                     // '[' False
      case 952:                     // '[' Character
      case 1080:                    // '[' String
      case 1208:                    // '[' Real
        lookahead3W(23);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ';' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | ']' | '^' | '^=' | '|' |
                                    // '|=' | '||'
        break;
      case 7736:                    // '[' 'auto'
      case 8248:                    // '[' 'const'
      case 9144:                    // '[' 'extern'
      case 10168:                   // '[' 'signed'
      case 10424:                   // '[' 'static'
      case 11064:                   // '[' 'unsigned'
      case 11320:                   // '[' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8120:                    // '[' 'char'
      case 8760:                    // '[' 'double'
      case 9272:                    // '[' 'float'
      case 9656:                    // '[' 'int'
      case 9784:                    // '[' 'long'
      case 10040:                   // '[' 'short'
      case 11192:                   // '[' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 90:                        // '{'
      lookahead2W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 474:                     // '{' Identifier
        lookahead3W(25);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ':' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
        break;
      case 1114:                    // '{' String
        lookahead3W(22);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' |
                                    // '||' | '}'
        break;
      case 2394:                    // '{' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2778:                    // '{' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7258:                    // '{' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11610:                   // '{' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9050:                    // '{' 'enum'
      case 10970:                   // '{' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1370:                    // '{' Comment
      case 5722:                    // '{' ';'
      case 7898:                    // '{' 'break'
      case 8410:                    // '{' 'continue'
        lookahead3W(14);            // WhiteSpace^token | ',' | '}'
        break;
      case 1882:                    // '{' '#define'
      case 2522:                    // '{' '#ifdef'
      case 2650:                    // '{' '#ifndef'
      case 2906:                    // '{' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9434:                    // '{' 'for'
      case 9562:                    // '{' 'if'
      case 10714:                   // '{' 'switch'
      case 11482:                   // '{' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 602:                     // '{' Null
      case 730:                     // '{' True
      case 858:                     // '{' False
      case 986:                     // '{' Character
      case 1242:                    // '{' Real
        lookahead3W(21);            // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | '<' | '<<' | '<<=' | '<=' |
                                    // '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' | '||' |
                                    // '}'
        break;
      case 1626:                    // '{' '!'
      case 4314:                    // '{' '++'
      case 4826:                    // '{' '--'
      case 10330:                   // '{' 'sizeof'
      case 12250:                   // '{' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3674:                    // '{' '('
      case 8666:                    // '{' 'do'
      case 9946:                    // '{' 'return'
      case 10586:                   // '{' 'struct'
      case 10842:                   // '{' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 7770:                    // '{' 'auto'
      case 8282:                    // '{' 'const'
      case 9178:                    // '{' 'extern'
      case 10202:                   // '{' 'signed'
      case 10458:                   // '{' 'static'
      case 11098:                   // '{' 'unsigned'
      case 11354:                   // '{' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8154:                    // '{' 'char'
      case 8794:                    // '{' 'double'
      case 9306:                    // '{' 'float'
      case 9690:                    // '{' 'int'
      case 9818:                    // '{' 'long'
      case 10074:                   // '{' 'short'
      case 11226:                   // '{' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    case 4:                         // Null
    case 5:                         // True
    case 6:                         // False
    case 7:                         // Character
    case 8:                         // String
    case 9:                         // Real
      lookahead2W(45);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
      switch (lk)
      {
      case 4228:                    // Null '++'
      case 4740:                    // Null '--'
      case 4229:                    // True '++'
      case 4741:                    // True '--'
      case 4230:                    // False '++'
      case 4742:                    // False '--'
      case 4231:                    // Character '++'
      case 4743:                    // Character '--'
      case 4232:                    // String '++'
      case 4744:                    // String '--'
      case 4233:                    // Real '++'
      case 4745:                    // Real '--'
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 12                    // '!'
     && lk != 33                    // '++'
     && lk != 37                    // '--'
     && lk != 80                    // 'sizeof'
     && lk != 95                    // '~'
     && lk != 131                   // Identifier END
     && lk != 132                   // Null END
     && lk != 133                   // True END
     && lk != 134                   // False END
     && lk != 135                   // Character END
     && lk != 136                   // String END
     && lk != 137                   // Real END
     && lk != 387                   // Identifier Identifier
     && lk != 388                   // Null Identifier
     && lk != 389                   // True Identifier
     && lk != 390                   // False Identifier
     && lk != 391                   // Character Identifier
     && lk != 392                   // String Identifier
     && lk != 393                   // Real Identifier
     && lk != 515                   // Identifier Null
     && lk != 516                   // Null Null
     && lk != 517                   // True Null
     && lk != 518                   // False Null
     && lk != 519                   // Character Null
     && lk != 520                   // String Null
     && lk != 521                   // Real Null
     && lk != 643                   // Identifier True
     && lk != 644                   // Null True
     && lk != 645                   // True True
     && lk != 646                   // False True
     && lk != 647                   // Character True
     && lk != 648                   // String True
     && lk != 649                   // Real True
     && lk != 771                   // Identifier False
     && lk != 772                   // Null False
     && lk != 773                   // True False
     && lk != 774                   // False False
     && lk != 775                   // Character False
     && lk != 776                   // String False
     && lk != 777                   // Real False
     && lk != 899                   // Identifier Character
     && lk != 900                   // Null Character
     && lk != 901                   // True Character
     && lk != 902                   // False Character
     && lk != 903                   // Character Character
     && lk != 904                   // String Character
     && lk != 905                   // Real Character
     && lk != 1027                  // Identifier String
     && lk != 1028                  // Null String
     && lk != 1029                  // True String
     && lk != 1030                  // False String
     && lk != 1031                  // Character String
     && lk != 1032                  // String String
     && lk != 1033                  // Real String
     && lk != 1155                  // Identifier Real
     && lk != 1156                  // Null Real
     && lk != 1157                  // True Real
     && lk != 1158                  // False Real
     && lk != 1159                  // Character Real
     && lk != 1160                  // String Real
     && lk != 1161                  // Real Real
     && lk != 1283                  // Identifier Comment
     && lk != 1284                  // Null Comment
     && lk != 1285                  // True Comment
     && lk != 1286                  // False Comment
     && lk != 1287                  // Character Comment
     && lk != 1288                  // String Comment
     && lk != 1289                  // Real Comment
     && lk != 1539                  // Identifier '!'
     && lk != 1540                  // Null '!'
     && lk != 1541                  // True '!'
     && lk != 1542                  // False '!'
     && lk != 1543                  // Character '!'
     && lk != 1544                  // String '!'
     && lk != 1545                  // Real '!'
     && lk != 1667                  // Identifier '!='
     && lk != 1668                  // Null '!='
     && lk != 1669                  // True '!='
     && lk != 1670                  // False '!='
     && lk != 1671                  // Character '!='
     && lk != 1672                  // String '!='
     && lk != 1673                  // Real '!='
     && lk != 1795                  // Identifier '#define'
     && lk != 1796                  // Null '#define'
     && lk != 1797                  // True '#define'
     && lk != 1798                  // False '#define'
     && lk != 1799                  // Character '#define'
     && lk != 1800                  // String '#define'
     && lk != 1801                  // Real '#define'
     && lk != 1923                  // Identifier '#elif'
     && lk != 1924                  // Null '#elif'
     && lk != 1925                  // True '#elif'
     && lk != 1926                  // False '#elif'
     && lk != 1927                  // Character '#elif'
     && lk != 1928                  // String '#elif'
     && lk != 1929                  // Real '#elif'
     && lk != 2051                  // Identifier '#else'
     && lk != 2052                  // Null '#else'
     && lk != 2053                  // True '#else'
     && lk != 2054                  // False '#else'
     && lk != 2055                  // Character '#else'
     && lk != 2056                  // String '#else'
     && lk != 2057                  // Real '#else'
     && lk != 2179                  // Identifier '#endif'
     && lk != 2180                  // Null '#endif'
     && lk != 2181                  // True '#endif'
     && lk != 2182                  // False '#endif'
     && lk != 2183                  // Character '#endif'
     && lk != 2184                  // String '#endif'
     && lk != 2185                  // Real '#endif'
     && lk != 2307                  // Identifier '#if'
     && lk != 2308                  // Null '#if'
     && lk != 2309                  // True '#if'
     && lk != 2310                  // False '#if'
     && lk != 2311                  // Character '#if'
     && lk != 2312                  // String '#if'
     && lk != 2313                  // Real '#if'
     && lk != 2435                  // Identifier '#ifdef'
     && lk != 2436                  // Null '#ifdef'
     && lk != 2437                  // True '#ifdef'
     && lk != 2438                  // False '#ifdef'
     && lk != 2439                  // Character '#ifdef'
     && lk != 2440                  // String '#ifdef'
     && lk != 2441                  // Real '#ifdef'
     && lk != 2563                  // Identifier '#ifndef'
     && lk != 2564                  // Null '#ifndef'
     && lk != 2565                  // True '#ifndef'
     && lk != 2566                  // False '#ifndef'
     && lk != 2567                  // Character '#ifndef'
     && lk != 2568                  // String '#ifndef'
     && lk != 2569                  // Real '#ifndef'
     && lk != 2691                  // Identifier '#include'
     && lk != 2692                  // Null '#include'
     && lk != 2693                  // True '#include'
     && lk != 2694                  // False '#include'
     && lk != 2695                  // Character '#include'
     && lk != 2696                  // String '#include'
     && lk != 2697                  // Real '#include'
     && lk != 2819                  // Identifier '#undef'
     && lk != 2820                  // Null '#undef'
     && lk != 2821                  // True '#undef'
     && lk != 2822                  // False '#undef'
     && lk != 2823                  // Character '#undef'
     && lk != 2824                  // String '#undef'
     && lk != 2825                  // Real '#undef'
     && lk != 2947                  // Identifier '%'
     && lk != 2948                  // Null '%'
     && lk != 2949                  // True '%'
     && lk != 2950                  // False '%'
     && lk != 2951                  // Character '%'
     && lk != 2952                  // String '%'
     && lk != 2953                  // Real '%'
     && lk != 3075                  // Identifier '%='
     && lk != 3076                  // Null '%='
     && lk != 3077                  // True '%='
     && lk != 3078                  // False '%='
     && lk != 3079                  // Character '%='
     && lk != 3080                  // String '%='
     && lk != 3081                  // Real '%='
     && lk != 3203                  // Identifier '&'
     && lk != 3204                  // Null '&'
     && lk != 3205                  // True '&'
     && lk != 3206                  // False '&'
     && lk != 3207                  // Character '&'
     && lk != 3208                  // String '&'
     && lk != 3209                  // Real '&'
     && lk != 3331                  // Identifier '&&'
     && lk != 3332                  // Null '&&'
     && lk != 3333                  // True '&&'
     && lk != 3334                  // False '&&'
     && lk != 3335                  // Character '&&'
     && lk != 3336                  // String '&&'
     && lk != 3337                  // Real '&&'
     && lk != 3459                  // Identifier '&='
     && lk != 3460                  // Null '&='
     && lk != 3461                  // True '&='
     && lk != 3462                  // False '&='
     && lk != 3463                  // Character '&='
     && lk != 3464                  // String '&='
     && lk != 3465                  // Real '&='
     && lk != 3588                  // Null '('
     && lk != 3589                  // True '('
     && lk != 3590                  // False '('
     && lk != 3591                  // Character '('
     && lk != 3592                  // String '('
     && lk != 3593                  // Real '('
     && lk != 3715                  // Identifier ')'
     && lk != 3716                  // Null ')'
     && lk != 3717                  // True ')'
     && lk != 3718                  // False ')'
     && lk != 3719                  // Character ')'
     && lk != 3720                  // String ')'
     && lk != 3721                  // Real ')'
     && lk != 3843                  // Identifier '*'
     && lk != 3844                  // Null '*'
     && lk != 3845                  // True '*'
     && lk != 3846                  // False '*'
     && lk != 3847                  // Character '*'
     && lk != 3848                  // String '*'
     && lk != 3849                  // Real '*'
     && lk != 3971                  // Identifier '*='
     && lk != 3972                  // Null '*='
     && lk != 3973                  // True '*='
     && lk != 3974                  // False '*='
     && lk != 3975                  // Character '*='
     && lk != 3976                  // String '*='
     && lk != 3977                  // Real '*='
     && lk != 4099                  // Identifier '+'
     && lk != 4100                  // Null '+'
     && lk != 4101                  // True '+'
     && lk != 4102                  // False '+'
     && lk != 4103                  // Character '+'
     && lk != 4104                  // String '+'
     && lk != 4105                  // Real '+'
     && lk != 4355                  // Identifier '+='
     && lk != 4356                  // Null '+='
     && lk != 4357                  // True '+='
     && lk != 4358                  // False '+='
     && lk != 4359                  // Character '+='
     && lk != 4360                  // String '+='
     && lk != 4361                  // Real '+='
     && lk != 4483                  // Identifier ','
     && lk != 4484                  // Null ','
     && lk != 4485                  // True ','
     && lk != 4486                  // False ','
     && lk != 4487                  // Character ','
     && lk != 4488                  // String ','
     && lk != 4489                  // Real ','
     && lk != 4611                  // Identifier '-'
     && lk != 4612                  // Null '-'
     && lk != 4613                  // True '-'
     && lk != 4614                  // False '-'
     && lk != 4615                  // Character '-'
     && lk != 4616                  // String '-'
     && lk != 4617                  // Real '-'
     && lk != 4867                  // Identifier '-='
     && lk != 4868                  // Null '-='
     && lk != 4869                  // True '-='
     && lk != 4870                  // False '-='
     && lk != 4871                  // Character '-='
     && lk != 4872                  // String '-='
     && lk != 4873                  // Real '-='
     && lk != 5251                  // Identifier '/'
     && lk != 5252                  // Null '/'
     && lk != 5253                  // True '/'
     && lk != 5254                  // False '/'
     && lk != 5255                  // Character '/'
     && lk != 5256                  // String '/'
     && lk != 5257                  // Real '/'
     && lk != 5379                  // Identifier '/='
     && lk != 5380                  // Null '/='
     && lk != 5381                  // True '/='
     && lk != 5382                  // False '/='
     && lk != 5383                  // Character '/='
     && lk != 5384                  // String '/='
     && lk != 5385                  // Real '/='
     && lk != 5507                  // Identifier ':'
     && lk != 5508                  // Null ':'
     && lk != 5509                  // True ':'
     && lk != 5510                  // False ':'
     && lk != 5511                  // Character ':'
     && lk != 5512                  // String ':'
     && lk != 5513                  // Real ':'
     && lk != 5635                  // Identifier ';'
     && lk != 5636                  // Null ';'
     && lk != 5637                  // True ';'
     && lk != 5638                  // False ';'
     && lk != 5639                  // Character ';'
     && lk != 5640                  // String ';'
     && lk != 5641                  // Real ';'
     && lk != 5763                  // Identifier '<'
     && lk != 5764                  // Null '<'
     && lk != 5765                  // True '<'
     && lk != 5766                  // False '<'
     && lk != 5767                  // Character '<'
     && lk != 5768                  // String '<'
     && lk != 5769                  // Real '<'
     && lk != 5891                  // Identifier '<<'
     && lk != 5892                  // Null '<<'
     && lk != 5893                  // True '<<'
     && lk != 5894                  // False '<<'
     && lk != 5895                  // Character '<<'
     && lk != 5896                  // String '<<'
     && lk != 5897                  // Real '<<'
     && lk != 6019                  // Identifier '<<='
     && lk != 6020                  // Null '<<='
     && lk != 6021                  // True '<<='
     && lk != 6022                  // False '<<='
     && lk != 6023                  // Character '<<='
     && lk != 6024                  // String '<<='
     && lk != 6025                  // Real '<<='
     && lk != 6147                  // Identifier '<='
     && lk != 6148                  // Null '<='
     && lk != 6149                  // True '<='
     && lk != 6150                  // False '<='
     && lk != 6151                  // Character '<='
     && lk != 6152                  // String '<='
     && lk != 6153                  // Real '<='
     && lk != 6275                  // Identifier '='
     && lk != 6276                  // Null '='
     && lk != 6277                  // True '='
     && lk != 6278                  // False '='
     && lk != 6279                  // Character '='
     && lk != 6280                  // String '='
     && lk != 6281                  // Real '='
     && lk != 6403                  // Identifier '=='
     && lk != 6404                  // Null '=='
     && lk != 6405                  // True '=='
     && lk != 6406                  // False '=='
     && lk != 6407                  // Character '=='
     && lk != 6408                  // String '=='
     && lk != 6409                  // Real '=='
     && lk != 6531                  // Identifier '>'
     && lk != 6532                  // Null '>'
     && lk != 6533                  // True '>'
     && lk != 6534                  // False '>'
     && lk != 6535                  // Character '>'
     && lk != 6536                  // String '>'
     && lk != 6537                  // Real '>'
     && lk != 6659                  // Identifier '>='
     && lk != 6660                  // Null '>='
     && lk != 6661                  // True '>='
     && lk != 6662                  // False '>='
     && lk != 6663                  // Character '>='
     && lk != 6664                  // String '>='
     && lk != 6665                  // Real '>='
     && lk != 6787                  // Identifier '>>'
     && lk != 6788                  // Null '>>'
     && lk != 6789                  // True '>>'
     && lk != 6790                  // False '>>'
     && lk != 6791                  // Character '>>'
     && lk != 6792                  // String '>>'
     && lk != 6793                  // Real '>>'
     && lk != 6915                  // Identifier '>>='
     && lk != 6916                  // Null '>>='
     && lk != 6917                  // True '>>='
     && lk != 6918                  // False '>>='
     && lk != 6919                  // Character '>>='
     && lk != 6920                  // String '>>='
     && lk != 6921                  // Real '>>='
     && lk != 7043                  // Identifier '?'
     && lk != 7044                  // Null '?'
     && lk != 7045                  // True '?'
     && lk != 7046                  // False '?'
     && lk != 7047                  // Character '?'
     && lk != 7048                  // String '?'
     && lk != 7049                  // Real '?'
     && lk != 7172                  // Null '['
     && lk != 7173                  // True '['
     && lk != 7174                  // False '['
     && lk != 7175                  // Character '['
     && lk != 7176                  // String '['
     && lk != 7177                  // Real '['
     && lk != 7299                  // Identifier ']'
     && lk != 7300                  // Null ']'
     && lk != 7301                  // True ']'
     && lk != 7302                  // False ']'
     && lk != 7303                  // Character ']'
     && lk != 7304                  // String ']'
     && lk != 7305                  // Real ']'
     && lk != 7427                  // Identifier '^'
     && lk != 7428                  // Null '^'
     && lk != 7429                  // True '^'
     && lk != 7430                  // False '^'
     && lk != 7431                  // Character '^'
     && lk != 7432                  // String '^'
     && lk != 7433                  // Real '^'
     && lk != 7555                  // Identifier '^='
     && lk != 7556                  // Null '^='
     && lk != 7557                  // True '^='
     && lk != 7558                  // False '^='
     && lk != 7559                  // Character '^='
     && lk != 7560                  // String '^='
     && lk != 7561                  // Real '^='
     && lk != 7683                  // Identifier 'auto'
     && lk != 7684                  // Null 'auto'
     && lk != 7685                  // True 'auto'
     && lk != 7686                  // False 'auto'
     && lk != 7687                  // Character 'auto'
     && lk != 7688                  // String 'auto'
     && lk != 7689                  // Real 'auto'
     && lk != 7811                  // Identifier 'break'
     && lk != 7812                  // Null 'break'
     && lk != 7813                  // True 'break'
     && lk != 7814                  // False 'break'
     && lk != 7815                  // Character 'break'
     && lk != 7816                  // String 'break'
     && lk != 7817                  // Real 'break'
     && lk != 7939                  // Identifier 'case'
     && lk != 7940                  // Null 'case'
     && lk != 7941                  // True 'case'
     && lk != 7942                  // False 'case'
     && lk != 7943                  // Character 'case'
     && lk != 7944                  // String 'case'
     && lk != 7945                  // Real 'case'
     && lk != 8067                  // Identifier 'char'
     && lk != 8068                  // Null 'char'
     && lk != 8069                  // True 'char'
     && lk != 8070                  // False 'char'
     && lk != 8071                  // Character 'char'
     && lk != 8072                  // String 'char'
     && lk != 8073                  // Real 'char'
     && lk != 8195                  // Identifier 'const'
     && lk != 8196                  // Null 'const'
     && lk != 8197                  // True 'const'
     && lk != 8198                  // False 'const'
     && lk != 8199                  // Character 'const'
     && lk != 8200                  // String 'const'
     && lk != 8201                  // Real 'const'
     && lk != 8323                  // Identifier 'continue'
     && lk != 8324                  // Null 'continue'
     && lk != 8325                  // True 'continue'
     && lk != 8326                  // False 'continue'
     && lk != 8327                  // Character 'continue'
     && lk != 8328                  // String 'continue'
     && lk != 8329                  // Real 'continue'
     && lk != 8451                  // Identifier 'default'
     && lk != 8452                  // Null 'default'
     && lk != 8453                  // True 'default'
     && lk != 8454                  // False 'default'
     && lk != 8455                  // Character 'default'
     && lk != 8456                  // String 'default'
     && lk != 8457                  // Real 'default'
     && lk != 8579                  // Identifier 'do'
     && lk != 8580                  // Null 'do'
     && lk != 8581                  // True 'do'
     && lk != 8582                  // False 'do'
     && lk != 8583                  // Character 'do'
     && lk != 8584                  // String 'do'
     && lk != 8585                  // Real 'do'
     && lk != 8707                  // Identifier 'double'
     && lk != 8708                  // Null 'double'
     && lk != 8709                  // True 'double'
     && lk != 8710                  // False 'double'
     && lk != 8711                  // Character 'double'
     && lk != 8712                  // String 'double'
     && lk != 8713                  // Real 'double'
     && lk != 8835                  // Identifier 'else'
     && lk != 8836                  // Null 'else'
     && lk != 8837                  // True 'else'
     && lk != 8838                  // False 'else'
     && lk != 8839                  // Character 'else'
     && lk != 8840                  // String 'else'
     && lk != 8841                  // Real 'else'
     && lk != 8963                  // Identifier 'enum'
     && lk != 8964                  // Null 'enum'
     && lk != 8965                  // True 'enum'
     && lk != 8966                  // False 'enum'
     && lk != 8967                  // Character 'enum'
     && lk != 8968                  // String 'enum'
     && lk != 8969                  // Real 'enum'
     && lk != 9091                  // Identifier 'extern'
     && lk != 9092                  // Null 'extern'
     && lk != 9093                  // True 'extern'
     && lk != 9094                  // False 'extern'
     && lk != 9095                  // Character 'extern'
     && lk != 9096                  // String 'extern'
     && lk != 9097                  // Real 'extern'
     && lk != 9219                  // Identifier 'float'
     && lk != 9220                  // Null 'float'
     && lk != 9221                  // True 'float'
     && lk != 9222                  // False 'float'
     && lk != 9223                  // Character 'float'
     && lk != 9224                  // String 'float'
     && lk != 9225                  // Real 'float'
     && lk != 9347                  // Identifier 'for'
     && lk != 9348                  // Null 'for'
     && lk != 9349                  // True 'for'
     && lk != 9350                  // False 'for'
     && lk != 9351                  // Character 'for'
     && lk != 9352                  // String 'for'
     && lk != 9353                  // Real 'for'
     && lk != 9475                  // Identifier 'if'
     && lk != 9476                  // Null 'if'
     && lk != 9477                  // True 'if'
     && lk != 9478                  // False 'if'
     && lk != 9479                  // Character 'if'
     && lk != 9480                  // String 'if'
     && lk != 9481                  // Real 'if'
     && lk != 9603                  // Identifier 'int'
     && lk != 9604                  // Null 'int'
     && lk != 9605                  // True 'int'
     && lk != 9606                  // False 'int'
     && lk != 9607                  // Character 'int'
     && lk != 9608                  // String 'int'
     && lk != 9609                  // Real 'int'
     && lk != 9731                  // Identifier 'long'
     && lk != 9732                  // Null 'long'
     && lk != 9733                  // True 'long'
     && lk != 9734                  // False 'long'
     && lk != 9735                  // Character 'long'
     && lk != 9736                  // String 'long'
     && lk != 9737                  // Real 'long'
     && lk != 9859                  // Identifier 'return'
     && lk != 9860                  // Null 'return'
     && lk != 9861                  // True 'return'
     && lk != 9862                  // False 'return'
     && lk != 9863                  // Character 'return'
     && lk != 9864                  // String 'return'
     && lk != 9865                  // Real 'return'
     && lk != 9987                  // Identifier 'short'
     && lk != 9988                  // Null 'short'
     && lk != 9989                  // True 'short'
     && lk != 9990                  // False 'short'
     && lk != 9991                  // Character 'short'
     && lk != 9992                  // String 'short'
     && lk != 9993                  // Real 'short'
     && lk != 10115                 // Identifier 'signed'
     && lk != 10116                 // Null 'signed'
     && lk != 10117                 // True 'signed'
     && lk != 10118                 // False 'signed'
     && lk != 10119                 // Character 'signed'
     && lk != 10120                 // String 'signed'
     && lk != 10121                 // Real 'signed'
     && lk != 10243                 // Identifier 'sizeof'
     && lk != 10244                 // Null 'sizeof'
     && lk != 10245                 // True 'sizeof'
     && lk != 10246                 // False 'sizeof'
     && lk != 10247                 // Character 'sizeof'
     && lk != 10248                 // String 'sizeof'
     && lk != 10249                 // Real 'sizeof'
     && lk != 10371                 // Identifier 'static'
     && lk != 10372                 // Null 'static'
     && lk != 10373                 // True 'static'
     && lk != 10374                 // False 'static'
     && lk != 10375                 // Character 'static'
     && lk != 10376                 // String 'static'
     && lk != 10377                 // Real 'static'
     && lk != 10499                 // Identifier 'struct'
     && lk != 10500                 // Null 'struct'
     && lk != 10501                 // True 'struct'
     && lk != 10502                 // False 'struct'
     && lk != 10503                 // Character 'struct'
     && lk != 10504                 // String 'struct'
     && lk != 10505                 // Real 'struct'
     && lk != 10627                 // Identifier 'switch'
     && lk != 10628                 // Null 'switch'
     && lk != 10629                 // True 'switch'
     && lk != 10630                 // False 'switch'
     && lk != 10631                 // Character 'switch'
     && lk != 10632                 // String 'switch'
     && lk != 10633                 // Real 'switch'
     && lk != 10755                 // Identifier 'typedef'
     && lk != 10756                 // Null 'typedef'
     && lk != 10757                 // True 'typedef'
     && lk != 10758                 // False 'typedef'
     && lk != 10759                 // Character 'typedef'
     && lk != 10760                 // String 'typedef'
     && lk != 10761                 // Real 'typedef'
     && lk != 10883                 // Identifier 'union'
     && lk != 10884                 // Null 'union'
     && lk != 10885                 // True 'union'
     && lk != 10886                 // False 'union'
     && lk != 10887                 // Character 'union'
     && lk != 10888                 // String 'union'
     && lk != 10889                 // Real 'union'
     && lk != 11011                 // Identifier 'unsigned'
     && lk != 11012                 // Null 'unsigned'
     && lk != 11013                 // True 'unsigned'
     && lk != 11014                 // False 'unsigned'
     && lk != 11015                 // Character 'unsigned'
     && lk != 11016                 // String 'unsigned'
     && lk != 11017                 // Real 'unsigned'
     && lk != 11139                 // Identifier 'void'
     && lk != 11140                 // Null 'void'
     && lk != 11141                 // True 'void'
     && lk != 11142                 // False 'void'
     && lk != 11143                 // Character 'void'
     && lk != 11144                 // String 'void'
     && lk != 11145                 // Real 'void'
     && lk != 11267                 // Identifier 'volatile'
     && lk != 11268                 // Null 'volatile'
     && lk != 11269                 // True 'volatile'
     && lk != 11270                 // False 'volatile'
     && lk != 11271                 // Character 'volatile'
     && lk != 11272                 // String 'volatile'
     && lk != 11273                 // Real 'volatile'
     && lk != 11395                 // Identifier 'while'
     && lk != 11396                 // Null 'while'
     && lk != 11397                 // True 'while'
     && lk != 11398                 // False 'while'
     && lk != 11399                 // Character 'while'
     && lk != 11400                 // String 'while'
     && lk != 11401                 // Real 'while'
     && lk != 11523                 // Identifier '{'
     && lk != 11524                 // Null '{'
     && lk != 11525                 // True '{'
     && lk != 11526                 // False '{'
     && lk != 11527                 // Character '{'
     && lk != 11528                 // String '{'
     && lk != 11529                 // Real '{'
     && lk != 11651                 // Identifier '|'
     && lk != 11652                 // Null '|'
     && lk != 11653                 // True '|'
     && lk != 11654                 // False '|'
     && lk != 11655                 // Character '|'
     && lk != 11656                 // String '|'
     && lk != 11657                 // Real '|'
     && lk != 11779                 // Identifier '|='
     && lk != 11780                 // Null '|='
     && lk != 11781                 // True '|='
     && lk != 11782                 // False '|='
     && lk != 11783                 // Character '|='
     && lk != 11784                 // String '|='
     && lk != 11785                 // Real '|='
     && lk != 11907                 // Identifier '||'
     && lk != 11908                 // Null '||'
     && lk != 11909                 // True '||'
     && lk != 11910                 // False '||'
     && lk != 11911                 // Character '||'
     && lk != 11912                 // String '||'
     && lk != 11913                 // Real '||'
     && lk != 12035                 // Identifier '}'
     && lk != 12036                 // Null '}'
     && lk != 12037                 // True '}'
     && lk != 12038                 // False '}'
     && lk != 12039                 // Character '}'
     && lk != 12040                 // String '}'
     && lk != 12041                 // Real '}'
     && lk != 12163                 // Identifier '~'
     && lk != 12164                 // Null '~'
     && lk != 12165                 // True '~'
     && lk != 12166                 // False '~'
     && lk != 12167                 // Character '~'
     && lk != 12168                 // String '~'
     && lk != 12169                 // Real '~'
     && lk != 20611                 // Identifier '++' END
     && lk != 20612                 // Null '++' END
     && lk != 20613                 // True '++' END
     && lk != 20614                 // False '++' END
     && lk != 20615                 // Character '++' END
     && lk != 20616                 // String '++' END
     && lk != 20617                 // Real '++' END
     && lk != 21123                 // Identifier '--' END
     && lk != 21124                 // Null '--' END
     && lk != 21125                 // True '--' END
     && lk != 21126                 // False '--' END
     && lk != 21127                 // Character '--' END
     && lk != 21128                 // String '--' END
     && lk != 21129                 // Real '--' END
     && lk != 23736                 // '[' ']' END
     && lk != 56504                 // '[' ']' Identifier
     && lk != 72888                 // '[' ']' Null
     && lk != 89272                 // '[' ']' True
     && lk != 105656                // '[' ']' False
     && lk != 122040                // '[' ']' Character
     && lk != 138424                // '[' ']' String
     && lk != 154808                // '[' ']' Real
     && lk != 168067                // Identifier '++' Comment
     && lk != 168068                // Null '++' Comment
     && lk != 168069                // True '++' Comment
     && lk != 168070                // False '++' Comment
     && lk != 168071                // Character '++' Comment
     && lk != 168072                // String '++' Comment
     && lk != 168073                // Real '++' Comment
     && lk != 168579                // Identifier '--' Comment
     && lk != 168580                // Null '--' Comment
     && lk != 168581                // True '--' Comment
     && lk != 168582                // False '--' Comment
     && lk != 168583                // Character '--' Comment
     && lk != 168584                // String '--' Comment
     && lk != 168585                // Real '--' Comment
     && lk != 171192                // '[' ']' Comment
     && lk != 200835                // Identifier '++' '!'
     && lk != 200836                // Null '++' '!'
     && lk != 200837                // True '++' '!'
     && lk != 200838                // False '++' '!'
     && lk != 200839                // Character '++' '!'
     && lk != 200840                // String '++' '!'
     && lk != 200841                // Real '++' '!'
     && lk != 201347                // Identifier '--' '!'
     && lk != 201348                // Null '--' '!'
     && lk != 201349                // True '--' '!'
     && lk != 201350                // False '--' '!'
     && lk != 201351                // Character '--' '!'
     && lk != 201352                // String '--' '!'
     && lk != 201353                // Real '--' '!'
     && lk != 203960                // '[' ']' '!'
     && lk != 217219                // Identifier '++' '!='
     && lk != 217220                // Null '++' '!='
     && lk != 217221                // True '++' '!='
     && lk != 217222                // False '++' '!='
     && lk != 217223                // Character '++' '!='
     && lk != 217224                // String '++' '!='
     && lk != 217225                // Real '++' '!='
     && lk != 217731                // Identifier '--' '!='
     && lk != 217732                // Null '--' '!='
     && lk != 217733                // True '--' '!='
     && lk != 217734                // False '--' '!='
     && lk != 217735                // Character '--' '!='
     && lk != 217736                // String '--' '!='
     && lk != 217737                // Real '--' '!='
     && lk != 220344                // '[' ']' '!='
     && lk != 233603                // Identifier '++' '#define'
     && lk != 233604                // Null '++' '#define'
     && lk != 233605                // True '++' '#define'
     && lk != 233606                // False '++' '#define'
     && lk != 233607                // Character '++' '#define'
     && lk != 233608                // String '++' '#define'
     && lk != 233609                // Real '++' '#define'
     && lk != 234115                // Identifier '--' '#define'
     && lk != 234116                // Null '--' '#define'
     && lk != 234117                // True '--' '#define'
     && lk != 234118                // False '--' '#define'
     && lk != 234119                // Character '--' '#define'
     && lk != 234120                // String '--' '#define'
     && lk != 234121                // Real '--' '#define'
     && lk != 236728                // '[' ']' '#define'
     && lk != 249987                // Identifier '++' '#elif'
     && lk != 249988                // Null '++' '#elif'
     && lk != 249989                // True '++' '#elif'
     && lk != 249990                // False '++' '#elif'
     && lk != 249991                // Character '++' '#elif'
     && lk != 249992                // String '++' '#elif'
     && lk != 249993                // Real '++' '#elif'
     && lk != 250499                // Identifier '--' '#elif'
     && lk != 250500                // Null '--' '#elif'
     && lk != 250501                // True '--' '#elif'
     && lk != 250502                // False '--' '#elif'
     && lk != 250503                // Character '--' '#elif'
     && lk != 250504                // String '--' '#elif'
     && lk != 250505                // Real '--' '#elif'
     && lk != 253112                // '[' ']' '#elif'
     && lk != 266371                // Identifier '++' '#else'
     && lk != 266372                // Null '++' '#else'
     && lk != 266373                // True '++' '#else'
     && lk != 266374                // False '++' '#else'
     && lk != 266375                // Character '++' '#else'
     && lk != 266376                // String '++' '#else'
     && lk != 266377                // Real '++' '#else'
     && lk != 266883                // Identifier '--' '#else'
     && lk != 266884                // Null '--' '#else'
     && lk != 266885                // True '--' '#else'
     && lk != 266886                // False '--' '#else'
     && lk != 266887                // Character '--' '#else'
     && lk != 266888                // String '--' '#else'
     && lk != 266889                // Real '--' '#else'
     && lk != 269496                // '[' ']' '#else'
     && lk != 282755                // Identifier '++' '#endif'
     && lk != 282756                // Null '++' '#endif'
     && lk != 282757                // True '++' '#endif'
     && lk != 282758                // False '++' '#endif'
     && lk != 282759                // Character '++' '#endif'
     && lk != 282760                // String '++' '#endif'
     && lk != 282761                // Real '++' '#endif'
     && lk != 283267                // Identifier '--' '#endif'
     && lk != 283268                // Null '--' '#endif'
     && lk != 283269                // True '--' '#endif'
     && lk != 283270                // False '--' '#endif'
     && lk != 283271                // Character '--' '#endif'
     && lk != 283272                // String '--' '#endif'
     && lk != 283273                // Real '--' '#endif'
     && lk != 285880                // '[' ']' '#endif'
     && lk != 299139                // Identifier '++' '#if'
     && lk != 299140                // Null '++' '#if'
     && lk != 299141                // True '++' '#if'
     && lk != 299142                // False '++' '#if'
     && lk != 299143                // Character '++' '#if'
     && lk != 299144                // String '++' '#if'
     && lk != 299145                // Real '++' '#if'
     && lk != 299651                // Identifier '--' '#if'
     && lk != 299652                // Null '--' '#if'
     && lk != 299653                // True '--' '#if'
     && lk != 299654                // False '--' '#if'
     && lk != 299655                // Character '--' '#if'
     && lk != 299656                // String '--' '#if'
     && lk != 299657                // Real '--' '#if'
     && lk != 302264                // '[' ']' '#if'
     && lk != 315523                // Identifier '++' '#ifdef'
     && lk != 315524                // Null '++' '#ifdef'
     && lk != 315525                // True '++' '#ifdef'
     && lk != 315526                // False '++' '#ifdef'
     && lk != 315527                // Character '++' '#ifdef'
     && lk != 315528                // String '++' '#ifdef'
     && lk != 315529                // Real '++' '#ifdef'
     && lk != 316035                // Identifier '--' '#ifdef'
     && lk != 316036                // Null '--' '#ifdef'
     && lk != 316037                // True '--' '#ifdef'
     && lk != 316038                // False '--' '#ifdef'
     && lk != 316039                // Character '--' '#ifdef'
     && lk != 316040                // String '--' '#ifdef'
     && lk != 316041                // Real '--' '#ifdef'
     && lk != 318648                // '[' ']' '#ifdef'
     && lk != 331907                // Identifier '++' '#ifndef'
     && lk != 331908                // Null '++' '#ifndef'
     && lk != 331909                // True '++' '#ifndef'
     && lk != 331910                // False '++' '#ifndef'
     && lk != 331911                // Character '++' '#ifndef'
     && lk != 331912                // String '++' '#ifndef'
     && lk != 331913                // Real '++' '#ifndef'
     && lk != 332419                // Identifier '--' '#ifndef'
     && lk != 332420                // Null '--' '#ifndef'
     && lk != 332421                // True '--' '#ifndef'
     && lk != 332422                // False '--' '#ifndef'
     && lk != 332423                // Character '--' '#ifndef'
     && lk != 332424                // String '--' '#ifndef'
     && lk != 332425                // Real '--' '#ifndef'
     && lk != 335032                // '[' ']' '#ifndef'
     && lk != 348291                // Identifier '++' '#include'
     && lk != 348292                // Null '++' '#include'
     && lk != 348293                // True '++' '#include'
     && lk != 348294                // False '++' '#include'
     && lk != 348295                // Character '++' '#include'
     && lk != 348296                // String '++' '#include'
     && lk != 348297                // Real '++' '#include'
     && lk != 348803                // Identifier '--' '#include'
     && lk != 348804                // Null '--' '#include'
     && lk != 348805                // True '--' '#include'
     && lk != 348806                // False '--' '#include'
     && lk != 348807                // Character '--' '#include'
     && lk != 348808                // String '--' '#include'
     && lk != 348809                // Real '--' '#include'
     && lk != 351416                // '[' ']' '#include'
     && lk != 364675                // Identifier '++' '#undef'
     && lk != 364676                // Null '++' '#undef'
     && lk != 364677                // True '++' '#undef'
     && lk != 364678                // False '++' '#undef'
     && lk != 364679                // Character '++' '#undef'
     && lk != 364680                // String '++' '#undef'
     && lk != 364681                // Real '++' '#undef'
     && lk != 365187                // Identifier '--' '#undef'
     && lk != 365188                // Null '--' '#undef'
     && lk != 365189                // True '--' '#undef'
     && lk != 365190                // False '--' '#undef'
     && lk != 365191                // Character '--' '#undef'
     && lk != 365192                // String '--' '#undef'
     && lk != 365193                // Real '--' '#undef'
     && lk != 367800                // '[' ']' '#undef'
     && lk != 381059                // Identifier '++' '%'
     && lk != 381060                // Null '++' '%'
     && lk != 381061                // True '++' '%'
     && lk != 381062                // False '++' '%'
     && lk != 381063                // Character '++' '%'
     && lk != 381064                // String '++' '%'
     && lk != 381065                // Real '++' '%'
     && lk != 381571                // Identifier '--' '%'
     && lk != 381572                // Null '--' '%'
     && lk != 381573                // True '--' '%'
     && lk != 381574                // False '--' '%'
     && lk != 381575                // Character '--' '%'
     && lk != 381576                // String '--' '%'
     && lk != 381577                // Real '--' '%'
     && lk != 384184                // '[' ']' '%'
     && lk != 397443                // Identifier '++' '%='
     && lk != 397444                // Null '++' '%='
     && lk != 397445                // True '++' '%='
     && lk != 397446                // False '++' '%='
     && lk != 397447                // Character '++' '%='
     && lk != 397448                // String '++' '%='
     && lk != 397449                // Real '++' '%='
     && lk != 397955                // Identifier '--' '%='
     && lk != 397956                // Null '--' '%='
     && lk != 397957                // True '--' '%='
     && lk != 397958                // False '--' '%='
     && lk != 397959                // Character '--' '%='
     && lk != 397960                // String '--' '%='
     && lk != 397961                // Real '--' '%='
     && lk != 400568                // '[' ']' '%='
     && lk != 413827                // Identifier '++' '&'
     && lk != 413828                // Null '++' '&'
     && lk != 413829                // True '++' '&'
     && lk != 413830                // False '++' '&'
     && lk != 413831                // Character '++' '&'
     && lk != 413832                // String '++' '&'
     && lk != 413833                // Real '++' '&'
     && lk != 414339                // Identifier '--' '&'
     && lk != 414340                // Null '--' '&'
     && lk != 414341                // True '--' '&'
     && lk != 414342                // False '--' '&'
     && lk != 414343                // Character '--' '&'
     && lk != 414344                // String '--' '&'
     && lk != 414345                // Real '--' '&'
     && lk != 416952                // '[' ']' '&'
     && lk != 430211                // Identifier '++' '&&'
     && lk != 430212                // Null '++' '&&'
     && lk != 430213                // True '++' '&&'
     && lk != 430214                // False '++' '&&'
     && lk != 430215                // Character '++' '&&'
     && lk != 430216                // String '++' '&&'
     && lk != 430217                // Real '++' '&&'
     && lk != 430723                // Identifier '--' '&&'
     && lk != 430724                // Null '--' '&&'
     && lk != 430725                // True '--' '&&'
     && lk != 430726                // False '--' '&&'
     && lk != 430727                // Character '--' '&&'
     && lk != 430728                // String '--' '&&'
     && lk != 430729                // Real '--' '&&'
     && lk != 433336                // '[' ']' '&&'
     && lk != 446595                // Identifier '++' '&='
     && lk != 446596                // Null '++' '&='
     && lk != 446597                // True '++' '&='
     && lk != 446598                // False '++' '&='
     && lk != 446599                // Character '++' '&='
     && lk != 446600                // String '++' '&='
     && lk != 446601                // Real '++' '&='
     && lk != 447107                // Identifier '--' '&='
     && lk != 447108                // Null '--' '&='
     && lk != 447109                // True '--' '&='
     && lk != 447110                // False '--' '&='
     && lk != 447111                // Character '--' '&='
     && lk != 447112                // String '--' '&='
     && lk != 447113                // Real '--' '&='
     && lk != 449720                // '[' ']' '&='
     && lk != 466104                // '[' ']' '('
     && lk != 479363                // Identifier '++' ')'
     && lk != 479364                // Null '++' ')'
     && lk != 479365                // True '++' ')'
     && lk != 479366                // False '++' ')'
     && lk != 479367                // Character '++' ')'
     && lk != 479368                // String '++' ')'
     && lk != 479369                // Real '++' ')'
     && lk != 479875                // Identifier '--' ')'
     && lk != 479876                // Null '--' ')'
     && lk != 479877                // True '--' ')'
     && lk != 479878                // False '--' ')'
     && lk != 479879                // Character '--' ')'
     && lk != 479880                // String '--' ')'
     && lk != 479881                // Real '--' ')'
     && lk != 482488                // '[' ']' ')'
     && lk != 495747                // Identifier '++' '*'
     && lk != 495748                // Null '++' '*'
     && lk != 495749                // True '++' '*'
     && lk != 495750                // False '++' '*'
     && lk != 495751                // Character '++' '*'
     && lk != 495752                // String '++' '*'
     && lk != 495753                // Real '++' '*'
     && lk != 496259                // Identifier '--' '*'
     && lk != 496260                // Null '--' '*'
     && lk != 496261                // True '--' '*'
     && lk != 496262                // False '--' '*'
     && lk != 496263                // Character '--' '*'
     && lk != 496264                // String '--' '*'
     && lk != 496265                // Real '--' '*'
     && lk != 498872                // '[' ']' '*'
     && lk != 512131                // Identifier '++' '*='
     && lk != 512132                // Null '++' '*='
     && lk != 512133                // True '++' '*='
     && lk != 512134                // False '++' '*='
     && lk != 512135                // Character '++' '*='
     && lk != 512136                // String '++' '*='
     && lk != 512137                // Real '++' '*='
     && lk != 512643                // Identifier '--' '*='
     && lk != 512644                // Null '--' '*='
     && lk != 512645                // True '--' '*='
     && lk != 512646                // False '--' '*='
     && lk != 512647                // Character '--' '*='
     && lk != 512648                // String '--' '*='
     && lk != 512649                // Real '--' '*='
     && lk != 515256                // '[' ']' '*='
     && lk != 528515                // Identifier '++' '+'
     && lk != 528516                // Null '++' '+'
     && lk != 528517                // True '++' '+'
     && lk != 528518                // False '++' '+'
     && lk != 528519                // Character '++' '+'
     && lk != 528520                // String '++' '+'
     && lk != 528521                // Real '++' '+'
     && lk != 529027                // Identifier '--' '+'
     && lk != 529028                // Null '--' '+'
     && lk != 529029                // True '--' '+'
     && lk != 529030                // False '--' '+'
     && lk != 529031                // Character '--' '+'
     && lk != 529032                // String '--' '+'
     && lk != 529033                // Real '--' '+'
     && lk != 531640                // '[' ']' '+'
     && lk != 544899                // Identifier '++' '++'
     && lk != 544900                // Null '++' '++'
     && lk != 544901                // True '++' '++'
     && lk != 544902                // False '++' '++'
     && lk != 544903                // Character '++' '++'
     && lk != 544904                // String '++' '++'
     && lk != 544905                // Real '++' '++'
     && lk != 545411                // Identifier '--' '++'
     && lk != 545412                // Null '--' '++'
     && lk != 545413                // True '--' '++'
     && lk != 545414                // False '--' '++'
     && lk != 545415                // Character '--' '++'
     && lk != 545416                // String '--' '++'
     && lk != 545417                // Real '--' '++'
     && lk != 561283                // Identifier '++' '+='
     && lk != 561284                // Null '++' '+='
     && lk != 561285                // True '++' '+='
     && lk != 561286                // False '++' '+='
     && lk != 561287                // Character '++' '+='
     && lk != 561288                // String '++' '+='
     && lk != 561289                // Real '++' '+='
     && lk != 561795                // Identifier '--' '+='
     && lk != 561796                // Null '--' '+='
     && lk != 561797                // True '--' '+='
     && lk != 561798                // False '--' '+='
     && lk != 561799                // Character '--' '+='
     && lk != 561800                // String '--' '+='
     && lk != 561801                // Real '--' '+='
     && lk != 564408                // '[' ']' '+='
     && lk != 577667                // Identifier '++' ','
     && lk != 577668                // Null '++' ','
     && lk != 577669                // True '++' ','
     && lk != 577670                // False '++' ','
     && lk != 577671                // Character '++' ','
     && lk != 577672                // String '++' ','
     && lk != 577673                // Real '++' ','
     && lk != 578179                // Identifier '--' ','
     && lk != 578180                // Null '--' ','
     && lk != 578181                // True '--' ','
     && lk != 578182                // False '--' ','
     && lk != 578183                // Character '--' ','
     && lk != 578184                // String '--' ','
     && lk != 578185                // Real '--' ','
     && lk != 580792                // '[' ']' ','
     && lk != 594051                // Identifier '++' '-'
     && lk != 594052                // Null '++' '-'
     && lk != 594053                // True '++' '-'
     && lk != 594054                // False '++' '-'
     && lk != 594055                // Character '++' '-'
     && lk != 594056                // String '++' '-'
     && lk != 594057                // Real '++' '-'
     && lk != 594563                // Identifier '--' '-'
     && lk != 594564                // Null '--' '-'
     && lk != 594565                // True '--' '-'
     && lk != 594566                // False '--' '-'
     && lk != 594567                // Character '--' '-'
     && lk != 594568                // String '--' '-'
     && lk != 594569                // Real '--' '-'
     && lk != 597176                // '[' ']' '-'
     && lk != 610435                // Identifier '++' '--'
     && lk != 610436                // Null '++' '--'
     && lk != 610437                // True '++' '--'
     && lk != 610438                // False '++' '--'
     && lk != 610439                // Character '++' '--'
     && lk != 610440                // String '++' '--'
     && lk != 610441                // Real '++' '--'
     && lk != 610947                // Identifier '--' '--'
     && lk != 610948                // Null '--' '--'
     && lk != 610949                // True '--' '--'
     && lk != 610950                // False '--' '--'
     && lk != 610951                // Character '--' '--'
     && lk != 610952                // String '--' '--'
     && lk != 610953                // Real '--' '--'
     && lk != 626819                // Identifier '++' '-='
     && lk != 626820                // Null '++' '-='
     && lk != 626821                // True '++' '-='
     && lk != 626822                // False '++' '-='
     && lk != 626823                // Character '++' '-='
     && lk != 626824                // String '++' '-='
     && lk != 626825                // Real '++' '-='
     && lk != 627331                // Identifier '--' '-='
     && lk != 627332                // Null '--' '-='
     && lk != 627333                // True '--' '-='
     && lk != 627334                // False '--' '-='
     && lk != 627335                // Character '--' '-='
     && lk != 627336                // String '--' '-='
     && lk != 627337                // Real '--' '-='
     && lk != 629944                // '[' ']' '-='
     && lk != 675971                // Identifier '++' '/'
     && lk != 675972                // Null '++' '/'
     && lk != 675973                // True '++' '/'
     && lk != 675974                // False '++' '/'
     && lk != 675975                // Character '++' '/'
     && lk != 675976                // String '++' '/'
     && lk != 675977                // Real '++' '/'
     && lk != 676483                // Identifier '--' '/'
     && lk != 676484                // Null '--' '/'
     && lk != 676485                // True '--' '/'
     && lk != 676486                // False '--' '/'
     && lk != 676487                // Character '--' '/'
     && lk != 676488                // String '--' '/'
     && lk != 676489                // Real '--' '/'
     && lk != 679096                // '[' ']' '/'
     && lk != 692355                // Identifier '++' '/='
     && lk != 692356                // Null '++' '/='
     && lk != 692357                // True '++' '/='
     && lk != 692358                // False '++' '/='
     && lk != 692359                // Character '++' '/='
     && lk != 692360                // String '++' '/='
     && lk != 692361                // Real '++' '/='
     && lk != 692867                // Identifier '--' '/='
     && lk != 692868                // Null '--' '/='
     && lk != 692869                // True '--' '/='
     && lk != 692870                // False '--' '/='
     && lk != 692871                // Character '--' '/='
     && lk != 692872                // String '--' '/='
     && lk != 692873                // Real '--' '/='
     && lk != 695480                // '[' ']' '/='
     && lk != 708739                // Identifier '++' ':'
     && lk != 708740                // Null '++' ':'
     && lk != 708741                // True '++' ':'
     && lk != 708742                // False '++' ':'
     && lk != 708743                // Character '++' ':'
     && lk != 708744                // String '++' ':'
     && lk != 708745                // Real '++' ':'
     && lk != 709251                // Identifier '--' ':'
     && lk != 709252                // Null '--' ':'
     && lk != 709253                // True '--' ':'
     && lk != 709254                // False '--' ':'
     && lk != 709255                // Character '--' ':'
     && lk != 709256                // String '--' ':'
     && lk != 709257                // Real '--' ':'
     && lk != 711864                // '[' ']' ':'
     && lk != 725123                // Identifier '++' ';'
     && lk != 725124                // Null '++' ';'
     && lk != 725125                // True '++' ';'
     && lk != 725126                // False '++' ';'
     && lk != 725127                // Character '++' ';'
     && lk != 725128                // String '++' ';'
     && lk != 725129                // Real '++' ';'
     && lk != 725635                // Identifier '--' ';'
     && lk != 725636                // Null '--' ';'
     && lk != 725637                // True '--' ';'
     && lk != 725638                // False '--' ';'
     && lk != 725639                // Character '--' ';'
     && lk != 725640                // String '--' ';'
     && lk != 725641                // Real '--' ';'
     && lk != 728248                // '[' ']' ';'
     && lk != 741507                // Identifier '++' '<'
     && lk != 741508                // Null '++' '<'
     && lk != 741509                // True '++' '<'
     && lk != 741510                // False '++' '<'
     && lk != 741511                // Character '++' '<'
     && lk != 741512                // String '++' '<'
     && lk != 741513                // Real '++' '<'
     && lk != 742019                // Identifier '--' '<'
     && lk != 742020                // Null '--' '<'
     && lk != 742021                // True '--' '<'
     && lk != 742022                // False '--' '<'
     && lk != 742023                // Character '--' '<'
     && lk != 742024                // String '--' '<'
     && lk != 742025                // Real '--' '<'
     && lk != 744632                // '[' ']' '<'
     && lk != 757891                // Identifier '++' '<<'
     && lk != 757892                // Null '++' '<<'
     && lk != 757893                // True '++' '<<'
     && lk != 757894                // False '++' '<<'
     && lk != 757895                // Character '++' '<<'
     && lk != 757896                // String '++' '<<'
     && lk != 757897                // Real '++' '<<'
     && lk != 758403                // Identifier '--' '<<'
     && lk != 758404                // Null '--' '<<'
     && lk != 758405                // True '--' '<<'
     && lk != 758406                // False '--' '<<'
     && lk != 758407                // Character '--' '<<'
     && lk != 758408                // String '--' '<<'
     && lk != 758409                // Real '--' '<<'
     && lk != 761016                // '[' ']' '<<'
     && lk != 774275                // Identifier '++' '<<='
     && lk != 774276                // Null '++' '<<='
     && lk != 774277                // True '++' '<<='
     && lk != 774278                // False '++' '<<='
     && lk != 774279                // Character '++' '<<='
     && lk != 774280                // String '++' '<<='
     && lk != 774281                // Real '++' '<<='
     && lk != 774787                // Identifier '--' '<<='
     && lk != 774788                // Null '--' '<<='
     && lk != 774789                // True '--' '<<='
     && lk != 774790                // False '--' '<<='
     && lk != 774791                // Character '--' '<<='
     && lk != 774792                // String '--' '<<='
     && lk != 774793                // Real '--' '<<='
     && lk != 777400                // '[' ']' '<<='
     && lk != 790659                // Identifier '++' '<='
     && lk != 790660                // Null '++' '<='
     && lk != 790661                // True '++' '<='
     && lk != 790662                // False '++' '<='
     && lk != 790663                // Character '++' '<='
     && lk != 790664                // String '++' '<='
     && lk != 790665                // Real '++' '<='
     && lk != 791171                // Identifier '--' '<='
     && lk != 791172                // Null '--' '<='
     && lk != 791173                // True '--' '<='
     && lk != 791174                // False '--' '<='
     && lk != 791175                // Character '--' '<='
     && lk != 791176                // String '--' '<='
     && lk != 791177                // Real '--' '<='
     && lk != 793784                // '[' ']' '<='
     && lk != 807043                // Identifier '++' '='
     && lk != 807044                // Null '++' '='
     && lk != 807045                // True '++' '='
     && lk != 807046                // False '++' '='
     && lk != 807047                // Character '++' '='
     && lk != 807048                // String '++' '='
     && lk != 807049                // Real '++' '='
     && lk != 807555                // Identifier '--' '='
     && lk != 807556                // Null '--' '='
     && lk != 807557                // True '--' '='
     && lk != 807558                // False '--' '='
     && lk != 807559                // Character '--' '='
     && lk != 807560                // String '--' '='
     && lk != 807561                // Real '--' '='
     && lk != 810168                // '[' ']' '='
     && lk != 823427                // Identifier '++' '=='
     && lk != 823428                // Null '++' '=='
     && lk != 823429                // True '++' '=='
     && lk != 823430                // False '++' '=='
     && lk != 823431                // Character '++' '=='
     && lk != 823432                // String '++' '=='
     && lk != 823433                // Real '++' '=='
     && lk != 823939                // Identifier '--' '=='
     && lk != 823940                // Null '--' '=='
     && lk != 823941                // True '--' '=='
     && lk != 823942                // False '--' '=='
     && lk != 823943                // Character '--' '=='
     && lk != 823944                // String '--' '=='
     && lk != 823945                // Real '--' '=='
     && lk != 826552                // '[' ']' '=='
     && lk != 839811                // Identifier '++' '>'
     && lk != 839812                // Null '++' '>'
     && lk != 839813                // True '++' '>'
     && lk != 839814                // False '++' '>'
     && lk != 839815                // Character '++' '>'
     && lk != 839816                // String '++' '>'
     && lk != 839817                // Real '++' '>'
     && lk != 840323                // Identifier '--' '>'
     && lk != 840324                // Null '--' '>'
     && lk != 840325                // True '--' '>'
     && lk != 840326                // False '--' '>'
     && lk != 840327                // Character '--' '>'
     && lk != 840328                // String '--' '>'
     && lk != 840329                // Real '--' '>'
     && lk != 842936                // '[' ']' '>'
     && lk != 856195                // Identifier '++' '>='
     && lk != 856196                // Null '++' '>='
     && lk != 856197                // True '++' '>='
     && lk != 856198                // False '++' '>='
     && lk != 856199                // Character '++' '>='
     && lk != 856200                // String '++' '>='
     && lk != 856201                // Real '++' '>='
     && lk != 856707                // Identifier '--' '>='
     && lk != 856708                // Null '--' '>='
     && lk != 856709                // True '--' '>='
     && lk != 856710                // False '--' '>='
     && lk != 856711                // Character '--' '>='
     && lk != 856712                // String '--' '>='
     && lk != 856713                // Real '--' '>='
     && lk != 859320                // '[' ']' '>='
     && lk != 872579                // Identifier '++' '>>'
     && lk != 872580                // Null '++' '>>'
     && lk != 872581                // True '++' '>>'
     && lk != 872582                // False '++' '>>'
     && lk != 872583                // Character '++' '>>'
     && lk != 872584                // String '++' '>>'
     && lk != 872585                // Real '++' '>>'
     && lk != 873091                // Identifier '--' '>>'
     && lk != 873092                // Null '--' '>>'
     && lk != 873093                // True '--' '>>'
     && lk != 873094                // False '--' '>>'
     && lk != 873095                // Character '--' '>>'
     && lk != 873096                // String '--' '>>'
     && lk != 873097                // Real '--' '>>'
     && lk != 875704                // '[' ']' '>>'
     && lk != 888963                // Identifier '++' '>>='
     && lk != 888964                // Null '++' '>>='
     && lk != 888965                // True '++' '>>='
     && lk != 888966                // False '++' '>>='
     && lk != 888967                // Character '++' '>>='
     && lk != 888968                // String '++' '>>='
     && lk != 888969                // Real '++' '>>='
     && lk != 889475                // Identifier '--' '>>='
     && lk != 889476                // Null '--' '>>='
     && lk != 889477                // True '--' '>>='
     && lk != 889478                // False '--' '>>='
     && lk != 889479                // Character '--' '>>='
     && lk != 889480                // String '--' '>>='
     && lk != 889481                // Real '--' '>>='
     && lk != 892088                // '[' ']' '>>='
     && lk != 905347                // Identifier '++' '?'
     && lk != 905348                // Null '++' '?'
     && lk != 905349                // True '++' '?'
     && lk != 905350                // False '++' '?'
     && lk != 905351                // Character '++' '?'
     && lk != 905352                // String '++' '?'
     && lk != 905353                // Real '++' '?'
     && lk != 905859                // Identifier '--' '?'
     && lk != 905860                // Null '--' '?'
     && lk != 905861                // True '--' '?'
     && lk != 905862                // False '--' '?'
     && lk != 905863                // Character '--' '?'
     && lk != 905864                // String '--' '?'
     && lk != 905865                // Real '--' '?'
     && lk != 908472                // '[' ']' '?'
     && lk != 924856                // '[' ']' '['
     && lk != 938115                // Identifier '++' ']'
     && lk != 938116                // Null '++' ']'
     && lk != 938117                // True '++' ']'
     && lk != 938118                // False '++' ']'
     && lk != 938119                // Character '++' ']'
     && lk != 938120                // String '++' ']'
     && lk != 938121                // Real '++' ']'
     && lk != 938627                // Identifier '--' ']'
     && lk != 938628                // Null '--' ']'
     && lk != 938629                // True '--' ']'
     && lk != 938630                // False '--' ']'
     && lk != 938631                // Character '--' ']'
     && lk != 938632                // String '--' ']'
     && lk != 938633                // Real '--' ']'
     && lk != 941059                // Identifier '[' ']'
     && lk != 941240                // '[' ']' ']'
     && lk != 954499                // Identifier '++' '^'
     && lk != 954500                // Null '++' '^'
     && lk != 954501                // True '++' '^'
     && lk != 954502                // False '++' '^'
     && lk != 954503                // Character '++' '^'
     && lk != 954504                // String '++' '^'
     && lk != 954505                // Real '++' '^'
     && lk != 955011                // Identifier '--' '^'
     && lk != 955012                // Null '--' '^'
     && lk != 955013                // True '--' '^'
     && lk != 955014                // False '--' '^'
     && lk != 955015                // Character '--' '^'
     && lk != 955016                // String '--' '^'
     && lk != 955017                // Real '--' '^'
     && lk != 957624                // '[' ']' '^'
     && lk != 970883                // Identifier '++' '^='
     && lk != 970884                // Null '++' '^='
     && lk != 970885                // True '++' '^='
     && lk != 970886                // False '++' '^='
     && lk != 970887                // Character '++' '^='
     && lk != 970888                // String '++' '^='
     && lk != 970889                // Real '++' '^='
     && lk != 971395                // Identifier '--' '^='
     && lk != 971396                // Null '--' '^='
     && lk != 971397                // True '--' '^='
     && lk != 971398                // False '--' '^='
     && lk != 971399                // Character '--' '^='
     && lk != 971400                // String '--' '^='
     && lk != 971401                // Real '--' '^='
     && lk != 974008                // '[' ']' '^='
     && lk != 987267                // Identifier '++' 'auto'
     && lk != 987268                // Null '++' 'auto'
     && lk != 987269                // True '++' 'auto'
     && lk != 987270                // False '++' 'auto'
     && lk != 987271                // Character '++' 'auto'
     && lk != 987272                // String '++' 'auto'
     && lk != 987273                // Real '++' 'auto'
     && lk != 987779                // Identifier '--' 'auto'
     && lk != 987780                // Null '--' 'auto'
     && lk != 987781                // True '--' 'auto'
     && lk != 987782                // False '--' 'auto'
     && lk != 987783                // Character '--' 'auto'
     && lk != 987784                // String '--' 'auto'
     && lk != 987785                // Real '--' 'auto'
     && lk != 990392                // '[' ']' 'auto'
     && lk != 1003651               // Identifier '++' 'break'
     && lk != 1003652               // Null '++' 'break'
     && lk != 1003653               // True '++' 'break'
     && lk != 1003654               // False '++' 'break'
     && lk != 1003655               // Character '++' 'break'
     && lk != 1003656               // String '++' 'break'
     && lk != 1003657               // Real '++' 'break'
     && lk != 1004163               // Identifier '--' 'break'
     && lk != 1004164               // Null '--' 'break'
     && lk != 1004165               // True '--' 'break'
     && lk != 1004166               // False '--' 'break'
     && lk != 1004167               // Character '--' 'break'
     && lk != 1004168               // String '--' 'break'
     && lk != 1004169               // Real '--' 'break'
     && lk != 1006776               // '[' ']' 'break'
     && lk != 1020035               // Identifier '++' 'case'
     && lk != 1020036               // Null '++' 'case'
     && lk != 1020037               // True '++' 'case'
     && lk != 1020038               // False '++' 'case'
     && lk != 1020039               // Character '++' 'case'
     && lk != 1020040               // String '++' 'case'
     && lk != 1020041               // Real '++' 'case'
     && lk != 1020547               // Identifier '--' 'case'
     && lk != 1020548               // Null '--' 'case'
     && lk != 1020549               // True '--' 'case'
     && lk != 1020550               // False '--' 'case'
     && lk != 1020551               // Character '--' 'case'
     && lk != 1020552               // String '--' 'case'
     && lk != 1020553               // Real '--' 'case'
     && lk != 1023160               // '[' ']' 'case'
     && lk != 1036419               // Identifier '++' 'char'
     && lk != 1036420               // Null '++' 'char'
     && lk != 1036421               // True '++' 'char'
     && lk != 1036422               // False '++' 'char'
     && lk != 1036423               // Character '++' 'char'
     && lk != 1036424               // String '++' 'char'
     && lk != 1036425               // Real '++' 'char'
     && lk != 1036931               // Identifier '--' 'char'
     && lk != 1036932               // Null '--' 'char'
     && lk != 1036933               // True '--' 'char'
     && lk != 1036934               // False '--' 'char'
     && lk != 1036935               // Character '--' 'char'
     && lk != 1036936               // String '--' 'char'
     && lk != 1036937               // Real '--' 'char'
     && lk != 1039544               // '[' ']' 'char'
     && lk != 1052803               // Identifier '++' 'const'
     && lk != 1052804               // Null '++' 'const'
     && lk != 1052805               // True '++' 'const'
     && lk != 1052806               // False '++' 'const'
     && lk != 1052807               // Character '++' 'const'
     && lk != 1052808               // String '++' 'const'
     && lk != 1052809               // Real '++' 'const'
     && lk != 1053315               // Identifier '--' 'const'
     && lk != 1053316               // Null '--' 'const'
     && lk != 1053317               // True '--' 'const'
     && lk != 1053318               // False '--' 'const'
     && lk != 1053319               // Character '--' 'const'
     && lk != 1053320               // String '--' 'const'
     && lk != 1053321               // Real '--' 'const'
     && lk != 1055928               // '[' ']' 'const'
     && lk != 1069187               // Identifier '++' 'continue'
     && lk != 1069188               // Null '++' 'continue'
     && lk != 1069189               // True '++' 'continue'
     && lk != 1069190               // False '++' 'continue'
     && lk != 1069191               // Character '++' 'continue'
     && lk != 1069192               // String '++' 'continue'
     && lk != 1069193               // Real '++' 'continue'
     && lk != 1069699               // Identifier '--' 'continue'
     && lk != 1069700               // Null '--' 'continue'
     && lk != 1069701               // True '--' 'continue'
     && lk != 1069702               // False '--' 'continue'
     && lk != 1069703               // Character '--' 'continue'
     && lk != 1069704               // String '--' 'continue'
     && lk != 1069705               // Real '--' 'continue'
     && lk != 1072312               // '[' ']' 'continue'
     && lk != 1085571               // Identifier '++' 'default'
     && lk != 1085572               // Null '++' 'default'
     && lk != 1085573               // True '++' 'default'
     && lk != 1085574               // False '++' 'default'
     && lk != 1085575               // Character '++' 'default'
     && lk != 1085576               // String '++' 'default'
     && lk != 1085577               // Real '++' 'default'
     && lk != 1086083               // Identifier '--' 'default'
     && lk != 1086084               // Null '--' 'default'
     && lk != 1086085               // True '--' 'default'
     && lk != 1086086               // False '--' 'default'
     && lk != 1086087               // Character '--' 'default'
     && lk != 1086088               // String '--' 'default'
     && lk != 1086089               // Real '--' 'default'
     && lk != 1088696               // '[' ']' 'default'
     && lk != 1101955               // Identifier '++' 'do'
     && lk != 1101956               // Null '++' 'do'
     && lk != 1101957               // True '++' 'do'
     && lk != 1101958               // False '++' 'do'
     && lk != 1101959               // Character '++' 'do'
     && lk != 1101960               // String '++' 'do'
     && lk != 1101961               // Real '++' 'do'
     && lk != 1102467               // Identifier '--' 'do'
     && lk != 1102468               // Null '--' 'do'
     && lk != 1102469               // True '--' 'do'
     && lk != 1102470               // False '--' 'do'
     && lk != 1102471               // Character '--' 'do'
     && lk != 1102472               // String '--' 'do'
     && lk != 1102473               // Real '--' 'do'
     && lk != 1105080               // '[' ']' 'do'
     && lk != 1118339               // Identifier '++' 'double'
     && lk != 1118340               // Null '++' 'double'
     && lk != 1118341               // True '++' 'double'
     && lk != 1118342               // False '++' 'double'
     && lk != 1118343               // Character '++' 'double'
     && lk != 1118344               // String '++' 'double'
     && lk != 1118345               // Real '++' 'double'
     && lk != 1118851               // Identifier '--' 'double'
     && lk != 1118852               // Null '--' 'double'
     && lk != 1118853               // True '--' 'double'
     && lk != 1118854               // False '--' 'double'
     && lk != 1118855               // Character '--' 'double'
     && lk != 1118856               // String '--' 'double'
     && lk != 1118857               // Real '--' 'double'
     && lk != 1121464               // '[' ']' 'double'
     && lk != 1134723               // Identifier '++' 'else'
     && lk != 1134724               // Null '++' 'else'
     && lk != 1134725               // True '++' 'else'
     && lk != 1134726               // False '++' 'else'
     && lk != 1134727               // Character '++' 'else'
     && lk != 1134728               // String '++' 'else'
     && lk != 1134729               // Real '++' 'else'
     && lk != 1135235               // Identifier '--' 'else'
     && lk != 1135236               // Null '--' 'else'
     && lk != 1135237               // True '--' 'else'
     && lk != 1135238               // False '--' 'else'
     && lk != 1135239               // Character '--' 'else'
     && lk != 1135240               // String '--' 'else'
     && lk != 1135241               // Real '--' 'else'
     && lk != 1137848               // '[' ']' 'else'
     && lk != 1151107               // Identifier '++' 'enum'
     && lk != 1151108               // Null '++' 'enum'
     && lk != 1151109               // True '++' 'enum'
     && lk != 1151110               // False '++' 'enum'
     && lk != 1151111               // Character '++' 'enum'
     && lk != 1151112               // String '++' 'enum'
     && lk != 1151113               // Real '++' 'enum'
     && lk != 1151619               // Identifier '--' 'enum'
     && lk != 1151620               // Null '--' 'enum'
     && lk != 1151621               // True '--' 'enum'
     && lk != 1151622               // False '--' 'enum'
     && lk != 1151623               // Character '--' 'enum'
     && lk != 1151624               // String '--' 'enum'
     && lk != 1151625               // Real '--' 'enum'
     && lk != 1154232               // '[' ']' 'enum'
     && lk != 1167491               // Identifier '++' 'extern'
     && lk != 1167492               // Null '++' 'extern'
     && lk != 1167493               // True '++' 'extern'
     && lk != 1167494               // False '++' 'extern'
     && lk != 1167495               // Character '++' 'extern'
     && lk != 1167496               // String '++' 'extern'
     && lk != 1167497               // Real '++' 'extern'
     && lk != 1168003               // Identifier '--' 'extern'
     && lk != 1168004               // Null '--' 'extern'
     && lk != 1168005               // True '--' 'extern'
     && lk != 1168006               // False '--' 'extern'
     && lk != 1168007               // Character '--' 'extern'
     && lk != 1168008               // String '--' 'extern'
     && lk != 1168009               // Real '--' 'extern'
     && lk != 1170616               // '[' ']' 'extern'
     && lk != 1183875               // Identifier '++' 'float'
     && lk != 1183876               // Null '++' 'float'
     && lk != 1183877               // True '++' 'float'
     && lk != 1183878               // False '++' 'float'
     && lk != 1183879               // Character '++' 'float'
     && lk != 1183880               // String '++' 'float'
     && lk != 1183881               // Real '++' 'float'
     && lk != 1184387               // Identifier '--' 'float'
     && lk != 1184388               // Null '--' 'float'
     && lk != 1184389               // True '--' 'float'
     && lk != 1184390               // False '--' 'float'
     && lk != 1184391               // Character '--' 'float'
     && lk != 1184392               // String '--' 'float'
     && lk != 1184393               // Real '--' 'float'
     && lk != 1187000               // '[' ']' 'float'
     && lk != 1200259               // Identifier '++' 'for'
     && lk != 1200260               // Null '++' 'for'
     && lk != 1200261               // True '++' 'for'
     && lk != 1200262               // False '++' 'for'
     && lk != 1200263               // Character '++' 'for'
     && lk != 1200264               // String '++' 'for'
     && lk != 1200265               // Real '++' 'for'
     && lk != 1200771               // Identifier '--' 'for'
     && lk != 1200772               // Null '--' 'for'
     && lk != 1200773               // True '--' 'for'
     && lk != 1200774               // False '--' 'for'
     && lk != 1200775               // Character '--' 'for'
     && lk != 1200776               // String '--' 'for'
     && lk != 1200777               // Real '--' 'for'
     && lk != 1203384               // '[' ']' 'for'
     && lk != 1216643               // Identifier '++' 'if'
     && lk != 1216644               // Null '++' 'if'
     && lk != 1216645               // True '++' 'if'
     && lk != 1216646               // False '++' 'if'
     && lk != 1216647               // Character '++' 'if'
     && lk != 1216648               // String '++' 'if'
     && lk != 1216649               // Real '++' 'if'
     && lk != 1217155               // Identifier '--' 'if'
     && lk != 1217156               // Null '--' 'if'
     && lk != 1217157               // True '--' 'if'
     && lk != 1217158               // False '--' 'if'
     && lk != 1217159               // Character '--' 'if'
     && lk != 1217160               // String '--' 'if'
     && lk != 1217161               // Real '--' 'if'
     && lk != 1219768               // '[' ']' 'if'
     && lk != 1233027               // Identifier '++' 'int'
     && lk != 1233028               // Null '++' 'int'
     && lk != 1233029               // True '++' 'int'
     && lk != 1233030               // False '++' 'int'
     && lk != 1233031               // Character '++' 'int'
     && lk != 1233032               // String '++' 'int'
     && lk != 1233033               // Real '++' 'int'
     && lk != 1233539               // Identifier '--' 'int'
     && lk != 1233540               // Null '--' 'int'
     && lk != 1233541               // True '--' 'int'
     && lk != 1233542               // False '--' 'int'
     && lk != 1233543               // Character '--' 'int'
     && lk != 1233544               // String '--' 'int'
     && lk != 1233545               // Real '--' 'int'
     && lk != 1236152               // '[' ']' 'int'
     && lk != 1249411               // Identifier '++' 'long'
     && lk != 1249412               // Null '++' 'long'
     && lk != 1249413               // True '++' 'long'
     && lk != 1249414               // False '++' 'long'
     && lk != 1249415               // Character '++' 'long'
     && lk != 1249416               // String '++' 'long'
     && lk != 1249417               // Real '++' 'long'
     && lk != 1249923               // Identifier '--' 'long'
     && lk != 1249924               // Null '--' 'long'
     && lk != 1249925               // True '--' 'long'
     && lk != 1249926               // False '--' 'long'
     && lk != 1249927               // Character '--' 'long'
     && lk != 1249928               // String '--' 'long'
     && lk != 1249929               // Real '--' 'long'
     && lk != 1252536               // '[' ']' 'long'
     && lk != 1265795               // Identifier '++' 'return'
     && lk != 1265796               // Null '++' 'return'
     && lk != 1265797               // True '++' 'return'
     && lk != 1265798               // False '++' 'return'
     && lk != 1265799               // Character '++' 'return'
     && lk != 1265800               // String '++' 'return'
     && lk != 1265801               // Real '++' 'return'
     && lk != 1266307               // Identifier '--' 'return'
     && lk != 1266308               // Null '--' 'return'
     && lk != 1266309               // True '--' 'return'
     && lk != 1266310               // False '--' 'return'
     && lk != 1266311               // Character '--' 'return'
     && lk != 1266312               // String '--' 'return'
     && lk != 1266313               // Real '--' 'return'
     && lk != 1268920               // '[' ']' 'return'
     && lk != 1282179               // Identifier '++' 'short'
     && lk != 1282180               // Null '++' 'short'
     && lk != 1282181               // True '++' 'short'
     && lk != 1282182               // False '++' 'short'
     && lk != 1282183               // Character '++' 'short'
     && lk != 1282184               // String '++' 'short'
     && lk != 1282185               // Real '++' 'short'
     && lk != 1282691               // Identifier '--' 'short'
     && lk != 1282692               // Null '--' 'short'
     && lk != 1282693               // True '--' 'short'
     && lk != 1282694               // False '--' 'short'
     && lk != 1282695               // Character '--' 'short'
     && lk != 1282696               // String '--' 'short'
     && lk != 1282697               // Real '--' 'short'
     && lk != 1285304               // '[' ']' 'short'
     && lk != 1298563               // Identifier '++' 'signed'
     && lk != 1298564               // Null '++' 'signed'
     && lk != 1298565               // True '++' 'signed'
     && lk != 1298566               // False '++' 'signed'
     && lk != 1298567               // Character '++' 'signed'
     && lk != 1298568               // String '++' 'signed'
     && lk != 1298569               // Real '++' 'signed'
     && lk != 1299075               // Identifier '--' 'signed'
     && lk != 1299076               // Null '--' 'signed'
     && lk != 1299077               // True '--' 'signed'
     && lk != 1299078               // False '--' 'signed'
     && lk != 1299079               // Character '--' 'signed'
     && lk != 1299080               // String '--' 'signed'
     && lk != 1299081               // Real '--' 'signed'
     && lk != 1301688               // '[' ']' 'signed'
     && lk != 1314947               // Identifier '++' 'sizeof'
     && lk != 1314948               // Null '++' 'sizeof'
     && lk != 1314949               // True '++' 'sizeof'
     && lk != 1314950               // False '++' 'sizeof'
     && lk != 1314951               // Character '++' 'sizeof'
     && lk != 1314952               // String '++' 'sizeof'
     && lk != 1314953               // Real '++' 'sizeof'
     && lk != 1315459               // Identifier '--' 'sizeof'
     && lk != 1315460               // Null '--' 'sizeof'
     && lk != 1315461               // True '--' 'sizeof'
     && lk != 1315462               // False '--' 'sizeof'
     && lk != 1315463               // Character '--' 'sizeof'
     && lk != 1315464               // String '--' 'sizeof'
     && lk != 1315465               // Real '--' 'sizeof'
     && lk != 1318072               // '[' ']' 'sizeof'
     && lk != 1331331               // Identifier '++' 'static'
     && lk != 1331332               // Null '++' 'static'
     && lk != 1331333               // True '++' 'static'
     && lk != 1331334               // False '++' 'static'
     && lk != 1331335               // Character '++' 'static'
     && lk != 1331336               // String '++' 'static'
     && lk != 1331337               // Real '++' 'static'
     && lk != 1331843               // Identifier '--' 'static'
     && lk != 1331844               // Null '--' 'static'
     && lk != 1331845               // True '--' 'static'
     && lk != 1331846               // False '--' 'static'
     && lk != 1331847               // Character '--' 'static'
     && lk != 1331848               // String '--' 'static'
     && lk != 1331849               // Real '--' 'static'
     && lk != 1334456               // '[' ']' 'static'
     && lk != 1347715               // Identifier '++' 'struct'
     && lk != 1347716               // Null '++' 'struct'
     && lk != 1347717               // True '++' 'struct'
     && lk != 1347718               // False '++' 'struct'
     && lk != 1347719               // Character '++' 'struct'
     && lk != 1347720               // String '++' 'struct'
     && lk != 1347721               // Real '++' 'struct'
     && lk != 1348227               // Identifier '--' 'struct'
     && lk != 1348228               // Null '--' 'struct'
     && lk != 1348229               // True '--' 'struct'
     && lk != 1348230               // False '--' 'struct'
     && lk != 1348231               // Character '--' 'struct'
     && lk != 1348232               // String '--' 'struct'
     && lk != 1348233               // Real '--' 'struct'
     && lk != 1350840               // '[' ']' 'struct'
     && lk != 1364099               // Identifier '++' 'switch'
     && lk != 1364100               // Null '++' 'switch'
     && lk != 1364101               // True '++' 'switch'
     && lk != 1364102               // False '++' 'switch'
     && lk != 1364103               // Character '++' 'switch'
     && lk != 1364104               // String '++' 'switch'
     && lk != 1364105               // Real '++' 'switch'
     && lk != 1364611               // Identifier '--' 'switch'
     && lk != 1364612               // Null '--' 'switch'
     && lk != 1364613               // True '--' 'switch'
     && lk != 1364614               // False '--' 'switch'
     && lk != 1364615               // Character '--' 'switch'
     && lk != 1364616               // String '--' 'switch'
     && lk != 1364617               // Real '--' 'switch'
     && lk != 1367224               // '[' ']' 'switch'
     && lk != 1380483               // Identifier '++' 'typedef'
     && lk != 1380484               // Null '++' 'typedef'
     && lk != 1380485               // True '++' 'typedef'
     && lk != 1380486               // False '++' 'typedef'
     && lk != 1380487               // Character '++' 'typedef'
     && lk != 1380488               // String '++' 'typedef'
     && lk != 1380489               // Real '++' 'typedef'
     && lk != 1380995               // Identifier '--' 'typedef'
     && lk != 1380996               // Null '--' 'typedef'
     && lk != 1380997               // True '--' 'typedef'
     && lk != 1380998               // False '--' 'typedef'
     && lk != 1380999               // Character '--' 'typedef'
     && lk != 1381000               // String '--' 'typedef'
     && lk != 1381001               // Real '--' 'typedef'
     && lk != 1383608               // '[' ']' 'typedef'
     && lk != 1396867               // Identifier '++' 'union'
     && lk != 1396868               // Null '++' 'union'
     && lk != 1396869               // True '++' 'union'
     && lk != 1396870               // False '++' 'union'
     && lk != 1396871               // Character '++' 'union'
     && lk != 1396872               // String '++' 'union'
     && lk != 1396873               // Real '++' 'union'
     && lk != 1397379               // Identifier '--' 'union'
     && lk != 1397380               // Null '--' 'union'
     && lk != 1397381               // True '--' 'union'
     && lk != 1397382               // False '--' 'union'
     && lk != 1397383               // Character '--' 'union'
     && lk != 1397384               // String '--' 'union'
     && lk != 1397385               // Real '--' 'union'
     && lk != 1399992               // '[' ']' 'union'
     && lk != 1413251               // Identifier '++' 'unsigned'
     && lk != 1413252               // Null '++' 'unsigned'
     && lk != 1413253               // True '++' 'unsigned'
     && lk != 1413254               // False '++' 'unsigned'
     && lk != 1413255               // Character '++' 'unsigned'
     && lk != 1413256               // String '++' 'unsigned'
     && lk != 1413257               // Real '++' 'unsigned'
     && lk != 1413763               // Identifier '--' 'unsigned'
     && lk != 1413764               // Null '--' 'unsigned'
     && lk != 1413765               // True '--' 'unsigned'
     && lk != 1413766               // False '--' 'unsigned'
     && lk != 1413767               // Character '--' 'unsigned'
     && lk != 1413768               // String '--' 'unsigned'
     && lk != 1413769               // Real '--' 'unsigned'
     && lk != 1416376               // '[' ']' 'unsigned'
     && lk != 1429635               // Identifier '++' 'void'
     && lk != 1429636               // Null '++' 'void'
     && lk != 1429637               // True '++' 'void'
     && lk != 1429638               // False '++' 'void'
     && lk != 1429639               // Character '++' 'void'
     && lk != 1429640               // String '++' 'void'
     && lk != 1429641               // Real '++' 'void'
     && lk != 1430147               // Identifier '--' 'void'
     && lk != 1430148               // Null '--' 'void'
     && lk != 1430149               // True '--' 'void'
     && lk != 1430150               // False '--' 'void'
     && lk != 1430151               // Character '--' 'void'
     && lk != 1430152               // String '--' 'void'
     && lk != 1430153               // Real '--' 'void'
     && lk != 1432760               // '[' ']' 'void'
     && lk != 1446019               // Identifier '++' 'volatile'
     && lk != 1446020               // Null '++' 'volatile'
     && lk != 1446021               // True '++' 'volatile'
     && lk != 1446022               // False '++' 'volatile'
     && lk != 1446023               // Character '++' 'volatile'
     && lk != 1446024               // String '++' 'volatile'
     && lk != 1446025               // Real '++' 'volatile'
     && lk != 1446531               // Identifier '--' 'volatile'
     && lk != 1446532               // Null '--' 'volatile'
     && lk != 1446533               // True '--' 'volatile'
     && lk != 1446534               // False '--' 'volatile'
     && lk != 1446535               // Character '--' 'volatile'
     && lk != 1446536               // String '--' 'volatile'
     && lk != 1446537               // Real '--' 'volatile'
     && lk != 1449144               // '[' ']' 'volatile'
     && lk != 1462403               // Identifier '++' 'while'
     && lk != 1462404               // Null '++' 'while'
     && lk != 1462405               // True '++' 'while'
     && lk != 1462406               // False '++' 'while'
     && lk != 1462407               // Character '++' 'while'
     && lk != 1462408               // String '++' 'while'
     && lk != 1462409               // Real '++' 'while'
     && lk != 1462915               // Identifier '--' 'while'
     && lk != 1462916               // Null '--' 'while'
     && lk != 1462917               // True '--' 'while'
     && lk != 1462918               // False '--' 'while'
     && lk != 1462919               // Character '--' 'while'
     && lk != 1462920               // String '--' 'while'
     && lk != 1462921               // Real '--' 'while'
     && lk != 1465528               // '[' ']' 'while'
     && lk != 1481912               // '[' ']' '{'
     && lk != 1495171               // Identifier '++' '|'
     && lk != 1495172               // Null '++' '|'
     && lk != 1495173               // True '++' '|'
     && lk != 1495174               // False '++' '|'
     && lk != 1495175               // Character '++' '|'
     && lk != 1495176               // String '++' '|'
     && lk != 1495177               // Real '++' '|'
     && lk != 1495683               // Identifier '--' '|'
     && lk != 1495684               // Null '--' '|'
     && lk != 1495685               // True '--' '|'
     && lk != 1495686               // False '--' '|'
     && lk != 1495687               // Character '--' '|'
     && lk != 1495688               // String '--' '|'
     && lk != 1495689               // Real '--' '|'
     && lk != 1498296               // '[' ']' '|'
     && lk != 1511555               // Identifier '++' '|='
     && lk != 1511556               // Null '++' '|='
     && lk != 1511557               // True '++' '|='
     && lk != 1511558               // False '++' '|='
     && lk != 1511559               // Character '++' '|='
     && lk != 1511560               // String '++' '|='
     && lk != 1511561               // Real '++' '|='
     && lk != 1512067               // Identifier '--' '|='
     && lk != 1512068               // Null '--' '|='
     && lk != 1512069               // True '--' '|='
     && lk != 1512070               // False '--' '|='
     && lk != 1512071               // Character '--' '|='
     && lk != 1512072               // String '--' '|='
     && lk != 1512073               // Real '--' '|='
     && lk != 1514680               // '[' ']' '|='
     && lk != 1527939               // Identifier '++' '||'
     && lk != 1527940               // Null '++' '||'
     && lk != 1527941               // True '++' '||'
     && lk != 1527942               // False '++' '||'
     && lk != 1527943               // Character '++' '||'
     && lk != 1527944               // String '++' '||'
     && lk != 1527945               // Real '++' '||'
     && lk != 1528451               // Identifier '--' '||'
     && lk != 1528452               // Null '--' '||'
     && lk != 1528453               // True '--' '||'
     && lk != 1528454               // False '--' '||'
     && lk != 1528455               // Character '--' '||'
     && lk != 1528456               // String '--' '||'
     && lk != 1528457               // Real '--' '||'
     && lk != 1531064               // '[' ']' '||'
     && lk != 1544323               // Identifier '++' '}'
     && lk != 1544324               // Null '++' '}'
     && lk != 1544325               // True '++' '}'
     && lk != 1544326               // False '++' '}'
     && lk != 1544327               // Character '++' '}'
     && lk != 1544328               // String '++' '}'
     && lk != 1544329               // Real '++' '}'
     && lk != 1544835               // Identifier '--' '}'
     && lk != 1544836               // Null '--' '}'
     && lk != 1544837               // True '--' '}'
     && lk != 1544838               // False '--' '}'
     && lk != 1544839               // Character '--' '}'
     && lk != 1544840               // String '--' '}'
     && lk != 1544841               // Real '--' '}'
     && lk != 1547448               // '[' ']' '}'
     && lk != 1560707               // Identifier '++' '~'
     && lk != 1560708               // Null '++' '~'
     && lk != 1560709               // True '++' '~'
     && lk != 1560710               // False '++' '~'
     && lk != 1560711               // Character '++' '~'
     && lk != 1560712               // String '++' '~'
     && lk != 1560713               // Real '++' '~'
     && lk != 1561219               // Identifier '--' '~'
     && lk != 1561220               // Null '--' '~'
     && lk != 1561221               // True '--' '~'
     && lk != 1561222               // False '--' '~'
     && lk != 1561223               // Character '--' '~'
     && lk != 1561224               // String '--' '~'
     && lk != 1561225               // Real '--' '~'
     && lk != 1563832)              // '[' ']' '~'
    {
      lk = memoized(4, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Primary();
          lookahead1W(4);           // WhiteSpace^token | '++'
          consumeT(33);             // '++'
          memoize(4, e0A, -6);
          lk = -9;
        }
        catch (p6A)
        {
          try
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            try_Primary();
            lookahead1W(5);         // WhiteSpace^token | '--'
            consumeT(37);           // '--'
            memoize(4, e0A, -7);
            lk = -9;
          }
          catch (p7A)
          {
            lk = -8;
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(4, e0A, -8);
          }
        }
      }
    }
    switch (lk)
    {
    case 80:                        // 'sizeof'
      consumeT(80);                 // 'sizeof'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 95:                        // '~'
      consumeT(95);                 // '~'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 12:                        // '!'
      consumeT(12);                 // '!'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 33:                        // '++'
      consumeT(33);                 // '++'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case 37:                        // '--'
      consumeT(37);                 // '--'
      lookahead1W(17);              // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
      try_Primary();
      break;
    case -6:
    case 20611:                     // Identifier '++' END
    case 20612:                     // Null '++' END
    case 20613:                     // True '++' END
    case 20614:                     // False '++' END
    case 20615:                     // Character '++' END
    case 20616:                     // String '++' END
    case 20617:                     // Real '++' END
    case 168067:                    // Identifier '++' Comment
    case 168068:                    // Null '++' Comment
    case 168069:                    // True '++' Comment
    case 168070:                    // False '++' Comment
    case 168071:                    // Character '++' Comment
    case 168072:                    // String '++' Comment
    case 168073:                    // Real '++' Comment
    case 200835:                    // Identifier '++' '!'
    case 200836:                    // Null '++' '!'
    case 200837:                    // True '++' '!'
    case 200838:                    // False '++' '!'
    case 200839:                    // Character '++' '!'
    case 200840:                    // String '++' '!'
    case 200841:                    // Real '++' '!'
    case 217219:                    // Identifier '++' '!='
    case 217220:                    // Null '++' '!='
    case 217221:                    // True '++' '!='
    case 217222:                    // False '++' '!='
    case 217223:                    // Character '++' '!='
    case 217224:                    // String '++' '!='
    case 217225:                    // Real '++' '!='
    case 233603:                    // Identifier '++' '#define'
    case 233604:                    // Null '++' '#define'
    case 233605:                    // True '++' '#define'
    case 233606:                    // False '++' '#define'
    case 233607:                    // Character '++' '#define'
    case 233608:                    // String '++' '#define'
    case 233609:                    // Real '++' '#define'
    case 249987:                    // Identifier '++' '#elif'
    case 249988:                    // Null '++' '#elif'
    case 249989:                    // True '++' '#elif'
    case 249990:                    // False '++' '#elif'
    case 249991:                    // Character '++' '#elif'
    case 249992:                    // String '++' '#elif'
    case 249993:                    // Real '++' '#elif'
    case 266371:                    // Identifier '++' '#else'
    case 266372:                    // Null '++' '#else'
    case 266373:                    // True '++' '#else'
    case 266374:                    // False '++' '#else'
    case 266375:                    // Character '++' '#else'
    case 266376:                    // String '++' '#else'
    case 266377:                    // Real '++' '#else'
    case 282755:                    // Identifier '++' '#endif'
    case 282756:                    // Null '++' '#endif'
    case 282757:                    // True '++' '#endif'
    case 282758:                    // False '++' '#endif'
    case 282759:                    // Character '++' '#endif'
    case 282760:                    // String '++' '#endif'
    case 282761:                    // Real '++' '#endif'
    case 299139:                    // Identifier '++' '#if'
    case 299140:                    // Null '++' '#if'
    case 299141:                    // True '++' '#if'
    case 299142:                    // False '++' '#if'
    case 299143:                    // Character '++' '#if'
    case 299144:                    // String '++' '#if'
    case 299145:                    // Real '++' '#if'
    case 315523:                    // Identifier '++' '#ifdef'
    case 315524:                    // Null '++' '#ifdef'
    case 315525:                    // True '++' '#ifdef'
    case 315526:                    // False '++' '#ifdef'
    case 315527:                    // Character '++' '#ifdef'
    case 315528:                    // String '++' '#ifdef'
    case 315529:                    // Real '++' '#ifdef'
    case 331907:                    // Identifier '++' '#ifndef'
    case 331908:                    // Null '++' '#ifndef'
    case 331909:                    // True '++' '#ifndef'
    case 331910:                    // False '++' '#ifndef'
    case 331911:                    // Character '++' '#ifndef'
    case 331912:                    // String '++' '#ifndef'
    case 331913:                    // Real '++' '#ifndef'
    case 348291:                    // Identifier '++' '#include'
    case 348292:                    // Null '++' '#include'
    case 348293:                    // True '++' '#include'
    case 348294:                    // False '++' '#include'
    case 348295:                    // Character '++' '#include'
    case 348296:                    // String '++' '#include'
    case 348297:                    // Real '++' '#include'
    case 364675:                    // Identifier '++' '#undef'
    case 364676:                    // Null '++' '#undef'
    case 364677:                    // True '++' '#undef'
    case 364678:                    // False '++' '#undef'
    case 364679:                    // Character '++' '#undef'
    case 364680:                    // String '++' '#undef'
    case 364681:                    // Real '++' '#undef'
    case 381059:                    // Identifier '++' '%'
    case 381060:                    // Null '++' '%'
    case 381061:                    // True '++' '%'
    case 381062:                    // False '++' '%'
    case 381063:                    // Character '++' '%'
    case 381064:                    // String '++' '%'
    case 381065:                    // Real '++' '%'
    case 397443:                    // Identifier '++' '%='
    case 397444:                    // Null '++' '%='
    case 397445:                    // True '++' '%='
    case 397446:                    // False '++' '%='
    case 397447:                    // Character '++' '%='
    case 397448:                    // String '++' '%='
    case 397449:                    // Real '++' '%='
    case 413827:                    // Identifier '++' '&'
    case 413828:                    // Null '++' '&'
    case 413829:                    // True '++' '&'
    case 413830:                    // False '++' '&'
    case 413831:                    // Character '++' '&'
    case 413832:                    // String '++' '&'
    case 413833:                    // Real '++' '&'
    case 430211:                    // Identifier '++' '&&'
    case 430212:                    // Null '++' '&&'
    case 430213:                    // True '++' '&&'
    case 430214:                    // False '++' '&&'
    case 430215:                    // Character '++' '&&'
    case 430216:                    // String '++' '&&'
    case 430217:                    // Real '++' '&&'
    case 446595:                    // Identifier '++' '&='
    case 446596:                    // Null '++' '&='
    case 446597:                    // True '++' '&='
    case 446598:                    // False '++' '&='
    case 446599:                    // Character '++' '&='
    case 446600:                    // String '++' '&='
    case 446601:                    // Real '++' '&='
    case 479363:                    // Identifier '++' ')'
    case 479364:                    // Null '++' ')'
    case 479365:                    // True '++' ')'
    case 479366:                    // False '++' ')'
    case 479367:                    // Character '++' ')'
    case 479368:                    // String '++' ')'
    case 479369:                    // Real '++' ')'
    case 495747:                    // Identifier '++' '*'
    case 495748:                    // Null '++' '*'
    case 495749:                    // True '++' '*'
    case 495750:                    // False '++' '*'
    case 495751:                    // Character '++' '*'
    case 495752:                    // String '++' '*'
    case 495753:                    // Real '++' '*'
    case 512131:                    // Identifier '++' '*='
    case 512132:                    // Null '++' '*='
    case 512133:                    // True '++' '*='
    case 512134:                    // False '++' '*='
    case 512135:                    // Character '++' '*='
    case 512136:                    // String '++' '*='
    case 512137:                    // Real '++' '*='
    case 528515:                    // Identifier '++' '+'
    case 528516:                    // Null '++' '+'
    case 528517:                    // True '++' '+'
    case 528518:                    // False '++' '+'
    case 528519:                    // Character '++' '+'
    case 528520:                    // String '++' '+'
    case 528521:                    // Real '++' '+'
    case 544899:                    // Identifier '++' '++'
    case 544900:                    // Null '++' '++'
    case 544901:                    // True '++' '++'
    case 544902:                    // False '++' '++'
    case 544903:                    // Character '++' '++'
    case 544904:                    // String '++' '++'
    case 544905:                    // Real '++' '++'
    case 561283:                    // Identifier '++' '+='
    case 561284:                    // Null '++' '+='
    case 561285:                    // True '++' '+='
    case 561286:                    // False '++' '+='
    case 561287:                    // Character '++' '+='
    case 561288:                    // String '++' '+='
    case 561289:                    // Real '++' '+='
    case 577667:                    // Identifier '++' ','
    case 577668:                    // Null '++' ','
    case 577669:                    // True '++' ','
    case 577670:                    // False '++' ','
    case 577671:                    // Character '++' ','
    case 577672:                    // String '++' ','
    case 577673:                    // Real '++' ','
    case 594051:                    // Identifier '++' '-'
    case 594052:                    // Null '++' '-'
    case 594053:                    // True '++' '-'
    case 594054:                    // False '++' '-'
    case 594055:                    // Character '++' '-'
    case 594056:                    // String '++' '-'
    case 594057:                    // Real '++' '-'
    case 610435:                    // Identifier '++' '--'
    case 610436:                    // Null '++' '--'
    case 610437:                    // True '++' '--'
    case 610438:                    // False '++' '--'
    case 610439:                    // Character '++' '--'
    case 610440:                    // String '++' '--'
    case 610441:                    // Real '++' '--'
    case 626819:                    // Identifier '++' '-='
    case 626820:                    // Null '++' '-='
    case 626821:                    // True '++' '-='
    case 626822:                    // False '++' '-='
    case 626823:                    // Character '++' '-='
    case 626824:                    // String '++' '-='
    case 626825:                    // Real '++' '-='
    case 675971:                    // Identifier '++' '/'
    case 675972:                    // Null '++' '/'
    case 675973:                    // True '++' '/'
    case 675974:                    // False '++' '/'
    case 675975:                    // Character '++' '/'
    case 675976:                    // String '++' '/'
    case 675977:                    // Real '++' '/'
    case 692355:                    // Identifier '++' '/='
    case 692356:                    // Null '++' '/='
    case 692357:                    // True '++' '/='
    case 692358:                    // False '++' '/='
    case 692359:                    // Character '++' '/='
    case 692360:                    // String '++' '/='
    case 692361:                    // Real '++' '/='
    case 708739:                    // Identifier '++' ':'
    case 708740:                    // Null '++' ':'
    case 708741:                    // True '++' ':'
    case 708742:                    // False '++' ':'
    case 708743:                    // Character '++' ':'
    case 708744:                    // String '++' ':'
    case 708745:                    // Real '++' ':'
    case 725123:                    // Identifier '++' ';'
    case 725124:                    // Null '++' ';'
    case 725125:                    // True '++' ';'
    case 725126:                    // False '++' ';'
    case 725127:                    // Character '++' ';'
    case 725128:                    // String '++' ';'
    case 725129:                    // Real '++' ';'
    case 741507:                    // Identifier '++' '<'
    case 741508:                    // Null '++' '<'
    case 741509:                    // True '++' '<'
    case 741510:                    // False '++' '<'
    case 741511:                    // Character '++' '<'
    case 741512:                    // String '++' '<'
    case 741513:                    // Real '++' '<'
    case 757891:                    // Identifier '++' '<<'
    case 757892:                    // Null '++' '<<'
    case 757893:                    // True '++' '<<'
    case 757894:                    // False '++' '<<'
    case 757895:                    // Character '++' '<<'
    case 757896:                    // String '++' '<<'
    case 757897:                    // Real '++' '<<'
    case 774275:                    // Identifier '++' '<<='
    case 774276:                    // Null '++' '<<='
    case 774277:                    // True '++' '<<='
    case 774278:                    // False '++' '<<='
    case 774279:                    // Character '++' '<<='
    case 774280:                    // String '++' '<<='
    case 774281:                    // Real '++' '<<='
    case 790659:                    // Identifier '++' '<='
    case 790660:                    // Null '++' '<='
    case 790661:                    // True '++' '<='
    case 790662:                    // False '++' '<='
    case 790663:                    // Character '++' '<='
    case 790664:                    // String '++' '<='
    case 790665:                    // Real '++' '<='
    case 807043:                    // Identifier '++' '='
    case 807044:                    // Null '++' '='
    case 807045:                    // True '++' '='
    case 807046:                    // False '++' '='
    case 807047:                    // Character '++' '='
    case 807048:                    // String '++' '='
    case 807049:                    // Real '++' '='
    case 823427:                    // Identifier '++' '=='
    case 823428:                    // Null '++' '=='
    case 823429:                    // True '++' '=='
    case 823430:                    // False '++' '=='
    case 823431:                    // Character '++' '=='
    case 823432:                    // String '++' '=='
    case 823433:                    // Real '++' '=='
    case 839811:                    // Identifier '++' '>'
    case 839812:                    // Null '++' '>'
    case 839813:                    // True '++' '>'
    case 839814:                    // False '++' '>'
    case 839815:                    // Character '++' '>'
    case 839816:                    // String '++' '>'
    case 839817:                    // Real '++' '>'
    case 856195:                    // Identifier '++' '>='
    case 856196:                    // Null '++' '>='
    case 856197:                    // True '++' '>='
    case 856198:                    // False '++' '>='
    case 856199:                    // Character '++' '>='
    case 856200:                    // String '++' '>='
    case 856201:                    // Real '++' '>='
    case 872579:                    // Identifier '++' '>>'
    case 872580:                    // Null '++' '>>'
    case 872581:                    // True '++' '>>'
    case 872582:                    // False '++' '>>'
    case 872583:                    // Character '++' '>>'
    case 872584:                    // String '++' '>>'
    case 872585:                    // Real '++' '>>'
    case 888963:                    // Identifier '++' '>>='
    case 888964:                    // Null '++' '>>='
    case 888965:                    // True '++' '>>='
    case 888966:                    // False '++' '>>='
    case 888967:                    // Character '++' '>>='
    case 888968:                    // String '++' '>>='
    case 888969:                    // Real '++' '>>='
    case 905347:                    // Identifier '++' '?'
    case 905348:                    // Null '++' '?'
    case 905349:                    // True '++' '?'
    case 905350:                    // False '++' '?'
    case 905351:                    // Character '++' '?'
    case 905352:                    // String '++' '?'
    case 905353:                    // Real '++' '?'
    case 938115:                    // Identifier '++' ']'
    case 938116:                    // Null '++' ']'
    case 938117:                    // True '++' ']'
    case 938118:                    // False '++' ']'
    case 938119:                    // Character '++' ']'
    case 938120:                    // String '++' ']'
    case 938121:                    // Real '++' ']'
    case 954499:                    // Identifier '++' '^'
    case 954500:                    // Null '++' '^'
    case 954501:                    // True '++' '^'
    case 954502:                    // False '++' '^'
    case 954503:                    // Character '++' '^'
    case 954504:                    // String '++' '^'
    case 954505:                    // Real '++' '^'
    case 970883:                    // Identifier '++' '^='
    case 970884:                    // Null '++' '^='
    case 970885:                    // True '++' '^='
    case 970886:                    // False '++' '^='
    case 970887:                    // Character '++' '^='
    case 970888:                    // String '++' '^='
    case 970889:                    // Real '++' '^='
    case 987267:                    // Identifier '++' 'auto'
    case 987268:                    // Null '++' 'auto'
    case 987269:                    // True '++' 'auto'
    case 987270:                    // False '++' 'auto'
    case 987271:                    // Character '++' 'auto'
    case 987272:                    // String '++' 'auto'
    case 987273:                    // Real '++' 'auto'
    case 1003651:                   // Identifier '++' 'break'
    case 1003652:                   // Null '++' 'break'
    case 1003653:                   // True '++' 'break'
    case 1003654:                   // False '++' 'break'
    case 1003655:                   // Character '++' 'break'
    case 1003656:                   // String '++' 'break'
    case 1003657:                   // Real '++' 'break'
    case 1020035:                   // Identifier '++' 'case'
    case 1020036:                   // Null '++' 'case'
    case 1020037:                   // True '++' 'case'
    case 1020038:                   // False '++' 'case'
    case 1020039:                   // Character '++' 'case'
    case 1020040:                   // String '++' 'case'
    case 1020041:                   // Real '++' 'case'
    case 1036419:                   // Identifier '++' 'char'
    case 1036420:                   // Null '++' 'char'
    case 1036421:                   // True '++' 'char'
    case 1036422:                   // False '++' 'char'
    case 1036423:                   // Character '++' 'char'
    case 1036424:                   // String '++' 'char'
    case 1036425:                   // Real '++' 'char'
    case 1052803:                   // Identifier '++' 'const'
    case 1052804:                   // Null '++' 'const'
    case 1052805:                   // True '++' 'const'
    case 1052806:                   // False '++' 'const'
    case 1052807:                   // Character '++' 'const'
    case 1052808:                   // String '++' 'const'
    case 1052809:                   // Real '++' 'const'
    case 1069187:                   // Identifier '++' 'continue'
    case 1069188:                   // Null '++' 'continue'
    case 1069189:                   // True '++' 'continue'
    case 1069190:                   // False '++' 'continue'
    case 1069191:                   // Character '++' 'continue'
    case 1069192:                   // String '++' 'continue'
    case 1069193:                   // Real '++' 'continue'
    case 1085571:                   // Identifier '++' 'default'
    case 1085572:                   // Null '++' 'default'
    case 1085573:                   // True '++' 'default'
    case 1085574:                   // False '++' 'default'
    case 1085575:                   // Character '++' 'default'
    case 1085576:                   // String '++' 'default'
    case 1085577:                   // Real '++' 'default'
    case 1101955:                   // Identifier '++' 'do'
    case 1101956:                   // Null '++' 'do'
    case 1101957:                   // True '++' 'do'
    case 1101958:                   // False '++' 'do'
    case 1101959:                   // Character '++' 'do'
    case 1101960:                   // String '++' 'do'
    case 1101961:                   // Real '++' 'do'
    case 1118339:                   // Identifier '++' 'double'
    case 1118340:                   // Null '++' 'double'
    case 1118341:                   // True '++' 'double'
    case 1118342:                   // False '++' 'double'
    case 1118343:                   // Character '++' 'double'
    case 1118344:                   // String '++' 'double'
    case 1118345:                   // Real '++' 'double'
    case 1134723:                   // Identifier '++' 'else'
    case 1134724:                   // Null '++' 'else'
    case 1134725:                   // True '++' 'else'
    case 1134726:                   // False '++' 'else'
    case 1134727:                   // Character '++' 'else'
    case 1134728:                   // String '++' 'else'
    case 1134729:                   // Real '++' 'else'
    case 1151107:                   // Identifier '++' 'enum'
    case 1151108:                   // Null '++' 'enum'
    case 1151109:                   // True '++' 'enum'
    case 1151110:                   // False '++' 'enum'
    case 1151111:                   // Character '++' 'enum'
    case 1151112:                   // String '++' 'enum'
    case 1151113:                   // Real '++' 'enum'
    case 1167491:                   // Identifier '++' 'extern'
    case 1167492:                   // Null '++' 'extern'
    case 1167493:                   // True '++' 'extern'
    case 1167494:                   // False '++' 'extern'
    case 1167495:                   // Character '++' 'extern'
    case 1167496:                   // String '++' 'extern'
    case 1167497:                   // Real '++' 'extern'
    case 1183875:                   // Identifier '++' 'float'
    case 1183876:                   // Null '++' 'float'
    case 1183877:                   // True '++' 'float'
    case 1183878:                   // False '++' 'float'
    case 1183879:                   // Character '++' 'float'
    case 1183880:                   // String '++' 'float'
    case 1183881:                   // Real '++' 'float'
    case 1200259:                   // Identifier '++' 'for'
    case 1200260:                   // Null '++' 'for'
    case 1200261:                   // True '++' 'for'
    case 1200262:                   // False '++' 'for'
    case 1200263:                   // Character '++' 'for'
    case 1200264:                   // String '++' 'for'
    case 1200265:                   // Real '++' 'for'
    case 1216643:                   // Identifier '++' 'if'
    case 1216644:                   // Null '++' 'if'
    case 1216645:                   // True '++' 'if'
    case 1216646:                   // False '++' 'if'
    case 1216647:                   // Character '++' 'if'
    case 1216648:                   // String '++' 'if'
    case 1216649:                   // Real '++' 'if'
    case 1233027:                   // Identifier '++' 'int'
    case 1233028:                   // Null '++' 'int'
    case 1233029:                   // True '++' 'int'
    case 1233030:                   // False '++' 'int'
    case 1233031:                   // Character '++' 'int'
    case 1233032:                   // String '++' 'int'
    case 1233033:                   // Real '++' 'int'
    case 1249411:                   // Identifier '++' 'long'
    case 1249412:                   // Null '++' 'long'
    case 1249413:                   // True '++' 'long'
    case 1249414:                   // False '++' 'long'
    case 1249415:                   // Character '++' 'long'
    case 1249416:                   // String '++' 'long'
    case 1249417:                   // Real '++' 'long'
    case 1265795:                   // Identifier '++' 'return'
    case 1265796:                   // Null '++' 'return'
    case 1265797:                   // True '++' 'return'
    case 1265798:                   // False '++' 'return'
    case 1265799:                   // Character '++' 'return'
    case 1265800:                   // String '++' 'return'
    case 1265801:                   // Real '++' 'return'
    case 1282179:                   // Identifier '++' 'short'
    case 1282180:                   // Null '++' 'short'
    case 1282181:                   // True '++' 'short'
    case 1282182:                   // False '++' 'short'
    case 1282183:                   // Character '++' 'short'
    case 1282184:                   // String '++' 'short'
    case 1282185:                   // Real '++' 'short'
    case 1298563:                   // Identifier '++' 'signed'
    case 1298564:                   // Null '++' 'signed'
    case 1298565:                   // True '++' 'signed'
    case 1298566:                   // False '++' 'signed'
    case 1298567:                   // Character '++' 'signed'
    case 1298568:                   // String '++' 'signed'
    case 1298569:                   // Real '++' 'signed'
    case 1314947:                   // Identifier '++' 'sizeof'
    case 1314948:                   // Null '++' 'sizeof'
    case 1314949:                   // True '++' 'sizeof'
    case 1314950:                   // False '++' 'sizeof'
    case 1314951:                   // Character '++' 'sizeof'
    case 1314952:                   // String '++' 'sizeof'
    case 1314953:                   // Real '++' 'sizeof'
    case 1331331:                   // Identifier '++' 'static'
    case 1331332:                   // Null '++' 'static'
    case 1331333:                   // True '++' 'static'
    case 1331334:                   // False '++' 'static'
    case 1331335:                   // Character '++' 'static'
    case 1331336:                   // String '++' 'static'
    case 1331337:                   // Real '++' 'static'
    case 1347715:                   // Identifier '++' 'struct'
    case 1347716:                   // Null '++' 'struct'
    case 1347717:                   // True '++' 'struct'
    case 1347718:                   // False '++' 'struct'
    case 1347719:                   // Character '++' 'struct'
    case 1347720:                   // String '++' 'struct'
    case 1347721:                   // Real '++' 'struct'
    case 1364099:                   // Identifier '++' 'switch'
    case 1364100:                   // Null '++' 'switch'
    case 1364101:                   // True '++' 'switch'
    case 1364102:                   // False '++' 'switch'
    case 1364103:                   // Character '++' 'switch'
    case 1364104:                   // String '++' 'switch'
    case 1364105:                   // Real '++' 'switch'
    case 1380483:                   // Identifier '++' 'typedef'
    case 1380484:                   // Null '++' 'typedef'
    case 1380485:                   // True '++' 'typedef'
    case 1380486:                   // False '++' 'typedef'
    case 1380487:                   // Character '++' 'typedef'
    case 1380488:                   // String '++' 'typedef'
    case 1380489:                   // Real '++' 'typedef'
    case 1396867:                   // Identifier '++' 'union'
    case 1396868:                   // Null '++' 'union'
    case 1396869:                   // True '++' 'union'
    case 1396870:                   // False '++' 'union'
    case 1396871:                   // Character '++' 'union'
    case 1396872:                   // String '++' 'union'
    case 1396873:                   // Real '++' 'union'
    case 1413251:                   // Identifier '++' 'unsigned'
    case 1413252:                   // Null '++' 'unsigned'
    case 1413253:                   // True '++' 'unsigned'
    case 1413254:                   // False '++' 'unsigned'
    case 1413255:                   // Character '++' 'unsigned'
    case 1413256:                   // String '++' 'unsigned'
    case 1413257:                   // Real '++' 'unsigned'
    case 1429635:                   // Identifier '++' 'void'
    case 1429636:                   // Null '++' 'void'
    case 1429637:                   // True '++' 'void'
    case 1429638:                   // False '++' 'void'
    case 1429639:                   // Character '++' 'void'
    case 1429640:                   // String '++' 'void'
    case 1429641:                   // Real '++' 'void'
    case 1446019:                   // Identifier '++' 'volatile'
    case 1446020:                   // Null '++' 'volatile'
    case 1446021:                   // True '++' 'volatile'
    case 1446022:                   // False '++' 'volatile'
    case 1446023:                   // Character '++' 'volatile'
    case 1446024:                   // String '++' 'volatile'
    case 1446025:                   // Real '++' 'volatile'
    case 1462403:                   // Identifier '++' 'while'
    case 1462404:                   // Null '++' 'while'
    case 1462405:                   // True '++' 'while'
    case 1462406:                   // False '++' 'while'
    case 1462407:                   // Character '++' 'while'
    case 1462408:                   // String '++' 'while'
    case 1462409:                   // Real '++' 'while'
    case 1495171:                   // Identifier '++' '|'
    case 1495172:                   // Null '++' '|'
    case 1495173:                   // True '++' '|'
    case 1495174:                   // False '++' '|'
    case 1495175:                   // Character '++' '|'
    case 1495176:                   // String '++' '|'
    case 1495177:                   // Real '++' '|'
    case 1511555:                   // Identifier '++' '|='
    case 1511556:                   // Null '++' '|='
    case 1511557:                   // True '++' '|='
    case 1511558:                   // False '++' '|='
    case 1511559:                   // Character '++' '|='
    case 1511560:                   // String '++' '|='
    case 1511561:                   // Real '++' '|='
    case 1527939:                   // Identifier '++' '||'
    case 1527940:                   // Null '++' '||'
    case 1527941:                   // True '++' '||'
    case 1527942:                   // False '++' '||'
    case 1527943:                   // Character '++' '||'
    case 1527944:                   // String '++' '||'
    case 1527945:                   // Real '++' '||'
    case 1544323:                   // Identifier '++' '}'
    case 1544324:                   // Null '++' '}'
    case 1544325:                   // True '++' '}'
    case 1544326:                   // False '++' '}'
    case 1544327:                   // Character '++' '}'
    case 1544328:                   // String '++' '}'
    case 1544329:                   // Real '++' '}'
    case 1560707:                   // Identifier '++' '~'
    case 1560708:                   // Null '++' '~'
    case 1560709:                   // True '++' '~'
    case 1560710:                   // False '++' '~'
    case 1560711:                   // Character '++' '~'
    case 1560712:                   // String '++' '~'
    case 1560713:                   // Real '++' '~'
      try_Primary();
      lookahead1W(4);               // WhiteSpace^token | '++'
      consumeT(33);                 // '++'
      break;
    case -7:
    case 21123:                     // Identifier '--' END
    case 21124:                     // Null '--' END
    case 21125:                     // True '--' END
    case 21126:                     // False '--' END
    case 21127:                     // Character '--' END
    case 21128:                     // String '--' END
    case 21129:                     // Real '--' END
    case 168579:                    // Identifier '--' Comment
    case 168580:                    // Null '--' Comment
    case 168581:                    // True '--' Comment
    case 168582:                    // False '--' Comment
    case 168583:                    // Character '--' Comment
    case 168584:                    // String '--' Comment
    case 168585:                    // Real '--' Comment
    case 201347:                    // Identifier '--' '!'
    case 201348:                    // Null '--' '!'
    case 201349:                    // True '--' '!'
    case 201350:                    // False '--' '!'
    case 201351:                    // Character '--' '!'
    case 201352:                    // String '--' '!'
    case 201353:                    // Real '--' '!'
    case 217731:                    // Identifier '--' '!='
    case 217732:                    // Null '--' '!='
    case 217733:                    // True '--' '!='
    case 217734:                    // False '--' '!='
    case 217735:                    // Character '--' '!='
    case 217736:                    // String '--' '!='
    case 217737:                    // Real '--' '!='
    case 234115:                    // Identifier '--' '#define'
    case 234116:                    // Null '--' '#define'
    case 234117:                    // True '--' '#define'
    case 234118:                    // False '--' '#define'
    case 234119:                    // Character '--' '#define'
    case 234120:                    // String '--' '#define'
    case 234121:                    // Real '--' '#define'
    case 250499:                    // Identifier '--' '#elif'
    case 250500:                    // Null '--' '#elif'
    case 250501:                    // True '--' '#elif'
    case 250502:                    // False '--' '#elif'
    case 250503:                    // Character '--' '#elif'
    case 250504:                    // String '--' '#elif'
    case 250505:                    // Real '--' '#elif'
    case 266883:                    // Identifier '--' '#else'
    case 266884:                    // Null '--' '#else'
    case 266885:                    // True '--' '#else'
    case 266886:                    // False '--' '#else'
    case 266887:                    // Character '--' '#else'
    case 266888:                    // String '--' '#else'
    case 266889:                    // Real '--' '#else'
    case 283267:                    // Identifier '--' '#endif'
    case 283268:                    // Null '--' '#endif'
    case 283269:                    // True '--' '#endif'
    case 283270:                    // False '--' '#endif'
    case 283271:                    // Character '--' '#endif'
    case 283272:                    // String '--' '#endif'
    case 283273:                    // Real '--' '#endif'
    case 299651:                    // Identifier '--' '#if'
    case 299652:                    // Null '--' '#if'
    case 299653:                    // True '--' '#if'
    case 299654:                    // False '--' '#if'
    case 299655:                    // Character '--' '#if'
    case 299656:                    // String '--' '#if'
    case 299657:                    // Real '--' '#if'
    case 316035:                    // Identifier '--' '#ifdef'
    case 316036:                    // Null '--' '#ifdef'
    case 316037:                    // True '--' '#ifdef'
    case 316038:                    // False '--' '#ifdef'
    case 316039:                    // Character '--' '#ifdef'
    case 316040:                    // String '--' '#ifdef'
    case 316041:                    // Real '--' '#ifdef'
    case 332419:                    // Identifier '--' '#ifndef'
    case 332420:                    // Null '--' '#ifndef'
    case 332421:                    // True '--' '#ifndef'
    case 332422:                    // False '--' '#ifndef'
    case 332423:                    // Character '--' '#ifndef'
    case 332424:                    // String '--' '#ifndef'
    case 332425:                    // Real '--' '#ifndef'
    case 348803:                    // Identifier '--' '#include'
    case 348804:                    // Null '--' '#include'
    case 348805:                    // True '--' '#include'
    case 348806:                    // False '--' '#include'
    case 348807:                    // Character '--' '#include'
    case 348808:                    // String '--' '#include'
    case 348809:                    // Real '--' '#include'
    case 365187:                    // Identifier '--' '#undef'
    case 365188:                    // Null '--' '#undef'
    case 365189:                    // True '--' '#undef'
    case 365190:                    // False '--' '#undef'
    case 365191:                    // Character '--' '#undef'
    case 365192:                    // String '--' '#undef'
    case 365193:                    // Real '--' '#undef'
    case 381571:                    // Identifier '--' '%'
    case 381572:                    // Null '--' '%'
    case 381573:                    // True '--' '%'
    case 381574:                    // False '--' '%'
    case 381575:                    // Character '--' '%'
    case 381576:                    // String '--' '%'
    case 381577:                    // Real '--' '%'
    case 397955:                    // Identifier '--' '%='
    case 397956:                    // Null '--' '%='
    case 397957:                    // True '--' '%='
    case 397958:                    // False '--' '%='
    case 397959:                    // Character '--' '%='
    case 397960:                    // String '--' '%='
    case 397961:                    // Real '--' '%='
    case 414339:                    // Identifier '--' '&'
    case 414340:                    // Null '--' '&'
    case 414341:                    // True '--' '&'
    case 414342:                    // False '--' '&'
    case 414343:                    // Character '--' '&'
    case 414344:                    // String '--' '&'
    case 414345:                    // Real '--' '&'
    case 430723:                    // Identifier '--' '&&'
    case 430724:                    // Null '--' '&&'
    case 430725:                    // True '--' '&&'
    case 430726:                    // False '--' '&&'
    case 430727:                    // Character '--' '&&'
    case 430728:                    // String '--' '&&'
    case 430729:                    // Real '--' '&&'
    case 447107:                    // Identifier '--' '&='
    case 447108:                    // Null '--' '&='
    case 447109:                    // True '--' '&='
    case 447110:                    // False '--' '&='
    case 447111:                    // Character '--' '&='
    case 447112:                    // String '--' '&='
    case 447113:                    // Real '--' '&='
    case 479875:                    // Identifier '--' ')'
    case 479876:                    // Null '--' ')'
    case 479877:                    // True '--' ')'
    case 479878:                    // False '--' ')'
    case 479879:                    // Character '--' ')'
    case 479880:                    // String '--' ')'
    case 479881:                    // Real '--' ')'
    case 496259:                    // Identifier '--' '*'
    case 496260:                    // Null '--' '*'
    case 496261:                    // True '--' '*'
    case 496262:                    // False '--' '*'
    case 496263:                    // Character '--' '*'
    case 496264:                    // String '--' '*'
    case 496265:                    // Real '--' '*'
    case 512643:                    // Identifier '--' '*='
    case 512644:                    // Null '--' '*='
    case 512645:                    // True '--' '*='
    case 512646:                    // False '--' '*='
    case 512647:                    // Character '--' '*='
    case 512648:                    // String '--' '*='
    case 512649:                    // Real '--' '*='
    case 529027:                    // Identifier '--' '+'
    case 529028:                    // Null '--' '+'
    case 529029:                    // True '--' '+'
    case 529030:                    // False '--' '+'
    case 529031:                    // Character '--' '+'
    case 529032:                    // String '--' '+'
    case 529033:                    // Real '--' '+'
    case 545411:                    // Identifier '--' '++'
    case 545412:                    // Null '--' '++'
    case 545413:                    // True '--' '++'
    case 545414:                    // False '--' '++'
    case 545415:                    // Character '--' '++'
    case 545416:                    // String '--' '++'
    case 545417:                    // Real '--' '++'
    case 561795:                    // Identifier '--' '+='
    case 561796:                    // Null '--' '+='
    case 561797:                    // True '--' '+='
    case 561798:                    // False '--' '+='
    case 561799:                    // Character '--' '+='
    case 561800:                    // String '--' '+='
    case 561801:                    // Real '--' '+='
    case 578179:                    // Identifier '--' ','
    case 578180:                    // Null '--' ','
    case 578181:                    // True '--' ','
    case 578182:                    // False '--' ','
    case 578183:                    // Character '--' ','
    case 578184:                    // String '--' ','
    case 578185:                    // Real '--' ','
    case 594563:                    // Identifier '--' '-'
    case 594564:                    // Null '--' '-'
    case 594565:                    // True '--' '-'
    case 594566:                    // False '--' '-'
    case 594567:                    // Character '--' '-'
    case 594568:                    // String '--' '-'
    case 594569:                    // Real '--' '-'
    case 610947:                    // Identifier '--' '--'
    case 610948:                    // Null '--' '--'
    case 610949:                    // True '--' '--'
    case 610950:                    // False '--' '--'
    case 610951:                    // Character '--' '--'
    case 610952:                    // String '--' '--'
    case 610953:                    // Real '--' '--'
    case 627331:                    // Identifier '--' '-='
    case 627332:                    // Null '--' '-='
    case 627333:                    // True '--' '-='
    case 627334:                    // False '--' '-='
    case 627335:                    // Character '--' '-='
    case 627336:                    // String '--' '-='
    case 627337:                    // Real '--' '-='
    case 676483:                    // Identifier '--' '/'
    case 676484:                    // Null '--' '/'
    case 676485:                    // True '--' '/'
    case 676486:                    // False '--' '/'
    case 676487:                    // Character '--' '/'
    case 676488:                    // String '--' '/'
    case 676489:                    // Real '--' '/'
    case 692867:                    // Identifier '--' '/='
    case 692868:                    // Null '--' '/='
    case 692869:                    // True '--' '/='
    case 692870:                    // False '--' '/='
    case 692871:                    // Character '--' '/='
    case 692872:                    // String '--' '/='
    case 692873:                    // Real '--' '/='
    case 709251:                    // Identifier '--' ':'
    case 709252:                    // Null '--' ':'
    case 709253:                    // True '--' ':'
    case 709254:                    // False '--' ':'
    case 709255:                    // Character '--' ':'
    case 709256:                    // String '--' ':'
    case 709257:                    // Real '--' ':'
    case 725635:                    // Identifier '--' ';'
    case 725636:                    // Null '--' ';'
    case 725637:                    // True '--' ';'
    case 725638:                    // False '--' ';'
    case 725639:                    // Character '--' ';'
    case 725640:                    // String '--' ';'
    case 725641:                    // Real '--' ';'
    case 742019:                    // Identifier '--' '<'
    case 742020:                    // Null '--' '<'
    case 742021:                    // True '--' '<'
    case 742022:                    // False '--' '<'
    case 742023:                    // Character '--' '<'
    case 742024:                    // String '--' '<'
    case 742025:                    // Real '--' '<'
    case 758403:                    // Identifier '--' '<<'
    case 758404:                    // Null '--' '<<'
    case 758405:                    // True '--' '<<'
    case 758406:                    // False '--' '<<'
    case 758407:                    // Character '--' '<<'
    case 758408:                    // String '--' '<<'
    case 758409:                    // Real '--' '<<'
    case 774787:                    // Identifier '--' '<<='
    case 774788:                    // Null '--' '<<='
    case 774789:                    // True '--' '<<='
    case 774790:                    // False '--' '<<='
    case 774791:                    // Character '--' '<<='
    case 774792:                    // String '--' '<<='
    case 774793:                    // Real '--' '<<='
    case 791171:                    // Identifier '--' '<='
    case 791172:                    // Null '--' '<='
    case 791173:                    // True '--' '<='
    case 791174:                    // False '--' '<='
    case 791175:                    // Character '--' '<='
    case 791176:                    // String '--' '<='
    case 791177:                    // Real '--' '<='
    case 807555:                    // Identifier '--' '='
    case 807556:                    // Null '--' '='
    case 807557:                    // True '--' '='
    case 807558:                    // False '--' '='
    case 807559:                    // Character '--' '='
    case 807560:                    // String '--' '='
    case 807561:                    // Real '--' '='
    case 823939:                    // Identifier '--' '=='
    case 823940:                    // Null '--' '=='
    case 823941:                    // True '--' '=='
    case 823942:                    // False '--' '=='
    case 823943:                    // Character '--' '=='
    case 823944:                    // String '--' '=='
    case 823945:                    // Real '--' '=='
    case 840323:                    // Identifier '--' '>'
    case 840324:                    // Null '--' '>'
    case 840325:                    // True '--' '>'
    case 840326:                    // False '--' '>'
    case 840327:                    // Character '--' '>'
    case 840328:                    // String '--' '>'
    case 840329:                    // Real '--' '>'
    case 856707:                    // Identifier '--' '>='
    case 856708:                    // Null '--' '>='
    case 856709:                    // True '--' '>='
    case 856710:                    // False '--' '>='
    case 856711:                    // Character '--' '>='
    case 856712:                    // String '--' '>='
    case 856713:                    // Real '--' '>='
    case 873091:                    // Identifier '--' '>>'
    case 873092:                    // Null '--' '>>'
    case 873093:                    // True '--' '>>'
    case 873094:                    // False '--' '>>'
    case 873095:                    // Character '--' '>>'
    case 873096:                    // String '--' '>>'
    case 873097:                    // Real '--' '>>'
    case 889475:                    // Identifier '--' '>>='
    case 889476:                    // Null '--' '>>='
    case 889477:                    // True '--' '>>='
    case 889478:                    // False '--' '>>='
    case 889479:                    // Character '--' '>>='
    case 889480:                    // String '--' '>>='
    case 889481:                    // Real '--' '>>='
    case 905859:                    // Identifier '--' '?'
    case 905860:                    // Null '--' '?'
    case 905861:                    // True '--' '?'
    case 905862:                    // False '--' '?'
    case 905863:                    // Character '--' '?'
    case 905864:                    // String '--' '?'
    case 905865:                    // Real '--' '?'
    case 938627:                    // Identifier '--' ']'
    case 938628:                    // Null '--' ']'
    case 938629:                    // True '--' ']'
    case 938630:                    // False '--' ']'
    case 938631:                    // Character '--' ']'
    case 938632:                    // String '--' ']'
    case 938633:                    // Real '--' ']'
    case 955011:                    // Identifier '--' '^'
    case 955012:                    // Null '--' '^'
    case 955013:                    // True '--' '^'
    case 955014:                    // False '--' '^'
    case 955015:                    // Character '--' '^'
    case 955016:                    // String '--' '^'
    case 955017:                    // Real '--' '^'
    case 971395:                    // Identifier '--' '^='
    case 971396:                    // Null '--' '^='
    case 971397:                    // True '--' '^='
    case 971398:                    // False '--' '^='
    case 971399:                    // Character '--' '^='
    case 971400:                    // String '--' '^='
    case 971401:                    // Real '--' '^='
    case 987779:                    // Identifier '--' 'auto'
    case 987780:                    // Null '--' 'auto'
    case 987781:                    // True '--' 'auto'
    case 987782:                    // False '--' 'auto'
    case 987783:                    // Character '--' 'auto'
    case 987784:                    // String '--' 'auto'
    case 987785:                    // Real '--' 'auto'
    case 1004163:                   // Identifier '--' 'break'
    case 1004164:                   // Null '--' 'break'
    case 1004165:                   // True '--' 'break'
    case 1004166:                   // False '--' 'break'
    case 1004167:                   // Character '--' 'break'
    case 1004168:                   // String '--' 'break'
    case 1004169:                   // Real '--' 'break'
    case 1020547:                   // Identifier '--' 'case'
    case 1020548:                   // Null '--' 'case'
    case 1020549:                   // True '--' 'case'
    case 1020550:                   // False '--' 'case'
    case 1020551:                   // Character '--' 'case'
    case 1020552:                   // String '--' 'case'
    case 1020553:                   // Real '--' 'case'
    case 1036931:                   // Identifier '--' 'char'
    case 1036932:                   // Null '--' 'char'
    case 1036933:                   // True '--' 'char'
    case 1036934:                   // False '--' 'char'
    case 1036935:                   // Character '--' 'char'
    case 1036936:                   // String '--' 'char'
    case 1036937:                   // Real '--' 'char'
    case 1053315:                   // Identifier '--' 'const'
    case 1053316:                   // Null '--' 'const'
    case 1053317:                   // True '--' 'const'
    case 1053318:                   // False '--' 'const'
    case 1053319:                   // Character '--' 'const'
    case 1053320:                   // String '--' 'const'
    case 1053321:                   // Real '--' 'const'
    case 1069699:                   // Identifier '--' 'continue'
    case 1069700:                   // Null '--' 'continue'
    case 1069701:                   // True '--' 'continue'
    case 1069702:                   // False '--' 'continue'
    case 1069703:                   // Character '--' 'continue'
    case 1069704:                   // String '--' 'continue'
    case 1069705:                   // Real '--' 'continue'
    case 1086083:                   // Identifier '--' 'default'
    case 1086084:                   // Null '--' 'default'
    case 1086085:                   // True '--' 'default'
    case 1086086:                   // False '--' 'default'
    case 1086087:                   // Character '--' 'default'
    case 1086088:                   // String '--' 'default'
    case 1086089:                   // Real '--' 'default'
    case 1102467:                   // Identifier '--' 'do'
    case 1102468:                   // Null '--' 'do'
    case 1102469:                   // True '--' 'do'
    case 1102470:                   // False '--' 'do'
    case 1102471:                   // Character '--' 'do'
    case 1102472:                   // String '--' 'do'
    case 1102473:                   // Real '--' 'do'
    case 1118851:                   // Identifier '--' 'double'
    case 1118852:                   // Null '--' 'double'
    case 1118853:                   // True '--' 'double'
    case 1118854:                   // False '--' 'double'
    case 1118855:                   // Character '--' 'double'
    case 1118856:                   // String '--' 'double'
    case 1118857:                   // Real '--' 'double'
    case 1135235:                   // Identifier '--' 'else'
    case 1135236:                   // Null '--' 'else'
    case 1135237:                   // True '--' 'else'
    case 1135238:                   // False '--' 'else'
    case 1135239:                   // Character '--' 'else'
    case 1135240:                   // String '--' 'else'
    case 1135241:                   // Real '--' 'else'
    case 1151619:                   // Identifier '--' 'enum'
    case 1151620:                   // Null '--' 'enum'
    case 1151621:                   // True '--' 'enum'
    case 1151622:                   // False '--' 'enum'
    case 1151623:                   // Character '--' 'enum'
    case 1151624:                   // String '--' 'enum'
    case 1151625:                   // Real '--' 'enum'
    case 1168003:                   // Identifier '--' 'extern'
    case 1168004:                   // Null '--' 'extern'
    case 1168005:                   // True '--' 'extern'
    case 1168006:                   // False '--' 'extern'
    case 1168007:                   // Character '--' 'extern'
    case 1168008:                   // String '--' 'extern'
    case 1168009:                   // Real '--' 'extern'
    case 1184387:                   // Identifier '--' 'float'
    case 1184388:                   // Null '--' 'float'
    case 1184389:                   // True '--' 'float'
    case 1184390:                   // False '--' 'float'
    case 1184391:                   // Character '--' 'float'
    case 1184392:                   // String '--' 'float'
    case 1184393:                   // Real '--' 'float'
    case 1200771:                   // Identifier '--' 'for'
    case 1200772:                   // Null '--' 'for'
    case 1200773:                   // True '--' 'for'
    case 1200774:                   // False '--' 'for'
    case 1200775:                   // Character '--' 'for'
    case 1200776:                   // String '--' 'for'
    case 1200777:                   // Real '--' 'for'
    case 1217155:                   // Identifier '--' 'if'
    case 1217156:                   // Null '--' 'if'
    case 1217157:                   // True '--' 'if'
    case 1217158:                   // False '--' 'if'
    case 1217159:                   // Character '--' 'if'
    case 1217160:                   // String '--' 'if'
    case 1217161:                   // Real '--' 'if'
    case 1233539:                   // Identifier '--' 'int'
    case 1233540:                   // Null '--' 'int'
    case 1233541:                   // True '--' 'int'
    case 1233542:                   // False '--' 'int'
    case 1233543:                   // Character '--' 'int'
    case 1233544:                   // String '--' 'int'
    case 1233545:                   // Real '--' 'int'
    case 1249923:                   // Identifier '--' 'long'
    case 1249924:                   // Null '--' 'long'
    case 1249925:                   // True '--' 'long'
    case 1249926:                   // False '--' 'long'
    case 1249927:                   // Character '--' 'long'
    case 1249928:                   // String '--' 'long'
    case 1249929:                   // Real '--' 'long'
    case 1266307:                   // Identifier '--' 'return'
    case 1266308:                   // Null '--' 'return'
    case 1266309:                   // True '--' 'return'
    case 1266310:                   // False '--' 'return'
    case 1266311:                   // Character '--' 'return'
    case 1266312:                   // String '--' 'return'
    case 1266313:                   // Real '--' 'return'
    case 1282691:                   // Identifier '--' 'short'
    case 1282692:                   // Null '--' 'short'
    case 1282693:                   // True '--' 'short'
    case 1282694:                   // False '--' 'short'
    case 1282695:                   // Character '--' 'short'
    case 1282696:                   // String '--' 'short'
    case 1282697:                   // Real '--' 'short'
    case 1299075:                   // Identifier '--' 'signed'
    case 1299076:                   // Null '--' 'signed'
    case 1299077:                   // True '--' 'signed'
    case 1299078:                   // False '--' 'signed'
    case 1299079:                   // Character '--' 'signed'
    case 1299080:                   // String '--' 'signed'
    case 1299081:                   // Real '--' 'signed'
    case 1315459:                   // Identifier '--' 'sizeof'
    case 1315460:                   // Null '--' 'sizeof'
    case 1315461:                   // True '--' 'sizeof'
    case 1315462:                   // False '--' 'sizeof'
    case 1315463:                   // Character '--' 'sizeof'
    case 1315464:                   // String '--' 'sizeof'
    case 1315465:                   // Real '--' 'sizeof'
    case 1331843:                   // Identifier '--' 'static'
    case 1331844:                   // Null '--' 'static'
    case 1331845:                   // True '--' 'static'
    case 1331846:                   // False '--' 'static'
    case 1331847:                   // Character '--' 'static'
    case 1331848:                   // String '--' 'static'
    case 1331849:                   // Real '--' 'static'
    case 1348227:                   // Identifier '--' 'struct'
    case 1348228:                   // Null '--' 'struct'
    case 1348229:                   // True '--' 'struct'
    case 1348230:                   // False '--' 'struct'
    case 1348231:                   // Character '--' 'struct'
    case 1348232:                   // String '--' 'struct'
    case 1348233:                   // Real '--' 'struct'
    case 1364611:                   // Identifier '--' 'switch'
    case 1364612:                   // Null '--' 'switch'
    case 1364613:                   // True '--' 'switch'
    case 1364614:                   // False '--' 'switch'
    case 1364615:                   // Character '--' 'switch'
    case 1364616:                   // String '--' 'switch'
    case 1364617:                   // Real '--' 'switch'
    case 1380995:                   // Identifier '--' 'typedef'
    case 1380996:                   // Null '--' 'typedef'
    case 1380997:                   // True '--' 'typedef'
    case 1380998:                   // False '--' 'typedef'
    case 1380999:                   // Character '--' 'typedef'
    case 1381000:                   // String '--' 'typedef'
    case 1381001:                   // Real '--' 'typedef'
    case 1397379:                   // Identifier '--' 'union'
    case 1397380:                   // Null '--' 'union'
    case 1397381:                   // True '--' 'union'
    case 1397382:                   // False '--' 'union'
    case 1397383:                   // Character '--' 'union'
    case 1397384:                   // String '--' 'union'
    case 1397385:                   // Real '--' 'union'
    case 1413763:                   // Identifier '--' 'unsigned'
    case 1413764:                   // Null '--' 'unsigned'
    case 1413765:                   // True '--' 'unsigned'
    case 1413766:                   // False '--' 'unsigned'
    case 1413767:                   // Character '--' 'unsigned'
    case 1413768:                   // String '--' 'unsigned'
    case 1413769:                   // Real '--' 'unsigned'
    case 1430147:                   // Identifier '--' 'void'
    case 1430148:                   // Null '--' 'void'
    case 1430149:                   // True '--' 'void'
    case 1430150:                   // False '--' 'void'
    case 1430151:                   // Character '--' 'void'
    case 1430152:                   // String '--' 'void'
    case 1430153:                   // Real '--' 'void'
    case 1446531:                   // Identifier '--' 'volatile'
    case 1446532:                   // Null '--' 'volatile'
    case 1446533:                   // True '--' 'volatile'
    case 1446534:                   // False '--' 'volatile'
    case 1446535:                   // Character '--' 'volatile'
    case 1446536:                   // String '--' 'volatile'
    case 1446537:                   // Real '--' 'volatile'
    case 1462915:                   // Identifier '--' 'while'
    case 1462916:                   // Null '--' 'while'
    case 1462917:                   // True '--' 'while'
    case 1462918:                   // False '--' 'while'
    case 1462919:                   // Character '--' 'while'
    case 1462920:                   // String '--' 'while'
    case 1462921:                   // Real '--' 'while'
    case 1495683:                   // Identifier '--' '|'
    case 1495684:                   // Null '--' '|'
    case 1495685:                   // True '--' '|'
    case 1495686:                   // False '--' '|'
    case 1495687:                   // Character '--' '|'
    case 1495688:                   // String '--' '|'
    case 1495689:                   // Real '--' '|'
    case 1512067:                   // Identifier '--' '|='
    case 1512068:                   // Null '--' '|='
    case 1512069:                   // True '--' '|='
    case 1512070:                   // False '--' '|='
    case 1512071:                   // Character '--' '|='
    case 1512072:                   // String '--' '|='
    case 1512073:                   // Real '--' '|='
    case 1528451:                   // Identifier '--' '||'
    case 1528452:                   // Null '--' '||'
    case 1528453:                   // True '--' '||'
    case 1528454:                   // False '--' '||'
    case 1528455:                   // Character '--' '||'
    case 1528456:                   // String '--' '||'
    case 1528457:                   // Real '--' '||'
    case 1544835:                   // Identifier '--' '}'
    case 1544836:                   // Null '--' '}'
    case 1544837:                   // True '--' '}'
    case 1544838:                   // False '--' '}'
    case 1544839:                   // Character '--' '}'
    case 1544840:                   // String '--' '}'
    case 1544841:                   // Real '--' '}'
    case 1561219:                   // Identifier '--' '~'
    case 1561220:                   // Null '--' '~'
    case 1561221:                   // True '--' '~'
    case 1561222:                   // False '--' '~'
    case 1561223:                   // Character '--' '~'
    case 1561224:                   // String '--' '~'
    case 1561225:                   // Real '--' '~'
      try_Primary();
      lookahead1W(5);               // WhiteSpace^token | '--'
      consumeT(37);                 // '--'
      break;
    case -9:
      break;
    default:
      try_Primary();
    }
  }

  function parse_Primary()
  {
    eventHandler.startNonterminal("Primary", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      parse_Member();
      break;
    case 28:                        // '('
      parse_ParenthesizedExpression();
      break;
    default:
      parse_Value();
    }
    eventHandler.endNonterminal("Primary", e0);
  }

  function try_Primary()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      try_Member();
      break;
    case 28:                        // '('
      try_ParenthesizedExpression();
      break;
    default:
      try_Value();
    }
  }

  function parse_Statement()
  {
    eventHandler.startNonterminal("Statement", e0);
    switch (l1)
    {
    case 63:                        // 'char'
    case 68:                        // 'double'
    case 72:                        // 'float'
    case 75:                        // 'int'
    case 76:                        // 'long'
    case 78:                        // 'short'
    case 87:                        // 'void'
      lookahead2W(31);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 447:                     // 'char' Identifier
      case 452:                     // 'double' Identifier
      case 456:                     // 'float' Identifier
      case 459:                     // 'int' Identifier
      case 460:                     // 'long' Identifier
      case 462:                     // 'short' Identifier
      case 471:                     // 'void' Identifier
        lookahead3W(46);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 459199                // 'char' Identifier '('
     || lk == 459204                // 'double' Identifier '('
     || lk == 459208                // 'float' Identifier '('
     || lk == 459211                // 'int' Identifier '('
     || lk == 459212                // 'long' Identifier '('
     || lk == 459214                // 'short' Identifier '('
     || lk == 459223)               // 'void' Identifier '('
    {
      lk = memoized(5, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_FunctionDeclaration();
          lk = -12;
        }
        catch (p12A)
        {
          lk = -14;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(5, e0, lk);
      }
    }
    switch (lk)
    {
    case 67:                        // 'do'
      parse_Do();
      break;
    case 89:                        // 'while'
      parse_While();
      break;
    case 73:                        // 'for'
      parse_For();
      break;
    case 61:                        // 'break'
      parse_Break();
      break;
    case 65:                        // 'continue'
      parse_Continue();
      break;
    case 74:                        // 'if'
      parse_If();
      break;
    case 83:                        // 'switch'
      parse_Switch();
      break;
    case 70:                        // 'enum'
      parse_Enum();
      break;
    case 84:                        // 'typedef'
      parse_Typedef();
      break;
    case 82:                        // 'struct'
      parse_Struct();
      break;
    case 85:                        // 'union'
      parse_Union();
      break;
    case -12:
    case 3:                         // Identifier
      parse_FunctionDeclaration();
      break;
    case 77:                        // 'return'
      parse_Return();
      break;
    case 44:                        // ';'
      parse_EmptyStatement();
      break;
    default:
      parse_VariableDeclaration();
    }
    eventHandler.endNonterminal("Statement", e0);
  }

  function try_Statement()
  {
    switch (l1)
    {
    case 63:                        // 'char'
    case 68:                        // 'double'
    case 72:                        // 'float'
    case 75:                        // 'int'
    case 76:                        // 'long'
    case 78:                        // 'short'
    case 87:                        // 'void'
      lookahead2W(31);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      switch (lk)
      {
      case 447:                     // 'char' Identifier
      case 452:                     // 'double' Identifier
      case 456:                     // 'float' Identifier
      case 459:                     // 'int' Identifier
      case 460:                     // 'long' Identifier
      case 462:                     // 'short' Identifier
      case 471:                     // 'void' Identifier
        lookahead3W(46);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 459199                // 'char' Identifier '('
     || lk == 459204                // 'double' Identifier '('
     || lk == 459208                // 'float' Identifier '('
     || lk == 459211                // 'int' Identifier '('
     || lk == 459212                // 'long' Identifier '('
     || lk == 459214                // 'short' Identifier '('
     || lk == 459223)               // 'void' Identifier '('
    {
      lk = memoized(5, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_FunctionDeclaration();
          memoize(5, e0A, -12);
          lk = -16;
        }
        catch (p12A)
        {
          lk = -14;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(5, e0A, -14);
        }
      }
    }
    switch (lk)
    {
    case 67:                        // 'do'
      try_Do();
      break;
    case 89:                        // 'while'
      try_While();
      break;
    case 73:                        // 'for'
      try_For();
      break;
    case 61:                        // 'break'
      try_Break();
      break;
    case 65:                        // 'continue'
      try_Continue();
      break;
    case 74:                        // 'if'
      try_If();
      break;
    case 83:                        // 'switch'
      try_Switch();
      break;
    case 70:                        // 'enum'
      try_Enum();
      break;
    case 84:                        // 'typedef'
      try_Typedef();
      break;
    case 82:                        // 'struct'
      try_Struct();
      break;
    case 85:                        // 'union'
      try_Union();
      break;
    case -12:
    case 3:                         // Identifier
      try_FunctionDeclaration();
      break;
    case 77:                        // 'return'
      try_Return();
      break;
    case 44:                        // ';'
      try_EmptyStatement();
      break;
    case -16:
      break;
    default:
      try_VariableDeclaration();
    }
  }

  function parse_Do()
  {
    eventHandler.startNonterminal("Do", e0);
    consume(67);                    // 'do'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(11);                // WhiteSpace^token | 'while'
    consume(89);                    // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(28);                    // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    eventHandler.endNonterminal("Do", e0);
  }

  function try_Do()
  {
    consumeT(67);                   // 'do'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(11);                // WhiteSpace^token | 'while'
    consumeT(89);                   // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(28);                   // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
  }

  function parse_While()
  {
    eventHandler.startNonterminal("While", e0);
    consume(89);                    // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(28);                    // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("While", e0);
  }

  function try_While()
  {
    consumeT(89);                   // 'while'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(28);                   // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_For()
  {
    eventHandler.startNonterminal("For", e0);
    consume(73);                    // 'for'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(28);                    // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ';'
    consume(44);                    // ';'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ';'
    consume(44);                    // ';'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("For", e0);
  }

  function try_For()
  {
    consumeT(73);                   // 'for'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(28);                   // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ';'
    consumeT(44);                   // ';'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(7);                 // WhiteSpace^token | ';'
    consumeT(44);                   // ';'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Break()
  {
    eventHandler.startNonterminal("Break", e0);
    consume(61);                    // 'break'
    eventHandler.endNonterminal("Break", e0);
  }

  function try_Break()
  {
    consumeT(61);                   // 'break'
  }

  function parse_Continue()
  {
    eventHandler.startNonterminal("Continue", e0);
    consume(65);                    // 'continue'
    eventHandler.endNonterminal("Continue", e0);
  }

  function try_Continue()
  {
    consumeT(65);                   // 'continue'
  }

  function parse_If()
  {
    eventHandler.startNonterminal("If", e0);
    consume(74);                    // 'if'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(28);                    // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(41);                // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | ')' | '++' | ',' | '--' |
                                    // ':' | ';' | '>' | '[' | ']' | 'auto' | 'break' | 'case' | 'char' | 'const' |
                                    // 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 69:                        // 'else'
      lookahead2W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 453:                     // 'else' Identifier
        lookahead3W(46);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 2373:                    // 'else' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2757:                    // 'else' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7237:                    // 'else' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11589:                   // 'else' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9029:                    // 'else' 'enum'
      case 10949:                   // 'else' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1349:                    // 'else' Comment
      case 5701:                    // 'else' ';'
      case 7877:                    // 'else' 'break'
      case 8389:                    // 'else' 'continue'
        lookahead3W(41);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | ')' | '++' | ',' | '--' |
                                    // ':' | ';' | '>' | '[' | ']' | 'auto' | 'break' | 'case' | 'char' | 'const' |
                                    // 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '}' | '~'
        break;
      case 1861:                    // 'else' '#define'
      case 2501:                    // 'else' '#ifdef'
      case 2629:                    // 'else' '#ifndef'
      case 2885:                    // 'else' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9413:                    // 'else' 'for'
      case 9541:                    // 'else' 'if'
      case 10693:                   // 'else' 'switch'
      case 11461:                   // 'else' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1605:                    // 'else' '!'
      case 4293:                    // 'else' '++'
      case 4805:                    // 'else' '--'
      case 10309:                   // 'else' 'sizeof'
      case 12229:                   // 'else' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3653:                    // 'else' '('
      case 8645:                    // 'else' 'do'
      case 9925:                    // 'else' 'return'
      case 10565:                   // 'else' 'struct'
      case 10821:                   // 'else' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 581:                     // 'else' Null
      case 709:                     // 'else' True
      case 837:                     // 'else' False
      case 965:                     // 'else' Character
      case 1093:                    // 'else' String
      case 1221:                    // 'else' Real
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 7749:                    // 'else' 'auto'
      case 8261:                    // 'else' 'const'
      case 9157:                    // 'else' 'extern'
      case 10181:                   // 'else' 'signed'
      case 10437:                   // 'else' 'static'
      case 11077:                   // 'else' 'unsigned'
      case 11333:                   // 'else' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8133:                    // 'else' 'char'
      case 8773:                    // 'else' 'double'
      case 9285:                    // 'else' 'float'
      case 9669:                    // 'else' 'int'
      case 9797:                    // 'else' 'long'
      case 10053:                   // 'else' 'short'
      case 11205:                   // 'else' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 1                     // END
     && lk != 3                     // Identifier
     && lk != 4                     // Null
     && lk != 5                     // True
     && lk != 6                     // False
     && lk != 7                     // Character
     && lk != 8                     // String
     && lk != 9                     // Real
     && lk != 10                    // Comment
     && lk != 12                    // '!'
     && lk != 14                    // '#define'
     && lk != 15                    // '#elif'
     && lk != 16                    // '#else'
     && lk != 17                    // '#endif'
     && lk != 18                    // '#if'
     && lk != 19                    // '#ifdef'
     && lk != 20                    // '#ifndef'
     && lk != 21                    // '#include'
     && lk != 22                    // '#undef'
     && lk != 28                    // '('
     && lk != 29                    // ')'
     && lk != 33                    // '++'
     && lk != 35                    // ','
     && lk != 37                    // '--'
     && lk != 43                    // ':'
     && lk != 44                    // ';'
     && lk != 51                    // '>'
     && lk != 56                    // '['
     && lk != 57                    // ']'
     && lk != 60                    // 'auto'
     && lk != 61                    // 'break'
     && lk != 62                    // 'case'
     && lk != 63                    // 'char'
     && lk != 64                    // 'const'
     && lk != 65                    // 'continue'
     && lk != 66                    // 'default'
     && lk != 67                    // 'do'
     && lk != 68                    // 'double'
     && lk != 70                    // 'enum'
     && lk != 71                    // 'extern'
     && lk != 72                    // 'float'
     && lk != 73                    // 'for'
     && lk != 74                    // 'if'
     && lk != 75                    // 'int'
     && lk != 76                    // 'long'
     && lk != 77                    // 'return'
     && lk != 78                    // 'short'
     && lk != 79                    // 'signed'
     && lk != 80                    // 'sizeof'
     && lk != 81                    // 'static'
     && lk != 82                    // 'struct'
     && lk != 83                    // 'switch'
     && lk != 84                    // 'typedef'
     && lk != 85                    // 'union'
     && lk != 86                    // 'unsigned'
     && lk != 87                    // 'void'
     && lk != 88                    // 'volatile'
     && lk != 89                    // 'while'
     && lk != 90                    // '{'
     && lk != 94                    // '}'
     && lk != 95)                   // '~'
    {
      lk = memoized(6, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Else();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(6, e0, lk);
      }
    }
    if (lk == -1)
    {
      whitespace();
      parse_Else();
    }
    eventHandler.endNonterminal("If", e0);
  }

  function try_If()
  {
    consumeT(74);                   // 'if'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(28);                   // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(41);                // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | ')' | '++' | ',' | '--' |
                                    // ':' | ';' | '>' | '[' | ']' | 'auto' | 'break' | 'case' | 'char' | 'const' |
                                    // 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '}' | '~'
    switch (l1)
    {
    case 69:                        // 'else'
      lookahead2W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      switch (lk)
      {
      case 453:                     // 'else' Identifier
        lookahead3W(46);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        break;
      case 2373:                    // 'else' '#if'
        lookahead3W(38);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
        break;
      case 2757:                    // 'else' '#include'
        lookahead3W(13);            // String | WhiteSpace^token | '<'
        break;
      case 7237:                    // 'else' '['
        lookahead3W(32);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 11589:                   // 'else' '{'
        lookahead3W(33);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
        break;
      case 9029:                    // 'else' 'enum'
      case 10949:                   // 'else' 'union'
        lookahead3W(12);            // WhiteSpace^token | '{'
        break;
      case 1349:                    // 'else' Comment
      case 5701:                    // 'else' ';'
      case 7877:                    // 'else' 'break'
      case 8389:                    // 'else' 'continue'
        lookahead3W(41);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | ')' | '++' | ',' | '--' |
                                    // ':' | ';' | '>' | '[' | ']' | 'auto' | 'break' | 'case' | 'char' | 'const' |
                                    // 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '}' | '~'
        break;
      case 1861:                    // 'else' '#define'
      case 2501:                    // 'else' '#ifdef'
      case 2629:                    // 'else' '#ifndef'
      case 2885:                    // 'else' '#undef'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      case 9413:                    // 'else' 'for'
      case 9541:                    // 'else' 'if'
      case 10693:                   // 'else' 'switch'
      case 11461:                   // 'else' 'while'
        lookahead3W(2);             // WhiteSpace^token | '('
        break;
      case 1605:                    // 'else' '!'
      case 4293:                    // 'else' '++'
      case 4805:                    // 'else' '--'
      case 10309:                   // 'else' 'sizeof'
      case 12229:                   // 'else' '~'
        lookahead3W(17);            // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
        break;
      case 3653:                    // 'else' '('
      case 8645:                    // 'else' 'do'
      case 9925:                    // 'else' 'return'
      case 10565:                   // 'else' 'struct'
      case 10821:                   // 'else' 'typedef'
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      case 581:                     // 'else' Null
      case 709:                     // 'else' True
      case 837:                     // 'else' False
      case 965:                     // 'else' Character
      case 1093:                    // 'else' String
      case 1221:                    // 'else' Real
        lookahead3W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        break;
      case 7749:                    // 'else' 'auto'
      case 8261:                    // 'else' 'const'
      case 9157:                    // 'else' 'extern'
      case 10181:                   // 'else' 'signed'
      case 10437:                   // 'else' 'static'
      case 11077:                   // 'else' 'unsigned'
      case 11333:                   // 'else' 'volatile'
        lookahead3W(18);            // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
        break;
      case 8133:                    // 'else' 'char'
      case 8773:                    // 'else' 'double'
      case 9285:                    // 'else' 'float'
      case 9669:                    // 'else' 'int'
      case 9797:                    // 'else' 'long'
      case 10053:                   // 'else' 'short'
      case 11205:                   // 'else' 'void'
        lookahead3W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk != 1                     // END
     && lk != 3                     // Identifier
     && lk != 4                     // Null
     && lk != 5                     // True
     && lk != 6                     // False
     && lk != 7                     // Character
     && lk != 8                     // String
     && lk != 9                     // Real
     && lk != 10                    // Comment
     && lk != 12                    // '!'
     && lk != 14                    // '#define'
     && lk != 15                    // '#elif'
     && lk != 16                    // '#else'
     && lk != 17                    // '#endif'
     && lk != 18                    // '#if'
     && lk != 19                    // '#ifdef'
     && lk != 20                    // '#ifndef'
     && lk != 21                    // '#include'
     && lk != 22                    // '#undef'
     && lk != 28                    // '('
     && lk != 29                    // ')'
     && lk != 33                    // '++'
     && lk != 35                    // ','
     && lk != 37                    // '--'
     && lk != 43                    // ':'
     && lk != 44                    // ';'
     && lk != 51                    // '>'
     && lk != 56                    // '['
     && lk != 57                    // ']'
     && lk != 60                    // 'auto'
     && lk != 61                    // 'break'
     && lk != 62                    // 'case'
     && lk != 63                    // 'char'
     && lk != 64                    // 'const'
     && lk != 65                    // 'continue'
     && lk != 66                    // 'default'
     && lk != 67                    // 'do'
     && lk != 68                    // 'double'
     && lk != 70                    // 'enum'
     && lk != 71                    // 'extern'
     && lk != 72                    // 'float'
     && lk != 73                    // 'for'
     && lk != 74                    // 'if'
     && lk != 75                    // 'int'
     && lk != 76                    // 'long'
     && lk != 77                    // 'return'
     && lk != 78                    // 'short'
     && lk != 79                    // 'signed'
     && lk != 80                    // 'sizeof'
     && lk != 81                    // 'static'
     && lk != 82                    // 'struct'
     && lk != 83                    // 'switch'
     && lk != 84                    // 'typedef'
     && lk != 85                    // 'union'
     && lk != 86                    // 'unsigned'
     && lk != 87                    // 'void'
     && lk != 88                    // 'volatile'
     && lk != 89                    // 'while'
     && lk != 90                    // '{'
     && lk != 94                    // '}'
     && lk != 95)                   // '~'
    {
      lk = memoized(6, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Else();
          memoize(6, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(6, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk == -1)
    {
      try_Else();
    }
  }

  function parse_Else()
  {
    eventHandler.startNonterminal("Else", e0);
    consume(69);                    // 'else'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Else", e0);
  }

  function try_Else()
  {
    consumeT(69);                   // 'else'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Switch()
  {
    eventHandler.startNonterminal("Switch", e0);
    consume(83);                    // 'switch'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(28);                    // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    lookahead1W(12);                // WhiteSpace^token | '{'
    consume(90);                    // '{'
    for (;;)
    {
      lookahead1W(10);              // WhiteSpace^token | 'case'
      whitespace();
      parse_Case();
      if (l1 != 62)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 66)                   // 'default'
    {
      whitespace();
      parse_Default();
    }
    consume(94);                    // '}'
    eventHandler.endNonterminal("Switch", e0);
  }

  function try_Switch()
  {
    consumeT(83);                   // 'switch'
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(28);                   // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
    lookahead1W(12);                // WhiteSpace^token | '{'
    consumeT(90);                   // '{'
    for (;;)
    {
      lookahead1W(10);              // WhiteSpace^token | 'case'
      try_Case();
      if (l1 != 62)                 // 'case'
      {
        break;
      }
    }
    if (l1 == 66)                   // 'default'
    {
      try_Default();
    }
    consumeT(94);                   // '}'
  }

  function parse_Case()
  {
    eventHandler.startNonterminal("Case", e0);
    consume(62);                    // 'case'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consume(43);                    // ':'
    for (;;)
    {
      lookahead1W(40);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'case' | 'char' |
                                    // 'const' | 'continue' | 'default' | 'do' | 'double' | 'enum' | 'extern' |
                                    // 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' |
                                    // 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' |
                                    // 'void' | 'volatile' | 'while' | '{' | '}' | '~'
      if (l1 == 62                  // 'case'
       || l1 == 66                  // 'default'
       || l1 == 94)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Case", e0);
  }

  function try_Case()
  {
    consumeT(62);                   // 'case'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consumeT(43);                   // ':'
    for (;;)
    {
      lookahead1W(40);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'case' | 'char' |
                                    // 'const' | 'continue' | 'default' | 'do' | 'double' | 'enum' | 'extern' |
                                    // 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' |
                                    // 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' |
                                    // 'void' | 'volatile' | 'while' | '{' | '}' | '~'
      if (l1 == 62                  // 'case'
       || l1 == 66                  // 'default'
       || l1 == 94)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Default()
  {
    eventHandler.startNonterminal("Default", e0);
    consume(66);                    // 'default'
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consume(43);                    // ':'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Default", e0);
  }

  function try_Default()
  {
    consumeT(66);                   // 'default'
    lookahead1W(6);                 // WhiteSpace^token | ':'
    consumeT(43);                   // ':'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_Enum()
  {
    eventHandler.startNonterminal("Enum", e0);
    consume(70);                    // 'enum'
    lookahead1W(12);                // WhiteSpace^token | '{'
    whitespace();
    parse_Array();
    eventHandler.endNonterminal("Enum", e0);
  }

  function try_Enum()
  {
    consumeT(70);                   // 'enum'
    lookahead1W(12);                // WhiteSpace^token | '{'
    try_Array();
  }

  function parse_Typedef()
  {
    eventHandler.startNonterminal("Typedef", e0);
    consume(84);                    // 'typedef'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consume(3);                     // Identifier
    eventHandler.endNonterminal("Typedef", e0);
  }

  function try_Typedef()
  {
    consumeT(84);                   // 'typedef'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consumeT(3);                    // Identifier
  }

  function parse_Struct()
  {
    eventHandler.startNonterminal("Struct", e0);
    consume(82);                    // 'struct'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Struct", e0);
  }

  function try_Struct()
  {
    consumeT(82);                   // 'struct'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Union()
  {
    eventHandler.startNonterminal("Union", e0);
    consume(85);                    // 'union'
    lookahead1W(12);                // WhiteSpace^token | '{'
    consume(90);                    // '{'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(94);                    // '}'
    eventHandler.endNonterminal("Union", e0);
  }

  function try_Union()
  {
    consumeT(85);                   // 'union'
    lookahead1W(12);                // WhiteSpace^token | '{'
    consumeT(90);                   // '{'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(94);                   // '}'
  }

  function parse_FunctionDeclaration()
  {
    eventHandler.startNonterminal("FunctionDeclaration", e0);
    if (l1 != 3)                    // Identifier
    {
      whitespace();
      parse_Type();
    }
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consume(3);                     // Identifier
    lookahead1W(2);                 // WhiteSpace^token | '('
    consume(28);                    // '('
    lookahead1W(30);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
    if (l1 != 29)                   // ')'
    {
      switch (l1)
      {
      case 87:                      // 'void'
        lookahead2W(35);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      switch (lk)
      {
      case 3799:                    // 'void' ')'
        consume(87);                // 'void'
        break;
      default:
        whitespace();
        parse_Arguments();
      }
    }
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    lookahead1W(12);                // WhiteSpace^token | '{'
    consume(90);                    // '{'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    consume(94);                    // '}'
    eventHandler.endNonterminal("FunctionDeclaration", e0);
  }

  function try_FunctionDeclaration()
  {
    if (l1 != 3)                    // Identifier
    {
      try_Type();
    }
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consumeT(3);                    // Identifier
    lookahead1W(2);                 // WhiteSpace^token | '('
    consumeT(28);                   // '('
    lookahead1W(30);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
    if (l1 != 29)                   // ')'
    {
      switch (l1)
      {
      case 87:                      // 'void'
        lookahead2W(35);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
        break;
      default:
        lk = l1;
      }
      switch (lk)
      {
      case 3799:                    // 'void' ')'
        consumeT(87);               // 'void'
        break;
      default:
        try_Arguments();
      }
    }
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
    lookahead1W(12);                // WhiteSpace^token | '{'
    consumeT(90);                   // '{'
    for (;;)
    {
      lookahead1W(33);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
      if (l1 == 94)                 // '}'
      {
        break;
      }
      try_Expression();
    }
    consumeT(94);                   // '}'
  }

  function parse_Return()
  {
    eventHandler.startNonterminal("Return", e0);
    consume(77);                    // 'return'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Return", e0);
  }

  function try_Return()
  {
    consumeT(77);                   // 'return'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_VariableDeclaration()
  {
    eventHandler.startNonterminal("VariableDeclaration", e0);
    for (;;)
    {
      lookahead1W(18);              // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
      switch (l1)
      {
      case 76:                      // 'long'
      case 78:                      // 'short'
        lookahead2W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 7756:                  // 'long' 'auto'
        case 8268:                  // 'long' 'const'
        case 9164:                  // 'long' 'extern'
        case 10188:                 // 'long' 'signed'
        case 10444:                 // 'long' 'static'
        case 11084:                 // 'long' 'unsigned'
        case 11340:                 // 'long' 'volatile'
        case 7758:                  // 'short' 'auto'
        case 8270:                  // 'short' 'const'
        case 9166:                  // 'short' 'extern'
        case 10190:                 // 'short' 'signed'
        case 10446:                 // 'short' 'static'
        case 11086:                 // 'short' 'unsigned'
        case 11342:                 // 'short' 'volatile'
          lookahead3W(18);          // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
          break;
        case 8140:                  // 'long' 'char'
        case 8780:                  // 'long' 'double'
        case 9292:                  // 'long' 'float'
        case 9676:                  // 'long' 'int'
        case 9804:                  // 'long' 'long'
        case 10060:                 // 'long' 'short'
        case 11212:                 // 'long' 'void'
        case 8142:                  // 'short' 'char'
        case 8782:                  // 'short' 'double'
        case 9294:                  // 'short' 'float'
        case 9678:                  // 'short' 'int'
        case 9806:                  // 'short' 'long'
        case 10062:                 // 'short' 'short'
        case 11214:                 // 'short' 'void'
          lookahead3W(31);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 60                  // 'auto'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 68                  // 'double'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 75                  // 'int'
       && lk != 79                  // 'signed'
       && lk != 81                  // 'static'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 460                 // 'long' Identifier
       && lk != 462                 // 'short' Identifier
       && lk != 588                 // 'long' Null
       && lk != 590                 // 'short' Null
       && lk != 716                 // 'long' True
       && lk != 718                 // 'short' True
       && lk != 844                 // 'long' False
       && lk != 846                 // 'short' False
       && lk != 972                 // 'long' Character
       && lk != 974                 // 'short' Character
       && lk != 1100                // 'long' String
       && lk != 1102                // 'short' String
       && lk != 1228                // 'long' Real
       && lk != 1230                // 'short' Real
       && lk != 1356                // 'long' Comment
       && lk != 1358                // 'short' Comment
       && lk != 1612                // 'long' '!'
       && lk != 1614                // 'short' '!'
       && lk != 1868                // 'long' '#define'
       && lk != 1870                // 'short' '#define'
       && lk != 2380                // 'long' '#if'
       && lk != 2382                // 'short' '#if'
       && lk != 2508                // 'long' '#ifdef'
       && lk != 2510                // 'short' '#ifdef'
       && lk != 2636                // 'long' '#ifndef'
       && lk != 2638                // 'short' '#ifndef'
       && lk != 2764                // 'long' '#include'
       && lk != 2766                // 'short' '#include'
       && lk != 2892                // 'long' '#undef'
       && lk != 2894                // 'short' '#undef'
       && lk != 3660                // 'long' '('
       && lk != 3662                // 'short' '('
       && lk != 3916                // 'long' '*'
       && lk != 3918                // 'short' '*'
       && lk != 4300                // 'long' '++'
       && lk != 4302                // 'short' '++'
       && lk != 4812                // 'long' '--'
       && lk != 4814                // 'short' '--'
       && lk != 5708                // 'long' ';'
       && lk != 5710                // 'short' ';'
       && lk != 7244                // 'long' '['
       && lk != 7246                // 'short' '['
       && lk != 7884                // 'long' 'break'
       && lk != 7886                // 'short' 'break'
       && lk != 8396                // 'long' 'continue'
       && lk != 8398                // 'short' 'continue'
       && lk != 8652                // 'long' 'do'
       && lk != 8654                // 'short' 'do'
       && lk != 9036                // 'long' 'enum'
       && lk != 9038                // 'short' 'enum'
       && lk != 9420                // 'long' 'for'
       && lk != 9422                // 'short' 'for'
       && lk != 9548                // 'long' 'if'
       && lk != 9550                // 'short' 'if'
       && lk != 9932                // 'long' 'return'
       && lk != 9934                // 'short' 'return'
       && lk != 10316               // 'long' 'sizeof'
       && lk != 10318               // 'short' 'sizeof'
       && lk != 10572               // 'long' 'struct'
       && lk != 10574               // 'short' 'struct'
       && lk != 10700               // 'long' 'switch'
       && lk != 10702               // 'short' 'switch'
       && lk != 10828               // 'long' 'typedef'
       && lk != 10830               // 'short' 'typedef'
       && lk != 10956               // 'long' 'union'
       && lk != 10958               // 'short' 'union'
       && lk != 11468               // 'long' 'while'
       && lk != 11470               // 'short' 'while'
       && lk != 11596               // 'long' '{'
       && lk != 11598               // 'short' '{'
       && lk != 12236               // 'long' '~'
       && lk != 12238)              // 'short' '~'
      {
        lk = memoized(7, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            try_Qualifier();
            lk = -1;
          }
          catch (p1A)
          {
            lk = -2;
          }
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(7, e0, lk);
        }
      }
      if (lk != -1
       && lk != 60                  // 'auto'
       && lk != 64                  // 'const'
       && lk != 71                  // 'extern'
       && lk != 79                  // 'signed'
       && lk != 81                  // 'static'
       && lk != 86                  // 'unsigned'
       && lk != 88)                 // 'volatile'
      {
        break;
      }
      whitespace();
      parse_Qualifier();
    }
    whitespace();
    parse_Type();
    for (;;)
    {
      lookahead1W(31);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      if (l1 != 30)                 // '*'
      {
        break;
      }
      consume(30);                  // '*'
    }
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("VariableDeclaration", e0);
  }

  function try_VariableDeclaration()
  {
    for (;;)
    {
      lookahead1W(18);              // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
      switch (l1)
      {
      case 76:                      // 'long'
      case 78:                      // 'short'
        lookahead2W(31);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        switch (lk)
        {
        case 7756:                  // 'long' 'auto'
        case 8268:                  // 'long' 'const'
        case 9164:                  // 'long' 'extern'
        case 10188:                 // 'long' 'signed'
        case 10444:                 // 'long' 'static'
        case 11084:                 // 'long' 'unsigned'
        case 11340:                 // 'long' 'volatile'
        case 7758:                  // 'short' 'auto'
        case 8270:                  // 'short' 'const'
        case 9166:                  // 'short' 'extern'
        case 10190:                 // 'short' 'signed'
        case 10446:                 // 'short' 'static'
        case 11086:                 // 'short' 'unsigned'
        case 11342:                 // 'short' 'volatile'
          lookahead3W(18);          // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
          break;
        case 8140:                  // 'long' 'char'
        case 8780:                  // 'long' 'double'
        case 9292:                  // 'long' 'float'
        case 9676:                  // 'long' 'int'
        case 9804:                  // 'long' 'long'
        case 10060:                 // 'long' 'short'
        case 11212:                 // 'long' 'void'
        case 8142:                  // 'short' 'char'
        case 8782:                  // 'short' 'double'
        case 9294:                  // 'short' 'float'
        case 9678:                  // 'short' 'int'
        case 9806:                  // 'short' 'long'
        case 10062:                 // 'short' 'short'
        case 11214:                 // 'short' 'void'
          lookahead3W(31);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          break;
        }
        break;
      default:
        lk = l1;
      }
      if (lk != 60                  // 'auto'
       && lk != 63                  // 'char'
       && lk != 64                  // 'const'
       && lk != 68                  // 'double'
       && lk != 71                  // 'extern'
       && lk != 72                  // 'float'
       && lk != 75                  // 'int'
       && lk != 79                  // 'signed'
       && lk != 81                  // 'static'
       && lk != 86                  // 'unsigned'
       && lk != 87                  // 'void'
       && lk != 88                  // 'volatile'
       && lk != 460                 // 'long' Identifier
       && lk != 462                 // 'short' Identifier
       && lk != 588                 // 'long' Null
       && lk != 590                 // 'short' Null
       && lk != 716                 // 'long' True
       && lk != 718                 // 'short' True
       && lk != 844                 // 'long' False
       && lk != 846                 // 'short' False
       && lk != 972                 // 'long' Character
       && lk != 974                 // 'short' Character
       && lk != 1100                // 'long' String
       && lk != 1102                // 'short' String
       && lk != 1228                // 'long' Real
       && lk != 1230                // 'short' Real
       && lk != 1356                // 'long' Comment
       && lk != 1358                // 'short' Comment
       && lk != 1612                // 'long' '!'
       && lk != 1614                // 'short' '!'
       && lk != 1868                // 'long' '#define'
       && lk != 1870                // 'short' '#define'
       && lk != 2380                // 'long' '#if'
       && lk != 2382                // 'short' '#if'
       && lk != 2508                // 'long' '#ifdef'
       && lk != 2510                // 'short' '#ifdef'
       && lk != 2636                // 'long' '#ifndef'
       && lk != 2638                // 'short' '#ifndef'
       && lk != 2764                // 'long' '#include'
       && lk != 2766                // 'short' '#include'
       && lk != 2892                // 'long' '#undef'
       && lk != 2894                // 'short' '#undef'
       && lk != 3660                // 'long' '('
       && lk != 3662                // 'short' '('
       && lk != 3916                // 'long' '*'
       && lk != 3918                // 'short' '*'
       && lk != 4300                // 'long' '++'
       && lk != 4302                // 'short' '++'
       && lk != 4812                // 'long' '--'
       && lk != 4814                // 'short' '--'
       && lk != 5708                // 'long' ';'
       && lk != 5710                // 'short' ';'
       && lk != 7244                // 'long' '['
       && lk != 7246                // 'short' '['
       && lk != 7884                // 'long' 'break'
       && lk != 7886                // 'short' 'break'
       && lk != 8396                // 'long' 'continue'
       && lk != 8398                // 'short' 'continue'
       && lk != 8652                // 'long' 'do'
       && lk != 8654                // 'short' 'do'
       && lk != 9036                // 'long' 'enum'
       && lk != 9038                // 'short' 'enum'
       && lk != 9420                // 'long' 'for'
       && lk != 9422                // 'short' 'for'
       && lk != 9548                // 'long' 'if'
       && lk != 9550                // 'short' 'if'
       && lk != 9932                // 'long' 'return'
       && lk != 9934                // 'short' 'return'
       && lk != 10316               // 'long' 'sizeof'
       && lk != 10318               // 'short' 'sizeof'
       && lk != 10572               // 'long' 'struct'
       && lk != 10574               // 'short' 'struct'
       && lk != 10700               // 'long' 'switch'
       && lk != 10702               // 'short' 'switch'
       && lk != 10828               // 'long' 'typedef'
       && lk != 10830               // 'short' 'typedef'
       && lk != 10956               // 'long' 'union'
       && lk != 10958               // 'short' 'union'
       && lk != 11468               // 'long' 'while'
       && lk != 11470               // 'short' 'while'
       && lk != 11596               // 'long' '{'
       && lk != 11598               // 'short' '{'
       && lk != 12236               // 'long' '~'
       && lk != 12238)              // 'short' '~'
      {
        lk = memoized(7, e0);
        if (lk == 0)
        {
          var b0A = b0; var e0A = e0; var l1A = l1;
          var b1A = b1; var e1A = e1; var l2A = l2;
          var b2A = b2; var e2A = e2; var l3A = l3;
          var b3A = b3; var e3A = e3;
          try
          {
            try_Qualifier();
            memoize(7, e0A, -1);
            continue;
          }
          catch (p1A)
          {
            b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
            b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
            b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
            b3 = b3A; e3 = e3A; end = e3A; }}}
            memoize(7, e0A, -2);
            break;
          }
        }
      }
      if (lk != -1
       && lk != 60                  // 'auto'
       && lk != 64                  // 'const'
       && lk != 71                  // 'extern'
       && lk != 79                  // 'signed'
       && lk != 81                  // 'static'
       && lk != 86                  // 'unsigned'
       && lk != 88)                 // 'volatile'
      {
        break;
      }
      try_Qualifier();
    }
    try_Type();
    for (;;)
    {
      lookahead1W(31);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      if (l1 != 30)                 // '*'
      {
        break;
      }
      consumeT(30);                 // '*'
    }
    try_Expression();
  }

  function parse_EmptyStatement()
  {
    eventHandler.startNonterminal("EmptyStatement", e0);
    consume(44);                    // ';'
    eventHandler.endNonterminal("EmptyStatement", e0);
  }

  function try_EmptyStatement()
  {
    consumeT(44);                   // ';'
  }

  function parse_Qualifier()
  {
    eventHandler.startNonterminal("Qualifier", e0);
    switch (l1)
    {
    case 60:                        // 'auto'
      consume(60);                  // 'auto'
      break;
    case 64:                        // 'const'
      consume(64);                  // 'const'
      break;
    case 71:                        // 'extern'
      consume(71);                  // 'extern'
      break;
    case 76:                        // 'long'
      consume(76);                  // 'long'
      break;
    case 78:                        // 'short'
      consume(78);                  // 'short'
      break;
    case 79:                        // 'signed'
      consume(79);                  // 'signed'
      break;
    case 81:                        // 'static'
      consume(81);                  // 'static'
      break;
    case 86:                        // 'unsigned'
      consume(86);                  // 'unsigned'
      break;
    default:
      consume(88);                  // 'volatile'
    }
    eventHandler.endNonterminal("Qualifier", e0);
  }

  function try_Qualifier()
  {
    switch (l1)
    {
    case 60:                        // 'auto'
      consumeT(60);                 // 'auto'
      break;
    case 64:                        // 'const'
      consumeT(64);                 // 'const'
      break;
    case 71:                        // 'extern'
      consumeT(71);                 // 'extern'
      break;
    case 76:                        // 'long'
      consumeT(76);                 // 'long'
      break;
    case 78:                        // 'short'
      consumeT(78);                 // 'short'
      break;
    case 79:                        // 'signed'
      consumeT(79);                 // 'signed'
      break;
    case 81:                        // 'static'
      consumeT(81);                 // 'static'
      break;
    case 86:                        // 'unsigned'
      consumeT(86);                 // 'unsigned'
      break;
    default:
      consumeT(88);                 // 'volatile'
    }
  }

  function parse_Type()
  {
    eventHandler.startNonterminal("Type", e0);
    switch (l1)
    {
    case 63:                        // 'char'
      consume(63);                  // 'char'
      break;
    case 68:                        // 'double'
      consume(68);                  // 'double'
      break;
    case 72:                        // 'float'
      consume(72);                  // 'float'
      break;
    case 75:                        // 'int'
      consume(75);                  // 'int'
      break;
    case 76:                        // 'long'
      consume(76);                  // 'long'
      break;
    case 78:                        // 'short'
      consume(78);                  // 'short'
      break;
    default:
      consume(87);                  // 'void'
    }
    eventHandler.endNonterminal("Type", e0);
  }

  function try_Type()
  {
    switch (l1)
    {
    case 63:                        // 'char'
      consumeT(63);                 // 'char'
      break;
    case 68:                        // 'double'
      consumeT(68);                 // 'double'
      break;
    case 72:                        // 'float'
      consumeT(72);                 // 'float'
      break;
    case 75:                        // 'int'
      consumeT(75);                 // 'int'
      break;
    case 76:                        // 'long'
      consumeT(76);                 // 'long'
      break;
    case 78:                        // 'short'
      consumeT(78);                 // 'short'
      break;
    default:
      consumeT(87);                 // 'void'
    }
  }

  function parse_Arguments()
  {
    eventHandler.startNonterminal("Arguments", e0);
    parse_Expression();
    for (;;)
    {
      lookahead1W(39);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
      if (l1 != 35)                 // ','
      {
        break;
      }
      consume(35);                  // ','
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("Arguments", e0);
  }

  function try_Arguments()
  {
    try_Expression();
    for (;;)
    {
      lookahead1W(39);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
      if (l1 != 35)                 // ','
      {
        break;
      }
      consumeT(35);                 // ','
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Expression();
    }
  }

  function parse_Member()
  {
    eventHandler.startNonterminal("Member", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(46);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 3587:                    // Identifier '('
        lookahead3W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 4995:                    // Identifier '->'
      case 5123:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 52739                 // Identifier '(' Identifier
     || lk == 54147                 // Identifier '->' Identifier
     || lk == 54275                 // Identifier '.' Identifier
     || lk == 69123                 // Identifier '(' Null
     || lk == 85507                 // Identifier '(' True
     || lk == 101891                // Identifier '(' False
     || lk == 118275                // Identifier '(' Character
     || lk == 134659                // Identifier '(' String
     || lk == 151043                // Identifier '(' Real
     || lk == 167427                // Identifier '(' Comment
     || lk == 200195                // Identifier '(' '!'
     || lk == 232963                // Identifier '(' '#define'
     || lk == 298499                // Identifier '(' '#if'
     || lk == 314883                // Identifier '(' '#ifdef'
     || lk == 331267                // Identifier '(' '#ifndef'
     || lk == 347651                // Identifier '(' '#include'
     || lk == 364035                // Identifier '(' '#undef'
     || lk == 462339                // Identifier '(' '('
     || lk == 544259                // Identifier '(' '++'
     || lk == 609795                // Identifier '(' '--'
     || lk == 724483                // Identifier '(' ';'
     || lk == 921091                // Identifier '(' '['
     || lk == 986627                // Identifier '(' 'auto'
     || lk == 1003011               // Identifier '(' 'break'
     || lk == 1035779               // Identifier '(' 'char'
     || lk == 1052163               // Identifier '(' 'const'
     || lk == 1068547               // Identifier '(' 'continue'
     || lk == 1101315               // Identifier '(' 'do'
     || lk == 1117699               // Identifier '(' 'double'
     || lk == 1150467               // Identifier '(' 'enum'
     || lk == 1166851               // Identifier '(' 'extern'
     || lk == 1183235               // Identifier '(' 'float'
     || lk == 1199619               // Identifier '(' 'for'
     || lk == 1216003               // Identifier '(' 'if'
     || lk == 1232387               // Identifier '(' 'int'
     || lk == 1248771               // Identifier '(' 'long'
     || lk == 1265155               // Identifier '(' 'return'
     || lk == 1281539               // Identifier '(' 'short'
     || lk == 1297923               // Identifier '(' 'signed'
     || lk == 1314307               // Identifier '(' 'sizeof'
     || lk == 1330691               // Identifier '(' 'static'
     || lk == 1347075               // Identifier '(' 'struct'
     || lk == 1363459               // Identifier '(' 'switch'
     || lk == 1379843               // Identifier '(' 'typedef'
     || lk == 1396227               // Identifier '(' 'union'
     || lk == 1412611               // Identifier '(' 'unsigned'
     || lk == 1428995               // Identifier '(' 'void'
     || lk == 1445379               // Identifier '(' 'volatile'
     || lk == 1461763               // Identifier '(' 'while'
     || lk == 1478147               // Identifier '(' '{'
     || lk == 1560067)              // Identifier '(' '~'
    {
      lk = memoized(8, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(15);        // WhiteSpace^token | '(' | '->' | '.'
            if (l1 == 28)           // '('
            {
              break;
            }
            switch (l1)
            {
            case 40:                // '.'
              consumeT(40);         // '.'
              break;
            default:
              consumeT(39);         // '->'
            }
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(28);             // '('
          for (;;)
          {
            lookahead1W(30);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
            if (l1 == 29)           // ')'
            {
              break;
            }
            try_Arguments();
          }
          consumeT(29);             // ')'
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(8, e0, lk);
      }
    }
    switch (lk)
    {
    case -1:
    case 478723:                    // Identifier '(' ')'
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '->' | '.'
        if (l1 == 28)               // '('
        {
          break;
        }
        switch (l1)
        {
        case 40:                    // '.'
          consume(40);              // '.'
          break;
        default:
          consume(39);              // '->'
        }
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      consume(28);                  // '('
      for (;;)
      {
        lookahead1W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        if (l1 == 29)               // ')'
        {
          break;
        }
        whitespace();
        parse_Arguments();
      }
      consume(29);                  // ')'
      break;
    default:
      consume(3);                   // Identifier
      for (;;)
      {
        lookahead1W(46);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        if (l1 != 39                // '->'
         && l1 != 40)               // '.'
        {
          break;
        }
        switch (l1)
        {
        case 40:                    // '.'
          consume(40);              // '.'
          break;
        default:
          consume(39);              // '->'
        }
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consume(3);                 // Identifier
      }
      for (;;)
      {
        lookahead1W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 56:                    // '['
          lookahead2W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          switch (lk)
          {
          case 440:                 // '[' Identifier
            lookahead3W(26);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 2360:                // '[' '#if'
            lookahead3W(38);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
            break;
          case 2744:                // '[' '#include'
            lookahead3W(13);        // String | WhiteSpace^token | '<'
            break;
          case 5688:                // '[' ';'
            lookahead3W(36);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
            break;
          case 7224:                // '[' '['
            lookahead3W(32);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
            break;
          case 11576:               // '[' '{'
            lookahead3W(33);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
            break;
          case 9016:                // '[' 'enum'
          case 10936:               // '[' 'union'
            lookahead3W(12);        // WhiteSpace^token | '{'
            break;
          case 1336:                // '[' Comment
          case 7864:                // '[' 'break'
          case 8376:                // '[' 'continue'
            lookahead3W(16);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 1848:                // '[' '#define'
          case 2488:                // '[' '#ifdef'
          case 2616:                // '[' '#ifndef'
          case 2872:                // '[' '#undef'
            lookahead3W(0);         // Identifier | WhiteSpace^token
            break;
          case 9400:                // '[' 'for'
          case 9528:                // '[' 'if'
          case 10680:               // '[' 'switch'
          case 11448:               // '[' 'while'
            lookahead3W(2);         // WhiteSpace^token | '('
            break;
          case 1592:                // '[' '!'
          case 4280:                // '[' '++'
          case 4792:                // '[' '--'
          case 10296:               // '[' 'sizeof'
          case 12216:               // '[' '~'
            lookahead3W(17);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 3640:                // '[' '('
          case 8632:                // '[' 'do'
          case 9912:                // '[' 'return'
          case 10552:               // '[' 'struct'
          case 10808:               // '[' 'typedef'
            lookahead3W(27);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
            break;
          case 568:                 // '[' Null
          case 696:                 // '[' True
          case 824:                 // '[' False
          case 952:                 // '[' Character
          case 1080:                // '[' String
          case 1208:                // '[' Real
            lookahead3W(23);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ';' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | ']' | '^' | '^=' | '|' |
                                    // '|=' | '||'
            break;
          case 7736:                // '[' 'auto'
          case 8248:                // '[' 'const'
          case 9144:                // '[' 'extern'
          case 10168:               // '[' 'signed'
          case 10424:               // '[' 'static'
          case 11064:               // '[' 'unsigned'
          case 11320:               // '[' 'volatile'
            lookahead3W(18);        // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
            break;
          case 8120:                // '[' 'char'
          case 8760:                // '[' 'double'
          case 9272:                // '[' 'float'
          case 9656:                // '[' 'int'
          case 9784:                // '[' 'long'
          case 10040:               // '[' 'short'
          case 11192:               // '[' 'void'
            lookahead3W(31);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk != 1                 // END
         && lk != 3                 // Identifier
         && lk != 4                 // Null
         && lk != 5                 // True
         && lk != 6                 // False
         && lk != 7                 // Character
         && lk != 8                 // String
         && lk != 9                 // Real
         && lk != 10                // Comment
         && lk != 12                // '!'
         && lk != 13                // '!='
         && lk != 14                // '#define'
         && lk != 15                // '#elif'
         && lk != 16                // '#else'
         && lk != 17                // '#endif'
         && lk != 18                // '#if'
         && lk != 19                // '#ifdef'
         && lk != 20                // '#ifndef'
         && lk != 21                // '#include'
         && lk != 22                // '#undef'
         && lk != 23                // '%'
         && lk != 24                // '%='
         && lk != 25                // '&'
         && lk != 26                // '&&'
         && lk != 27                // '&='
         && lk != 28                // '('
         && lk != 29                // ')'
         && lk != 30                // '*'
         && lk != 31                // '*='
         && lk != 32                // '+'
         && lk != 33                // '++'
         && lk != 34                // '+='
         && lk != 35                // ','
         && lk != 36                // '-'
         && lk != 37                // '--'
         && lk != 38                // '-='
         && lk != 41                // '/'
         && lk != 42                // '/='
         && lk != 43                // ':'
         && lk != 44                // ';'
         && lk != 45                // '<'
         && lk != 46                // '<<'
         && lk != 47                // '<<='
         && lk != 48                // '<='
         && lk != 49                // '='
         && lk != 50                // '=='
         && lk != 51                // '>'
         && lk != 52                // '>='
         && lk != 53                // '>>'
         && lk != 54                // '>>='
         && lk != 55                // '?'
         && lk != 57                // ']'
         && lk != 58                // '^'
         && lk != 59                // '^='
         && lk != 60                // 'auto'
         && lk != 61                // 'break'
         && lk != 62                // 'case'
         && lk != 63                // 'char'
         && lk != 64                // 'const'
         && lk != 65                // 'continue'
         && lk != 66                // 'default'
         && lk != 67                // 'do'
         && lk != 68                // 'double'
         && lk != 69                // 'else'
         && lk != 70                // 'enum'
         && lk != 71                // 'extern'
         && lk != 72                // 'float'
         && lk != 73                // 'for'
         && lk != 74                // 'if'
         && lk != 75                // 'int'
         && lk != 76                // 'long'
         && lk != 77                // 'return'
         && lk != 78                // 'short'
         && lk != 79                // 'signed'
         && lk != 80                // 'sizeof'
         && lk != 81                // 'static'
         && lk != 82                // 'struct'
         && lk != 83                // 'switch'
         && lk != 84                // 'typedef'
         && lk != 85                // 'union'
         && lk != 86                // 'unsigned'
         && lk != 87                // 'void'
         && lk != 88                // 'volatile'
         && lk != 89                // 'while'
         && lk != 90                // '{'
         && lk != 91                // '|'
         && lk != 92                // '|='
         && lk != 93                // '||'
         && lk != 94                // '}'
         && lk != 95                // '~'
         && lk != 7352              // '[' ']'
         && lk != 54840             // '[' ';' Identifier
         && lk != 71224             // '[' ';' Null
         && lk != 87608             // '[' ';' True
         && lk != 103992            // '[' ';' False
         && lk != 120376            // '[' ';' Character
         && lk != 136760            // '[' ';' String
         && lk != 153144            // '[' ';' Real
         && lk != 169528            // '[' ';' Comment
         && lk != 202296            // '[' ';' '!'
         && lk != 235064            // '[' ';' '#define'
         && lk != 300600            // '[' ';' '#if'
         && lk != 316984            // '[' ';' '#ifdef'
         && lk != 333368            // '[' ';' '#ifndef'
         && lk != 349752            // '[' ';' '#include'
         && lk != 366136            // '[' ';' '#undef'
         && lk != 464440            // '[' ';' '('
         && lk != 546360            // '[' ';' '++'
         && lk != 611896            // '[' ';' '--'
         && lk != 721336            // '[' Identifier ';'
         && lk != 721464            // '[' Null ';'
         && lk != 721592            // '[' True ';'
         && lk != 721720            // '[' False ';'
         && lk != 721848            // '[' Character ';'
         && lk != 721976            // '[' String ';'
         && lk != 722104            // '[' Real ';'
         && lk != 722232            // '[' Comment ';'
         && lk != 726584            // '[' ';' ';'
         && lk != 728760            // '[' 'break' ';'
         && lk != 729272            // '[' 'continue' ';'
         && lk != 923192            // '[' ';' '['
         && lk != 988728            // '[' ';' 'auto'
         && lk != 1005112           // '[' ';' 'break'
         && lk != 1037880           // '[' ';' 'char'
         && lk != 1054264           // '[' ';' 'const'
         && lk != 1070648           // '[' ';' 'continue'
         && lk != 1103416           // '[' ';' 'do'
         && lk != 1119800           // '[' ';' 'double'
         && lk != 1152568           // '[' ';' 'enum'
         && lk != 1168952           // '[' ';' 'extern'
         && lk != 1185336           // '[' ';' 'float'
         && lk != 1201720           // '[' ';' 'for'
         && lk != 1218104           // '[' ';' 'if'
         && lk != 1234488           // '[' ';' 'int'
         && lk != 1250872           // '[' ';' 'long'
         && lk != 1267256           // '[' ';' 'return'
         && lk != 1283640           // '[' ';' 'short'
         && lk != 1300024           // '[' ';' 'signed'
         && lk != 1316408           // '[' ';' 'sizeof'
         && lk != 1332792           // '[' ';' 'static'
         && lk != 1349176           // '[' ';' 'struct'
         && lk != 1365560           // '[' ';' 'switch'
         && lk != 1381944           // '[' ';' 'typedef'
         && lk != 1398328           // '[' ';' 'union'
         && lk != 1414712           // '[' ';' 'unsigned'
         && lk != 1431096           // '[' ';' 'void'
         && lk != 1447480           // '[' ';' 'volatile'
         && lk != 1463864           // '[' ';' 'while'
         && lk != 1480248           // '[' ';' '{'
         && lk != 1562168)          // '[' ';' '~'
        {
          lk = memoized(9, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(56);         // '['
              lookahead1W(27);      // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
              try_Arguments();
              consumeT(57);         // ']'
              lk = -1;
            }
            catch (p1B)
            {
              lk = -2;
            }
            b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
            b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
            b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
            b3 = b3B; e3 = e3B; end = e3B; }}}
            memoize(9, e0, lk);
          }
        }
        if (lk != -1)
        {
          break;
        }
        consume(56);                // '['
        lookahead1W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        whitespace();
        parse_Arguments();
        consume(57);                // ']'
      }
    }
    eventHandler.endNonterminal("Member", e0);
  }

  function try_Member()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(46);              // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
      switch (lk)
      {
      case 3587:                    // Identifier '('
        lookahead3W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        break;
      case 4995:                    // Identifier '->'
      case 5123:                    // Identifier '.'
        lookahead3W(0);             // Identifier | WhiteSpace^token
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 52739                 // Identifier '(' Identifier
     || lk == 54147                 // Identifier '->' Identifier
     || lk == 54275                 // Identifier '.' Identifier
     || lk == 69123                 // Identifier '(' Null
     || lk == 85507                 // Identifier '(' True
     || lk == 101891                // Identifier '(' False
     || lk == 118275                // Identifier '(' Character
     || lk == 134659                // Identifier '(' String
     || lk == 151043                // Identifier '(' Real
     || lk == 167427                // Identifier '(' Comment
     || lk == 200195                // Identifier '(' '!'
     || lk == 232963                // Identifier '(' '#define'
     || lk == 298499                // Identifier '(' '#if'
     || lk == 314883                // Identifier '(' '#ifdef'
     || lk == 331267                // Identifier '(' '#ifndef'
     || lk == 347651                // Identifier '(' '#include'
     || lk == 364035                // Identifier '(' '#undef'
     || lk == 462339                // Identifier '(' '('
     || lk == 544259                // Identifier '(' '++'
     || lk == 609795                // Identifier '(' '--'
     || lk == 724483                // Identifier '(' ';'
     || lk == 921091                // Identifier '(' '['
     || lk == 986627                // Identifier '(' 'auto'
     || lk == 1003011               // Identifier '(' 'break'
     || lk == 1035779               // Identifier '(' 'char'
     || lk == 1052163               // Identifier '(' 'const'
     || lk == 1068547               // Identifier '(' 'continue'
     || lk == 1101315               // Identifier '(' 'do'
     || lk == 1117699               // Identifier '(' 'double'
     || lk == 1150467               // Identifier '(' 'enum'
     || lk == 1166851               // Identifier '(' 'extern'
     || lk == 1183235               // Identifier '(' 'float'
     || lk == 1199619               // Identifier '(' 'for'
     || lk == 1216003               // Identifier '(' 'if'
     || lk == 1232387               // Identifier '(' 'int'
     || lk == 1248771               // Identifier '(' 'long'
     || lk == 1265155               // Identifier '(' 'return'
     || lk == 1281539               // Identifier '(' 'short'
     || lk == 1297923               // Identifier '(' 'signed'
     || lk == 1314307               // Identifier '(' 'sizeof'
     || lk == 1330691               // Identifier '(' 'static'
     || lk == 1347075               // Identifier '(' 'struct'
     || lk == 1363459               // Identifier '(' 'switch'
     || lk == 1379843               // Identifier '(' 'typedef'
     || lk == 1396227               // Identifier '(' 'union'
     || lk == 1412611               // Identifier '(' 'unsigned'
     || lk == 1428995               // Identifier '(' 'void'
     || lk == 1445379               // Identifier '(' 'volatile'
     || lk == 1461763               // Identifier '(' 'while'
     || lk == 1478147               // Identifier '(' '{'
     || lk == 1560067)              // Identifier '(' '~'
    {
      lk = memoized(8, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(3);              // Identifier
          for (;;)
          {
            lookahead1W(15);        // WhiteSpace^token | '(' | '->' | '.'
            if (l1 == 28)           // '('
            {
              break;
            }
            switch (l1)
            {
            case 40:                // '.'
              consumeT(40);         // '.'
              break;
            default:
              consumeT(39);         // '->'
            }
            lookahead1W(0);         // Identifier | WhiteSpace^token
            consumeT(3);            // Identifier
          }
          consumeT(28);             // '('
          for (;;)
          {
            lookahead1W(30);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
            if (l1 == 29)           // ')'
            {
              break;
            }
            try_Arguments();
          }
          consumeT(29);             // ')'
          memoize(8, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(8, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -1:
    case 478723:                    // Identifier '(' ')'
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(15);            // WhiteSpace^token | '(' | '->' | '.'
        if (l1 == 28)               // '('
        {
          break;
        }
        switch (l1)
        {
        case 40:                    // '.'
          consumeT(40);             // '.'
          break;
        default:
          consumeT(39);             // '->'
        }
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      consumeT(28);                 // '('
      for (;;)
      {
        lookahead1W(30);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
        if (l1 == 29)               // ')'
        {
          break;
        }
        try_Arguments();
      }
      consumeT(29);                 // ')'
      break;
    case -3:
      break;
    default:
      consumeT(3);                  // Identifier
      for (;;)
      {
        lookahead1W(46);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '->' | '.' | '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' |
                                    // '>' | '>=' | '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' |
                                    // 'case' | 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' |
                                    // 'enum' | 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' |
                                    // 'short' | 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' |
                                    // 'union' | 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' |
                                    // '}' | '~'
        if (l1 != 39                // '->'
         && l1 != 40)               // '.'
        {
          break;
        }
        switch (l1)
        {
        case 40:                    // '.'
          consumeT(40);             // '.'
          break;
        default:
          consumeT(39);             // '->'
        }
        lookahead1W(0);             // Identifier | WhiteSpace^token
        consumeT(3);                // Identifier
      }
      for (;;)
      {
        lookahead1W(45);            // END | Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '!=' | '#define' | '#elif' | '#else' | '#endif' |
                                    // '#if' | '#ifdef' | '#ifndef' | '#include' | '#undef' | '%' | '%=' | '&' | '&&' |
                                    // '&=' | '(' | ')' | '*' | '*=' | '+' | '++' | '+=' | ',' | '-' | '--' | '-=' |
                                    // '/' | '/=' | ':' | ';' | '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' |
                                    // '>>' | '>>=' | '?' | '[' | ']' | '^' | '^=' | 'auto' | 'break' | 'case' |
                                    // 'char' | 'const' | 'continue' | 'default' | 'do' | 'double' | 'else' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '|' | '|=' | '||' | '}' | '~'
        switch (l1)
        {
        case 56:                    // '['
          lookahead2W(32);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
          switch (lk)
          {
          case 440:                 // '[' Identifier
            lookahead3W(26);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ';' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // ']' | '^' | '^=' | '|' | '|=' | '||'
            break;
          case 2360:                // '[' '#if'
            lookahead3W(38);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
            break;
          case 2744:                // '[' '#include'
            lookahead3W(13);        // String | WhiteSpace^token | '<'
            break;
          case 5688:                // '[' ';'
            lookahead3W(36);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
            break;
          case 7224:                // '[' '['
            lookahead3W(32);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
            break;
          case 11576:               // '[' '{'
            lookahead3W(33);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '}' | '~'
            break;
          case 9016:                // '[' 'enum'
          case 10936:               // '[' 'union'
            lookahead3W(12);        // WhiteSpace^token | '{'
            break;
          case 1336:                // '[' Comment
          case 7864:                // '[' 'break'
          case 8376:                // '[' 'continue'
            lookahead3W(16);        // WhiteSpace^token | ',' | ';' | ']'
            break;
          case 1848:                // '[' '#define'
          case 2488:                // '[' '#ifdef'
          case 2616:                // '[' '#ifndef'
          case 2872:                // '[' '#undef'
            lookahead3W(0);         // Identifier | WhiteSpace^token
            break;
          case 9400:                // '[' 'for'
          case 9528:                // '[' 'if'
          case 10680:               // '[' 'switch'
          case 11448:               // '[' 'while'
            lookahead3W(2);         // WhiteSpace^token | '('
            break;
          case 1592:                // '[' '!'
          case 4280:                // '[' '++'
          case 4792:                // '[' '--'
          case 10296:               // '[' 'sizeof'
          case 12216:               // '[' '~'
            lookahead3W(17);        // Identifier | Null | True | False | Character | String | Real | WhiteSpace^token |
                                    // '(' | '[' | '{'
            break;
          case 3640:                // '[' '('
          case 8632:                // '[' 'do'
          case 9912:                // '[' 'return'
          case 10552:               // '[' 'struct'
          case 10808:               // '[' 'typedef'
            lookahead3W(27);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
            break;
          case 568:                 // '[' Null
          case 696:                 // '[' True
          case 824:                 // '[' False
          case 952:                 // '[' Character
          case 1080:                // '[' String
          case 1208:                // '[' Real
            lookahead3W(23);        // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ';' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | ']' | '^' | '^=' | '|' |
                                    // '|=' | '||'
            break;
          case 7736:                // '[' 'auto'
          case 8248:                // '[' 'const'
          case 9144:                // '[' 'extern'
          case 10168:               // '[' 'signed'
          case 10424:               // '[' 'static'
          case 11064:               // '[' 'unsigned'
          case 11320:               // '[' 'volatile'
            lookahead3W(18);        // WhiteSpace^token | 'auto' | 'char' | 'const' | 'double' | 'extern' | 'float' |
                                    // 'int' | 'long' | 'short' | 'signed' | 'static' | 'unsigned' | 'void' | 'volatile'
            break;
          case 8120:                // '[' 'char'
          case 8760:                // '[' 'double'
          case 9272:                // '[' 'float'
          case 9656:                // '[' 'int'
          case 9784:                // '[' 'long'
          case 10040:               // '[' 'short'
          case 11192:               // '[' 'void'
            lookahead3W(31);        // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '*' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
            break;
          }
          break;
        default:
          lk = l1;
        }
        if (lk != 1                 // END
         && lk != 3                 // Identifier
         && lk != 4                 // Null
         && lk != 5                 // True
         && lk != 6                 // False
         && lk != 7                 // Character
         && lk != 8                 // String
         && lk != 9                 // Real
         && lk != 10                // Comment
         && lk != 12                // '!'
         && lk != 13                // '!='
         && lk != 14                // '#define'
         && lk != 15                // '#elif'
         && lk != 16                // '#else'
         && lk != 17                // '#endif'
         && lk != 18                // '#if'
         && lk != 19                // '#ifdef'
         && lk != 20                // '#ifndef'
         && lk != 21                // '#include'
         && lk != 22                // '#undef'
         && lk != 23                // '%'
         && lk != 24                // '%='
         && lk != 25                // '&'
         && lk != 26                // '&&'
         && lk != 27                // '&='
         && lk != 28                // '('
         && lk != 29                // ')'
         && lk != 30                // '*'
         && lk != 31                // '*='
         && lk != 32                // '+'
         && lk != 33                // '++'
         && lk != 34                // '+='
         && lk != 35                // ','
         && lk != 36                // '-'
         && lk != 37                // '--'
         && lk != 38                // '-='
         && lk != 41                // '/'
         && lk != 42                // '/='
         && lk != 43                // ':'
         && lk != 44                // ';'
         && lk != 45                // '<'
         && lk != 46                // '<<'
         && lk != 47                // '<<='
         && lk != 48                // '<='
         && lk != 49                // '='
         && lk != 50                // '=='
         && lk != 51                // '>'
         && lk != 52                // '>='
         && lk != 53                // '>>'
         && lk != 54                // '>>='
         && lk != 55                // '?'
         && lk != 57                // ']'
         && lk != 58                // '^'
         && lk != 59                // '^='
         && lk != 60                // 'auto'
         && lk != 61                // 'break'
         && lk != 62                // 'case'
         && lk != 63                // 'char'
         && lk != 64                // 'const'
         && lk != 65                // 'continue'
         && lk != 66                // 'default'
         && lk != 67                // 'do'
         && lk != 68                // 'double'
         && lk != 69                // 'else'
         && lk != 70                // 'enum'
         && lk != 71                // 'extern'
         && lk != 72                // 'float'
         && lk != 73                // 'for'
         && lk != 74                // 'if'
         && lk != 75                // 'int'
         && lk != 76                // 'long'
         && lk != 77                // 'return'
         && lk != 78                // 'short'
         && lk != 79                // 'signed'
         && lk != 80                // 'sizeof'
         && lk != 81                // 'static'
         && lk != 82                // 'struct'
         && lk != 83                // 'switch'
         && lk != 84                // 'typedef'
         && lk != 85                // 'union'
         && lk != 86                // 'unsigned'
         && lk != 87                // 'void'
         && lk != 88                // 'volatile'
         && lk != 89                // 'while'
         && lk != 90                // '{'
         && lk != 91                // '|'
         && lk != 92                // '|='
         && lk != 93                // '||'
         && lk != 94                // '}'
         && lk != 95                // '~'
         && lk != 7352              // '[' ']'
         && lk != 54840             // '[' ';' Identifier
         && lk != 71224             // '[' ';' Null
         && lk != 87608             // '[' ';' True
         && lk != 103992            // '[' ';' False
         && lk != 120376            // '[' ';' Character
         && lk != 136760            // '[' ';' String
         && lk != 153144            // '[' ';' Real
         && lk != 169528            // '[' ';' Comment
         && lk != 202296            // '[' ';' '!'
         && lk != 235064            // '[' ';' '#define'
         && lk != 300600            // '[' ';' '#if'
         && lk != 316984            // '[' ';' '#ifdef'
         && lk != 333368            // '[' ';' '#ifndef'
         && lk != 349752            // '[' ';' '#include'
         && lk != 366136            // '[' ';' '#undef'
         && lk != 464440            // '[' ';' '('
         && lk != 546360            // '[' ';' '++'
         && lk != 611896            // '[' ';' '--'
         && lk != 721336            // '[' Identifier ';'
         && lk != 721464            // '[' Null ';'
         && lk != 721592            // '[' True ';'
         && lk != 721720            // '[' False ';'
         && lk != 721848            // '[' Character ';'
         && lk != 721976            // '[' String ';'
         && lk != 722104            // '[' Real ';'
         && lk != 722232            // '[' Comment ';'
         && lk != 726584            // '[' ';' ';'
         && lk != 728760            // '[' 'break' ';'
         && lk != 729272            // '[' 'continue' ';'
         && lk != 923192            // '[' ';' '['
         && lk != 988728            // '[' ';' 'auto'
         && lk != 1005112           // '[' ';' 'break'
         && lk != 1037880           // '[' ';' 'char'
         && lk != 1054264           // '[' ';' 'const'
         && lk != 1070648           // '[' ';' 'continue'
         && lk != 1103416           // '[' ';' 'do'
         && lk != 1119800           // '[' ';' 'double'
         && lk != 1152568           // '[' ';' 'enum'
         && lk != 1168952           // '[' ';' 'extern'
         && lk != 1185336           // '[' ';' 'float'
         && lk != 1201720           // '[' ';' 'for'
         && lk != 1218104           // '[' ';' 'if'
         && lk != 1234488           // '[' ';' 'int'
         && lk != 1250872           // '[' ';' 'long'
         && lk != 1267256           // '[' ';' 'return'
         && lk != 1283640           // '[' ';' 'short'
         && lk != 1300024           // '[' ';' 'signed'
         && lk != 1316408           // '[' ';' 'sizeof'
         && lk != 1332792           // '[' ';' 'static'
         && lk != 1349176           // '[' ';' 'struct'
         && lk != 1365560           // '[' ';' 'switch'
         && lk != 1381944           // '[' ';' 'typedef'
         && lk != 1398328           // '[' ';' 'union'
         && lk != 1414712           // '[' ';' 'unsigned'
         && lk != 1431096           // '[' ';' 'void'
         && lk != 1447480           // '[' ';' 'volatile'
         && lk != 1463864           // '[' ';' 'while'
         && lk != 1480248           // '[' ';' '{'
         && lk != 1562168)          // '[' ';' '~'
        {
          lk = memoized(9, e0);
          if (lk == 0)
          {
            var b0B = b0; var e0B = e0; var l1B = l1;
            var b1B = b1; var e1B = e1; var l2B = l2;
            var b2B = b2; var e2B = e2; var l3B = l3;
            var b3B = b3; var e3B = e3;
            try
            {
              consumeT(56);         // '['
              lookahead1W(27);      // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
              try_Arguments();
              consumeT(57);         // ']'
              memoize(9, e0B, -1);
              continue;
            }
            catch (p1B)
            {
              b0 = b0B; e0 = e0B; l1 = l1B; if (l1 == 0) {end = e0B;} else {
              b1 = b1B; e1 = e1B; l2 = l2B; if (l2 == 0) {end = e1B;} else {
              b2 = b2B; e2 = e2B; l3 = l3B; if (l3 == 0) {end = e2B;} else {
              b3 = b3B; e3 = e3B; end = e3B; }}}
              memoize(9, e0B, -2);
              break;
            }
          }
        }
        if (lk != -1)
        {
          break;
        }
        consumeT(56);               // '['
        lookahead1W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        try_Arguments();
        consumeT(57);               // ']'
      }
    }
  }

  function parse_Array()
  {
    eventHandler.startNonterminal("Array", e0);
    consume(90);                    // '{'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Element();
    for (;;)
    {
      lookahead1W(14);              // WhiteSpace^token | ',' | '}'
      if (l1 != 35)                 // ','
      {
        break;
      }
      consume(35);                  // ','
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Element();
    }
    consume(94);                    // '}'
    eventHandler.endNonterminal("Array", e0);
  }

  function try_Array()
  {
    consumeT(90);                   // '{'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Element();
    for (;;)
    {
      lookahead1W(14);              // WhiteSpace^token | ',' | '}'
      if (l1 != 35)                 // ','
      {
        break;
      }
      consumeT(35);                 // ','
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Element();
    }
    consumeT(94);                   // '}'
  }

  function parse_Matrix()
  {
    eventHandler.startNonterminal("Matrix", e0);
    consume(56);                    // '['
    lookahead1W(32);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 44:                        // ';'
      lookahead2W(36);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
      switch (lk)
      {
      case 5676:                    // ';' ';'
        lookahead3W(36);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 726572)               // ';' ';' ';'
    {
      lk = memoized(10, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Row();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(10, e0, lk);
      }
    }
    if (lk != -2
     && lk != 57                    // ']'
     && lk != 428                   // ';' Identifier
     && lk != 556                   // ';' Null
     && lk != 684                   // ';' True
     && lk != 812                   // ';' False
     && lk != 940                   // ';' Character
     && lk != 1068                  // ';' String
     && lk != 1196                  // ';' Real
     && lk != 1324                  // ';' Comment
     && lk != 1580                  // ';' '!'
     && lk != 1836                  // ';' '#define'
     && lk != 2348                  // ';' '#if'
     && lk != 2476                  // ';' '#ifdef'
     && lk != 2604                  // ';' '#ifndef'
     && lk != 2732                  // ';' '#include'
     && lk != 2860                  // ';' '#undef'
     && lk != 3628                  // ';' '('
     && lk != 4268                  // ';' '++'
     && lk != 4780                  // ';' '--'
     && lk != 7212                  // ';' '['
     && lk != 7724                  // ';' 'auto'
     && lk != 7852                  // ';' 'break'
     && lk != 8108                  // ';' 'char'
     && lk != 8236                  // ';' 'const'
     && lk != 8364                  // ';' 'continue'
     && lk != 8620                  // ';' 'do'
     && lk != 8748                  // ';' 'double'
     && lk != 9004                  // ';' 'enum'
     && lk != 9132                  // ';' 'extern'
     && lk != 9260                  // ';' 'float'
     && lk != 9388                  // ';' 'for'
     && lk != 9516                  // ';' 'if'
     && lk != 9644                  // ';' 'int'
     && lk != 9772                  // ';' 'long'
     && lk != 9900                  // ';' 'return'
     && lk != 10028                 // ';' 'short'
     && lk != 10156                 // ';' 'signed'
     && lk != 10284                 // ';' 'sizeof'
     && lk != 10412                 // ';' 'static'
     && lk != 10540                 // ';' 'struct'
     && lk != 10668                 // ';' 'switch'
     && lk != 10796                 // ';' 'typedef'
     && lk != 10924                 // ';' 'union'
     && lk != 11052                 // ';' 'unsigned'
     && lk != 11180                 // ';' 'void'
     && lk != 11308                 // ';' 'volatile'
     && lk != 11436                 // ';' 'while'
     && lk != 11564                 // ';' '{'
     && lk != 12204                 // ';' '~'
     && lk != 579116                // ';' ';' ','
     && lk != 939564)               // ';' ';' ']'
    {
      whitespace();
      parse_Row();
    }
    for (;;)
    {
      if (l1 != 44)                 // ';'
      {
        break;
      }
      consume(44);                  // ';'
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Row();
    }
    consume(57);                    // ']'
    eventHandler.endNonterminal("Matrix", e0);
  }

  function try_Matrix()
  {
    consumeT(56);                   // '['
    lookahead1W(32);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | ']' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
    switch (l1)
    {
    case 44:                        // ';'
      lookahead2W(36);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
      switch (lk)
      {
      case 5676:                    // ';' ';'
        lookahead3W(36);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | ',' | '--' | ';' | '[' | ']' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 726572)               // ';' ';' ';'
    {
      lk = memoized(10, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          try_Row();
          memoize(10, e0A, -1);
        }
        catch (p1A)
        {
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(10, e0A, -2);
        }
        lk = -2;
      }
    }
    if (lk != -2
     && lk != 57                    // ']'
     && lk != 428                   // ';' Identifier
     && lk != 556                   // ';' Null
     && lk != 684                   // ';' True
     && lk != 812                   // ';' False
     && lk != 940                   // ';' Character
     && lk != 1068                  // ';' String
     && lk != 1196                  // ';' Real
     && lk != 1324                  // ';' Comment
     && lk != 1580                  // ';' '!'
     && lk != 1836                  // ';' '#define'
     && lk != 2348                  // ';' '#if'
     && lk != 2476                  // ';' '#ifdef'
     && lk != 2604                  // ';' '#ifndef'
     && lk != 2732                  // ';' '#include'
     && lk != 2860                  // ';' '#undef'
     && lk != 3628                  // ';' '('
     && lk != 4268                  // ';' '++'
     && lk != 4780                  // ';' '--'
     && lk != 7212                  // ';' '['
     && lk != 7724                  // ';' 'auto'
     && lk != 7852                  // ';' 'break'
     && lk != 8108                  // ';' 'char'
     && lk != 8236                  // ';' 'const'
     && lk != 8364                  // ';' 'continue'
     && lk != 8620                  // ';' 'do'
     && lk != 8748                  // ';' 'double'
     && lk != 9004                  // ';' 'enum'
     && lk != 9132                  // ';' 'extern'
     && lk != 9260                  // ';' 'float'
     && lk != 9388                  // ';' 'for'
     && lk != 9516                  // ';' 'if'
     && lk != 9644                  // ';' 'int'
     && lk != 9772                  // ';' 'long'
     && lk != 9900                  // ';' 'return'
     && lk != 10028                 // ';' 'short'
     && lk != 10156                 // ';' 'signed'
     && lk != 10284                 // ';' 'sizeof'
     && lk != 10412                 // ';' 'static'
     && lk != 10540                 // ';' 'struct'
     && lk != 10668                 // ';' 'switch'
     && lk != 10796                 // ';' 'typedef'
     && lk != 10924                 // ';' 'union'
     && lk != 11052                 // ';' 'unsigned'
     && lk != 11180                 // ';' 'void'
     && lk != 11308                 // ';' 'volatile'
     && lk != 11436                 // ';' 'while'
     && lk != 11564                 // ';' '{'
     && lk != 12204                 // ';' '~'
     && lk != 579116                // ';' ';' ','
     && lk != 939564)               // ';' ';' ']'
    {
      try_Row();
    }
    for (;;)
    {
      if (l1 != 44)                 // ';'
      {
        break;
      }
      consumeT(44);                 // ';'
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Row();
    }
    consumeT(57);                   // ']'
  }

  function parse_Element()
  {
    eventHandler.startNonterminal("Element", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(25);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ':' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
      break;
    case 8:                         // String
      lookahead2W(22);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' |
                                    // '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 5507                  // Identifier ':'
     || lk == 5512)                 // String ':'
    {
      whitespace();
      parse_Key();
      lookahead1W(6);               // WhiteSpace^token | ':'
      consume(43);                  // ':'
    }
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    eventHandler.endNonterminal("Element", e0);
  }

  function try_Element()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      lookahead2W(25);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '(' | '*' | '*=' |
                                    // '+' | '++' | '+=' | ',' | '-' | '--' | '-=' | '->' | '.' | '/' | '/=' | ':' |
                                    // '<' | '<<' | '<<=' | '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '[' |
                                    // '^' | '^=' | '|' | '|=' | '||' | '}'
      break;
    case 8:                         // String
      lookahead2W(22);              // WhiteSpace^token | '!=' | '%' | '%=' | '&' | '&&' | '&=' | '*' | '*=' | '+' |
                                    // '++' | '+=' | ',' | '-' | '--' | '-=' | '/' | '/=' | ':' | '<' | '<<' | '<<=' |
                                    // '<=' | '=' | '==' | '>' | '>=' | '>>' | '>>=' | '?' | '^' | '^=' | '|' | '|=' |
                                    // '||' | '}'
      break;
    default:
      lk = l1;
    }
    if (lk == 5507                  // Identifier ':'
     || lk == 5512)                 // String ':'
    {
      try_Key();
      lookahead1W(6);               // WhiteSpace^token | ':'
      consumeT(43);                 // ':'
    }
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
  }

  function parse_Key()
  {
    eventHandler.startNonterminal("Key", e0);
    switch (l1)
    {
    case 3:                         // Identifier
      consume(3);                   // Identifier
      break;
    default:
      consume(8);                   // String
    }
    eventHandler.endNonterminal("Key", e0);
  }

  function try_Key()
  {
    switch (l1)
    {
    case 3:                         // Identifier
      consumeT(3);                  // Identifier
      break;
    default:
      consumeT(8);                  // String
    }
  }

  function parse_Row()
  {
    eventHandler.startNonterminal("Row", e0);
    parse_Column();
    for (;;)
    {
      lookahead1W(16);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 35)                 // ','
      {
        break;
      }
      consume(35);                  // ','
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Column();
    }
    eventHandler.endNonterminal("Row", e0);
  }

  function try_Row()
  {
    try_Column();
    for (;;)
    {
      lookahead1W(16);              // WhiteSpace^token | ',' | ';' | ']'
      if (l1 != 35)                 // ','
      {
        break;
      }
      consumeT(35);                 // ','
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Column();
    }
  }

  function parse_Column()
  {
    eventHandler.startNonterminal("Column", e0);
    parse_Expression();
    eventHandler.endNonterminal("Column", e0);
  }

  function try_Column()
  {
    try_Expression();
  }

  function parse_ParenthesizedExpression()
  {
    eventHandler.startNonterminal("ParenthesizedExpression", e0);
    consume(28);                    // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consume(29);                    // ')'
    eventHandler.endNonterminal("ParenthesizedExpression", e0);
  }

  function try_ParenthesizedExpression()
  {
    consumeT(28);                   // '('
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    lookahead1W(3);                 // WhiteSpace^token | ')'
    consumeT(29);                   // ')'
  }

  function parse_Value()
  {
    eventHandler.startNonterminal("Value", e0);
    switch (l1)
    {
    case 90:                        // '{'
      parse_Array();
      break;
    case 7:                         // Character
      consume(7);                   // Character
      break;
    case 6:                         // False
      consume(6);                   // False
      break;
    case 56:                        // '['
      parse_Matrix();
      break;
    case 4:                         // Null
      consume(4);                   // Null
      break;
    case 9:                         // Real
      consume(9);                   // Real
      break;
    case 8:                         // String
      consume(8);                   // String
      break;
    default:
      consume(5);                   // True
    }
    eventHandler.endNonterminal("Value", e0);
  }

  function try_Value()
  {
    switch (l1)
    {
    case 90:                        // '{'
      try_Array();
      break;
    case 7:                         // Character
      consumeT(7);                  // Character
      break;
    case 6:                         // False
      consumeT(6);                  // False
      break;
    case 56:                        // '['
      try_Matrix();
      break;
    case 4:                         // Null
      consumeT(4);                  // Null
      break;
    case 9:                         // Real
      consumeT(9);                  // Real
      break;
    case 8:                         // String
      consumeT(8);                  // String
      break;
    default:
      consumeT(5);                  // True
    }
  }

  function parse_PreprocessorDirective()
  {
    eventHandler.startNonterminal("PreprocessorDirective", e0);
    switch (l1)
    {
    case 14:                        // '#define'
      parse_DefineDirective();
      break;
    case 22:                        // '#undef'
      parse_UndefDirective();
      break;
    case 21:                        // '#include'
      parse_IncludeDirective();
      break;
    default:
      parse_IfDirectiveStatement();
    }
    eventHandler.endNonterminal("PreprocessorDirective", e0);
  }

  function try_PreprocessorDirective()
  {
    switch (l1)
    {
    case 14:                        // '#define'
      try_DefineDirective();
      break;
    case 22:                        // '#undef'
      try_UndefDirective();
      break;
    case 21:                        // '#include'
      try_IncludeDirective();
      break;
    default:
      try_IfDirectiveStatement();
    }
  }

  function parse_DefineDirective()
  {
    eventHandler.startNonterminal("DefineDirective", e0);
    switch (l1)
    {
    case 14:                        // '#define'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 398:                     // '#define' Identifier
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 459150)               // '#define' Identifier '('
    {
      lk = memoized(11, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(14);             // '#define'
          lookahead1W(0);           // Identifier | WhiteSpace^token
          consumeT(3);              // Identifier
          lookahead1W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          try_Expression();
          lk = -1;
        }
        catch (p1A)
        {
          lk = -2;
        }
        b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
        b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
        b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
        b3 = b3A; e3 = e3A; end = e3A; }}}
        memoize(11, e0, lk);
      }
    }
    switch (lk)
    {
    case -2:
      consume(14);                  // '#define'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consume(28);                  // '('
      lookahead1W(30);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      if (l1 != 29)                 // ')'
      {
        whitespace();
        parse_Arguments();
      }
      consume(29);                  // ')'
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Expression();
      break;
    default:
      consume(14);                  // '#define'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consume(3);                   // Identifier
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("DefineDirective", e0);
  }

  function try_DefineDirective()
  {
    switch (l1)
    {
    case 14:                        // '#define'
      lookahead2W(0);               // Identifier | WhiteSpace^token
      switch (lk)
      {
      case 398:                     // '#define' Identifier
        lookahead3W(27);            // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
        break;
      }
      break;
    default:
      lk = l1;
    }
    if (lk == 459150)               // '#define' Identifier '('
    {
      lk = memoized(11, e0);
      if (lk == 0)
      {
        var b0A = b0; var e0A = e0; var l1A = l1;
        var b1A = b1; var e1A = e1; var l2A = l2;
        var b2A = b2; var e2A = e2; var l3A = l3;
        var b3A = b3; var e3A = e3;
        try
        {
          consumeT(14);             // '#define'
          lookahead1W(0);           // Identifier | WhiteSpace^token
          consumeT(3);              // Identifier
          lookahead1W(27);          // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
          try_Expression();
          memoize(11, e0A, -1);
          lk = -3;
        }
        catch (p1A)
        {
          lk = -2;
          b0 = b0A; e0 = e0A; l1 = l1A; if (l1 == 0) {end = e0A;} else {
          b1 = b1A; e1 = e1A; l2 = l2A; if (l2 == 0) {end = e1A;} else {
          b2 = b2A; e2 = e2A; l3 = l3A; if (l3 == 0) {end = e2A;} else {
          b3 = b3A; e3 = e3A; end = e3A; }}}
          memoize(11, e0A, -2);
        }
      }
    }
    switch (lk)
    {
    case -2:
      consumeT(14);                 // '#define'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
      lookahead1W(2);               // WhiteSpace^token | '('
      consumeT(28);                 // '('
      lookahead1W(30);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | ')' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' |
                                    // 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' |
                                    // 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' |
                                    // 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' |
                                    // 'while' | '{' | '~'
      if (l1 != 29)                 // ')'
      {
        try_Arguments();
      }
      consumeT(29);                 // ')'
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Expression();
      break;
    case -3:
      break;
    default:
      consumeT(14);                 // '#define'
      lookahead1W(0);               // Identifier | WhiteSpace^token
      consumeT(3);                  // Identifier
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Expression();
    }
  }

  function parse_UndefDirective()
  {
    eventHandler.startNonterminal("UndefDirective", e0);
    consume(22);                    // '#undef'
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consume(3);                     // Identifier
    eventHandler.endNonterminal("UndefDirective", e0);
  }

  function try_UndefDirective()
  {
    consumeT(22);                   // '#undef'
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consumeT(3);                    // Identifier
  }

  function parse_IfDirectiveStatement()
  {
    eventHandler.startNonterminal("IfDirectiveStatement", e0);
    switch (l1)
    {
    case 18:                        // '#if'
      parse_IfDirective();
      break;
    case 19:                        // '#ifdef'
      parse_IfdefDirective();
      break;
    default:
      parse_IfndefDirective();
    }
    for (;;)
    {
      if (l1 != 15)                 // '#elif'
      {
        break;
      }
      whitespace();
      parse_ElifDirective();
    }
    if (l1 == 16)                   // '#else'
    {
      whitespace();
      parse_ElseDirective();
    }
    whitespace();
    parse_EndifDirective();
    eventHandler.endNonterminal("IfDirectiveStatement", e0);
  }

  function try_IfDirectiveStatement()
  {
    switch (l1)
    {
    case 18:                        // '#if'
      try_IfDirective();
      break;
    case 19:                        // '#ifdef'
      try_IfdefDirective();
      break;
    default:
      try_IfndefDirective();
    }
    for (;;)
    {
      if (l1 != 15)                 // '#elif'
      {
        break;
      }
      try_ElifDirective();
    }
    if (l1 == 16)                   // '#else'
    {
      try_ElseDirective();
    }
    try_EndifDirective();
  }

  function parse_IfDirective()
  {
    eventHandler.startNonterminal("IfDirective", e0);
    consume(18);                    // '#if'
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("IfDirective", e0);
  }

  function try_IfDirective()
  {
    consumeT(18);                   // '#if'
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_IfdefDirective()
  {
    eventHandler.startNonterminal("IfdefDirective", e0);
    consume(19);                    // '#ifdef'
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consume(3);                     // Identifier
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("IfdefDirective", e0);
  }

  function try_IfdefDirective()
  {
    consumeT(19);                   // '#ifdef'
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consumeT(3);                    // Identifier
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_IfndefDirective()
  {
    eventHandler.startNonterminal("IfndefDirective", e0);
    consume(20);                    // '#ifndef'
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consume(3);                     // Identifier
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("IfndefDirective", e0);
  }

  function try_IfndefDirective()
  {
    consumeT(20);                   // '#ifndef'
    lookahead1W(0);                 // Identifier | WhiteSpace^token
    consumeT(3);                    // Identifier
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_ElifDirective()
  {
    eventHandler.startNonterminal("ElifDirective", e0);
    consume(15);                    // '#elif'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    whitespace();
    parse_Expression();
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("ElifDirective", e0);
  }

  function try_ElifDirective()
  {
    consumeT(15);                   // '#elif'
    lookahead1W(27);                // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
    try_Expression();
    for (;;)
    {
      lookahead1W(38);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#elif' | '#else' | '#endif' | '#if' |
                                    // '#ifdef' | '#ifndef' | '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' |
                                    // 'auto' | 'break' | 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' |
                                    // 'extern' | 'float' | 'for' | 'if' | 'int' | 'long' | 'return' | 'short' |
                                    // 'signed' | 'sizeof' | 'static' | 'struct' | 'switch' | 'typedef' | 'union' |
                                    // 'unsigned' | 'void' | 'volatile' | 'while' | '{' | '~'
      if (l1 == 15                  // '#elif'
       || l1 == 16                  // '#else'
       || l1 == 17)                 // '#endif'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_ElseDirective()
  {
    eventHandler.startNonterminal("ElseDirective", e0);
    consume(16);                    // '#else'
    for (;;)
    {
      lookahead1W(29);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#endif' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
      if (l1 == 17)                 // '#endif'
      {
        break;
      }
      whitespace();
      parse_Expression();
    }
    eventHandler.endNonterminal("ElseDirective", e0);
  }

  function try_ElseDirective()
  {
    consumeT(16);                   // '#else'
    for (;;)
    {
      lookahead1W(29);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#endif' | '#if' | '#ifdef' | '#ifndef' |
                                    // '#include' | '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' |
                                    // 'char' | 'const' | 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' |
                                    // 'for' | 'if' | 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' |
                                    // 'static' | 'struct' | 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' |
                                    // 'volatile' | 'while' | '{' | '~'
      if (l1 == 17)                 // '#endif'
      {
        break;
      }
      try_Expression();
    }
  }

  function parse_EndifDirective()
  {
    eventHandler.startNonterminal("EndifDirective", e0);
    consume(17);                    // '#endif'
    eventHandler.endNonterminal("EndifDirective", e0);
  }

  function try_EndifDirective()
  {
    consumeT(17);                   // '#endif'
  }

  function parse_IncludeDirective()
  {
    eventHandler.startNonterminal("IncludeDirective", e0);
    switch (l1)
    {
    case 21:                        // '#include'
      lookahead2W(13);              // String | WhiteSpace^token | '<'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 1045:                      // '#include' String
      consume(21);                  // '#include'
      lookahead1W(1);               // String | WhiteSpace^token
      consume(8);                   // String
      break;
    default:
      consume(21);                  // '#include'
      lookahead1W(8);               // WhiteSpace^token | '<'
      consume(45);                  // '<'
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      whitespace();
      parse_Expression();
      lookahead1W(9);               // WhiteSpace^token | '>'
      consume(51);                  // '>'
    }
    eventHandler.endNonterminal("IncludeDirective", e0);
  }

  function try_IncludeDirective()
  {
    switch (l1)
    {
    case 21:                        // '#include'
      lookahead2W(13);              // String | WhiteSpace^token | '<'
      break;
    default:
      lk = l1;
    }
    switch (lk)
    {
    case 1045:                      // '#include' String
      consumeT(21);                 // '#include'
      lookahead1W(1);               // String | WhiteSpace^token
      consumeT(8);                  // String
      break;
    default:
      consumeT(21);                 // '#include'
      lookahead1W(8);               // WhiteSpace^token | '<'
      consumeT(45);                 // '<'
      lookahead1W(27);              // Identifier | Null | True | False | Character | String | Real | Comment |
                                    // WhiteSpace^token | '!' | '#define' | '#if' | '#ifdef' | '#ifndef' | '#include' |
                                    // '#undef' | '(' | '++' | '--' | ';' | '[' | 'auto' | 'break' | 'char' | 'const' |
                                    // 'continue' | 'do' | 'double' | 'enum' | 'extern' | 'float' | 'for' | 'if' |
                                    // 'int' | 'long' | 'return' | 'short' | 'signed' | 'sizeof' | 'static' | 'struct' |
                                    // 'switch' | 'typedef' | 'union' | 'unsigned' | 'void' | 'volatile' | 'while' |
                                    // '{' | '~'
      try_Expression();
      lookahead1W(9);               // WhiteSpace^token | '>'
      consumeT(51);                 // '>'
    }
  }

  function consume(t)
  {
    if (l1 == t)
    {
      whitespace();
      eventHandler.terminal(Web_C.TOKEN[l1], b1, e1);
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = l3; if (l2 != 0) {
      b2 = b3; e2 = e3; l3 = 0; }}
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function consumeT(t)
  {
    if (l1 == t)
    {
      b0 = b1; e0 = e1; l1 = l2; if (l1 != 0) {
      b1 = b2; e1 = e2; l2 = l3; if (l2 != 0) {
      b2 = b3; e2 = e3; l3 = 0; }}
    }
    else
    {
      error(b1, e1, 0, l1, t);
    }
  }

  function whitespace()
  {
    if (e0 != b1)
    {
      eventHandler.whitespace(e0, b1);
      e0 = b1;
    }
  }

  function matchW(tokenSetId)
  {
    var code;
    for (;;)
    {
      code = match(tokenSetId);
      if (code != 11)               // WhiteSpace^token
      {
        break;
      }
    }
    return code;
  }

  function lookahead1W(tokenSetId)
  {
    if (l1 == 0)
    {
      l1 = matchW(tokenSetId);
      b1 = begin;
      e1 = end;
    }
  }

  function lookahead2W(tokenSetId)
  {
    if (l2 == 0)
    {
      l2 = matchW(tokenSetId);
      b2 = begin;
      e2 = end;
    }
    lk = (l2 << 7) | l1;
  }

  function lookahead3W(tokenSetId)
  {
    if (l3 == 0)
    {
      l3 = matchW(tokenSetId);
      b3 = begin;
      e3 = end;
    }
    lk |= l3 << 14;
  }

  function error(b, e, s, l, t)
  {
    if (e >= ex)
    {
      bx = b;
      ex = e;
      sx = s;
      lx = l;
      tx = t;
    }
    throw new thisParser.ParseException(bx, ex, sx, lx, tx);
  }

  var lk, b0, e0;
  var l1, b1, e1;
  var l2, b2, e2;
  var l3, b3, e3;
  var bx, ex, sx, lx, tx;
  var eventHandler;
  var memo;

  function memoize(i, e, v)
  {
    memo[(e << 4) + i] = v;
  }

  function memoized(i, e)
  {
    var v = memo[(e << 4) + i];
    return typeof v != "undefined" ? v : 0;
  }

  var input;
  var size;

  var begin;
  var end;

  function match(tokenSetId)
  {
    begin = end;
    var current = end;
    var result = Web_C.INITIAL[tokenSetId];
    var state = 0;

    for (var code = result & 511; code != 0; )
    {
      var charclass;
      var c0 = current < size ? input.charCodeAt(current) : 0;
      ++current;
      if (c0 < 0x80)
      {
        charclass = Web_C.MAP0[c0];
      }
      else if (c0 < 0xd800)
      {
        var c1 = c0 >> 5;
        charclass = Web_C.MAP1[(c0 & 31) + Web_C.MAP1[(c1 & 31) + Web_C.MAP1[c1 >> 5]]];
      }
      else
      {
        if (c0 < 0xdc00)
        {
          var c1 = current < size ? input.charCodeAt(current) : 0;
          if (c1 >= 0xdc00 && c1 < 0xe000)
          {
            ++current;
            c0 = ((c0 & 0x3ff) << 10) + (c1 & 0x3ff) + 0x10000;
          }
        }

        var lo = 0, hi = 1;
        for (var m = 1; ; m = (hi + lo) >> 1)
        {
          if (Web_C.MAP2[m] > c0) hi = m - 1;
          else if (Web_C.MAP2[2 + m] < c0) lo = m + 1;
          else {charclass = Web_C.MAP2[4 + m]; break;}
          if (lo > hi) {charclass = 0; break;}
        }
      }

      state = code;
      var i0 = (charclass << 9) + code - 1;
      code = Web_C.TRANSITION[(i0 & 7) + Web_C.TRANSITION[i0 >> 3]];

      if (code > 511)
      {
        result = code;
        code &= 511;
        end = current;
      }
    }

    result >>= 9;
    if (result == 0)
    {
      end = current - 1;
      var c1 = end < size ? input.charCodeAt(end) : 0;
      if (c1 >= 0xdc00 && c1 < 0xe000) --end;
      return error(begin, end, state, -1, -1);
    }

    if (end > size) end = size;
    return (result & 127) - 1;
  }

}

Web_C.XmlSerializer = function(log, indent)
{
  var input = null;
  var delayedTag = null;
  var hasChildElement = false;
  var depth = 0;

  this.reset = function(string)
  {
    log("<?xml version=\"1.0\" encoding=\"UTF-8\"?" + ">");
    input = string;
    delayedTag = null;
    hasChildElement = false;
    depth = 0;
  };

  this.startNonterminal = function(tag, begin)
  {
    if (delayedTag != null)
    {
      log("<");
      log(delayedTag);
      log(">");
    }
    delayedTag = tag;
    if (indent)
    {
      log("\n");
      for (var i = 0; i < depth; ++i)
      {
        log("  ");
      }
    }
    hasChildElement = false;
    ++depth;
  };

  this.endNonterminal = function(tag, end)
  {
    --depth;
    if (delayedTag != null)
    {
      delayedTag = null;
      log("<");
      log(tag);
      log("/>");
    }
    else
    {
      if (indent)
      {
        if (hasChildElement)
        {
          log("\n");
          for (var i = 0; i < depth; ++i)
          {
            log("  ");
          }
        }
      }
      log("</");
      log(tag);
      log(">");
    }
    hasChildElement = true;
  };

  this.terminal = function(tag, begin, end)
  {
    if (tag.charAt(0) == '\'') tag = "TOKEN";
    this.startNonterminal(tag, begin);
    characters(begin, end);
    this.endNonterminal(tag, end);
  };

  this.whitespace = function(begin, end)
  {
    characters(begin, end);
  };

  function characters(begin, end)
  {
    if (begin < end)
    {
      if (delayedTag != null)
      {
        log("<");
        log(delayedTag);
        log(">");
        delayedTag = null;
      }
      log(input.substring(begin, end)
               .replace(/&/g, "&amp;")
               .replace(/</g, "&lt;")
               .replace(/>/g, "&gt;"));
    }
  }
};

Web_C.getTokenSet = function(tokenSetId)
{
  var set = [];
  var s = tokenSetId < 0 ? - tokenSetId : Web_C.INITIAL[tokenSetId] & 511;
  for (var i = 0; i < 96; i += 32)
  {
    var j = i;
    var i0 = (i >> 5) * 405 + s - 1;
    var i1 = i0 >> 2;
    var f = Web_C.EXPECTED[(i0 & 3) + Web_C.EXPECTED[(i1 & 3) + Web_C.EXPECTED[i1 >> 2]]];
    for ( ; f != 0; f >>>= 1, ++j)
    {
      if ((f & 1) != 0)
      {
        set.push(Web_C.TOKEN[j]);
      }
    }
  }
  return set;
};

Web_C.TopDownTreeBuilder = function()
{
  var input = null;
  var stack = null;

  this.reset = function(i)
  {
    input = i;
    stack = [];
  };

  this.startNonterminal = function(name, begin)
  {
    var nonterminal = new Web_C.Nonterminal(name, begin, begin, []);
    if (stack.length > 0) addChild(nonterminal);
    stack.push(nonterminal);
  };

  this.endNonterminal = function(name, end)
  {
    stack[stack.length - 1].end = end;
    if (stack.length > 1) stack.pop();
  };

  this.terminal = function(name, begin, end)
  {
    addChild(new Web_C.Terminal(name, begin, end));
  };

  this.whitespace = function(begin, end)
  {
  };

  function addChild(s)
  {
    var current = stack[stack.length - 1];
    current.children.push(s);
  }

  this.serialize = function(e)
  {
    e.reset(input);
    stack[0].send(e);
  };
};

Web_C.Terminal = function(name, begin, end)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.terminal(name, begin, end);
  };
};

Web_C.Nonterminal = function(name, begin, end, children)
{
  this.begin = begin;
  this.end = end;

  this.send = function(e)
  {
    e.startNonterminal(name, begin);
    var pos = begin;
    children.forEach
    (
      function(c)
      {
        if (pos < c.begin) e.whitespace(pos, c.begin);
        c.send(e);
        pos = c.end;
      }
    );
    if (pos < end) e.whitespace(pos, end);
    e.endNonterminal(name, end);
  };
};

Web_C.MAP0 =
[
  /*   0 */ 66, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6,
  /*  36 */ 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 20, 20, 21, 22, 21, 21, 23, 23, 24, 25, 26, 27, 28, 29,
  /*  64 */ 7, 30, 30, 31, 30, 32, 30, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33,
  /*  91 */ 34, 35, 36, 37, 33, 7, 38, 39, 40, 41, 42, 43, 44, 45, 46, 33, 47, 48, 49, 50, 51, 52, 33, 53, 54, 55, 56,
  /* 118 */ 57, 58, 59, 60, 61, 62, 63, 64, 65, 7
];

Web_C.MAP1 =
[
  /*   0 */ 54, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  27 */ 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58, 58,
  /*  54 */ 90, 122, 216, 154, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185,
  /*  76 */ 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 185, 66, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 1,
  /* 102 */ 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  /* 136 */ 17, 18, 19, 20, 20, 20, 21, 22, 21, 21, 23, 23, 24, 25, 26, 27, 28, 29, 7, 38, 39, 40, 41, 42, 43, 44, 45,
  /* 163 */ 46, 33, 47, 48, 49, 50, 51, 52, 33, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 7, 7, 7, 7, 7, 7, 7,
  /* 192 */ 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 30, 30, 31, 30, 32, 30, 33, 33,
  /* 225 */ 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 33, 34, 35, 36, 37, 33
];

Web_C.MAP2 =
[
  /* 0 */ 57344, 65536, 65533, 1114111, 7, 7
];

Web_C.INITIAL =
[
  /*  0 */ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 1052,
  /* 29 */ 29, 30, 31, 32, 33, 1058, 35, 36, 37, 38, 39, 40, 1065, 42, 43, 44, 1069, 1070
];

Web_C.TRANSITION =
[
  /*    0 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*   18 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*   36 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*   54 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206,
  /*   72 */ 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*   90 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  108 */ 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  126 */ 6205, 6205, 4288, 4288, 4288, 4288, 4288, 4289, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  144 */ 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  162 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205,
  /*  180 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4288, 4288, 4288, 4288, 4288, 4289,
  /*  198 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  216 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  234 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  252 */ 6205, 6205, 6205, 6205, 6205, 6205, 5451, 5456, 5459, 4297, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205,
  /*  270 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  288 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205,
  /*  306 */ 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4318, 5762, 4316, 4333,
  /*  324 */ 4336, 4338, 6205, 5578, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5762, 5194, 6205, 6205,
  /*  342 */ 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  360 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5838, 5194, 4328, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  378 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5688, 5693, 5698, 6205, 6206, 5908, 6205, 6205, 6205,
  /*  396 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  414 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  432 */ 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  450 */ 6205, 6205, 6205, 6205, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  468 */ 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  486 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205,
  /*  504 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4915, 4921, 6205, 4918, 6205, 6206, 5908, 6205,
  /*  522 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205,
  /*  540 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  558 */ 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  576 */ 6205, 6205, 5899, 5905, 6205, 5902, 6205, 6206, 5908, 6205, 6205, 4347, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  594 */ 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  612 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205,
  /*  630 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4357, 4738, 4741, 4743, 6205, 6206,
  /*  648 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5762, 4369, 6205, 6205, 5759, 6205, 6205, 6205,
  /*  666 */ 6205, 6205, 6205, 4379, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  684 */ 6205, 6205, 6205, 6205, 6206, 4390, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  702 */ 6205, 6205, 4400, 6087, 4411, 4423, 4423, 4425, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  720 */ 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  738 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205,
  /*  756 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4446, 6205, 4445, 4444, 4433, 4439,
  /*  774 */ 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205,
  /*  792 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  810 */ 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  828 */ 6205, 6205, 6205, 6205, 6205, 6205, 4936, 4942, 4454, 4939, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205,
  /*  846 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  864 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205,
  /*  882 */ 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4361, 6205, 5805, 4465,
  /*  900 */ 4468, 5808, 6205, 6206, 5826, 6205, 6205, 5823, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5395, 6205, 6205,
  /*  918 */ 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  936 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  954 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4371, 5867, 4476, 5861, 5872, 6205, 6206, 5908, 6205, 6205, 6205,
  /*  972 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /*  990 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1008 */ 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4924, 5009,
  /* 1026 */ 4487, 4495, 4498, 4506, 6205, 6206, 4525, 6205, 4901, 4902, 4903, 6205, 6205, 4541, 6205, 6205, 6205, 5395,
  /* 1044 */ 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1062 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205,
  /* 1080 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6481, 6205, 4553, 6205, 5932, 6205, 6206, 4382, 6205,
  /* 1098 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205,
  /* 1116 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1134 */ 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1152 */ 6205, 6205, 5493, 4564, 4567, 4575, 6205, 6206, 5908, 6205, 6205, 6205, 5756, 6205, 6205, 5759, 6205, 6205,
  /* 1170 */ 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1188 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205,
  /* 1206 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4594, 6400, 6403, 6405, 6197, 5161,
  /* 1224 */ 4457, 6202, 5599, 6205, 4681, 6197, 5091, 4606, 6197, 6197, 5319, 4618, 6205, 5176, 4631, 6197, 6198, 4700,
  /* 1242 */ 6197, 6197, 5531, 4642, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 5654, 4668, 5175, 5264, 6197, 5111, 5309,
  /* 1260 */ 4680, 4682, 6197, 5191, 5265, 4682, 5800, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1278 */ 6205, 6205, 6205, 6205, 4594, 6400, 6403, 6405, 6197, 5161, 4457, 6202, 5599, 6205, 4681, 6197, 5091, 4606,
  /* 1296 */ 6197, 6197, 5319, 4618, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6250, 4691, 6203, 5173, 5263, 6197,
  /* 1314 */ 6197, 6172, 6197, 5412, 4711, 5175, 5264, 6197, 5111, 5152, 4680, 4682, 6197, 5191, 5265, 4682, 4339, 6205,
  /* 1332 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4594, 6400, 6403, 6405,
  /* 1350 */ 6197, 5161, 4457, 6202, 5599, 6205, 4681, 6197, 5091, 4606, 6197, 6197, 5319, 4723, 6205, 5176, 4631, 6197,
  /* 1368 */ 6198, 4700, 6197, 6197, 6250, 4691, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 5412, 4711, 5175, 5264, 6197,
  /* 1386 */ 5111, 5152, 4680, 4682, 6197, 5191, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1404 */ 6205, 6205, 6205, 6205, 6205, 6205, 4594, 6400, 6403, 6405, 6197, 5161, 4457, 6202, 5599, 6205, 4681, 6197,
  /* 1422 */ 5091, 4606, 6197, 6197, 5319, 4723, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6250, 4691, 6203, 5173,
  /* 1440 */ 5263, 6197, 6197, 6172, 6197, 5412, 4711, 5175, 5264, 6197, 5111, 5609, 4751, 4682, 6197, 5258, 5265, 4682,
  /* 1458 */ 5683, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4594, 6400,
  /* 1476 */ 6403, 6405, 6197, 5161, 4457, 6202, 5599, 6205, 4681, 6197, 5091, 4606, 6197, 6197, 6200, 4760, 6205, 5176,
  /* 1494 */ 4631, 6197, 6198, 4700, 6197, 6197, 6250, 6624, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 5412, 4711, 5175,
  /* 1512 */ 5264, 6197, 5111, 5152, 4680, 4682, 6197, 5191, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1530 */ 6205, 6205, 6205, 6205, 6205, 6205, 4392, 6205, 4392, 4783, 6205, 4793, 6205, 6206, 5908, 6205, 6205, 6205,
  /* 1548 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1566 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1584 */ 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6578, 6205,
  /* 1602 */ 4819, 4824, 4812, 4826, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1620 */ 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1638 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205,
  /* 1656 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4834, 5590, 5596, 6205, 5593, 6205, 6206, 5908, 6205,
  /* 1674 */ 6205, 4785, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205,
  /* 1692 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1710 */ 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1728 */ 6205, 6205, 5747, 5753, 6205, 5750, 6205, 6206, 5908, 6205, 5955, 4853, 4861, 6205, 6205, 4873, 6205, 6205,
  /* 1746 */ 6205, 6205, 6205, 6108, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1764 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205,
  /* 1782 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4885, 6019, 4898, 6205, 4895, 6205, 6206,
  /* 1800 */ 7078, 6205, 6205, 6205, 4911, 6205, 6205, 5895, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205,
  /* 1818 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1836 */ 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1854 */ 6205, 6205, 6205, 6205, 6099, 6105, 6205, 6102, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1872 */ 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1890 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205,
  /* 1908 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724,
  /* 1926 */ 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197,
  /* 1944 */ 6198, 4700, 6197, 6197, 6250, 5344, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 5412, 4711, 5175, 5264, 6197,
  /* 1962 */ 5111, 5152, 4680, 4682, 6197, 5191, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 1980 */ 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197,
  /* 1998 */ 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6250, 5344, 6203, 5173,
  /* 2016 */ 5263, 6197, 6197, 6172, 6197, 5412, 4711, 5175, 5264, 6197, 5111, 5152, 4680, 4682, 6197, 5370, 5265, 5262,
  /* 2034 */ 5390, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264,
  /* 2052 */ 6197, 5724, 6197, 5161, 4403, 6202, 5174, 6205, 4681, 6197, 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176,
  /* 2070 */ 4631, 6197, 6198, 4700, 6197, 6197, 6250, 6591, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 5412, 4711, 5175,
  /* 2088 */ 5264, 6197, 5111, 5152, 4680, 4682, 6197, 5191, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2106 */ 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202, 5174, 6205,
  /* 2124 */ 4681, 6197, 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6201, 5173,
  /* 2142 */ 6203, 5173, 5263, 6197, 6197, 6172, 6197, 6202, 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123,
  /* 2160 */ 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2178 */ 4932, 4950, 4950, 4952, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2196 */ 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2214 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205,
  /* 2232 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5051, 4479, 6205,
  /* 2250 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5762, 4960, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205,
  /* 2268 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2286 */ 6205, 6205, 5142, 4960, 4971, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2304 */ 6205, 6205, 4989, 4997, 4993, 4984, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2322 */ 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2340 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205,
  /* 2358 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6304, 6310, 6205, 6307, 6205, 6206,
  /* 2376 */ 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205,
  /* 2394 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2412 */ 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2430 */ 6205, 6205, 5008, 6205, 5005, 7091, 7094, 7096, 5623, 5161, 5017, 5029, 5174, 6205, 4681, 5038, 6538, 6324,
  /* 2448 */ 6197, 5232, 6200, 4683, 5050, 5059, 5071, 6197, 5088, 5207, 5106, 6197, 5119, 5344, 5030, 4320, 4715, 6045,
  /* 2466 */ 6269, 6675, 6197, 5412, 4711, 5175, 5264, 6197, 5111, 5152, 4680, 4682, 6197, 5191, 5265, 4682, 4339, 6205,
  /* 2484 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5141, 6205, 5138, 7134, 7137, 7139,
  /* 2502 */ 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 5773, 6197, 6197, 5319, 4529, 6205, 5176, 4631, 6197,
  /* 2520 */ 6198, 4700, 5150, 6197, 6250, 5344, 4623, 5173, 5263, 5160, 6197, 6172, 6197, 5412, 4711, 5175, 5264, 6197,
  /* 2538 */ 5111, 5152, 4680, 4682, 6197, 5191, 5265, 5665, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2556 */ 6205, 6205, 6205, 6205, 5172, 7074, 5169, 7152, 7155, 5185, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197,
  /* 2574 */ 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6250, 5344, 6203, 5173,
  /* 2592 */ 5204, 6197, 6197, 6172, 6351, 5412, 4711, 5175, 5264, 5975, 5111, 6680, 5215, 4682, 5229, 5370, 5265, 5262,
  /* 2610 */ 5390, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5243, 6205, 5240, 7168,
  /* 2628 */ 7171, 5252, 6197, 5161, 5908, 6202, 5174, 6205, 4415, 6197, 4610, 5773, 6197, 6197, 6200, 4683, 6205, 5176,
  /* 2646 */ 4631, 6197, 6198, 4700, 6197, 6197, 4649, 5344, 6203, 4963, 5273, 6197, 5512, 4698, 6491, 5412, 4711, 5175,
  /* 2664 */ 5285, 6559, 5111, 5152, 5295, 4682, 5307, 5191, 5317, 5327, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2682 */ 6205, 6205, 6205, 6205, 6205, 6205, 5355, 6205, 5352, 6708, 6711, 5364, 6783, 5383, 4403, 6202, 5174, 6205,
  /* 2700 */ 4681, 6785, 5277, 5063, 6197, 6197, 6200, 4683, 6205, 5542, 5407, 6197, 6198, 6174, 5527, 5420, 6754, 6591,
  /* 2718 */ 5444, 5356, 5263, 5467, 6246, 6798, 5478, 6161, 5489, 5501, 5509, 6750, 5520, 7047, 5539, 5550, 5987, 5221,
  /* 2736 */ 6515, 6231, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5577, 6205,
  /* 2754 */ 5586, 7197, 7200, 7202, 4702, 5161, 5908, 6202, 5174, 6205, 4681, 6156, 5091, 5773, 5607, 6197, 5319, 4529,
  /* 2772 */ 6205, 5176, 5617, 6197, 6198, 6348, 6197, 6197, 6250, 5344, 6203, 5173, 5631, 6197, 6197, 6172, 6197, 5412,
  /* 2790 */ 4711, 5175, 5264, 6197, 7121, 5098, 5641, 5649, 6197, 5662, 5676, 5665, 4339, 6205, 6205, 6205, 6205, 6205,
  /* 2808 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202,
  /* 2826 */ 5174, 6205, 4681, 6197, 5091, 5773, 6197, 5998, 6200, 4683, 6205, 5706, 4631, 6197, 5723, 4700, 4703, 6197,
  /* 2844 */ 6201, 5173, 6203, 5732, 5263, 6141, 6197, 6172, 6197, 5743, 5177, 6670, 5264, 6197, 5770, 6199, 5173, 4682,
  /* 2862 */ 6197, 6123, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 2880 */ 6204, 6205, 6121, 5264, 6197, 5724, 5782, 5793, 5375, 4533, 5816, 6205, 4681, 5569, 5563, 5773, 6197, 6197,
  /* 2898 */ 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6201, 5173, 6203, 5173, 5263, 6197, 6197, 6172,
  /* 2916 */ 6197, 6202, 5177, 5175, 5264, 6197, 5111, 6176, 5173, 4682, 6136, 6123, 5265, 4682, 4339, 6205, 6205, 6205,
  /* 2934 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5837, 6205, 5834, 4303, 4306, 4308, 6197, 5846,
  /* 2952 */ 5908, 6202, 5854, 6205, 5399, 6259, 5042, 5773, 6197, 6949, 5880, 4683, 6205, 5711, 4631, 6197, 5888, 4700,
  /* 2970 */ 6197, 6197, 5916, 5173, 6203, 4672, 5263, 6197, 6809, 6419, 6146, 6202, 5177, 5925, 6961, 6151, 6068, 6199,
  /* 2988 */ 5196, 4682, 6569, 6123, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3006 */ 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 5773,
  /* 3024 */ 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6201, 5173, 6203, 5173, 5263, 6197,
  /* 3042 */ 6197, 5094, 6197, 6202, 5177, 5175, 6064, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682, 4339, 6205,
  /* 3060 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5954, 6205, 5951, 4512, 4515, 4517,
  /* 3078 */ 6188, 5161, 5908, 5963, 5174, 6205, 4681, 5971, 5091, 5983, 5620, 5995, 5334, 4865, 6205, 5339, 4631, 6197,
  /* 3096 */ 5436, 6006, 4702, 6197, 7110, 5173, 6015, 5173, 5263, 6197, 6197, 6027, 6197, 6202, 6657, 5175, 6038, 6197,
  /* 3114 */ 5111, 5109, 5173, 4682, 6197, 6057, 5668, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3132 */ 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197,
  /* 3150 */ 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 5077, 6197, 6201, 5173, 6203, 5173,
  /* 3168 */ 5263, 6076, 6197, 6172, 6197, 6202, 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682,
  /* 3186 */ 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6086, 6205, 6095, 7001,
  /* 3204 */ 7004, 7006, 6292, 6527, 5908, 6202, 6116, 6205, 4681, 6131, 6169, 6184, 6196, 6214, 5319, 4529, 6224, 5176,
  /* 3222 */ 6239, 5080, 6007, 6258, 6197, 6267, 6201, 5173, 6203, 6277, 6288, 6216, 6197, 6172, 6197, 6300, 5177, 5175,
  /* 3240 */ 5264, 6197, 6321, 6332, 6342, 6359, 6367, 6123, 5265, 5665, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3258 */ 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6386, 5785, 5908, 6394, 6413, 6205,
  /* 3276 */ 4681, 6433, 6427, 5773, 6971, 6735, 6200, 4683, 4598, 5176, 4631, 6447, 6198, 5096, 6197, 6078, 6201, 5173,
  /* 3294 */ 6455, 5173, 6459, 6197, 7059, 6172, 6374, 6202, 5177, 4556, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123,
  /* 3312 */ 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205,
  /* 3330 */ 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 5773, 6197, 6197, 6467, 4683,
  /* 3348 */ 6205, 5176, 4631, 6197, 5427, 4700, 6197, 6197, 6201, 5173, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 6202,
  /* 3366 */ 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205,
  /* 3384 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6480, 6205, 6477, 5938, 5941, 5943, 6489, 6932, 5908, 6499,
  /* 3402 */ 5174, 6205, 4752, 6197, 6511, 5773, 4701, 5470, 5319, 4529, 6205, 5176, 4631, 6523, 6535, 4700, 6197, 6639,
  /* 3420 */ 6201, 5173, 4765, 6546, 6549, 5481, 6197, 6172, 6557, 6202, 5299, 5175, 5774, 6567, 5111, 6199, 5173, 4682,
  /* 3438 */ 6197, 6123, 5265, 5665, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3456 */ 6577, 6205, 6586, 4581, 4584, 4586, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 6820, 6197, 6197,
  /* 3474 */ 6599, 4683, 6205, 6619, 4631, 6197, 6832, 6632, 6197, 6197, 6201, 5244, 4728, 5173, 5735, 6197, 6197, 5433,
  /* 3492 */ 6197, 6202, 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682, 4339, 6205, 6205, 6205,
  /* 3510 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6648, 6205, 6665, 4799, 4802, 4804, 6197, 6688,
  /* 3528 */ 5908, 6202, 6696, 6205, 4681, 6640, 5091, 5715, 6723, 6719, 5319, 5021, 4976, 5176, 6731, 6743, 6198, 5287,
  /* 3546 */ 6197, 5557, 6201, 5173, 6203, 6653, 6280, 6197, 6762, 6172, 6197, 6773, 6873, 6793, 6927, 6806, 6817, 6199,
  /* 3564 */ 5173, 4682, 6828, 6123, 5633, 5665, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3582 */ 6205, 6205, 6843, 6205, 6840, 4840, 4843, 4845, 6851, 6860, 5908, 6868, 5174, 6205, 4545, 6197, 6049, 5773,
  /* 3600 */ 6881, 6197, 6893, 6902, 6922, 5176, 6940, 6948, 6198, 4700, 6980, 6885, 6894, 6957, 6203, 5173, 5263, 6765,
  /* 3618 */ 6969, 6172, 6979, 5917, 5177, 5175, 5264, 6197, 6334, 6199, 5173, 6778, 6197, 6123, 6988, 4682, 6996, 6205,
  /* 3636 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 7017, 6205, 7014, 5125, 5128, 5130,
  /* 3654 */ 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197,
  /* 3672 */ 6198, 4700, 6197, 6197, 6201, 5173, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 6202, 5177, 5175, 5264, 6197,
  /* 3690 */ 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3708 */ 6205, 6205, 6205, 6205, 7028, 4733, 7025, 4655, 4658, 4660, 6197, 7036, 5908, 6202, 4349, 6205, 4681, 6852,
  /* 3726 */ 5091, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6201, 5173, 6203, 5173,
  /* 3744 */ 5263, 6197, 6197, 6172, 6197, 6202, 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682,
  /* 3762 */ 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264,
  /* 3780 */ 6197, 5724, 6378, 5161, 5908, 6469, 5174, 6205, 4681, 7044, 5091, 7055, 6197, 6197, 4634, 7067, 6205, 5176,
  /* 3798 */ 4631, 6197, 6198, 4700, 6197, 6197, 6201, 5173, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 6202, 5177, 5175,
  /* 3816 */ 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 3834 */ 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205, 6121, 5264, 6197, 5724, 6197, 6439, 5908, 7086, 5174, 6205,
  /* 3852 */ 4681, 6197, 7104, 5773, 6197, 6197, 6200, 4683, 6205, 5176, 4631, 6197, 6198, 4700, 6197, 6197, 6201, 5173,
  /* 3870 */ 6203, 5173, 5263, 6197, 6197, 6172, 6197, 6202, 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123,
  /* 3888 */ 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6204, 6205,
  /* 3906 */ 6121, 5264, 6197, 5724, 6197, 5161, 5908, 6202, 5174, 6205, 4681, 6197, 5091, 5773, 6197, 6030, 6200, 4683,
  /* 3924 */ 6205, 4877, 4631, 6197, 7118, 4700, 6197, 6197, 6201, 5173, 6203, 5173, 5263, 6197, 6197, 6172, 6197, 6202,
  /* 3942 */ 5177, 5175, 5264, 6197, 5111, 6199, 5173, 4682, 6197, 6123, 5265, 4682, 4339, 6205, 6205, 6205, 6205, 6205,
  /* 3960 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6503, 7129, 6606, 6609, 6611, 6205, 6206, 5908, 6205,
  /* 3978 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205,
  /* 3996 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4014 */ 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4032 */ 6205, 6205, 4769, 4775, 6205, 4772, 6205, 6206, 5908, 6205, 6205, 6205, 7147, 6205, 6205, 6205, 6205, 6205,
  /* 4050 */ 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4068 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205,
  /* 4086 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 4887, 6313, 7163, 7184, 7179, 6205, 6206,
  /* 4104 */ 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205,
  /* 4122 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4140 */ 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4158 */ 6205, 6205, 6205, 6205, 6703, 6909, 6912, 6914, 6205, 6206, 5908, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4176 */ 6205, 6205, 6205, 6205, 6205, 6205, 5759, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4194 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6206, 6205, 4339, 6205,
  /* 4212 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 7192, 6205,
  /* 4230 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4248 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4266 */ 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205, 6205,
  /* 4284 */ 6205, 6205, 6205, 6205, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 6191, 0, 6656, 6744, 6744, 6744, 6744,
  /* 4302 */ 6744, 0, 0, 0, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 2157, 0, 2096, 0, 64, 0, 64, 0, 0, 0, 0, 0, 0,
  /* 4326 */ 317, 2096, 4672, 4608, 4608, 4608, 4608, 0, 0, 0, 64, 64, 64, 64, 64, 64, 64, 64, 0, 0, 0, 0, 13824, 0, 0,
  /* 4351 */ 0, 0, 0, 0, 2192, 0, 0, 70, 0, 70, 0, 0, 0, 0, 65, 0, 0, 0, 4096, 153, 0, 0, 0, 0, 0, 0, 18432, 0, 4096,
  /* 4380 */ 4096, 4096, 0, 0, 0, 0, 0, 153, 0, 155, 0, 4249, 0, 0, 0, 0, 0, 0, 22528, 0, 0, 0, 14848, 0, 0, 0, 0, 0,
  /* 4408 */ 153, 0, 156, 0, 14848, 0, 14848, 0, 0, 0, 0, 176, 0, 2096, 2096, 14848, 14848, 14848, 14848, 14848, 14848,
  /* 4429 */ 14848, 14848, 0, 0, 0, 0, 15360, 0, 0, 0, 15360, 0, 0, 0, 15360, 15360, 0, 0, 0, 0, 15360, 0, 0, 0, 0, 0,
  /* 4455 */ 0, 15872, 0, 0, 0, 0, 0, 153, 5192, 5192, 16988, 16988, 16988, 65, 65, 65, 65, 65, 65, 65, 65, 0, 18432,
  /* 4478 */ 18432, 0, 0, 0, 0, 0, 154, 0, 0, 0, 71, 0, 86, 19037, 19037, 19037, 19037, 19044, 19044, 19044, 86, 86, 86,
  /* 4501 */ 86, 86, 86, 86, 86, 86, 19066, 19066, 19068, 19066, 19068, 0, 0, 0, 2158, 2158, 2158, 2158, 2158, 2158,
  /* 4521 */ 2158, 2158, 0, 2096, 0, 19456, 0, 0, 0, 153, 0, 0, 2096, 2096, 2096, 0, 161, 0, 0, 0, 0, 19456, 0, 19456,
  /* 4545 */ 0, 0, 0, 0, 178, 0, 2228, 2096, 20992, 20992, 20992, 0, 0, 0, 0, 0, 2408, 0, 0, 21598, 21598, 21598, 102,
  /* 4568 */ 102, 102, 102, 102, 102, 102, 102, 102, 21627, 21627, 21627, 21627, 21627, 0, 0, 0, 2160, 2160, 2160, 2160,
  /* 4588 */ 2160, 2160, 2160, 2160, 0, 2096, 0, 5192, 0, 5192, 0, 0, 0, 0, 248, 0, 0, 250, 2096, 5192, 0, 5192, 2096,
  /* 4611 */ 2096, 2096, 2096, 176, 176, 2096, 2096, 0, 233, 5358, 5359, 2096, 2096, 2096, 0, 0, 0, 310, 0, 0, 0, 0,
  /* 4633 */ 5811, 2096, 2096, 2096, 2096, 2096, 230, 0, 0, 234, 153, 0, 305, 307, 5358, 5359, 2096, 48, 2096, 2096,
  /* 4653 */ 301, 302, 0, 0, 0, 2164, 2164, 2164, 2164, 2164, 2164, 2164, 2164, 0, 2096, 353, 237, 153, 2096, 0, 0, 0,
  /* 4675 */ 0, 316, 0, 0, 2096, 307, 0, 0, 0, 0, 0, 0, 2096, 2096, 2096, 0, 234, 153, 0, 306, 307, 5358, 5359, 2096,
  /* 4699 */ 341, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 48, 2096, 2096, 237, 237, 153, 2096, 0, 0, 0, 0, 2096,
  /* 4720 */ 2372, 2096, 2096, 0, 234, 5358, 5359, 2096, 2096, 2096, 0, 0, 309, 0, 0, 0, 68, 0, 0, 0, 0, 70, 70, 70, 70,
  /* 4745 */ 70, 70, 70, 70, 0, 0, 381, 0, 0, 0, 0, 0, 0, 2096, 2229, 0, 0, 5358, 5359, 2096, 2096, 2096, 0, 32768, 0,
  /* 4770 */ 0, 0, 0, 47203, 47203, 47203, 47203, 47203, 0, 0, 0, 0, 0, 0, 22528, 0, 0, 0, 0, 0, 0, 24238, 0, 22528, 0,
  /* 4795 */ 22528, 22528, 22528, 22528, 0, 0, 0, 2161, 2161, 2161, 2161, 2161, 2161, 2161, 2161, 0, 2096, 23040, 23040,
  /* 4814 */ 23040, 23040, 23040, 23040, 23040, 23040, 0, 0, 0, 0, 0, 0, 23040, 23040, 23040, 23040, 23040, 23040, 0, 0,
  /* 4834 */ 23552, 0, 0, 0, 0, 23552, 0, 0, 0, 2162, 2162, 2162, 2162, 2162, 2162, 2162, 2162, 0, 2096, 12800, 14336,
  /* 4855 */ 16384, 17920, 19968, 22016, 25088, 26112, 27136, 30720, 47616, 19968, 0, 0, 0, 0, 2288, 2289, 2096, 0, 0,
  /* 4874 */ 19968, 22016, 19968, 0, 0, 0, 0, 2304, 0, 0, 0, 0, 26624, 0, 0, 0, 0, 0, 0, 48640, 0, 26624, 26721, 26721,
  /* 4898 */ 26721, 26721, 26721, 0, 0, 0, 0, 0, 19456, 0, 0, 0, 0, 27823, 0, 0, 20480, 0, 0, 0, 0, 12377, 12377, 12377,
  /* 4922 */ 12377, 12377, 0, 0, 0, 0, 0, 66, 0, 0, 0, 29184, 0, 29184, 0, 0, 0, 0, 15963, 15963, 15963, 15963, 15963,
  /* 4945 */ 0, 0, 0, 15872, 0, 29184, 29184, 29184, 29184, 29184, 29184, 29184, 29184, 0, 0, 0, 235, 0, 0, 0, 0, 0, 0,
  /* 4968 */ 45056, 0, 2096, 401, 150, 150, 150, 150, 0, 0, 0, 247, 0, 38912, 0, 0, 29696, 0, 0, 0, 29696, 29696, 0, 0,
  /* 4992 */ 0, 0, 0, 0, 29696, 0, 0, 29696, 0, 0, 0, 0, 29696, 0, 2097, 76, 2097, 0, 0, 0, 0, 0, 0, 0, 69, 0, 0, 151,
  /* 5020 */ 0, 0, 153, 0, 0, 2096, 2096, 2096, 243, 2205, 2096, 2096, 0, 0, 0, 0, 0, 312, 2175, 2096, 2096, 2205, 2096,
  /* 5043 */ 2096, 2096, 2096, 177, 177, 2096, 2096, 244, 0, 0, 0, 0, 0, 0, 0, 150, 0, 252, 0, 0, 2096, 0, 0, 0, 2096,
  /* 5068 */ 2254, 2096, 2096, 0, 0, 5811, 2096, 2096, 2311, 2096, 2096, 48, 2096, 2096, 2096, 2096, 2096, 2317, 2096,
  /* 5087 */ 2096, 2096, 2321, 2096, 2096, 2096, 2096, 2096, 0, 0, 2096, 2096, 2096, 48, 2096, 2096, 2096, 302, 0, 2337,
  /* 5107 */ 2096, 2096, 2096, 2185, 2096, 2096, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2347, 2096, 301, 302, 0, 0, 0,
  /* 5128 */ 2163, 2163, 2163, 2163, 2163, 2163, 2163, 2163, 0, 2096, 0, 2098, 0, 2098, 0, 0, 0, 0, 0, 0, 0, 401, 2096,
  /* 5151 */ 2276, 2096, 2096, 2096, 2096, 2096, 2096, 302, 0, 2375, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 64, 0,
  /* 5170 */ 2099, 77, 2099, 0, 0, 0, 0, 0, 0, 0, 2096, 0, 0, 0, 0, 2167, 2153, 2153, 2153, 2167, 2167, 0, 2096, 64, 0,
  /* 5195 */ 153, 0, 0, 0, 0, 0, 0, 383, 2096, 0, 0, 322, 0, 2096, 2096, 2096, 2096, 2335, 2096, 2096, 307, 0, 0, 0,
  /* 5219 */ 41984, 0, 0, 2096, 64, 0, 153, 395, 0, 7680, 2096, 2096, 42032, 2096, 2096, 2096, 2096, 2096, 2096, 2268,
  /* 5239 */ 2096, 0, 2100, 78, 2100, 0, 0, 0, 0, 0, 0, 0, 2356, 2168, 2154, 2154, 2154, 2168, 2168, 0, 2096, 64, 393,
  /* 5262 */ 153, 0, 0, 0, 0, 2096, 2096, 2096, 2096, 2096, 64, 0, 320, 0, 323, 2096, 2096, 2096, 2096, 200, 201, 2096,
  /* 5284 */ 2251, 363, 0, 0, 2096, 2096, 2096, 2096, 2096, 2096, 2336, 307, 0, 0, 40960, 0, 0, 0, 2096, 0, 0, 355, 0,
  /* 5307 */ 2096, 41008, 2096, 2096, 2096, 2096, 2096, 2096, 302, 380, 0, 397, 2096, 2096, 2096, 2096, 2096, 64, 0, 0,
  /* 5327 */ 0, 0, 44544, 0, 0, 2096, 44592, 2096, 2096, 2096, 2275, 2096, 0, 0, 0, 255, 2096, 0, 0, 0, 306, 307, 0, 0,
  /* 5351 */ 2096, 0, 2101, 79, 2101, 0, 0, 0, 0, 0, 0, 0, 2366, 2169, 2155, 2155, 2155, 2169, 2169, 0, 2096, 392, 0,
  /* 5374 */ 394, 0, 0, 0, 152, 0, 153, 0, 0, 2096, 2188, 2096, 2096, 2096, 2096, 2096, 64, 64, 64, 64, 392, 0, 0, 0,
  /* 5398 */ 239, 0, 0, 0, 0, 177, 0, 2096, 2096, 0, 0, 5811, 2096, 2310, 2096, 2096, 2096, 230, 230, 64, 0, 0, 2096,
  /* 5421 */ 2096, 2340, 2096, 2096, 2096, 2344, 2096, 2096, 2096, 2324, 2096, 2096, 2096, 0, 343, 2096, 2096, 2096,
  /* 5439 */ 2096, 2096, 2328, 2096, 0, 2096, 3120, 0, 0, 0, 0, 311, 0, 0, 0, 6656, 88, 88, 88, 88, 6656, 6656, 6656,
  /* 5462 */ 6656, 6656, 6656, 6656, 6656, 2096, 2096, 2376, 2096, 2096, 2096, 2096, 2096, 2096, 2269, 2096, 2096, 2096,
  /* 5480 */ 2274, 2096, 2096, 2096, 2096, 2096, 2096, 2379, 2096, 237, 237, 153, 3632, 0, 0, 0, 0, 21598, 21598, 21598,
  /* 5500 */ 21598, 0, 356, 0, 0, 0, 2096, 0, 362, 0, 0, 365, 2096, 2096, 2096, 2096, 2096, 2096, 45104, 2096, 2096,
  /* 5521 */ 2096, 2096, 46128, 0, 0, 8704, 2096, 2096, 2096, 2338, 2096, 2096, 2096, 2096, 300, 302, 0, 0, 307, 35328,
  /* 5541 */ 0, 0, 0, 0, 0, 2096, 0, 0, 257, 0, 0, 385, 0, 0, 2096, 35376, 2096, 2096, 2096, 2341, 2096, 2343, 2096,
  /* 5564 */ 2096, 2096, 2247, 0, 0, 2230, 2096, 2096, 2096, 2096, 2096, 2096, 2240, 2102, 0, 0, 0, 0, 0, 0, 0, 4608, 0,
  /* 5587 */ 2121, 80, 2121, 0, 0, 0, 0, 23647, 23647, 23647, 23647, 23647, 0, 0, 0, 0, 0, 5192, 2096, 0, 2096, 2257,
  /* 5609 */ 2096, 2096, 2096, 2096, 2096, 2096, 379, 0, 9986, 0, 5811, 2096, 2096, 2096, 2096, 2096, 2175, 2096, 2096,
  /* 5628 */ 2182, 2096, 2096, 319, 0, 0, 0, 2096, 2096, 2096, 2096, 34352, 64, 307, 0, 0, 0, 0, 0, 0, 41520, 0, 10240,
  /* 5651 */ 0, 0, 11776, 2096, 2096, 2096, 351, 230, 64, 0, 352, 9216, 2096, 64, 0, 153, 0, 0, 0, 2096, 2096, 2096,
  /* 5673 */ 2448, 2096, 64, 10752, 0, 2096, 43568, 2096, 2096, 2096, 64, 64, 64, 405, 64, 0, 0, 0, 101, 117, 101, 101,
  /* 5695 */ 101, 101, 101, 118, 101, 101, 101, 118, 118, 0, 0, 251, 0, 0, 0, 2266, 0, 0, 0, 254, 2096, 0, 0, 0, 2253,
  /* 5720 */ 2096, 2096, 2096, 2320, 2096, 2096, 2096, 2096, 2096, 2096, 0, 2096, 39424, 0, 0, 0, 0, 0, 0, 2096, 2096,
  /* 5741 */ 2096, 2373, 2096, 2266, 2096, 0, 0, 0, 0, 0, 25696, 25696, 25696, 25696, 25696, 0, 0, 0, 0, 0, 5811, 0, 0,
  /* 5764 */ 0, 0, 0, 64, 0, 0, 2096, 2423, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2096, 2416, 2096, 2096, 2176, 2096,
  /* 5786 */ 2096, 2096, 2096, 2096, 2196, 2096, 64, 2096, 2096, 2189, 2096, 2096, 2096, 2197, 64, 403, 404, 64, 64, 0,
  /* 5806 */ 0, 0, 65, 16988, 16988, 16988, 16988, 16988, 0, 0, 0, 0, 168, 0, 0, 0, 2189, 0, 0, 0, 17408, 0, 0, 0, 0,
  /* 5831 */ 153, 0, 0, 0, 2103, 81, 2103, 0, 0, 0, 0, 0, 0, 0, 4672, 2096, 2096, 2190, 2096, 2096, 2096, 2096, 64, 0,
  /* 5855 */ 0, 169, 0, 0, 0, 2221, 0, 0, 0, 18432, 18432, 0, 18432, 0, 0, 0, 0, 18432, 18432, 18432, 18432, 18432,
  /* 5877 */ 18432, 0, 0, 2096, 2096, 2272, 2274, 2276, 0, 0, 232, 2096, 2096, 2323, 2096, 2325, 2327, 2329, 0, 0, 0,
  /* 5898 */ 20480, 0, 0, 0, 0, 13402, 13402, 13402, 13402, 13402, 0, 0, 0, 0, 0, 153, 0, 0, 2346, 2096, 2096, 2096, 0,
  /* 5921 */ 0, 0, 0, 304, 0, 0, 357, 0, 0, 2096, 361, 0, 0, 0, 20992, 0, 20992, 0, 0, 0, 2159, 2159, 2159, 2159, 2159,
  /* 5946 */ 2159, 2159, 2159, 0, 2096, 0, 2104, 82, 2104, 0, 0, 0, 0, 0, 0, 0, 7168, 2183, 2096, 2096, 0, 0, 0, 0, 165,
  /* 5971 */ 2096, 2096, 2175, 2235, 2096, 2096, 2096, 2096, 2096, 2420, 2421, 2096, 2252, 0, 0, 0, 2096, 2096, 2096,
  /* 5990 */ 2096, 2096, 2436, 2096, 2096, 2096, 2096, 2263, 2096, 2096, 2096, 2096, 2096, 2266, 2096, 2096, 283, 2096,
  /* 6008 */ 2096, 2096, 2096, 2096, 2096, 2096, 282, 2608, 2096, 0, 0, 0, 0, 0, 0, 26721, 26721, 26721, 26721, 2388, 0,
  /* 6029 */ 0, 2096, 2096, 2096, 2096, 2096, 2267, 2096, 2096, 0, 364, 0, 2096, 2096, 2096, 2415, 2096, 2096, 2096,
  /* 6048 */ 2377, 2096, 2096, 2096, 2096, 178, 178, 2096, 2096, 0, 2439, 0, 0, 0, 0, 396, 0, 0, 0, 31792, 2096, 2096,
  /* 6070 */ 2096, 2096, 377, 0, 0, 2096, 2096, 36400, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2345, 2105, 0, 0, 0, 0,
  /* 6091 */ 0, 0, 0, 14848, 0, 2122, 0, 2122, 0, 0, 0, 0, 28672, 28672, 28672, 28672, 28672, 0, 0, 0, 0, 0, 24576,
  /* 6114 */ 28160, 0, 166, 0, 0, 171, 0, 0, 2096, 0, 2096, 0, 0, 0, 0, 0, 0, 2096, 2096, 2233, 2096, 2237, 2096, 2096,
  /* 6138 */ 2096, 2096, 43056, 2096, 2096, 2096, 2096, 39472, 2096, 2096, 2096, 2096, 2396, 2096, 2096, 2096, 2096,
  /* 6155 */ 2419, 2096, 2096, 2096, 2096, 38448, 2096, 2096, 2096, 230, 230, 64, 46080, 0, 2096, 2245, 2096, 2096, 0,
  /* 6174 */ 0, 2096, 2096, 2096, 2096, 2096, 48, 2096, 0, 0, 2233, 0, 0, 0, 2096, 2096, 2096, 2096, 2175, 2183, 2096,
  /* 6195 */ 2096, 2256, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 0, 0, 0, 0, 0, 0, 0, 0, 64, 2096, 2262, 2096,
  /* 6217 */ 2096, 2096, 2096, 2096, 2096, 2096, 2380, 0, 245, 0, 0, 0, 0, 249, 0, 0, 0, 45568, 11264, 33840, 2096,
  /* 6238 */ 45616, 259, 260, 5811, 2096, 2096, 2096, 2312, 2096, 2096, 2096, 2384, 2096, 2096, 2096, 2096, 301, 302, 0,
  /* 6257 */ 0, 282, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2241, 2096, 2339, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6275 */ 2096, 2387, 0, 0, 314, 0, 0, 0, 0, 2096, 2096, 2096, 2374, 0, 321, 0, 0, 2096, 2096, 2096, 2096, 2180,
  /* 6297 */ 2096, 2185, 2096, 48, 2096, 2096, 0, 0, 0, 0, 0, 30306, 30306, 30306, 30306, 30306, 0, 0, 0, 0, 0, 48640,
  /* 6319 */ 48640, 0, 44080, 2096, 2096, 2096, 0, 0, 0, 2096, 2096, 2096, 2184, 2193, 2096, 2096, 2096, 2096, 2096, 0,
  /* 6339 */ 0, 0, 2426, 0, 0, 36864, 0, 0, 382, 0, 2096, 2333, 2096, 2096, 2096, 2096, 2096, 2185, 2397, 2096, 384, 0,
  /* 6361 */ 0, 0, 0, 2435, 2096, 36912, 39984, 2096, 2096, 2096, 2096, 2096, 2437, 2096, 2096, 2096, 2395, 2096, 2096,
  /* 6380 */ 2096, 2096, 2181, 2096, 2096, 2096, 2096, 2096, 2177, 131, 2096, 2184, 2096, 2186, 2184, 2096, 2096, 0,
  /* 6398 */ 162, 163, 0, 0, 0, 5192, 5192, 5192, 5192, 5192, 5192, 5192, 5192, 0, 2096, 0, 167, 0, 0, 172, 0, 2096, 0,
  /* 6421 */ 342, 2096, 2096, 2096, 2096, 2393, 2096, 2096, 2246, 2096, 0, 0, 2231, 35000, 2096, 2236, 2096, 2238, 2096,
  /* 6440 */ 2096, 2096, 2194, 2096, 2096, 2096, 64, 2096, 2096, 2316, 2096, 2096, 2096, 2096, 2319, 2096, 2096, 31232,
  /* 6458 */ 0, 0, 0, 0, 0, 31280, 2096, 2096, 2096, 2096, 2271, 2096, 2096, 2096, 0, 0, 0, 164, 0, 0, 2106, 0, 2106, 0,
  /* 6482 */ 0, 0, 0, 0, 0, 0, 20992, 2096, 2174, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2398, 2096, 2096, 2207, 0,
  /* 6503 */ 0, 0, 0, 0, 46592, 0, 0, 0, 2207, 2096, 2096, 2096, 0, 0, 2096, 2096, 2447, 2096, 2096, 64, 2096, 2096,
  /* 6525 */ 2096, 37936, 2096, 2096, 2096, 2096, 2195, 2096, 2096, 64, 2096, 2322, 2096, 2096, 2096, 2096, 2096, 0, 0,
  /* 6544 */ 2250, 2096, 0, 313, 0, 0, 0, 0, 0, 2096, 2096, 32816, 2096, 2096, 2345, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6565 */ 2096, 2422, 2096, 2417, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2438, 2107, 0, 0, 0, 0, 0, 0, 0, 23040,
  /* 6586 */ 0, 2107, 83, 2135, 0, 0, 0, 0, 306, 307, 156, 0, 2096, 2096, 2096, 2273, 2096, 2096, 0, 231, 0, 0, 0,
  /* 6609 */ 46592, 46592, 46592, 46592, 46592, 46592, 46592, 46592, 0, 0, 0, 0, 253, 0, 2096, 0, 0, 0, 306, 307, 5358,
  /* 6630 */ 5359, 2096, 0, 2332, 2096, 2334, 2096, 2096, 2096, 2185, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2242,
  /* 6648 */ 2108, 0, 0, 0, 0, 0, 0, 0, 315, 0, 0, 0, 2096, 0, 354, 0, 0, 0, 2123, 0, 2123, 0, 0, 0, 0, 358, 0, 2096, 0,
  /* 6677 */ 0, 2096, 2392, 2096, 2096, 2096, 48, 2096, 2096, 302, 0, 2096, 2096, 2191, 2096, 2096, 2096, 2096, 64, 0,
  /* 6697 */ 0, 170, 0, 0, 0, 2191, 0, 0, 0, 49152, 0, 0, 0, 0, 2155, 2155, 2155, 2155, 2155, 2155, 2155, 2155, 48,
  /* 6720 */ 2096, 2096, 2264, 2096, 2096, 2096, 2096, 2260, 2096, 2096, 2096, 0, 0, 5811, 2309, 2096, 2096, 2096, 2096,
  /* 6739 */ 2265, 2096, 2096, 2096, 2096, 2315, 2096, 2096, 38960, 2096, 2318, 2096, 2096, 2096, 2418, 2096, 2096,
  /* 6756 */ 2096, 2096, 301, 302, 32256, 0, 2381, 2096, 2383, 2096, 2096, 2096, 2096, 2096, 2378, 2096, 2096, 2096,
  /* 6774 */ 2096, 2197, 0, 0, 0, 0, 0, 386, 0, 2096, 2096, 2096, 2178, 2096, 2096, 2096, 2096, 2239, 2096, 40448, 0, 0,
  /* 6796 */ 0, 359, 2096, 0, 0, 32304, 2096, 35888, 2096, 2096, 37424, 2096, 40496, 2096, 2096, 2096, 2096, 2096, 2386,
  /* 6815 */ 2096, 2096, 2096, 2096, 2424, 2096, 0, 0, 0, 2096, 2096, 2255, 2096, 2096, 2096, 2096, 42544, 2096, 2096,
  /* 6834 */ 2096, 2096, 2326, 2096, 2096, 0, 0, 2109, 84, 2109, 0, 0, 0, 0, 0, 0, 0, 2173, 2096, 2096, 2096, 2096,
  /* 6856 */ 2096, 2096, 2096, 2243, 2187, 2096, 2096, 2096, 2096, 2096, 2096, 64, 2096, 2206, 2096, 160, 0, 0, 0, 0,
  /* 6876 */ 2096, 33280, 0, 0, 37376, 2096, 2096, 2258, 2259, 2096, 2096, 2096, 2096, 2342, 2096, 2096, 2096, 2255,
  /* 6894 */ 2096, 2096, 2096, 2096, 229, 0, 0, 0, 0, 236, 0, 0, 2096, 2096, 2290, 0, 0, 0, 49152, 49152, 49152, 49152,
  /* 6916 */ 49152, 49152, 49152, 49152, 0, 0, 0, 0, 246, 0, 0, 0, 0, 0, 2096, 33328, 2096, 2096, 2096, 2193, 2096,
  /* 6937 */ 2096, 2096, 64, 0, 0, 5811, 2096, 2096, 2096, 2096, 2313, 2314, 2096, 2096, 2096, 2096, 2096, 2096, 2096,
  /* 6956 */ 2270, 0, 0, 304, 236, 0, 0, 0, 2096, 2096, 2414, 2096, 2096, 2096, 2382, 2096, 2096, 2096, 2096, 2096,
  /* 6976 */ 2096, 2261, 2096, 2394, 2096, 2096, 2096, 2096, 2096, 2096, 2096, 2338, 0, 0, 2446, 2096, 2096, 2096, 2096,
  /* 6995 */ 64, 402, 402, 64, 64, 64, 0, 0, 0, 2122, 2122, 2122, 2122, 2122, 2122, 2122, 2122, 0, 2096, 0, 2110, 85,
  /* 7017 */ 2110, 0, 0, 0, 0, 0, 0, 0, 0, 2111, 0, 2111, 0, 0, 0, 0, 0, 0, 0, 2096, 2096, 2192, 2096, 2096, 2096, 2096,
  /* 7043 */ 64, 2096, 2096, 2234, 2096, 2096, 2096, 2096, 2096, 2395, 302, 0, 2234, 0, 0, 0, 2096, 2096, 2096, 2096,
  /* 7063 */ 2385, 2096, 2096, 2096, 0, 237, 0, 0, 2096, 2096, 2096, 0, 0, 67, 0, 0, 0, 0, 0, 20480, 153, 0, 0, 2096,
  /* 7087 */ 2096, 2194, 0, 0, 0, 0, 0, 2151, 2151, 2151, 2151, 2151, 2151, 2151, 2151, 0, 2096, 2244, 2096, 2096, 2096,
  /* 7108 */ 0, 0, 2096, 2096, 2096, 2255, 0, 0, 0, 303, 2304, 2096, 2096, 2096, 2096, 2096, 2096, 0, 8192, 0, 2096, 0,
  /* 7130 */ 46592, 0, 46592, 0, 0, 0, 0, 2152, 2152, 2152, 2152, 2152, 2152, 2152, 2152, 0, 2096, 0, 0, 48128, 0, 0, 0,
  /* 7153 */ 0, 0, 2153, 2153, 2153, 2153, 2153, 2153, 2153, 2167, 0, 48640, 0, 0, 0, 0, 0, 0, 2154, 2154, 2154, 2154,
  /* 7175 */ 2154, 2154, 2154, 2168, 48640, 48640, 48640, 48640, 48640, 48640, 0, 0, 0, 48640, 0, 0, 48640, 0, 1536, 0,
  /* 7195 */ 0, 0, 0, 0, 0, 2156, 2156, 2156, 2156, 2156, 2156, 2156, 2156, 0, 2096
];

Web_C.EXPECTED =
[
  /*   0 */ 76, 80, 84, 97, 241, 244, 247, 88, 96, 253, 147, 95, 250, 96, 102, 106, 110, 112, 98, 116, 120, 91, 126,
  /*  23 */ 122, 130, 134, 138, 142, 146, 238, 151, 160, 156, 164, 222, 154, 170, 178, 165, 222, 235, 188, 165, 177,
  /*  44 */ 165, 202, 165, 165, 165, 165, 165, 173, 182, 186, 166, 228, 192, 196, 200, 165, 206, 210, 216, 220, 165,
  /*  65 */ 226, 232, 257, 261, 212, 265, 269, 273, 277, 281, 285, 289, 293, 293, 296, 300, 304, 308, 318, 311, 314,
  /*  86 */ 322, 326, 374, 380, 383, 375, 416, 375, 400, 391, 375, 375, 375, 375, 399, 409, 375, 437, 404, 341, 346,
  /* 107 */ 369, 369, 582, 332, 375, 375, 375, 394, 375, 405, 369, 369, 594, 598, 375, 375, 375, 420, 412, 424, 582,
  /* 128 */ 596, 335, 430, 399, 423, 431, 435, 368, 493, 615, 471, 443, 447, 451, 456, 455, 460, 464, 468, 369, 369,
  /* 149 */ 369, 329, 475, 369, 575, 369, 475, 369, 369, 370, 360, 481, 485, 497, 501, 581, 369, 369, 369, 369, 545,
  /* 170 */ 488, 369, 500, 369, 510, 521, 525, 516, 369, 369, 369, 633, 528, 532, 534, 534, 538, 541, 369, 369, 499,
  /* 191 */ 369, 631, 369, 369, 559, 561, 565, 640, 569, 579, 369, 369, 369, 505, 369, 545, 369, 425, 586, 608, 591,
  /* 212 */ 369, 369, 546, 439, 555, 602, 353, 655, 546, 573, 369, 369, 632, 369, 545, 369, 369, 439, 587, 551, 606,
  /* 233 */ 645, 630, 369, 547, 476, 369, 513, 411, 369, 340, 345, 369, 350, 357, 369, 364, 376, 375, 336, 398, 375,
  /* 254 */ 367, 387, 345, 554, 613, 609, 597, 619, 571, 369, 369, 624, 628, 369, 426, 637, 609, 597, 620, 661, 369,
  /* 275 */ 517, 644, 630, 477, 649, 653, 659, 506, 669, 666, 662, 491, 668, 370, 2056, 2304, 268437504, 536872960,
  /* 293 */ 2048, 2048, 2048, 2048, 2304, 2048, 268437504, 2048, 268438520, 2048, 268442616, -276813824, -813684736,
  /* 306 */ -813684736, -813684736, -8378368, -545249280, -545249280, 276586488, 276586492, 1887199224, 276586488,
  /* 315 */ 276815864, 813457400, 276586488, 276717560, 813457400, 1350328312, 276586488, 813686776, -537100296,
  /* 324 */ -537100296, -537100296, -8, -8, 2048, 8, 0, 0, 16384, 1572864, 2097152, 4194304, 8, 8, 8, 131072, 0, 128,
  /* 342 */ 512, 512, 72, 72, 24, 40, 0, 0, 0, 512, 8, 8192, 16384, 98304, 393216, 16777216, 201326592, 0x80000000, 0,
  /* 361 */ 0, 96, 1024, 8142848, 1024, 8, 8, 256, 0, 0, 0, 0, -1073741824, 40, 8, 8, 8, 8, 72, 8273920, 8372224, 8, 8,
  /* 384 */ 512, 1024, 512, 128, 128, 512, 512, 3932160, 4194304, 1024, 8, 131072, 98304, 8, 229376, 8, 8, 8, 256, 128,
  /* 404 */ 128, 128, 128, 128, 72, 256, 256, 0, 128, 0, 0, 16384, 131072, 32768, 65536, 8, 131072, 8, 256, 128, 128, 0,
  /* 426 */ 0, 0, 1, 2, 1048576, 2097152, 8, 8, 8, 256, 256, 256, 256, 0, 0, 1, 16, 384, 33558536, 16777216,
  /* 446 */ -1879048192, 16777250, 218097271, 218097279, 218099327, 251655807, 234874871, 234876927, 268433407,
  /* 455 */ -1291841502, -1325395934, -1325395934, -1325395934, -1325395934, -1291841494, -1325395926, -1325395934,
  /* 463 */ -1291841494, -251654110, -217573334, -1107298689, -1107296641, -1107296257, -385, -1, 0, 0, 8192, 8,
  /* 475 */ 268435456, 0x80000000, 0, 0, 0, 2, 6, 96, 1024, 114688, 262144, 7340032, 134217728, 0, 0, 32768, 4194304,
  /* 492 */ 16777216, 0, 2, 32, 2048, 224, 0, 0, 268435456, 536870912, 0x80000000, 0, 0, 536870912, 0, 0, 0, 4194304, 0,
  /* 511 */ 33554432, 67108864, 0, 2, 32, 1073741824, 0, 0, 0, 16, 1073741824, 0, 0, 67108864, 29546897, -2080309248,
  /* 527 */ 939524096, 2013265920, 939524096, 939524096, 2013265920, 939524096, -2013265957, -2013265957, -2013265957,
  /* 536 */ -939524133, -2013265957, -2013265957, -939524129, -939524097, -37, -37, -1, -1, 0, 33554432, 0, 0, 0,
  /* 550 */ 268435456, 180224, 4194304, 25165824, 0, 3, 16, 64, 128, 805306368, 0, 0, 0, 3, 24, 192, 768, 3072, 4096,
  /* 569 */ 25165824, 33554432, 0, 0, 4, 32, 0, 0, 32, 0, 3, 28, 224, 0, 0, 0, 8, 16, 128, 256, 2048, 4096, 4194304,
  /* 592 */ 25165824, 65536, 0, 8, 16384, 524288, 1048576, 2097152, 4194304, 8, 256, 512, 2048, 4096, 128, 256, 4096,
  /* 609 */ 16384, 32768, 131072, 262144, 128, 256, 4096, 8192, 524288, 1073741824, 8388608, 16777216, 33554432, 0, 0,
  /* 624 */ 128, 256, 16384, 32768, 131072, 4194304, 16777216, 65536, 0, 0, 0, 1073741824, 0, 16, 128, 256, 8192,
  /* 641 */ 1032192, 1048576, 6291456, 128, 32768, 131072, 4194304, 8388608, 16, 128, 8192, 32768, 131072, 262144,
  /* 655 */ 524288, 1048576, 6291456, 25165824, 4194304, 16777216, 0, 4, 0, 0, 0, 2, 1048576, 4194304, 16777216, 0, 0,
  /* 672 */ 0
];

Web_C.TOKEN =
[
  "(0)",
  "END",
  "EOF",
  "Identifier",
  "'null'",
  "'true'",
  "'false'",
  "Character",
  "String",
  "Real",
  "Comment",
  "WhiteSpace",
  "'!'",
  "'!='",
  "'#define'",
  "'#elif'",
  "'#else'",
  "'#endif'",
  "'#if'",
  "'#ifdef'",
  "'#ifndef'",
  "'#include'",
  "'#undef'",
  "'%'",
  "'%='",
  "'&'",
  "'&&'",
  "'&='",
  "'('",
  "')'",
  "'*'",
  "'*='",
  "'+'",
  "'++'",
  "'+='",
  "','",
  "'-'",
  "'--'",
  "'-='",
  "'->'",
  "'.'",
  "'/'",
  "'/='",
  "':'",
  "';'",
  "'<'",
  "'<<'",
  "'<<='",
  "'<='",
  "'='",
  "'=='",
  "'>'",
  "'>='",
  "'>>'",
  "'>>='",
  "'?'",
  "'['",
  "']'",
  "'^'",
  "'^='",
  "'auto'",
  "'break'",
  "'case'",
  "'char'",
  "'const'",
  "'continue'",
  "'default'",
  "'do'",
  "'double'",
  "'else'",
  "'enum'",
  "'extern'",
  "'float'",
  "'for'",
  "'if'",
  "'int'",
  "'long'",
  "'return'",
  "'short'",
  "'signed'",
  "'sizeof'",
  "'static'",
  "'struct'",
  "'switch'",
  "'typedef'",
  "'union'",
  "'unsigned'",
  "'void'",
  "'volatile'",
  "'while'",
  "'{'",
  "'|'",
  "'|='",
  "'||'",
  "'}'",
  "'~'"
];

// End
/**
 * @license
 * Copyright 2020 Roberto Luiz Souza Monteiro,
 *                Renata Souza Barreto,
 *                Hernane Borges de Barros Pereira.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Web-C compiler class.
 * @class
 */
function WebCCompiler() {
    init();

    /**
     * Creates the attributes of the class.
     */
    function init() {
        binaryExpression = ['Operation',
                            'VariableAssignment',
                            'ConditionalExpression',
                            'LogicalORExpression',
                            'LogicalANDExpression',
                            'BitwiseORExpression',
                            'BitwiseXORExpression',
                            'BitwiseANDExpression',
                            'EqualityExpression',
                            'RelationalExpression',
                            'ShiftExpression',
                            'AdditiveExpression',
                            'MultiplicativeExpression'];
    }

    /**
     * Convert XML to JSON.
     * @param {xml}    xml - The XML data.
     * @return {json}  XML data converted to a JSON object.
     */
    this.xmlToJson = function(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
                for (var i = 0; i < xml.children.length; i++) {
                    var item = xml.children.item(i);
                    nodeName = item.nodeName;
                    if (typeof(obj[nodeName]) == 'undefined') {
                        obj[nodeName] = this.xmlToJson(item);
                    } else {
                        if (typeof(obj[nodeName].push) == 'undefined') {
                            var old = obj[nodeName];
                            obj[nodeName] = [];
                            obj[nodeName].push(old);
                        }
                        obj[nodeName].push(this.xmlToJson(item));
                    }
                }
            } else {
                obj = xml.textContent;
            }
            return obj;
        } catch (e) {
            console.log(e.message);
        }
    }
    
    /**
     * Compiles the Web-C XML tree for Maia Internal Code (MIL).
     * @param {xml}    xml - The XML data.
     * @param {string} itemName - Name of the item being analyzed.
     * @return {json}  XML data converted to a MIL object.
     */
    this.xmlToMil = function(xml, itemName = '') {
        try {
            var obj = {};

            if (itemName == '') {
                if (xml.children.length > 0) {
                    for (var i = 0; i < xml.children.length; i++) {
                        var item = xml.children.item(i);
                        nodeName = item.nodeName;
                        if (typeof(obj[nodeName]) == 'undefined') {
                            obj[nodeName] = this.xmlToMil(item, nodeName);
                        } else {
                            if (typeof(obj[nodeName].push) == 'undefined') {
                                var old = obj[nodeName];
                                obj[nodeName] = [];
                                obj[nodeName].push(old);
                            }
                            obj[nodeName].push(this.xmlToMil(item, nodeName));
                        }
                    }
                } else {
                    obj = xml.textContent;
                }
            } else {
                if (binaryExpression.includes(itemName)) {
                    if (xml.children.length > 1) {
                        for (var i = 0; i < xml.children.length; i++) {
                            var item = xml.children.item(i);
                            nodeName = item.nodeName;
                            if (nodeName != 'TOKEN') {
                                opName = 'op';
                            } else {
                                opName = nodeName;
                            }
                            if (typeof(obj[opName]) == 'undefined') {
                                obj[opName] = this.xmlToMil(item, nodeName);
                            } else {
                                if (typeof(obj[opName].push) == 'undefined') {
                                    var old = obj[opName];
                                    obj[opName] = [];
                                    obj[opName].push(old);
                                }
                                obj[opName].push(this.xmlToMil(item, nodeName));
                            }
                        }
                    } else if (xml.children.length == 1) {
                        var item = xml.children.item(0);
                        nodeName = item.nodeName;
                        obj = this.xmlToMil(item, nodeName);
                    } else {
                        obj = xml.textContent;
                    }
                } else {
                    if (xml.children.length > 0) {
                        for (var i = 0; i < xml.children.length; i++) {
                            var item = xml.children.item(i);
                            nodeName = item.nodeName;
                            if (typeof(obj[nodeName]) == 'undefined') {
                                obj[nodeName] = this.xmlToMil(item, nodeName);
                            } else {
                                if (typeof(obj[nodeName].push) == 'undefined') {
                                    var old = obj[nodeName];
                                    obj[nodeName] = [];
                                    obj[nodeName].push(old);
                                }
                                obj[nodeName].push(this.xmlToMil(item, nodeName));
                            }
                        }
                    } else {
                        obj = xml.textContent;
                    }
                }
            }
            return obj;
        } catch (e) {
            console.log(e.message);
        }
    }
    
    /**
     * Compiles the Web-C XML tree for JavaScript.
     * @param {xml}      xml - The XML data.
     * @return {string}  XML data converted to JavaScript.
     */
    this.compile = function(xml) {
        var nodeInfo = {
            'parentNode': '',
            'childNode': 'Program',
            'terminalNode' : ''
        };

        var mil = {};
        //var js = "";

        mil = this.xmlToMil(xml);
        //js = this.parse(mil, nodeInfo);

        return JSON.stringify(mil);
        //return js;
    }
}
/**
 * @license
 * Copyright 2020 Roberto Luiz Souza Monteiro,
 *                Renata Souza Barreto,
 *                Hernane Borges de Barros Pereira.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Web-C virtual machine.
 * @class
 */
function WebCVM() {
    init();

    /**
     * Creates the attributes of the class.
     */
    function init() {
        // Class attributes goes here.
        compiledCode = {
            'xml': '',
            'mil': '',
            'js': ''
        }
    }

    /**
     * Compiles Web-C code, contained in <script> tags for JavaScript
     * and inserts the compiled code in a new <script> tag in the <body> tag
     * of the document.
     * 
     * Web-C codes must be in <script> tags of type 'text/web-c',
     * as in the following example:
     * 
     * <script type='text/web-c'> ... </script>
     * 
     * This method must be called from the onLoad event of the document's
     * <body> tag, as in the following example:
     * 
     * <body onload='webcvm.compile()'> ... </body>
     */
    this.compile = function() {
        var scripts = document.querySelectorAll('script[type="text/web-c"]');
        for (index in scripts) {
            if (typeof scripts[index].getAttribute != 'undefined') {
                var fileName = scripts[index].getAttribute('src');
                if (typeof fileName != 'undefined') {
                    if (fileName) {
                        compiledCode.maia = '';
                        fetch(fileName)
                            .then(response => response.text())
                            .then(data => {
                                var code = data;
                                if (typeof code != 'undefined') {
                                    if (typeof code == 'string') {
                                        compiledCode.xml = '';

                                        function getXml(data) {
                                            compiledCode.xml += data;
                                        }
                                        var s = new Web_C.XmlSerializer(getXml, true);
                                        var maiaScriptParser = new Web_C(code, s);
                                        try {
                                            maiaScriptParser.parse_Program();
                                        } catch (pe) {
                                            if (!(pe instanceof maiaScriptParser.ParseException)) {
                                                throw pe;
                                            } else {
                                                var parserError = maiaScriptParser.getErrorMessage(pe);
                                                console.log(parserError);
                                                throw parserError;
                                            }
                                        }
                                        var parser = new DOMParser();
                                        var xml = parser.parseFromString(compiledCode.xml, 'text/xml');
                                        var compiler = new WebCCompiler();
                                        compiledCode.js = compiler.compile(xml);
                                        try {
                                            var script = document.createElement('script');
                                            script.type = 'text/javascript';
                                            script.text = compiledCode.js;
                                            document.body.appendChild(script);
                                        } catch (se) {
                                            var scriptError = se.message;
                                            console.log(scriptError);
                                            throw scriptError;
                                        }
                                    }
                                }
                            });
                    }
                }
            }
            var code = scripts[index].innerHTML;
            if (typeof code != 'undefined') {
                if (typeof code == 'string') {
                    compiledCode.xml = '';

                    function getXml(data) {
                        compiledCode.xml += data;
                    }
                    var s = new Web-C.XmlSerializer(getXml, true);
                    var maiaScriptParser = new Web-C(code, s);
                    try {
                        maiaScriptParser.parse_Program();
                    } catch (pe) {
                        if (!(pe instanceof maiaScriptParser.ParseException)) {
                            throw pe;
                        } else {
                            var parserError = maiaScriptParser.getErrorMessage(pe);
                            console.log(parserError);
                            throw parserError;
                        }
                    }
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(compiledCode.xml, 'text/xml');
                    var compiler = new WebCCompiler();
                    compiledCode.js = compiler.compile(xml);
                    try {
                        var script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.text = compiledCode.js;
                        document.body.appendChild(script);
                    } catch (se) {
                        var scriptError = se.message;
                        console.log(scriptError);
                        throw scriptError;
                    }
                }
            }
        }
    }

    /**
     * Compiles the Web-C code passed as a command line argument
     * and executes the code in the JavaScript interpreter from which
     * this method was invoked.
     */
    this.run = function() {
        // Supports only the Node.js interpreter.
        if (typeof process !== 'undefined') {
            var command = 'node';
            var argv = process.argv.slice();
            compiledCode.xml = '';
            var fs = require('fs');
            var readTextFile = fs.readFileSync;

            function getXml(data) {
                compiledCode.xml += data;
            }

            function read(input) {
                if (/^{.*}$/.test(input)) {
                    return input.substring(1, input.length - 1);
                } else {
                    var content = readTextFile(input, 'utf-8');
                    return content.length > 0 && content.charCodeAt(0) == 0xFEFF ? content.substring(1) : content;
                }
            }

            var justCompile = false;
            var inputFile;
            var outputFile;
            var outputFileType = 'js';
            var outputContents = '';
            if (argv.length > 2) {
                var i = 2;
                while (i < argv.length) {
                    if (argv[i] == '-c') {
                        justCompile = true;
                        outputFileType = 'js';
                    } else if (argv[i] == '-m') {
                        justCompile = true;
                        outputFileType = 'mil';
                    } else if (argv[i] == '-x') {
                        justCompile = true;
                        outputFileType = 'xml';
                    } else if ((argv[i] == '-h') || (argv[i] == '--help')) {
                        console.log('Web-C Command Line Interface (CLI)');
                        console.log('Usage: webc [options] [script.maia] [--] [arguments]');
                        console.log('Options:');
                        console.log('-c                          Just compile to JS, don\'t run the script;');
                        console.log('-m                          Just compile to MIL, don\'t run the script;');
                        console.log('-x                          Just compile to XML, don\'t run the script;');
                        console.log('-h     --help               Displays this help message;');
                        console.log('-o     <script.js>          Output file name;');
                        console.log('       --                   End of compiler options.\n');

                        process.exit()
                    } else if (argv[i] == '-o') {
                        i++;
                        outputFile = argv[i];
                    } else if (argv[i] == '--') {
                        break;
                    } else {
                        inputFile = argv[i];
                        break;
                    }
                    i++;
                }

                if (typeof inputFile != 'undefined') {
                    var code = read(String(inputFile));
                    var s = new Web_C.XmlSerializer(getXml, false);
                    var maiaScriptParser = new Web_C(code, s);
                    try {
                        maiaScriptParser.parse_Program();
                    } catch (pe) {
                        if (!(pe instanceof maiaScriptParser.ParseException)) {
                            throw pe;
                        } else {
                            var parserError = maiaScriptParser.getErrorMessage(pe);
                            console.log(parserError);
                            throw parserError;
                        }
                    }
                    var parser = new DOMParser();
                    var xml = parser.parseFromString(compiledCode.xml, 'text/xml');
                    var compiler = new WebCCompiler();
                    compiledCode.mil = compiler.xmlToMil(xml);
                    compiledCode.js = compiler.compile(xml);
                    if (justCompile) {
                        if (typeof outputFile == 'undefined') {
                            var fileName = inputFile.split('.').shift();
                            if (outputFileType == 'js') {
                                outputFile = fileName + '.js';
                                outputContents = compiledCode.js;
                            } else if (outputFileType == 'mil') {
                                outputFile = fileName + '.mil';
                                outputContents = JSON.stringify(compiledCode.mil);
                            } else if (outputFileType == 'xml') {
                                outputFile = fileName + '.xml';
                                outputContents = compiledCode.xml;
                            } else {
                                outputFile = fileName + '.js';
                                outputContents = compiledCode.js;
                            }
                        } else {
                            outputContents = compiledCode.js;
                        }
                        fs.writeFile(outputFile, outputContents, function(err) {
                            if (err) {
                                throw err;
                            }
                        });
                    } else {
                        try {
                            const vm = require('vm');
                            const script = new vm.Script(compiledCode.js);
                            script.runInThisContext();
                        } catch (e) {
                            var evalError = e.message;
                            console.log(evalError);
                        }
                    }
                } else {
                    console.log('Web-C Command Line Interface (CLI)');
                    console.log('Usage: webc [options] [script.maia] [--] [arguments]');
                }
            } else {
                var options = {
                    input: process.stdin,
                    output: process.stdout
                }

                // Command prompt.
                const readline = require('readline');
                const rl = readline.createInterface(options);

                rl.setPrompt(': ');
                rl.prompt();

                function runCommand(commandLine) {
                    var res;
                    if (commandLine.trim() == 'exit') {
                        process.exit(0);
                    }
                    try {
                        res = core.eval(commandLine);
                    } catch (e) {
                        var evalError = e.message;
                        console.log(evalError);
                    }
                    if (typeof res != 'undefined') {
                        console.log(res);
                    }
                    rl.prompt();
                }

                rl.on('line', runCommand);
            }
        }
    }
}

webcvm = new WebCVM();

/*
 * Run Web-C code if this script has been invoked
 * from the command line.
 */
if (typeof process !== 'undefined') {
    // Emulate DOM.
    const jsdom = require("jsdom");
    const {JSDOM} = jsdom;
    var doc = new JSDOM();
    var DOMParser = doc.window.DOMParser;

    webcvm.run();
}