# Filippo Fabiani — personal academic website

Website: https://ffabiani.github.io

This site uses the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/)
Jekyll theme with a profile sidebar, top navigation, and individual academic pages.
The theme is loaded from its official repository at release 4.28.1.

**Start with [SETUP.md](SETUP.md)** for instructions to upload these files to the
existing repository and publish the website.

## Content and settings

| What to change | File |
| --- | --- |
| Name, position, affiliation, location, profile links | `_config.yml` |
| Biography and homepage | `index.html` |
| Top navigation | `_data/navigation.yml` |
| Research | `_pages/research.md` |
| Publications | `_pages/publications.md` |
| Teaching | `_pages/teaching.md` |
| CV page | `_pages/cv.md` |
| Profile photograph | Upload to `assets/images/`, then update `author.avatar` |
| CV PDF | Upload to `assets/files/`, then update `cv_file` |

Your name, GitHub profile, repository, and website URL are already configured.
Biography, research, publications, and teaching text are placeholders. The FF
image is a temporary portrait placeholder. No affiliation, email address,
publication record, or CV has been invented or imported.

The homepage retains the filename `index.html` so uploading it replaces the
original starter page. Other content pages use Markdown.

## Theme and hosting

- [Minimal Mistakes documentation](https://mmistakes.github.io/minimal-mistakes/docs/quick-start-guide/)
- [Theme license](https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE)
- [GitHub Pages publishing settings](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

The theme supplies responsive navigation, typography, the profile sidebar,
and footer attribution. No theme source files are bundled or modified here.

## Optional local preview

With Ruby and Bundler installed:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://127.0.0.1:4000. After editing `_config.yml`, restart Jekyll.
Opening `index.html` directly does not render the Jekyll theme; use GitHub Pages
or a local Jekyll server.
