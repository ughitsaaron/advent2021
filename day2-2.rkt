#lang racket

(require (only-in "inputs.rkt" [day-2 data]))

(for/fold ([horizontal 0] [depth 0] [aim 0] #:result (* horizontal depth)) ([row data])
  (match row
    [(cons 'down x) (values horizontal depth (+ aim x))]
    [(cons 'up x) (values horizontal depth (- aim x))]
    [(cons 'forward x) (values (+ x horizontal) (+ depth (* aim x)) aim)]))
