module Main where

import Prelude

import Euler1 (answer)
import Control.Monad.Eff.Console (log)

main = do
  log ("The answer is " <> show answer)
