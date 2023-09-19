#lang racket

(provide day-1)
(provide day-2)
(define day-1 (map string->number (file->lines "input/day_1_input.txt")))
(define day-2
  (map (lambda (row) (match row [(cons dir n) (cons (string->symbol dir) (string->number (car n)))]))
       (map (lambda (row) (string-split row)) (file->lines "input/day_2_input.txt"))))