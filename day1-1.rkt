#lang racket

(require (only-in "inputs.rkt" [day-1 data]))

(count identity (for/list ([a data] [b (cdr data)]) (< a b)))
