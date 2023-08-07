import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  title: 'Jule Manual',
  description: 'Documentations of the Jule Programming Language.',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: 'https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg' }
    ],
  ],
  themeConfig: {
    logo: 'https://raw.githubusercontent.com/julelang/resources/master/jule_icon.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Manual', link: '/' },
      { text: 'Standard Library', link: '/standard-library/' },
      { text: 'API', link: '/api/' },
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
                { text: 'Build Scripts', link: '/getting-started/install-from-source/build-scripts' },
                { text: 'Manual Compilation', link: '/getting-started/install-from-source/manual-compilation' },
                { text: 'Compile From IR', link: '/getting-started/install-from-source/compile-from-ir' },
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
            { text: 'Platform Specific Programming', link: '/compiler/platform-specific-programming' },
            { text: 'Deriving', link: '/compiler/deriving' },
            { text: 'Basic Commands', link: '/compiler/basic-commands' },
            { text: 'Compiler Options', link: '/compiler/compiler-options' },
            { text: 'Compiler Optimizations', link: '/compiler/compiler-optimizations' },
            { text: 'Cross Transpilation', link: '/compiler/cross-transpilation' },
            { text: 'Backend', link: '/compiler/backend' },
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
            { text: 'Directory Order', link: '/project/directory-order' },
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
            { text: 'Reserved Functions', link: '/introduction/reserved-functions' },
            { text: 'Data Types', link: '/introduction/data-types' },
            { text: 'Operators', link: '/introduction/operators' },
            { text: 'Syntax', link: '/introduction/syntax' },
            { text: 'Blocks', link: '/introduction/blocks' },
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
            { text: 'Enums', link: '/common-concepts/enums' },
            { text: 'Structures', link: '/common-concepts/structures' },
          ],
        },
        {
          text: 'Traits',
          link: '/traits/',
          items: [
            { text: 'Implementing', link: '/traits/implementing' },
          ],
        },
        {
          text: 'Memory',
          link: '/memory/',
          items: [
            { text: 'Immutability', link: '/memory/immutability' },
            { text: 'Pointers', link: '/memory/pointers' },
            { text: 'References', link: '/memory/references' },
            { text: 'Memory Management', link: '/memory/memory-management' },
          ],
        },
        {
          text: 'Unsafe Jule',
          link: '/unsafe-jule/',
          items: [
            { text: 'Immutability', link: '/unsafe-jule/immutability' },
            { text: 'Raw Pointers', link: '/unsafe-jule/raw-pointers' },
            { text: 'Unsafe Defines', link: '/unsafe-jule/unsafe-defines' },
            { text: 'References', link: '/unsafe-jule/references' },
          ],
        },
        {
          text: 'Error Handling',
          link: '/error-handling/',
          items: [
            { text: 'Error Coding', link: '/error-handling/error-coding' },
            { text: 'Error Trait', link: '/error-handling/error-trait' },
            { text: 'Panics', link: '/error-handling/panics' },
            { text: 'Handling Panics', link: '/error-handling/handling-panics' },
          ],
        },
        {
          text: 'Types',
          link: '/types/',
          items: [
            { text: 'Aliasing', link: '/types/aliasing' },
            { text: 'Casting', link: '/types/casting' },
            { text: 'Generics', link: '/types/generics' },
            { text: 'Strings', link: '/types/strings' },
            { text: 'Arrays', link: '/types/arrays' },
            { text: 'Slices', link: '/types/slices' },
            { text: 'Maps', link: '/types/maps' },
          ],
        },
        {
          text: 'Concurrency',
          link: "/concurrency/",
          items: [
            { text: 'Synchronization', link: '/concurrency/synchronization' },
            { text: 'Atomicity', link: '/concurrency/atomicity' },
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
          text: 'C/C++',
          link: '/cpp/',
          items: [
            { text: 'API', link: '/api/' },
            {
              text: 'Interoperability',
              link: '/cpp/interoperability/',
              items: [
                { text: 'Headers', link: '/cpp/interoperability/header-files' },
                { text: 'Variables', link: '/cpp/interoperability/variables' },
                { text: 'Functions', link: '/cpp/interoperability/functions' },
                { text: 'Structures', link: '/cpp/interoperability/structures' },
                { text: 'Types', link: '/cpp/interoperability/types' },
                { text: 'Macros', link: '/cpp/interoperability/macros' },
              ],
            },
          ],
        },
        {
          text: 'Packages',
          link: '/packages/',
          items: [
            { text: 'Using Packages', link: '/packages/using-packages' },
            { text: 'Exporting Definitions', link: '/packages/exporting-definitions' },
            { text: '3rd Party Packages', link: '/packages/3rd-party-packages' },
          ],
        },
        {
          items: [
            { text: 'Standard Library', link: '/standard-library/' },
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
              ],
            },
            {
              text: 'Environment',
              link: '/api/environment/',
              items: [
                { text: 'Command-Line Arguments', link: '/api/environment/command-line-arguments' },
                { text: 'Environment Variables', link: '/api/environment/environment-variables' },
                { text: 'Executable Path', link: '/api/environment/executable-path' },
              ],
            },
            {
              text: 'Process',
              link: '/api/process/',
              items: [
                { text: 'Signals', link: '/api/process/signals' },
                { text: 'Termination', link: '/api/process/termination' },
              ],
            },
            { text: 'Platform Specific', link: '/api/platform-specific' },
            {
              text: 'Types',
              link: '/api/types/',
              items: [
                { text: 'Primitive', link: '/api/types/primitive' },
                { text: 'Limits', link: '/api/types/limits' },
              ],
            },
            { text: 'Atomicity', link: '/api/atomicity' },
            { text: 'Deferred Blocks', link: '/api/deferred-blocks' },
            { text: 'Concurrency', link: '/api/concurrency' },
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

      '/standard-library/': [
        {
          text: 'Standard Library',
          link: '/standard-library/',
          items: [
            { text: 'builtin', link: '/standard-library/builtin' },
            { text: 'std::conv', link: '/standard-library/std-conv' },
            { 
              text: 'std::debug', 
              link: '/standard-library/std-debug', 
              items: [
                { text: 'std::debug::assert', link: '/standard-library/std-debug-assert' }
              ] 
            },
            { text: 'std::env', link: '/standard-library/std-env' },
            { text: 'std::errors', link: '/standard-library/std-errors' },
            { 
              text: 'std::fs', 
              link: '/standard-library/std-fs', 
              items: [
                { text: 'std::fs::path', link: '/standard-library/std-fs-path' }
              ] 
            },
            { text: 'std::io', link: '/standard-library/std-io' },
            { 
              text: 'std::jule', 
              link: '/standard-library/std-jule',
              items: [
                { text: 'std::jule::ast', link: '/standard-library/std-jule-ast' },
                { text: 'std::jule::build', link: '/standard-library/std-jule-build' },
                {
                  text: 'std::jule::constant',
                  link: '/standard-library/std-jule-constant',
                  items: [
                    { text: 'std::jule::constant::lit', link: '/standard-library/std-jule-constant-lit' }
                  ]
                },
                { text: 'std::jule::lex', link: '/standard-library/std-jule-lex' },
                { text: 'std::jule::parser', link: '/standard-library/std-jule-parser' },
                { text: 'std::jule::sema', link: '/standard-library/std-jule-sema' },
                { text: 'std::jule::types', link: '/standard-library/std-jule-types' },
              ]
            },
            { 
              text: 'std::math', 
              link: '/standard-library/std-math',
              items: [
                { text: 'std::math::bits', link:'/standard-library/std-math-bits' }
              ]
            },
            { 
              text: 'std::mem', 
              link: '/standard-library/std-mem',
              items: [
                { text: 'std::mem::c', link:'/standard-library/std-mem-c' }
              ]
            },
            { text: 'std::process', link: '/standard-library/std-process' },
            { text: 'std::runtime', link: '/standard-library/std-runtime' },
            { 
              text: 'std::sync', 
              link: '/standard-library/std-sync',
              items: [
                { text: 'std::sync::atomic', link:'/standard-library/std-sync-atomic' }
              ]
            },
            { text: 'std::sys', link: '/standard-library/std-sys' },
            { 
              text: 'std::unicode', 
              link: '/standard-library/std-mem',
              items: [
                { text: 'std::unicode::utf16', link:'/standard-library/std-unicode-utf16' },
                { text: 'std::unicode::utf8', link:'/standard-library/std-unicode-utf8' },
              ]
            },
            { text: 'std::vector', link: '/standard-library/std-vector' },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/julelang/manual' }
    ]
  }
})