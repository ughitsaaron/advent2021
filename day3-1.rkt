#lang racket

(require (only-in "inputs.rkt" [day-3 data]))
(define (transpose m)
  (apply map list m))
(define (zero? n)
  (eq? n #\0))
(define (largest l s)
  (if (> (length l) (length s)) l s))
(define (smallest l s)
  (if (< (length l) (length s)) l s))
(define (get-bit l fn)
  (car (call-with-values (lambda () (partition zero? l)) (lambda (x y) (fn x y)))))
(define (get-rate l fn)
  (string->number (list->string (for/list ([i l])
                                  (get-bit i fn)))
                  2))

(* (get-rate (transpose data) largest) (get-rate (transpose data) smallest))
