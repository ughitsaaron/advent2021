#lang racket

(require (only-in "inputs.rkt" [day-2 data]))

(for/fold ([horizontal 0] [depth 0] #:result (* horizontal depth)) ([row data])
  (match row
    [(cons 'forward x) (values (+ x horizontal) depth)]
    [(cons 'down x) (values horizontal (+ x depth))]
    [(cons 'up x) (values horizontal (- depth x))]))
