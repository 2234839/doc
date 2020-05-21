npx tailwind build ./_themes/theme.css -o ./_themes/style.css
npx purgecss --css ./_themes/style.css --content **/**/*.md **/**/*.html **/*.md **/*.html   --out ./_themes/
npx ug ./_themes/style.css ./_themes/style.min.css
