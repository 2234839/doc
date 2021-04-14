# ((20210411105659-pcgjcao "{{.text}}"))
{: id="20210414122534-unbmhb3" updated="20210414123806"}

此文档来自对 ((20210414122455-mqv4xo9 "{{.text}}")) 的整理。
{: id="20210414133152-ygcpacf" updated="20210414133228"}

总得来说使用下面这些需要小心谨慎
{: id="20210414133229-epjbo70" updated="20210414133551"}

- {: id="20210414133415-6tq4qbs"}构造相关
  {: id="20210414133415-zzruzm8" updated="20210414133421"}

  - {: id="20210414133422-q32wle5"}`Array` `ArrayBuffer` `Date` `Function` `RegExp`
    {: id="20210414133422-7s37gpc" updated="20210414133536"}
  {: id="20210414133422-a9wjuu4"}
- {: id="20210414133547-k6tpyf8"}方法调用相关
  {: id="20210414133546-y8fr1g2" updated="20210414133600"}

  - {: id="20210414133602-4xbuitv"}String
    {: id="20210414133602-n5ahu3z" updated="20210414133847"}

    - {: id="20210414133848-0ie16em"}`String.fromCodePoint()`
      {: id="20210414133848-ck6zxx7" updated="20210414133848"}
    - {: id="20210414133850-1s05fp9"}`String.prototype.repeat()`
      {: id="20210414133850-x98y1p3" updated="20210414133850"}
    {: id="20210414133848-kensbuu"}
  - {: id="20210414133743-jb6xvwm"}`Date.parse()`
    {: id="20210414133743-k9aw9m0" updated="20210414133743"}
  - {: id="20210414133734-ovvd86q"}Number
    {: id="20210414133734-4dz6dqa" updated="20210414133820"}

    - {: id="20210414133820-nnbsd04"}`Number.prototype.toExponential()`
      {: id="20210414133820-nudtqjy" updated="20210414133820"}
    - {: id="20210414133825-h2ep561"}[`Number.prototype.toFixed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
      {: id="20210414133825-cxvvz6z" updated="20210414133825"}
    - {: id="20210414133829-o5kea0m"}`Number.prototype.toPrecision()`
      {: id="20210414133829-outckvn" updated="20210414133829"}
    - {: id="20210414133831-cx4x1wp"}`Number.prototype.toString()`
      {: id="20210414133831-1xh9dsy" updated="20210414133835"}
    {: id="20210414133821-ohld38v"}
  - {: id="20210414133848-srjxiib"}JSON
    {: id="20210414133850-5dclcb4" updated="20210414134019"}

    - {: id="20210414134020-ymzdhao"}`JSON.parse()`
      {: id="20210414134020-zepa3hl" updated="20210414134020"}
    - {: id="20210414134021-4n39tfc"}`JSON.stringify()`
      {: id="20210414134021-oklqkp1" updated="20210414134021"}
    {: id="20210414134020-hhijy1v"}
  - {: id="20210414133950-0f40j25"}`Object.create()`
    {: id="20210414133950-9sihuap" updated="20210414133956"}
  - {: id="20210414133959-7grpvqd"}`Symbol.keyFor()`
    {: id="20210414133959-0tpbph9" updated="20210414133958"}
  - {: id="20210414134020-shgslda"}`instanceof`
    {: id="20210414134021-xkcj3i2"}
  - {: id="20210414134050-udbc8j5"}URI
    {: id="20210414134050-h7hmqzu" updated="20210414134113"}

    - {: id="20210414134115-2wrd6iu"}`decodeURI()`
      {: id="20210414134115-uz2j1qw" updated="20210414134115"}
    - {: id="20210414134121-vxmku5s"}`encodeURI()`
      {: id="20210414134121-oif058c" updated="20210414134129"}
    - {: id="20210414134130-larwdpq"}[`encodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)
      {: id="20210414134130-3nia3g1" updated="20210414134130"}
    - {: id="20210414134136-4z2of8q"}[`decodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent)
      {: id="20210414134136-fdigb3j" updated="20210414134136"}
    {: id="20210414134116-czl0mbl"}
  - {: id="20210414134144-s60gceu"}Function
    {: id="20210414134139-9rinrhg" updated="20210414134200"}

    - {: id="20210414134201-qfl3fpc"}`Function.prototype.call()`
      {: id="20210414134201-s460ff5" updated="20210414134218"}
    - {: id="20210414134220-qg0aud4"}`Function.prototype.apply()`
      {: id="20210414134220-515zqhk" updated="20210414134222"}
    {: id="20210414134201-4wprbk0"}
  {: id="20210414133602-u96k5o6"}
{: id="20210414133415-4a86di0" updated="20210414133415"}

## 特殊场景下的错误
{: id="20210414125032-b7djx4n" updated="20210414125122"}

- {: id="20210414125054-hk9m9xb"}[Error: Permission denied to access property "x"](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Property_access_denied)
  {: id="20210414125054-ei2oov7"}
- {: id="20210414125125-f6gud0y"}[InternalError: too much recursion](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Too_much_recursion)
  {: id="20210414125125-btqtkqt" updated="20210414125125"}
- {: id="20210414125746-cuhyoub"}((20210414124112-c3m2knd "{{.text}}"))
  {: id="20210414125746-l2tf8u9" updated="20210414125746"}
{: id="20210414125053-4ab2lxb" updated="20210414125054"}

## [`RangeError`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
{: id="20210414123752-3z491wq" updated="20210414123819"}

- {: id="20210414123846-11vkhri"}[`String.fromCodePoint()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCodePoint)  [RangeError: argument is not a valid code point](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Not_a_codepoint)
  {: id="20210414123846-rk67tnb" updated="20210414123901"}
- {: id="20210414123903-kdxuu8k"}[`Array`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array) [`ArrayBuffer`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)  [RangeError: invalid array length](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
  {: id="20210414123903-cyrsawf" updated="20210414123931"}
- {: id="20210414123933-o3iikne" updated="20210414123933"}[`Date`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) [`Date.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) [RangeError: invalid date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_date)
  {: id="20210414123945-yeit6r9" updated="20210414124000"}
- {: id="20210414124011-nv6qixu" updated="20210414124011"}[`Number.prototype.toExponential()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) [`Number.prototype.toFixed()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed) [`Number.prototype.toPrecision()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toPrecision)
  [RangeError: precision is out of range](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Precision_range)
  {: id="20210414124015-e6xinz8" updated="20210414124055"}
- {: id="20210414124113-edi97js" updated="20210414124011"}[`Number.prototype.toString()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) [RangeError: radix must be an integer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Bad_radix)
  {: id="20210414124113-otnygcd" updated="20210414124305"}
- {: id="20210414124403-pkhixye" updated="20210414124011"}[`String.prototype.repeat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) [RangeError: repeat count must be less than infinity](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Resulting_string_too_large)
  {: id="20210414124403-u5171lz" updated="20210414124751"}

  - {: id="20210414124435-gujxsj5" updated="20210414124011"}用来计数的参数小于正 [`Infinity`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Infinity) ，((20210414124751-352qw0z "且不能为负数"))。该值的合法范围可以这样表示： [0, +∞)。
    {: id="20210414124435-jkxran8" updated="20210414124932"}
  - {: id="20210414124540-lt8unu1"}其结果字符串也不能长于最大字符串，不同 JavaScript 引擎中可能有所不同。 在 Firefox (SpiderMonkey) 里最大字符串大小为 2^28^ -1 (`0xFFFFFFF`)。
    {: id="20210414124540-qzfhuw0"}
  {: id="20210414124436-291ogcp"}
- {: id="20210414124624-uumge2b" updated="20210414124749"}[`String.prototype.repeat()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat) [RangeError: repeat count must be non-negative](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Negative_repetition_count)
  {: id="20210414124751-352qw0z"}
{: id="20210414124015-fdcjd6w"}

## [`ReferenceError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
{: id="20210414124112-c3m2knd" updated="20210414125205"}

- {: id="20210414125232-r92eip8"}[ReferenceError: "x" is not defined](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_defined)
  {: id="20210414125232-nau5r8k" updated="20210414125258"}

  - {: id="20210414125259-8awd0x5"}当你使用变量的时候，这个变量必须是已经被声明的，或者你可以确保它在你当前的脚本或作用域 ([scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)) 中可用。
    {: id="20210414125259-id9rsut" updated="20210414125259"}
  {: id="20210414125259-b5b6nh4"}
- {: id="20210414125259-rp3sboq"}[ReferenceError: assignment to undeclared variable "x"](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Undeclared_var)
  {: id="20210414125259-igx7v0h"}

  - {: id="20210414125335-mrxzom4"}仅在[严格模式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)中出现 [`ReferenceError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) 警告。
    {: id="20210414125335-fe3q95t" updated="20210414125335"}
  {: id="20210414125336-g46v9bh"}
- {: id="20210414125439-uihb0o8"}[ReferenceError: can't access lexical declaration`X' before initialization](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_access_lexical_declaration_before_init)
  {: id="20210414125438-5vuzitr"}

  - {: id="20210414125450-8n4g7hx"}词法变量在初始化之前被访问。该错误可以发生于任何语句块中，当使用 let 或 const 修饰的变量在初始化之前被访问的时候。
    {: id="20210414125450-eu1kw9k" updated="20210414125450"}
  {: id="20210414125451-hgzd185"}
- {: id="20210414125609-xyn2bt0"}[ReferenceError: deprecated caller or arguments usage](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_caller_or_arguments_usage)
  {: id="20210414125608-uy6m1f1"}

  - {: id="20210414125615-zjr5upi"}仅在严格模式下出现的 [`ReferenceError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError) 警告。JavaScript 的执行将不会停止。
    {: id="20210414125615-li2hb1d" updated="20210414125615"}
  - {: id="20210414125616-o8pi1jc"}在 [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode) 中，[`Function.caller`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller) 和 [`Function.arguments`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments) 属性是不该使用的。它们都是已经被废弃的了，因为这两者泄露了函数的调用者，是不标准的，难于优化和有这潜在的性能问题。
    {: id="20210414125616-xj13r7j"}
  {: id="20210414125615-ge6lkaz"}
- {: id="20210414125700-lm1oudp"}[ReferenceError: invalid assignment left-hand side](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_assignment_left-hand_side)
  {: id="20210414125659-s1ofgy7"}
- {: id="20210414130743-nfw1vp9"}[ReferenceError: reference to undefined property "x"](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Undefined_prop)
  {: id="20210414125728-wck75bh" updated="20210414130742"}

  - {: id="20210414125728-ud4yrs8"}脚本尝试去访问一个不存在的对象属性。[property accessors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)页面描述了两种访问属性的方法。
    {: id="20210414130743-yvyhsjh"}
  {: id="20210414130745-0k44ukh"}

  引用未定义属性的错误仅出现在 [strict mode ](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode)代码中。在非严格代码中，对不存在的属性的访问将被忽略
  {: id="20210414125835-akbyhs4"}
{: id="20210414125206-4jkawg4" updated="20210414125232"}

## [`SyntaxError`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
{: id="20210414125905-tiod6ye" updated="20210414125906"}

- {: id="20210414125941-gc2m0ch"}[SyntaxError: "0"-prefixed octal literals and octal escape seq. are deprecated](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_octal)
  {: id="20210414125941-xf44ij9"}
- {: id="20210414130017-lgqblq8"}[SyntaxError: "use strict" not allowed in function with non-simple parameters](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Strict_Non_Simple_Params)
  {: id="20210414130017-1shvnsq" updated="20210414130017"}
- {: id="20210414130019-thnda3j"}[SyntaxError: "x" is a reserved identifier](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Reserved_identifier)
  {: id="20210414130019-bhdd3cj" updated="20210414130040"}

  - {: id="20210414130041-kbpdezg"}[保留字](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) 用作标记符将会出错
    {: id="20210414130041-ivvn7dp" updated="20210414130749"}
  {: id="20210414130041-75jd3wl"}
{: id="20210414125907-9h3y6h4" updated="20210414125941"}

* {: id="20210414130224-ba5jmyo"}[SyntaxError: "x" is not a legal ECMA-262 octal constant](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Bad_octal)
  {: id="20210414130224-i2o2a6y" updated="20210414130246"}

  * {: id="20210414130309-f75sj81"}十进制字面量可以以零作为开始(`0`)，后面跟着其他十进制数，但是假如前导 0 之后的所有数字都小于 8，那么这个数就会被解析为一个八进制的数。因为 08 和 09 不是这样的，所以 JavaScript 会发出警告
    {: id="20210414130309-3srfs5y" updated="20210414130309"}
  {: id="20210414130309-mw16fsy"}
* {: id="20210414130224-55a25je"}[`JSON.parse()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)  [SyntaxError: JSON.parse: bad parsing](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/JSON_bad_parse)
  {: id="20210414130224-qxeik3v" updated="20210414130415"}
* {: id="20210414130224-uhnrebf"}[`Function`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)  [SyntaxError: Malformed formal parameter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Malformed_formal_parameter)
  {: id="20210414130224-3h3fi3i" updated="20210414130625"}
* {: id="20210414130224-4ag6buq"}[SyntaxError: Unexpected token](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Unexpected_token)
  {: id="20210414130224-asfdbhb"}
* {: id="20210414130224-osoixp9"}[SyntaxError: Using //@ to indicate sourceURL pragmas is deprecated. Use //# instead](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_source_map_pragma)
  {: id="20210414130224-zov220o"}
* {: id="20210414130224-y781jwz"}[SyntaxError: a declaration in the head of a for-of loop can&#39;t have an initializer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_for-of_initializer)
  {: id="20210414130224-05k1b3j"}
* {: id="20210414130224-4xiirj3"}[SyntaxError: applying the &#39;delete&#39; operator to an unqualified name is deprecated](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Delete_in_strict_mode)
  {: id="20210414130224-aoybeea"}
* {: id="20210414130224-36vui3k"}[SyntaxError: for-in loop head declarations may not have initializers](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer)
  {: id="20210414130224-80ysg00"}
* {: id="20210414130224-in9kdlq"}[SyntaxError: function statement requires a name](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Unnamed_function_statement)
  {: id="20210414130224-9o37d9k"}
* {: id="20210414130224-y9nl0xe"}[SyntaxError: identifier starts immediately after numeric literal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Identifier_after_number)
  {: id="20210414130224-jmvvu3i"}
* {: id="20210414130224-7n3rxk9"}[SyntaxError: illegal character](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Illegal_character)
  {: id="20210414130224-ntkxxdb"}
* {: id="20210414130224-sibabz7"}[`RegExp`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) [SyntaxError: invalid regular expression flag "x"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Bad_regexp_flag)
  {: id="20210414130224-fbfqtvm" updated="20210414131212"}
* {: id="20210414130224-w5r4xk8"}[SyntaxError: missing ) after argument list](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list)
  {: id="20210414130224-dy98542"}
* {: id="20210414130224-yaamq46"}[SyntaxError: missing ) after condition](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_condition)
  {: id="20210414130224-dhcrb9c"}
* {: id="20210414130224-em4gkvs"}[SyntaxError: missing : after property id](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_colon_after_property_id)
  {: id="20210414130224-9j4yhae"}
* {: id="20210414130224-do4ecak"}[SyntaxError: missing ; before statement](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement)
  {: id="20210414130224-bwigw8q"}
* {: id="20210414130224-74catum"}[SyntaxError: missing = in const declaration](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_initializer_in_const)
  {: id="20210414130224-inpbmiv"}
* {: id="20210414130224-tjuu8w8"}[SyntaxError: missing \] after element list](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_bracket_after_list)
  {: id="20210414130224-gx0kezc" updated="20210414131343"}
* {: id="20210414130224-wez9vr4"}[SyntaxError: missing formal parameter](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_formal_parameter)
  {: id="20210414130224-iy9l49h"}
* {: id="20210414130224-9qvkt71"}[SyntaxError: missing name after . operator](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_name_after_dot_operator)
  {: id="20210414130224-efothed"}
* {: id="20210414130224-gg2uvpq"}[SyntaxError: missing variable name](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/No_variable_name)
  {: id="20210414130224-exh3k63"}
* {: id="20210414130224-r6hcwv5"}[SyntaxError: missing } after function body](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_function_body)
  {: id="20210414130224-136b8la"}
* {: id="20210414130224-jl9ixkk"}[SyntaxError: missing } after property list](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Missing_curly_after_property_list)
  {: id="20210414130224-2nbqb1o"}
* {: id="20210414130224-ulsgqck"}[SyntaxError: redeclaration of formal parameter "x"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Redeclared_parameter)
  {: id="20210414130224-ypgz2yo" updated="20210414131851"}
* {: id="20210414130224-96uggsq"}[SyntaxError: return not in function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Bad_return_or_yield)
  {: id="20210414130224-6m1rzcs"}
* {: id="20210414130224-lu56wqq"}[SyntaxError: test for equality (==) mistyped as assignment (=)?](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Equal_as_assign)
  {: id="20210414130224-7in527x"}
* {: id="20210414130224-sxk9q8f"}[SyntaxError: unterminated string literal](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal)
  {: id="20210414130224-7qestqm"}
* {: id="20210414130224-hv324r3"}[TypeError: "x" has no properties](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/No_properties)
  {: id="20210414130224-vr334dt" updated="20210414131858"}
* {: id="20210414130224-rfsbkwo"}[`Object.create()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create) [`Symbol.keyFor()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/keyFor) [TypeError: "x" is (not) "y"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Unexpected_type)
  {: id="20210414130224-cvtp6x2" updated="20210414131812"}
* {: id="20210414130224-2f4zg2q"}[TypeError: "x" is not a constructor](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_a_constructor)
  {: id="20210414130224-rgx1ozf" updated="20210414131839"}
* {: id="20210414130224-oe8dy1q"}[TypeError: "x" is not a function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Not_a_function)
  {: id="20210414130224-yx2etus" updated="20210414131941"}
* {: id="20210414130224-sb2009t"}[TypeError: "x" is not a non-null object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/No_non-null_object)
  {: id="20210414130224-460o6mq" updated="20210414131927"}
* {: id="20210414130224-ktifzon"}[TypeError: "x" is read-only](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Read-only)
  {: id="20210414130224-f8327hs" updated="20210414131953"}
* {: id="20210414130224-l3op05m"}[TypeError: 'x' is not iterable](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/is_not_iterable)
  {: id="20210414130224-jnv6vks" updated="20210414132100"}
* {: id="20210414130224-y8cvxk3"}[TypeError: More arguments needed](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/More_arguments_needed)
  {: id="20210414130224-fmg3136"}
* {: id="20210414130224-y2xmpts"}[TypeError: Reduce of empty array with no initial value](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value)
  {: id="20210414130224-u7ks5kb"}
* {: id="20210414130224-9o204j1"}[TypeError: can't access dead object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Dead_object)
  {: id="20210414130224-1gyk1mk" updated="20210414132151"}
* {: id="20210414130224-sqp0sf2"}[TypeError: can't access property "x" of "y"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_access_property)
  {: id="20210414130224-tjvfwx4" updated="20210414132216"}
* {: id="20210414130224-7jkkryr"}[TypeError: can't assign to property "x" on "y": not an object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_assign_to_property)
  {: id="20210414130224-2rkegrh" updated="20210414132240"}
* {: id="20210414130224-1yvkezx"}[TypeError: can't define property "x": "obj" is not extensible](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_define_property_object_not_extensible)
  {: id="20210414130224-yvlx7qr" updated="20210414132303"}
* {: id="20210414130224-kjpmbpd"}[TypeError: can't delete non-configurable array element](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Non_configurable_array_element)
  {: id="20210414130224-lkp327a" updated="20210414132310"}
* {: id="20210414130224-o4rh32x"}[TypeError: can't redefine non-configurable property "x"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_redefine_property)
  {: id="20210414130224-e2lvths" updated="20210414132319"}
* {: id="20210414130224-0e0vxir"}[`JSON.stringify()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) [TypeError: cyclic object value](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cyclic_object_value)
  {: id="20210414130224-t8ex4g1" updated="20210414132338"}
* {: id="20210414130224-a6lldb3"}[TypeError: invalid 'in' operand "x"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/in_operator_no_object)
  {: id="20210414130224-08a4gmt" updated="20210414132411"}
* {: id="20210414130224-dr23l02"}[TypeError: invalid 'instanceof' operand 'x'​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/invalid_right_hand_side_instanceof_operand)
  {: id="20210414130224-65my5ig" updated="20210414132434"}
* {: id="20210414130224-6rvs7dq"}[TypeError: invalid Array.prototype.sort argument](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Array_sort_argument)
  {: id="20210414130224-vzi95kh"}
* {: id="20210414130224-hhba3kt"}[`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof) [TypeError: invalid arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Typed_array_invalid_arguments)
  {: id="20210414130224-1ljoxix" updated="20210414132503"}
* {: id="20210414130224-5lfkp5w"}[TypeError: invalid assignment to const "x"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)
  {: id="20210414130224-gqqt9zc" updated="20210414132549"}
* {: id="20210414130224-v0moefa"}[TypeError: property "x" is non-configurable and can't be deleted](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Cant_delete)
  {: id="20210414130224-ybjl5nu" updated="20210414132611"}
* {: id="20210414130224-vzruzcl"}[TypeError: setting getter-only property "x"​](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Getter_only)
  {: id="20210414130224-lzg0ocn" updated="20210414132658"}
* {: id="20210414130224-yd9okn1"}[TypeError: variable "x" redeclares argument](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Var_hides_argument)
  {: id="20210414130224-0il9qm6" updated="20210414132716"}
* {: id="20210414130224-l4g084w"}[`decodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURI) [`encodeURI()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) [`encodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent) [`decodeURIComponent()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/decodeURIComponent) [URIError: malformed URI sequence](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Malformed_URI)
  {: id="20210414130224-8acplmp" updated="20210414133353"}
* {: id="20210414130224-49yyu6u"}[Warning: -file- is being assigned a //# sourceMappingURL, but already has one](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Already_has_pragma)
  {: id="20210414130224-nw86xxy"}
* {: id="20210414130224-6yalgc2"}[`Date.prototype.toLocaleFormat`](https://developer.cdn.mozilla.net/en-US/docs/Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat) [Warning: Date.prototype.toLocaleFormat is deprecated](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_toLocaleFormat)
  {: id="20210414130224-2cyfqsk" updated="20210414132913"}

  * {: id="20210414132916-sjdw8yz"}toLocaleFormat 已经弃用了
    {: id="20210414132916-htpiczi" updated="20210414132947"}
  {: id="20210414132917-2ozrsaj"}
* {: id="20210414130224-r0lcynv"}[Warning: JavaScript 1.6's for-each-in loops are deprecated](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated)
  {: id="20210414130224-9ytia1w" updated="20210414133024"}
* {: id="20210414130224-xnmwlve"}[Warning: String.x is deprecated; use String.prototype.x instead](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_String_generics)
  {: id="20210414130224-ccw33cf"}
* {: id="20210414130224-gbxsky7"}[Warning: expression closures are deprecated](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Deprecated_expression_closures)
  {: id="20210414130224-f15cvhu"}
* {: id="20210414130224-1gepknh"}[Warning: unreachable code after return statement](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Stmt_after_return)
  {: id="20210414130224-a4fk3z0"}
* {: id="20210414130224-7yutl4v"}[`Function.prototype.call()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call) [`Function.prototype.apply()`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply) [X.prototype.y called on incompatible type](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Errors/Called_on_incompatible_type)
  {: id="20210414130224-mle7a5m" updated="20210414133143"}
{: id="20210414130224-5hg4in1"}

## 相关文档
{: id="20210414122449-ucpsg6o" updated="20210414124128"}

[mdn Errors参考页面](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)
{: id="20210414122455-mqv4xo9" updated="20210414122531"}

{: id="20210414122620-43cedv0"}


{: id="20210411105659-pcgjcao" type="doc"}
