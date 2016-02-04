# OpenResty 技术图谱
## basic concepts
- Test Driven Development(TDD)
- RESTful API
- Microservice
- Domain Specific Language(DSL)
- C10K & C1M
- non-blocking & asynchronous I/O
- event loop
- coroutine

## around tech stack
- MySQL
- Redis
- Kafka
- Docker
- KONG
- regex

## testing
- TDD & Unit Testing
- Test::Nginx
- mocking
- curl & ab & wrk

## debugging
- debugging log
- core dump
- flame graph
- on-CPU/off-CPU
- nginx-systemtap-toolkit
- stapxx
- nginx-gdb-utils

## caching
- ngx.shared.DICT
- lua-resty-lrucache
- dog-pile effect
- lua-resty-lock
- lua-resty-shcache

## NGINX
- log
- static file
- proxy
- phase

## LuaJIT
- JIT（Just-In-Time Compiler）
- NYI (Not Yet Implemented)
- ffi.* API
- jit.* Library

## ngx_lua
- resty-core
- cosocket TCP/UDP
- hot load lua code
