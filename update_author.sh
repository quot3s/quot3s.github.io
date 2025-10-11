#!/bin/bash

git config user.name "Quotes Author (QA)"
git config user.email "quotes.author@qa.com"
git rebase -i --root --exec "git commit --amend --no-edit --reset-author"
