# Contributing to this book

This book is written using [mdBook](https://github.com/rust-lang/mdBook). To contribute to this book, you will need:

1. [mdBook](https://github.com/rust-lang/mdBook)
2. [git](https://gitforwindows.org/)
3. [GitHub](https://github.com/) account
4. (Optional) [VSCodium](https://vscodium.com/)

VSCodium or VSCode is highly recommended to use. Although it is optional, I will assume you are using it.

Below I describe the setup steps needed to run and contribute to this book. *__But before that, go and install VSCodium and Git__*.

## Forking book repository

Contributing to this book follows the standart "Pull Request" workflow. That basically means that you will have your own copy of the book, and you will ask us to pull your changes into the main repository.

Here is the overview of steps needed for contributing:

1. Copy ("fork") the main repository
1. Download your copy of repo
1. Add your changes to your copy
1. Upload your changes
1. Open the Pull Request to merge your changes into main repository

Welp, let's get started. I hope you already have a GitHub account.

#### Forking

1. Go to the [main repo](https://github.com/Igigog/anomaly-modding-book)
2. Press the fork button

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/3.PNG)

</div>

3. Create the fork 

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/4.PNG)

</div>

4. You're awesome

#### Downloading your repo

1. Open the folder you want to download into in VSCodium. In my case, it will be Desktop.

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/5.PNG)

</div>

2. Open Poweshell Terminal session
3. Copy the link to your repo. 

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/6.PNG)

</div>

4. Run the following command in your Powershell Terminal with your link instead of LINK.

```
git clone LINK
```

5. You're awesome.

#### Running local copy

1. Download latest mdbook from [Github Releases](https://github.com/rust-lang/mdBook/releases). 
1. Drop `mdbook.exe` in the root folder of your copy. 
1. Run `run.bat`. In case it doesn't open by itself, open [localhost:3000](localhost:3000) in your browser.
1. Done. You're awesome.

#### Uploading your changes

1. Set your git up. Here's a great [guide](https://docs.github.com/en/get-started/quickstart/set-up-git)

2. Add your changes using VSCodium git tab. Open git tab, hover over "Changes" line and press "+".

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/7.PNG)

</div>

3. Add a nice message and press "✔" to commit your changes

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/8.PNG)

</div>

4. You should now be able to publish your changes

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/9.PNG)

</div>

## Creating Pull Request

1. In main book repository, open "Pull Requests" tab and press "New pull request"

<div style="text-align: center;">

![Mod Organiser logo](contributing-images/10.PNG)

</div>

2. Press "compare across forks". Choose your repository and press "Create pull request". 

3. You're awesome. Probably. Now ping Igigog#6387 in Discord to get your pull request reviewed.

4. Done. Your changes are added to the main book.
