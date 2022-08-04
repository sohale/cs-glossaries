
From:
https://github.com/sosi-org/image-farms/blob/master/service/logger.py




```python
import threading
global logger_lock

logger_lock = threading.Lock()

    global logger_lock
    logger_lock.acquire()
    print(C_PLAIN, end="")
    if True:
        print(CGREEN, end="")
        print("Log: api server: ", end="")
        print(C_PLAIN, end="")
        print(message)
    print('',end='',flush=True)
    logger_lock.release()
```

## asyncio

https://github.com/sosi-org/REST-practice/blob/master/wsock_ejector/wsock_ejector.py

https://github.com/sosi-org/REST-practice/blob/master/client_notifier.py

```python

import asyncio
#logger_lock = asyncio.Lock()
```

Also see https://github.com/sohale/cs-glossaries/blob/master/concurrency-async-terms.md

Coroutine: https://github.com/sohale/snippets/blob/master/python/coroutine_example2_useless.py

```python

import traceback
```


import websockets
