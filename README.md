# gsa-digitial-innovation-hackathon
The artifacts generated from the GSA hack-a-thon, http://open.gsa.gov/Digital-Innovation-Hackathon/,  on May 8th, 2015

## Machine Ready

Check out a live version of the project: http://gsadata.s3-website-us-west-2.amazonaws.com/

## The Challenge

"Currently GSA posts their public datasets on open.gsa.gov/data which are 
consumed and re-presented on data.gov. The presentation on open.gsa.gov is 
limited to the title, description and embedded url, and grouped by theme. 
We are looking for a new and fresh presentation of our public data listing 
which will enrich the user experience, enhance search capability, and allow 
easier viewing of additional metadata."

## Objective

One [principle](https://project-open-data.cio.gov/principles/) of the open 
source initiative is to help create machine readable data sets. This 
accessibility principle is critical to enabling data hungry algorithms to crunch 
complex data sets into meaningful value.

Our application, Machine Ready, leverages existing data.json content to determine 
how an agency's datasets match up to the accessibility principles laid out by the open 
data initiative. The objective is to help agencies visualize which datasets could
benefit from a translation to more machine friendly formats.

We are hoping that visualizing this data will help inspire agencies to improve 
the way they create and maintian their datasets. To facilitate this improvement
the site provides helpful information on how to translate machine unfriendly
formats, like Microsoft Word, into friendly formats like JSON.

## Disclaimers

Style and UI theme borrowed from https://github.com/GSA/analytics.usa.gov

## Contributions

All help is welcome. 

This project is as simple as it gets, nothing but jquery, html, and css.
Host it with your favorite web server.

## Roadmap

- more in depth visualizations of bad mediaTypes
 - % of good mediaTypes by theme or keyword
 - % of good mediaTypes by maintainer
- capability to build page through entering a url to any data.json file
- documentation or links to resources for translating bad formats
- directly tie into the [automatic metrics](http://labs.data.gov/dashboard/docs#automated_metrics) collected by labs.data.gov to help
enforce milestones around more accessible data services.