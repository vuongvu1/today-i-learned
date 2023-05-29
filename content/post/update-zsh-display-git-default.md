---
path: update-oh-my-zshdisplaygitdefault
date: 2023-05-29T20:31:24.191Z
title: "Update zsh display git default "
---
You can modify the second line of this file:

````shell
~/.oh-my-zsh/themes/robbyrussell.zsh-theme

```
PROMPT="%(?:%{$fg_bold[green]%}➜ :%{$fg_bold[red]%}➜ )"
PROMPT+=' %{$fg[cyan]%}%~%{$reset_color%} $(git_prompt_info)
>> '
```
````

Which will look like this:

![](../assets/git-display.png)