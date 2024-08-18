import { defineConfig } from 'vitepress'
import { ILanguageRegistration, getHighlighter } from 'shiki';
import { IGrammar } from 'vscode-textmate';
import { readFileSync } from 'fs';

class Jule implements ILanguageRegistration {
  id: string;
  scopeName: string;
  path: string;
  grammar?: IGrammar | undefined;
  aliases?: string[] | undefined;

  constructor() {
    this.id = "jule";
    this.scopeName = "source.jule";
    this.path = "";
    this.aliases = ["jule"];
    this.grammar = JSON.parse(readFileSync("jule/jule.tmLanguage.json"));
  }
}

const jule = new Jule();
(async () => {
  const highlighter = await getHighlighter({});
  await highlighter.loadLanguage(jule);
})();

export default defineConfig({
  srcDir: 'src',
  title: 'Jule Manual',
  description: 'Documentations of the Jule Programming Language.',

  markdown: {
    lineNumbers: true,
    languages: [jule],
    theme: "dracula-soft",
  },

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: 'https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg' }
    ],
  ],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg',

    search: {
      provider: 'local',
    },

    nav: [
      { text: 'Manual', link: '/' },
      { text: 'Standard Library', link: '/std/' },
      { text: 'API', link: '/api/' },
      { text: 'Tools', link: '/tools/' },
    ],

    sidebar: {
      '/': [
        {
          items: [
            { text: 'The Jule Programming Language', link: '/' },
            { text: 'Foreword', link: '/foreword' },
            { text: 'Introduction', link: '/introduction' },
          ],
        },
        {
          text: 'Getting Started',
          link: '/getting-started/',
          items: [
            { text: 'Downloads', link: '/getting-started/downloads' },
            {
              text: 'Install from Source',
              link: '/getting-started/install-from-source/',
              items: [
                { text: 'Compile From IR', link: '/getting-started/install-from-source/compile-from-ir' },
                { text: 'Build Scripts', link: '/getting-started/install-from-source/build-scripts' },
                { text: 'Manual Compilation', link: '/getting-started/install-from-source/manual-compilation' },
              ],
            },
          ],
        },
        {
          text: 'Compiler',
          link: '/compiler/',
          items: [
            { text: 'Platform Support', link: '/compiler/platform-support' },
            { text: 'Directives', link: '/compiler/directives' },
            { text: 'Specific Programming', link: '/compiler/specific-programming' },
            { text: 'Deriving', link: '/compiler/deriving' },
            { text: 'Basic Commands', link: '/compiler/basic-commands' },
            { text: 'Compiler Options', link: '/compiler/compiler-options' },
            { text: 'Compiler Optimizations', link: '/compiler/compiler-optimizations' },
            { text: 'Cross Compilation', link: '/compiler/cross-compilation' },
            {
              text: 'Backend',
              link: '/compiler/backend/',
              items: [
                {
                  text: 'C++ Backend Compilers',
                  link: '/compiler/backend/cpp-backend-compilers/',
                  items: [
                    { text: 'Clang', link: '/compiler/backend/cpp-backend-compilers/clang' },
                    { text: 'GNU Compiler Collection', link: '/compiler/backend/cpp-backend-compilers/gnu-compiler-collection' },
                  ],
                },
              ],
            },
            {
              text: 'Compiling',
              link: '/compiler/compiling/',
              items: [
                { text: 'Using JuleC', link: '/compiler/compiling/using-julec' },
                { text: 'Using Backend Compiler', link: '/compiler/compiling/using-backend-compiler' },
              ],
            },
          ],
        },
        {
          text: 'Project',
          link: '/project/',
          items: [
            { text: 'Project Structure', link: '/project/project-structure' },
            { text: 'Code Style', link: '/project/code-style' },
            { text: 'Declarations', link: '/project/declarations' },
            { text: 'Cycles', link: '/project/cycles' },
          ],
        },
        {
          text: 'Introduction',
          link: '/introduction/',
          items: [
            { text: 'Comments', link: '/introduction/comments' },
            { text: 'Keywords', link: '/introduction/keywords' },
            { text: 'Reserved Functions', link: '/introduction/reserved-functions' },
            { text: 'Data Types', link: '/introduction/data-types' },
            { text: 'Operators', link: '/introduction/operators' },
            { text: 'Syntax', link: '/introduction/syntax' },
            { text: 'Scopes', link: '/introduction/scopes' },
          ],
        },
        {
          text: 'Common Concepts',
          link: '/common-concepts/',
          items: [
            { text: 'Variables', link: '/common-concepts/variables' },
            { text: 'Functions', link: '/common-concepts/functions' },
            { text: 'Arrays', link: '/common-concepts/arrays' },
            { text: 'Slices', link: '/common-concepts/slices' },
            { text: 'Maps', link: '/common-concepts/maps' },
            {
              text: 'Control Flow',
              link: '/common-concepts/control-flow/',
              items: [
                { text: 'Iterations', link: '/common-concepts/control-flow/iterations' },
                { text: 'Conditional', link: '/common-concepts/control-flow/conditional' },
                { text: 'Match Statement', link: '/common-concepts/control-flow/match-statement' },
                { text: 'Labels', link: '/common-concepts/control-flow/labels' },
              ],
            },
            {
              text: 'Enums',
              link: '/common-concepts/enums/',
              items: [
                { text: 'Bit Flags', link: '/common-concepts/enums/bitflags' },
              ],
            },
            {
              text: 'Structures', link: '/common-concepts/structures/',
              items: [
                { text: 'Reserved Methods', link: '/common-concepts/structures/reserved-methods' },
                { text: 'Destructors', link: '/common-concepts/structures/destructors' },
                { text: 'Operator Overloading', link: '/common-concepts/structures/operator-overloading' },
              ],
            },
          ],
        },
        {
          text: 'Types',
          link: '/types/',
          items: [
            { text: 'Aliasing', link: '/types/aliasing' },
            { text: 'Type Enums', link: '/types/type-enums' },
            { text: 'Casting', link: '/types/casting' },
            {
              text: 'Generics',
              link: '/types/generics/',
              items: [
                { text: 'Constraints', link: '/types/generics/constraints' },
              ],
            },
          ],
        },
        {
          text: 'Type Statics',
          link: '/type-statics/',
          items: [
            { text: 'i8', link: '/type-statics/i8' },
            { text: 'i16', link: '/type-statics/i16' },
            { text: 'i32', link: '/type-statics/i32' },
            { text: 'i64', link: '/type-statics/i64' },
            { text: 'u8', link: '/type-statics/u8' },
            { text: 'u16', link: '/type-statics/u16' },
            { text: 'u32', link: '/type-statics/u32' },
            { text: 'u64', link: '/type-statics/u64' },
            { text: 'f32', link: '/type-statics/f32' },
            { text: 'f64', link: '/type-statics/f64' },
            { text: 'int', link: '/type-statics/int' },
            { text: 'uint', link: '/type-statics/uint' },
          ],
        },
        {
          text: 'Traits',
          link: '/traits/',
          items: [
            { text: 'Implementing', link: '/traits/implementing' },
            { text: 'Inheritance', link: '/traits/inheritance' },
          ],
        },
        {
          text: 'Memory',
          link: '/memory/',
          items: [
            { text: 'Slicing', link: '/memory/slicing' },
            { text: 'Immutability', link: '/memory/immutability' },
            { text: 'Mutability', link: '/memory/mutability' },
            { text: 'Pointers', link: '/memory/pointers' },
            { text: 'References', link: '/memory/references' },
            {
              text: 'Management',
              link: '/memory/management/',
              items: [
                { text: 'Smart Pointers', link: '/memory/management/smart-pointers' },
                { text: 'Manual', link: '/memory/management/manual' },
                { text: 'Disable Reference Counting', link: '/memory/management/disable-reference-counting' },
              ],
            },
          ],
        },
        {
          text: 'Unsafe Jule',
          link: '/unsafe-jule/',
          items: [
            { text: 'Immutability', link: '/unsafe-jule/immutability' },
            { text: 'Raw Pointers', link: '/unsafe-jule/raw-pointers' },
            { text: 'Unsafe Functions', link: '/unsafe-jule/unsafe-functions' },
            { text: 'References', link: '/unsafe-jule/references' },
            { text: 'Unsafe Package', link: '/unsafe-jule/unsafe-package' },
          ],
        },
        {
          text: 'Error Handling',
          link: '/error-handling/',
          items: [
            { text: 'Error Coding', link: '/error-handling/error-coding' },
            { text: 'Exceptionals', link: '/error-handling/exceptionals' },
            { text: 'Panics', link: '/error-handling/panics' },
          ],
        },
        {
          text: 'Concurrency',
          link: "/concurrency/",
          items: [
            { text: 'Wait Groups', link: '/concurrency/wait-groups' },
            { text: 'Atomicity', link: '/concurrency/atomicity' },
            { text: 'Mutexes', link: '/concurrency/mutexes' },
            { text: 'Threads', link: '/concurrency/threads' },
          ],
        },
        {
          text: 'Comptime',
          link: "/comptime/",
          items: [
            { text: 'Comptime Evaluation', link: '/comptime/comptime-evaluation' },
            { text: 'Comptime Matching', link: '/comptime/comptime-matching' },
            { text: 'Comptime Iterations', link: '/comptime/comptime-iterations' },
            { text: 'Reflection', link: '/comptime/reflection' },
          ],
        },
        {
          text: 'Integrated Jule',
          link: '/integrated-jule/',
          items: [
            { text: 'API', link: '/api/' },
            { text: 'Backend Emits', link: '/integrated-jule/backend-emits' },
            {
              text: 'Interoperability',
              link: '/integrated-jule/interoperability/',
              items: [
                { text: 'Headers', link: '/integrated-jule/interoperability/header-files' },
                { text: 'Variables', link: '/integrated-jule/interoperability/variables' },
                { text: 'Functions', link: '/integrated-jule/interoperability/functions' },
                { text: 'Structures', link: '/integrated-jule/interoperability/structures' },
                { text: 'Types', link: '/integrated-jule/interoperability/types' },
                { text: 'Macros', link: '/integrated-jule/interoperability/macros' },
                { text: 'Namespaces', link: '/integrated-jule/interoperability/namespaces' },
                { text: 'Jule Wrappers', link: '/integrated-jule/interoperability/jule-wrappers' },
              ],
            },
            { text: 'C', link: '/integrated-jule/c' },
            { text: 'Objective-C', link: '/integrated-jule/objective-c' },
            { text: 'Objective-C++', link: '/integrated-jule/objective-cpp' },
          ],
        },
        {
          text: 'Packages',
          link: '/packages/',
          items: [
            {
              text: 'Modules',
              link: '/packages/modules/',
              items: [
                { text: 'Internal Packages', link: '/packages/modules/internal-packages' },
              ],
            },
            { text: 'Using Packages', link: '/packages/using-packages' },
            {
              text: '3rd Party Packages',
              link: '/packages/3rd-party-packages/',
              items: [
                { text: 'Exporting Definitions', link: '/packages/3rd-party-packages/exporting-definitions' },
                { text: 'Deprecation', link: '/packages/3rd-party-packages/deprecation', },
              ],
            },
            { text: 'Standard Library', link: '/std/' },
          ],
        },
        {
          text: 'Debugging',
          link: '/debugging/',
          items: [
            {
              text: 'Reasoning',
              link: '/debugging/reasoning/',
              items: [
                { text: 'Jule Runtime', link: '/debugging/reasoning/jule-runtime' },
                { text: 'C++ Runtime', link: '/debugging/reasoning/cpp-runtime' },
                { text: 'Debugging Special Code', link: '/debugging/reasoning/debugging-special-code' },
              ],
            },
            {
              text: 'Testing',
              link: '/debugging/testing/',
              items: [
                { text: 'Assertion', link: '/debugging/testing/assertion' },
                { text: 'Writing Tests', link: '/debugging/testing/writing-tests' },
              ],
            },
            {
              text: 'Backend Compiler Tools',
              link: '/debugging/backend-compiler-tools/',
              items: [
                { text: 'LLDB and GDB', link: '/debugging/backend-compiler-tools/lldb-and-gdb' },
              ],
            },
          ],
        },
        {
          items: [
            { text: 'End', link: '/end' },
          ]
        },
      ],

      '/api/': [
        {
          text: 'API',
          link: '/api/',
          items: [
            {
              text: 'Implementation',
              link: '/api/implementation/',
              items: [
                { text: 'Disable RC', link: '/api/implementation/disable-rc' },
                { text: 'Disable Safety', link: '/api/implementation/disable-safety' },
                { text: 'Production', link: '/api/implementation/production' },
              ],
            },
            {
              text: 'Environment',
              link: '/api/environment/',
              items: [
                { text: 'Command-Line Arguments', link: '/api/environment/command-line-arguments' },
                { text: 'Environment Variables', link: '/api/environment/environment-variables' },
              ],
            },
            {
              text: 'Process',
              link: '/api/process/',
              items: [
                { text: 'Executable Path', link: '/api/process/executable-path' },
              ],
            },
            { text: 'Platform Specific', link: '/api/platform-specific' },
            {
              text: 'Types',
              link: '/api/types/',
              items: [
                { text: 'Primitive', link: '/api/types/primitive' },
                { text: 'Limits', link: '/api/types/limits' },
                { text: 'Strings', link: '/api/types/strings' },
                { text: 'Maps', link: '/api/types/maps' },
                { text: 'Slices', link: '/api/types/slices' },
                { text: 'Any', link: '/api/types/any' },
              ],
            },
            { text: 'Atomicity', link: '/api/atomicity' },
            { text: 'Deferred Scopes', link: '/api/deferred-scopes' },
            {
              text: 'Unicode',
              link: '/api/unicode/',
              items: [
                { text: 'UTF-8', link: '/api/unicode/utf-8' },
                { text: 'UTF-16', link: '/api/unicode/utf-16' },
              ],
            },
            {
              text: 'Reference Counting',
              link: '/api/reference-counting/',
              items: [
                { text: 'Using', link: '/api/reference-counting/using' },
              ],
            },
            {
              text: 'Integrated Jule',
              link: '/api/integrated-jule/',
              items: [
                { text: 'Wrappers', link: '/api/integrated-jule/wrappers' },
              ],
            },
            {
              text: 'Using as Library',
              link: '/api/using-as-library/',
              items: [],
            },
          ],
        }
      ],

      '/std/': [
        {
          text: 'Standard Library',
          link: '/std/',
          items: [
            { text: 'builtin', link: '/std/builtin' },
            { text: 'std::bytes', link: '/std/bytes' },
            { text: 'std::comptime', link: '/std/comptime' },
            { text: 'std::conv', link: '/std/conv' },
            { text: 'std::debug', link: '/std/debug' },
            {
              text: 'std::encoding',
              link: '/std/encoding',
              items: [
                { text: 'std::encoding::ascii85', link: '/std/encoding-ascii85' },
                { text: 'std::encoding::base32', link: '/std/encoding-base32' },
                { text: 'std::encoding::base64', link: '/std/encoding-base64' },
                { text: 'std::encoding::binary', link: '/std/encoding-binary' },
                { text: 'std::encoding::csv', link: '/std/encoding-csv' },
                { text: 'std::encoding::json', link: '/std/encoding-json' },
              ],
            },
            { text: 'std::env', link: '/std/env' },
            { text: 'std::flag', link: '/std/flag' },
            { text: 'std::fmt', link: '/std/fmt' },
            {
              text: 'std::fs',
              link: '/std/fs',
              items: [
                { text: 'std::fs::path', link: '/std/fs-path' },
              ],
            },
            {
              text: 'std::hash',
              link: '/std/hash',
              items: [
                { text: 'std::hash::adler32', link: '/std/hash-adler32' },
                { text: 'std::hash::fnv', link: '/std/hash-fnv' },
              ],
            },
            { text: 'std::io', link: '/std/io' },
            {
              text: 'std::jule',
              link: '/std/jule',
              items: [
                { text: 'std::jule::ast', link: '/std/jule-ast' },
                { text: 'std::jule::build', link: '/std/jule-build' },
                {
                  text: 'std::jule::constant',
                  link: '/std/jule-constant',
                  items: [
                    { text: 'std::jule::constant::lit', link: '/std/jule-constant-lit' }
                  ]
                },
                { text: 'std::jule::importer', link: '/std/jule-importer' },
                { text: 'std::jule::integrated', link: '/std/jule-integrated' },
                { text: 'std::jule::lex', link: '/std/jule-lex' },
                { text: 'std::jule::parser', link: '/std/jule-parser' },
                { text: 'std::jule::sema', link: '/std/jule-sema' },
                { text: 'std::jule::types', link: '/std/jule-types' },
              ]
            },
            { text: 'std::maps', link: '/std/maps' },
            {
              text: 'std::math',
              link: '/std/math',
              items: [
                { text: 'std::math::big', link: '/std/math-big' },
                { text: 'std::math::bits', link: '/std/math-bits' },
                { text: 'std::math::cmplx', link: '/std/math-cmplx' },
                { text: 'std::math::rand', link: '/std/math-rand' },
              ],
            },
            {
              text: 'std::mem',
              link: '/std/mem',
              items: [],
            },
            { text: 'std::net', link: '/std/net' },
            { text: 'std::process', link: '/std/process' },
            { text: 'std::queue', link: '/std/queue' },
            { text: 'std::slices', link: '/std/slices' },
            { text: 'std::stack', link: '/std/stack' },
            { text: 'std::strings', link: '/std/strings' },
            {
              text: 'std::sync',
              link: '/std/sync',
              items: [
                { text: 'std::sync::atomic', link: '/std/sync-atomic' }
              ],
            },
            { text: 'std::sys', link: '/std/sys' },
            { text: 'std::thread', link: '/std/thread', },
            { text: 'std::testing', link: '/std/testing', },
            { text: 'std::time', link: '/std/time', },
            {
              text: 'std::unicode',
              link: '/std/unicode',
              items: [
                { text: 'std::unicode::utf16', link: '/std/unicode-utf16' },
                { text: 'std::unicode::utf8', link: '/std/unicode-utf8' },
              ],
            },
            { text: 'std::unsafe', link: '/std/unsafe' },
            { text: 'std::vec', link: '/std/vec' },
          ],
        },
      ],

      '/tools/': [
        {
          text: 'Tools',
          link: '/tools/',
          items: [
            {
              items: [
                { text: 'JuleC', link: '/tools/julec' },
                { text: 'JuleFmt', link: '/tools/julefmt' },
              ],
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/julelang/manual' }
    ]
  }
})