#lang racket

(require (only-in "inputs.rkt" [day-3 data]))
(define (transpose m)
  (apply map list m))
(define (zero? n)
  (eq? n #\0))
(define (most-common l s)
  (if (>= (length l) (length s)) l s))
(define (least-common l s)
  (if (< (length l) (length s)) l s))
(define (get-bit-by fn l)
  (car (call-with-values (lambda () (partition zero? l)) (lambda (x y) (fn x y)))))
(define (get-bit-in-place fn l) (for/list ([i l]) (get-bit-by fn i)))

(define most-common-bits (get-bit-in-place most-common (transpose data)))
(for/fold ([acc data])
          ([i (range (length most-common-bits))])
  (filter (lambda (row) (eq? (list-ref row i) (list-ref most-common-bits i))) acc))
