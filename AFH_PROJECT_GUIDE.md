# AFH Supply & Demand Analysis Project - Complete Implementation Guide

## 📋 Project Overview

**Goal**: Find out the supply and demand ratio of AFH (Adult Family Home) services in Centralia, WA through placement services

**Timeline**: 7 days  
**Budget**: $0 (using free tools)  
**Tools**: Airtable, Google Forms, Google Sheets

---

## ✅ Step-by-Step Implementation

### Day 1: Research and Planning

#### Objective
Identify the target audience (placement agencies) and determine the survey questions to ask about AFH services in Centralia, WA.

#### Tasks

**1.1 Identify Placement Agencies in Centralia, WA**

- [ ] Search for "placement agencies Centralia Washington" on Google
- [ ] Search for "adult family home placement services Centralia WA"
- [ ] Check Washington State Department of Social and Health Services (DSHS) directory
- [ ] Look for agencies on:
  - [ ] Google Maps (search "placement agency Centralia")
  - [ ] Washington State Health Care Authority website
  - [ ] Local business directories
  - [ ] LinkedIn (search "placement agency Centralia")
- [ ] Create initial list with:
  - [ ] Agency name
  - [ ] Contact person
  - [ ] Email address
  - [ ] Phone number
  - [ ] Website (if available)

**1.2 Research AFH Services Context**

- [ ] Understand what AFH services are (Adult Family Homes)
- [ ] Research Centralia, WA demographics:
  - [ ] Population size
  - [ ] Age demographics
  - [ ] Existing AFH facilities
  - [ ] Healthcare needs in the area
- [ ] Check Washington State AFH regulations and requirements
- [ ] Understand placement agency role in AFH referrals

**1.3 Determine Survey Questions**

Create questions to ask placement agencies:

**Demand Questions:**
- [ ] How many AFH placement requests do you receive per month for Centralia, WA area?
- [ ] What types of AFH services are most in demand? (e.g., memory care, physical disabilities, etc.)
- [ ] What is the average wait time for AFH placement in Centralia?
- [ ] How many clients are currently waiting for AFH placement in Centralia?
- [ ] What are the most common reasons clients need AFH services?

**Supply Questions:**
- [ ] How many AFH facilities do you work with in Centralia, WA?
- [ ] What is the average occupancy rate of AFH facilities in Centralia?
- [ ] How many beds are typically available in Centralia AFH facilities?
- [ ] What is the average time to fill a bed in Centralia AFH facilities?

**Market Questions:**
- [ ] Is there a shortage or surplus of AFH services in Centralia?
- [ ] What are the main challenges in placing clients in Centralia AFH facilities?
- [ ] What would help improve the supply/demand balance?

**1.4 Create Survey Question Document**

- [ ] Write all questions in a clear, professional format
- [ ] Organize questions by category (Demand, Supply, Market)
- [ ] Keep questions concise and easy to answer
- [ ] Include multiple choice options where possible
- [ ] Add optional comment fields for additional insights

**1.5 Set Up Project Tracking**

- [ ] Create a simple spreadsheet or document to track:
  - [ ] Agencies contacted
  - [ ] Survey sent date
  - [ ] Response received date
  - [ ] Follow-up needed
  - [ ] Notes

**Deliverables:**
- ✅ List of 10-20 placement agencies in Centralia, WA area
- ✅ Complete survey question list
- ✅ Project tracking document started

**Time Estimate**: 4-6 hours

---

### Day 2: Set Up Airtable Database

#### Objective
Create a simple database to store survey responses and track follow-ups.

#### Tasks

**2.1 Create Airtable Account**

- [ ] Go to [airtable.com](https://airtable.com)
- [ ] Sign up for free account (if you don't have one)
- [ ] Verify email address
- [ ] Complete account setup

**2.2 Create New Base**

- [ ] Click "Add a base" or "New base"
- [ ] Name it: "AFH Centralia Supply Demand Analysis"
- [ ] Choose "Start from scratch"

**2.3 Create "Placement Agencies" Table**

- [ ] Rename default table to "Placement Agencies"
- [ ] Add the following fields:

| Field Name | Field Type | Options/Notes |
|-----------|-----------|---------------|
| Agency Name | Single line text | Required |
| Contact Person | Single line text | |
| Email | Email | Required |
| Phone | Phone number | |
| Website | URL | |
| Address | Single line text | |
| City | Single line text | Default: "Centralia" |
| State | Single line text | Default: "WA" |
| Status | Single select | Options: Not Contacted, Survey Sent, Responded, Follow-up Needed, Declined |
| Survey Sent Date | Date | |
| Response Received Date | Date | |
| Follow-up Date | Date | |
| Notes | Long text | |
| Survey Link | URL | |

**2.4 Create "Survey Responses" Table**

- [ ] Click "+" to add new table
- [ ] Name it: "Survey Responses"
- [ ] Add the following fields:

| Field Name | Field Type | Options/Notes |
|-----------|-----------|---------------|
| Agency | Link to "Placement Agencies" | Link field |
| Response Date | Date | |
| Monthly Placement Requests | Number | |
| Average Wait Time (days) | Number | |
| Clients Waiting | Number | |
| AFH Facilities Worked With | Number | |
| Average Occupancy Rate (%) | Number | |
| Available Beds | Number | |
| Time to Fill Bed (days) | Number | |
| Shortage or Surplus | Single select | Options: Shortage, Surplus, Balanced |
| Main Challenges | Long text | |
| Additional Comments | Long text | |
| Complete | Checkbox | |

**2.5 Create "Analysis Data" Table**

- [ ] Add new table: "Analysis Data"
- [ ] Add fields for calculations:

| Field Name | Field Type | Formula/Notes |
|-----------|-----------|---------------|
| Total Demand (Monthly) | Number | Sum of Monthly Placement Requests |
| Total Supply (Beds) | Number | Sum of Available Beds |
| Average Occupancy | Number | Average of Occupancy Rate |
| Supply/Demand Ratio | Number | Formula: Total Supply / Total Demand |
| Response Rate | Number | Formula: Responses / Total Sent |
| Last Updated | Date | Auto-update |

**2.6 Set Up Views**

- [ ] Create view: "All Agencies" (default)
- [ ] Create view: "Need Follow-up" (filter: Status = "Follow-up Needed")
- [ ] Create view: "Responded" (filter: Status = "Responded")
- [ ] Create view: "Not Contacted" (filter: Status = "Not Contacted")

**2.7 Add Sample Data**

- [ ] Add 2-3 test agencies from your Day 1 research
- [ ] Test the fields and views
- [ ] Verify all fields work correctly

**Deliverables:**
- ✅ Airtable base with 3 tables
- ✅ All fields configured
- ✅ Views set up
- ✅ Sample data added

**Time Estimate**: 2-3 hours

---

### Day 3: Create Google Form Survey

#### Objective
Design a survey to send to placement agencies, asking about demand for AFH services in Centralia, WA.

#### Tasks

**3.1 Create Google Form**

- [ ] Go to [forms.google.com](https://forms.google.com)
- [ ] Sign in with Google account
- [ ] Click "Blank" to create new form
- [ ] Title: "AFH Services Supply & Demand Survey - Centralia, WA"
- [ ] Description: "We are conducting research on AFH (Adult Family Home) services in Centralia, WA. Your insights will help us understand the supply and demand dynamics in the area. This survey takes approximately 5-10 minutes to complete."

**3.2 Add Introduction Section**

- [ ] Add section: "Agency Information"
- [ ] Add question: "Agency Name" (Short answer, Required)
- [ ] Add question: "Your Name" (Short answer)
- [ ] Add question: "Your Email" (Short answer, Required)
- [ ] Add question: "Your Phone Number" (Short answer)

**3.3 Add Demand Questions Section**

- [ ] Add section: "Demand for AFH Services"
- [ ] Add question: "How many AFH placement requests do you receive per month for the Centralia, WA area?"
  - Type: Short answer
  - Required: Yes
  - Validation: Number only
- [ ] Add question: "What types of AFH services are most in demand? (Select all that apply)"
  - Type: Checkboxes
  - Options:
    - Memory care / Dementia care
    - Physical disabilities
    - Developmental disabilities
    - Mental health services
    - General elderly care
    - Other (specify)
- [ ] Add question: "What is the average wait time for AFH placement in Centralia?"
  - Type: Short answer
  - Hint: "Please answer in days or weeks"
- [ ] Add question: "Approximately how many clients are currently waiting for AFH placement in Centralia?"
  - Type: Short answer
  - Validation: Number only
- [ ] Add question: "What are the most common reasons clients need AFH services?"
  - Type: Paragraph
  - Required: Yes

**3.4 Add Supply Questions Section**

- [ ] Add section: "AFH Facility Supply"
- [ ] Add question: "How many AFH facilities do you work with in Centralia, WA?"
  - Type: Short answer
  - Validation: Number only
- [ ] Add question: "What is the average occupancy rate of AFH facilities in Centralia?"
  - Type: Short answer
  - Hint: "Please answer as a percentage (e.g., 85%)"
- [ ] Add question: "On average, how many beds are typically available in Centralia AFH facilities?"
  - Type: Short answer
  - Validation: Number only
- [ ] Add question: "What is the average time to fill a bed in Centralia AFH facilities?"
  - Type: Short answer
  - Hint: "Please answer in days or weeks"

**3.5 Add Market Analysis Section**

- [ ] Add section: "Market Analysis"
- [ ] Add question: "In your opinion, is there a shortage or surplus of AFH services in Centralia?"
  - Type: Multiple choice
  - Options:
    - Significant shortage
    - Moderate shortage
    - Balanced
    - Moderate surplus
    - Significant surplus
- [ ] Add question: "What are the main challenges in placing clients in Centralia AFH facilities?"
  - Type: Checkboxes
  - Options:
    - Limited bed availability
    - High costs
    - Geographic location
    - Specific care requirements
    - Wait times
    - Other (specify)
- [ ] Add question: "What would help improve the supply/demand balance in Centralia?"
  - Type: Paragraph
- [ ] Add question: "Any additional comments or insights?"
  - Type: Paragraph

**3.6 Customize Form Appearance**

- [ ] Click "Customize theme" (palette icon)
- [ ] Choose professional color scheme (e.g., blue or green)
- [ ] Add header image (optional): Healthcare or community service image
- [ ] Set font style: Professional and readable

**3.7 Configure Form Settings**

- [ ] Click Settings (gear icon)
- [ ] General tab:
  - [ ] Collect email addresses: ON
  - [ ] Limit to 1 response: OFF (allow multiple responses)
  - [ ] Show progress bar: ON
  - [ ] Shuffle question order: OFF
- [ ] Presentation tab:
  - [ ] Show link to submit another response: OFF
  - [ ] Confirmation message: "Thank you for your participation! Your responses will help us better understand AFH services in Centralia, WA."

**3.8 Test the Form**

- [ ] Click "Preview" (eye icon)
- [ ] Fill out the form as a test
- [ ] Submit test response
- [ ] Check that all questions work correctly
- [ ] Verify required fields are enforced
- [ ] Review the confirmation message

**3.9 Get Form Link**

- [ ] Click "Send" button
- [ ] Copy the form link
- [ ] Save link in Airtable "Placement Agencies" table (Survey Link field)
- [ ] Test the link in a new browser/incognito window

**Deliverables:**
- ✅ Complete Google Form with all questions
- ✅ Form link ready to share
- ✅ Form tested and working
- ✅ Link saved in Airtable

**Time Estimate**: 3-4 hours

---

### Day 4: Send Survey to Placement Agencies

#### Objective
Reach out to placement agencies and send them the survey link.

#### Tasks

**4.1 Prepare Email Template**

- [ ] Create professional email template:

**Subject**: Research Request: AFH Services in Centralia, WA

**Body Template**:
```
Dear [Agency Name] Team,

I hope this email finds you well. I am conducting research on Adult Family Home (AFH) services in Centralia, WA to better understand the supply and demand dynamics in our area.

As a placement agency, your insights would be invaluable in helping us:
- Understand current demand for AFH services
- Assess supply availability
- Identify opportunities for improvement

I would greatly appreciate if you could take 5-10 minutes to complete this brief survey:

[Survey Link]

The survey is completely anonymous (unless you choose to provide contact information), and your responses will be used solely for research purposes.

If you have any questions or would prefer to discuss this over the phone, please don't hesitate to reach out.

Thank you for your time and consideration.

Best regards,
[Your Name]
[Your Contact Information]
```

**4.2 Personalize Emails**

- [ ] Open Airtable "Placement Agencies" table
- [ ] For each agency:
  - [ ] Copy email template
  - [ ] Replace [Agency Name] with actual agency name
  - [ ] Add personal touch if you have previous contact
  - [ ] Insert survey link
  - [ ] Add your contact information

**4.3 Send Initial Emails**

- [ ] Open your email client (Gmail, Outlook, etc.)
- [ ] For each agency in Airtable:
  - [ ] Create new email
  - [ ] Paste personalized email
  - [ ] Add agency email address
  - [ ] Send email
  - [ ] Update Airtable:
    - [ ] Status: "Survey Sent"
    - [ ] Survey Sent Date: Today's date
    - [ ] Add note: "Email sent"

**4.4 Track in Airtable**

- [ ] After sending each email:
  - [ ] Update Status field
  - [ ] Update Survey Sent Date
  - [ ] Add any notes (e.g., "Contacted via email", "Phone call first")

**4.5 Alternative Contact Methods**

If email doesn't work:
- [ ] Try phone call:
  - [ ] Prepare brief script
  - [ ] Call during business hours
  - [ ] Explain the research
  - [ ] Offer to send survey link via text or email
- [ ] Try LinkedIn:
  - [ ] Find agency on LinkedIn
  - [ ] Send professional message
  - [ ] Include survey link

**4.6 Follow-Up Schedule**

- [ ] Set reminders in Airtable or calendar:
  - [ ] Day 5: Follow up with non-responders
  - [ ] Day 6: Final follow-up if needed

**Deliverables:**
- ✅ All agencies contacted
- ✅ Survey link sent to all agencies
- [ ] Airtable updated with send dates
- [ ] Follow-up schedule set

**Time Estimate**: 2-3 hours (depending on number of agencies)

---

### Day 5: Track Responses and Follow Up

#### Objective
Use Airtable to track responses and send follow-up emails to non-responders.

#### Tasks

**5.1 Check Google Forms Responses**

- [ ] Open Google Forms
- [ ] Click "Responses" tab
- [ ] Review all responses received
- [ ] Count total responses

**5.2 Update Airtable with Responses**

For each response in Google Forms:
- [ ] Open Airtable "Placement Agencies" table
- [ ] Find matching agency (by name or email)
- [ ] Update Status: "Responded"
- [ ] Update Response Received Date: Today
- [ ] Go to "Survey Responses" table
- [ ] Create new record:
  - [ ] Link to agency
  - [ ] Enter Response Date
  - [ ] Copy data from Google Forms:
    - [ ] Monthly Placement Requests
    - [ ] Average Wait Time
    - [ ] Clients Waiting
    - [ ] AFH Facilities Worked With
    - [ ] Average Occupancy Rate
    - [ ] Available Beds
    - [ ] Time to Fill Bed
    - [ ] Shortage or Surplus
    - [ ] Main Challenges
    - [ ] Additional Comments
  - [ ] Mark Complete: Checked

**5.3 Identify Non-Responders**

- [ ] In Airtable, filter "Placement Agencies" table:
  - [ ] Status = "Survey Sent"
  - [ ] Response Received Date = Empty
- [ ] Create view: "Need Follow-up"
- [ ] Count how many need follow-up

**5.4 Create Follow-Up Email Template**

- [ ] Create follow-up email:

**Subject**: Follow-up: AFH Services Research in Centralia, WA

**Body**:
```
Dear [Agency Name] Team,

I wanted to follow up on my previous email regarding research on AFH services in Centralia, WA.

I understand you're busy, but your insights would be incredibly valuable. The survey takes just 5-10 minutes to complete:

[Survey Link]

If you've already completed it, thank you! If not, I would greatly appreciate your participation.

If you have any questions or concerns, please let me know.

Thank you for your consideration.

Best regards,
[Your Name]
```

**5.5 Send Follow-Up Emails**

- [ ] For each agency in "Need Follow-up" view:
  - [ ] Send follow-up email
  - [ ] Update Status: "Follow-up Needed"
  - [ ] Update Follow-up Date: Today
  - [ ] Add note: "Follow-up sent"

**5.6 Make Phone Follow-Ups (Optional)**

- [ ] For agencies that haven't responded:
  - [ ] Call during business hours
  - [ ] Briefly explain the research
  - [ ] Offer to complete survey over phone
  - [ ] Update Airtable with call notes

**5.7 Update Response Tracking**

- [ ] Check Google Forms again
- [ ] Update any new responses in Airtable
- [ ] Calculate response rate:
  - [ ] Total sent: [Number]
  - [ ] Total responded: [Number]
  - [ ] Response rate: [Percentage]

**5.8 Set Final Follow-Up Reminder**

- [ ] If response rate is low (<30%):
  - [ ] Schedule one more follow-up for Day 6
  - [ ] Consider offering incentive (optional)
  - [ ] Update Airtable reminders

**Deliverables:**
- ✅ All responses tracked in Airtable
- ✅ Follow-up emails sent
- ✅ Response rate calculated
- ✅ Final follow-up scheduled if needed

**Time Estimate**: 2-3 hours

---

### Day 6: Analyze Data in Google Sheets

#### Objective
Use Google Sheets to analyze the survey responses and calculate the supply and demand ratio of AFH services in Centralia, WA.

#### Tasks

**6.1 Export Data from Airtable**

- [ ] Open Airtable "Survey Responses" table
- [ ] Click "..." (three dots) → "Export data"
- [ ] Choose "CSV"
- [ ] Download the CSV file
- [ ] Also export "Placement Agencies" table as CSV

**6.2 Create Google Sheets Workbook**

- [ ] Go to [sheets.google.com](https://sheets.google.com)
- [ ] Create new spreadsheet
- [ ] Name it: "AFH Centralia Supply Demand Analysis"

**6.3 Import Survey Data**

- [ ] Create sheet: "Survey Responses"
- [ ] File → Import → Upload
- [ ] Select Airtable CSV export
- [ ] Import as: "Replace spreadsheet"
- [ ] Verify all data imported correctly

**6.4 Create Summary Sheet**

- [ ] Create new sheet: "Summary"
- [ ] Set up summary table:

| Metric | Value | Formula |
|--------|-------|---------|
| Total Agencies Contacted | | Count from Agencies sheet |
| Total Responses | | COUNTIF(Responses!Complete, TRUE) |
| Response Rate | | Responses / Contacted * 100 |
| Total Monthly Demand | | SUM(Responses!Monthly Placement Requests) |
| Average Wait Time (days) | | AVERAGE(Responses!Average Wait Time) |
| Total Clients Waiting | | SUM(Responses!Clients Waiting) |
| Total AFH Facilities | | SUM(Responses!AFH Facilities Worked With) |
| Average Occupancy Rate | | AVERAGE(Responses!Average Occupancy Rate) |
| Total Available Beds | | SUM(Responses!Available Beds) |
| Average Time to Fill Bed | | AVERAGE(Responses!Time to Fill Bed) |

**6.5 Calculate Supply/Demand Ratio**

- [ ] In Summary sheet, add:

| Calculation | Formula | Result |
|-------------|---------|--------|
| Monthly Demand | Sum of all Monthly Placement Requests | |
| Available Supply (Beds) | Sum of all Available Beds | |
| Supply/Demand Ratio | Available Supply / Monthly Demand | |
| Interpretation | IF(Ratio < 1, "Shortage", IF(Ratio > 1.5, "Surplus", "Balanced")) | |

**6.6 Create Analysis Sheet**

- [ ] Create sheet: "Analysis"
- [ ] Add sections:

**Demand Analysis:**
- [ ] Total monthly demand requests
- [ ] Average wait time
- [ ] Total clients waiting
- [ ] Most common service needs (from responses)

**Supply Analysis:**
- [ ] Total facilities
- [ ] Average occupancy rate
- [ ] Total available beds
- [ ] Average time to fill bed

**Market Assessment:**
- [ ] Supply/Demand Ratio
- [ ] Market status (Shortage/Surplus/Balanced)
- [ ] Key challenges identified
- [ ] Improvement suggestions

**6.7 Create Charts and Visualizations**

- [ ] Insert → Chart
- [ ] Create pie chart: "Shortage vs Surplus Responses"
- [ ] Create bar chart: "Monthly Demand by Agency"
- [ ] Create line chart: "Wait Times"
- [ ] Create bar chart: "Occupancy Rates"

**6.8 Add Insights Section**

- [ ] In Analysis sheet, add "Key Insights" section:
  - [ ] What the data tells us
  - [ ] Main findings
  - [ ] Recommendations
  - [ ] Limitations of the study

**6.9 Format and Polish**

- [ ] Format numbers (decimals, percentages)
- [ ] Add colors to highlight key metrics
- [ ] Make charts visually appealing
- [ ] Add headers and section dividers
- [ ] Freeze header rows

**Deliverables:**
- ✅ Google Sheets workbook with all data
- ✅ Summary calculations complete
- ✅ Supply/Demand ratio calculated
- ✅ Charts and visualizations created
- ✅ Analysis insights documented

**Time Estimate**: 3-4 hours

---

### Day 7: Review and Finalize Results

#### Objective
Review the data analysis and finalize the report on the supply and demand ratio of AFH services in Centralia, WA.

#### Tasks

**7.1 Review All Data**

- [ ] Open Google Sheets workbook
- [ ] Review Summary sheet:
  - [ ] Verify all calculations are correct
  - [ ] Check for any anomalies
  - [ ] Ensure data makes sense
- [ ] Review Analysis sheet:
  - [ ] Check insights are accurate
  - [ ] Verify charts are correct
  - [ ] Review recommendations

**7.2 Calculate Final Metrics**

- [ ] Supply/Demand Ratio:
  - [ ] Formula: Total Available Beds / Monthly Demand
  - [ ] If < 1.0: Shortage
  - [ ] If 1.0-1.5: Balanced
  - [ ] If > 1.5: Surplus
- [ ] Response Rate:
  - [ ] Total Responses / Total Sent
  - [ ] Note if response rate affects reliability
- [ ] Market Status:
  - [ ] Based on ratio and agency feedback
  - [ ] Document consensus or variations

**7.3 Create Final Report**

- [ ] Create new sheet: "Final Report" or use Google Docs
- [ ] Structure report:

**Executive Summary:**
- [ ] Project objective
- [ ] Methodology
- [ ] Key findings
- [ ] Supply/Demand ratio
- [ ] Market status

**Methodology:**
- [ ] Data collection approach
- [ ] Number of agencies contacted
- [ ] Response rate
- [ ] Timeframe

**Findings:**
- [ ] Demand metrics
- [ ] Supply metrics
- [ ] Supply/Demand ratio
- [ ] Market assessment
- [ ] Key challenges identified

**Recommendations:**
- [ ] Based on findings
- [ ] Actionable suggestions
- [ ] Next steps

**Limitations:**
- [ ] Sample size
- [ ] Response rate
- [ ] Data accuracy
- [ ] Scope limitations

**7.4 Add Visual Elements**

- [ ] Copy charts from Analysis sheet
- [ ] Add to report
- [ ] Create infographic summary (optional)
- [ ] Add tables with key metrics

**7.5 Review and Edit**

- [ ] Read through entire report
- [ ] Check for:
  - [ ] Grammar and spelling
  - [ ] Data accuracy
  - [ ] Logical flow
  - [ ] Clarity of insights
- [ ] Get second opinion (optional)
- [ ] Make final edits

**7.6 Export and Share**

- [ ] Export report as PDF
- [ ] Save Google Sheets workbook
- [ ] Create shareable link (if needed)
- [ ] Organize all files:
  - [ ] Final report PDF
  - [ ] Google Sheets workbook
  - [ ] Airtable base (export if needed)
  - [ ] Survey form link

**7.7 Prepare Presentation (Optional)**

- [ ] Create slides if presenting:
  - [ ] Title slide
  - [ ] Objective
  - [ ] Methodology
  - [ ] Key findings
  - [ ] Supply/Demand ratio
  - [ ] Recommendations
  - [ ] Q&A slide

**7.8 Document Lessons Learned**

- [ ] What worked well
- [ ] What could be improved
- [ ] Challenges faced
- [ ] Tips for future research

**Deliverables:**
- ✅ Final report completed
- ✅ All data analyzed
- ✅ Supply/Demand ratio calculated and documented
- ✅ Recommendations provided
- ✅ Report exported and saved
- ✅ All files organized

**Time Estimate**: 3-4 hours

---

## 📊 Success Metrics

### Quantitative Goals
- [ ] Contact at least 10 placement agencies
- [ ] Achieve 30%+ response rate
- [ ] Collect data from minimum 5 agencies
- [ ] Calculate accurate supply/demand ratio
- [ ] Complete report by Day 7

### Qualitative Goals
- [ ] Professional communication with agencies
- [ ] Clear, actionable insights
- [ ] Useful recommendations
- [ ] Well-documented process

---

## 🛠️ Tools Checklist

### Required Tools (All Free)
- [x] Airtable account (free tier)
- [x] Google Forms (free)
- [x] Google Sheets (free)
- [x] Email account (Gmail, etc.)
- [x] Google account (for Forms and Sheets)

### Optional Tools
- [ ] LinkedIn (for agency research)
- [ ] Google Maps (for location research)
- [ ] Calendar app (for scheduling follow-ups)

---

## 📝 Daily Checklist Template

Copy this for each day:

**Day [X] Checklist:**
- [ ] Morning: Review day's objectives
- [ ] Complete all tasks listed
- [ ] Update Airtable with progress
- [ ] Document any issues or learnings
- [ ] Prepare for next day
- [ ] End of day: Review accomplishments

---

## 🚨 Troubleshooting

### Low Response Rate
- Send follow-up emails
- Make phone calls
- Offer brief phone interview alternative
- Extend deadline if needed

### Data Quality Issues
- Verify responses make sense
- Follow up for clarification
- Note any outliers
- Document limitations

### Technical Issues
- Airtable: Check internet connection
- Google Forms: Verify form settings
- Google Sheets: Check formulas
- Export backups regularly

---

## 📞 Support Resources

- **Airtable Help**: [help.airtable.com](https://help.airtable.com)
- **Google Forms Help**: [support.google.com/docs/forms](https://support.google.com/docs/forms)
- **Google Sheets Help**: [support.google.com/sheets](https://support.google.com/sheets)

---

## ✅ Final Project Checklist

Before considering the project complete:

- [ ] All 7 days completed
- [ ] At least 5 survey responses collected
- [ ] All data entered in Airtable
- [ ] Google Sheets analysis complete
- [ ] Supply/Demand ratio calculated
- [ ] Final report created
- [ ] Report reviewed and polished
- [ ] All files saved and organized
- [ ] Results shared with stakeholders (if applicable)

---

**Good luck with your AFH supply and demand analysis project! 🚀**

