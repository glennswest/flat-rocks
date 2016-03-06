{
    "targets": [{
      "target_name": "flat-rocks"
    , "conditions": [
          ['OS == "linux"', {
              'cflags': [
              ]
            , 'cflags!': [ '-fno-tree-vrp' ]
          }]
        ]
      , "libraries": [
            "librocksdb.dylib"
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
          , "src/leveldown.cc"
          , "src/leveldown_async.cc"
        ]
    }]
}
