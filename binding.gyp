{
    "targets": [{
      "target_name": "flat-rocks"
    , "conditions": [
          ['OS == "linux"', {
           "libraries": [
                 "/usr/local/lib/librocksdb.so"
             ]
              ,'cflags': [
              ]
            , 'cflags!': [ '-fno-tree-vrp' ]
          }]
        , ['OS == "mac"', {
              'xcode_settings': {
                  'WARNING_CFLAGS': [
                     '-Wno-ignored-qualifiers'
                  ]
                , 'OTHER_CPLUSPLUSFLAGS': [
                      '-mmacosx-version-min=10.7'
                    , '-stdlib=libc++'
                  ]
                , 'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
                , 'MACOSX_DEPLOYMENT_TARGET': '10.7'
                , "libraries": [
                      "/usr/local/lib/librocksdb.a"
                  ]
              }
          }]
        ]
      , "cflags": [
            '-std=c++11'
        ]

      , "include_dirs"  : [
            "<!(node -e \"require('nan')\")"
        ]
      , "sources": [
            "src/batch.cc"
          , "src/batch_async.cc"
          , "src/database.cc"
          , "src/database_async.cc"
          , "src/iterator.cc"
          , "src/iterator_async.cc"
          , "src/flatrocks.cc"
          , "src/flatrocks_async.cc"
        ]
    }]
}
