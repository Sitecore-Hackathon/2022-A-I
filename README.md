# Hackathon Submission Entry form

> __Important__  
> 
> Copy and paste the content of this file into README.md or face automatic __disqualification__  
> All headlines and subheadlines shall be retained if not noted otherwise.  
> Fill in text in each section as instructed and then delete the existing text, including this blockquote.

You can find a very good reference to Github flavoured markdown reference in [this cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet). If you want something a bit more WYSIWYG for editing then could use [StackEdit](https://stackedit.io/app) which provides a more user friendly interface for generating the Markdown code. Those of you who are [VS Code fans](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview) can edit/preview directly in that interface too.

## Team name
⟹ A.I.

## Category
⟹ Category: Best addition to the Sitecore MVP site

## Description
⟹ There is a necessity to evaluate Sitecore professionals in an automated way, so they can become Sitecore MVP professionals based on an automatic evaluation process.

## Video link
⟹ 
https://youtu.be/zmdrOT6-imo


## Installation Instructions

- Install docker with Windows Containers
- Run Powershell as Administrator

- Copy your latest sitecore licence in the following folder:
```sh
C:\license\license.xml
```

- Execute the following command:
```sh
.\init.ps1 -InitEnv -LicenseXmlPath "C:\license\license.xml" -AdminPassword "b"
```

- Then execute the following command:
```sh
.\up.ps1
```

- Wait for the installation, this can take few minutes to complete the process


## Usage instructions
⟹ 
There is a necessity to evaluate Sitecore professionals in an automated way, so they can become Sitecore MVP professionals based on an automatic evaluation process.

Consequently, We propose a solution on the MVP website to integrate an automatic evaluation system based on some metrics that you can configure on Sitecore.

Our solution is based on the current MVP website, so we integrate that solution into the contest repo. 
that means, you can follow the same MVP site installation steps to start working with the current solution, 
but it's important to follow the instructions on the read me file to sync the content with the Sitecore Management Services

First of all, we added a view to display the list of applicants to the Sitecore MVP award, 
based on that scenario we modified the Person template to include a flag to determine if the new person is an applicant. 

Besides that, we re-used the grap-ql query to get those new applicants and display them in a new view as you can see here.
The Sitecore personnel with access rights to edit the evaluation metrics can use the following item to add metrics or remove some of them if they want to do it 

Once those metrics are set up, Evaluators can go to the MVP website, log in and start evaluating all applicants based on the previously defined metrics.
First, the evaluator can choose an applicant from the list displayed in the view, once the applicant was selected, 
the evaluator can define the percentage of each metric at a maximum of 100%. 

Once the evaluation is completed you can submit the information in order to save the evaluation status. 
Furthermore, on the same MVP website, you can display an ordered list with the ranking of best applicants and choose the best to become a Sitecore MVP. 

