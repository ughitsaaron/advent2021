#lang racket

(define input (map string->number (file->lines "input/day_1_input.txt")))

(define (count iter) (foldl (lambda (a b acc) (if (> a b) (+ acc 1) (+ acc 0))) 0 iter))
(print (count input))
