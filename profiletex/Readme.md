# Generation Helper

Just write all technologies into technologies.txt.

Then you can:
```bash
cat profiletex/technologies.txt | sort | sed 's/^/\\item /' | sed 's/LaTeX/\\LaTeX/' > ./profiletex/gen_techs.tex
```

to create the item list for latex