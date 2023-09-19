#lang racket

(require (only-in "inputs.rkt" [day-1 data]))

(define triplets
  (for/list ([a data] [b (cdr data)] [c (cdr (cdr data))])
    (+ a b c)))
(count identity (for/list ([a triplets] [b (cdr triplets)]) (< a b)))
