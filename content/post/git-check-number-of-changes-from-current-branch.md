---
path: git_check_number_of_changes_from_current_branch
date: 2022-05-01T12:05:06.933Z
title: "[Git] Check number of changes from current branch"
---
```gitattributes
git diff --cached --shortstat {target_branch} --
```

## What are the "changes"?

The changes from a git branch usually mean three things:

* Number of file changes
* Number of insertions (+)
* Number of deletions (-)

## Why do we need to check the number of changes?

Knowing how much we did change with your current branch is important because keeping your PR short always helps your reviewers to fasten their job.

Depending on teams the rule is usually around 250-500 lines change per PR.

If there's no way for you to keep your PR short, let's try to split your PR into a few parts, for example: *fix_bug_part_1*, *fix_bug_part_2*