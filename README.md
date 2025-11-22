# WinterProject

this is an application that allows users to vote on what they want in their neighborhood

Part 1: The user experience
Interactive Map (Similar to RedFin and Google Maps): Vacant/Available Commercial Plots Highlighted - show properties available for lease/sale
User "Wish" Pin Drop: Users can pinpoint any location (vacant plot or just a general area - drop a pin and set a radius) and propose a business type (e.g., "Pho Restaurant").
Other users can upvote / downvote the store idea.
(Not needed immediately)Community Feed: Show news and different events going on in the neighborhood

Part 2: Commercial Property Supply
Listing submissions: Landlords can post details about their available commercial properties (address, sq footage, photos, etc).
Demand Insights for Landlords: The platform can show landlords nearby "wish list" heatmaps or specific "wishes" that match their property's characteristics, incentivizing them to list.
(Not needed immediately)Listing Management: Tools for managing their properties and inquiries.

Part 3: Gathering Data
Proprietary Data: Collect data from the users
External Data: population, population growth, race percentage, city density, jobs, schools, etc.
Data Processing: Transform raw data into suitable data for model

Part 4: Data analysis / model and algortithms
4.1
Take all the data from part 3 and create a statistical / machine learning model to predict how well the store will do.
Ex. Vietnamese restaurant = 79/100 > Mexican restaurant = 54/100.
Most likely using XGBoost model - can transition to neural network or other models once we get more data
outputs a success score
4.2
"Best" Location Algorithm: Recommends optimal location for specific kind of store, or for specific features.
"Void Analysis" Algorithm: It then looks for patterns where the calculated "Success Score" is high, but the existing supply of that business type is low.

Part 5: Revenue
5.1 B2B Analytics Platform:
Success Score Reports: Detailed reports for entrepreneurs and developers, showing potential for various business types at specific sites.
Property Matching: Match available listings (from Part 2) with high-demand areas and specific business wishes.
Demand-Driven Listing Promotion: Offer landlords/brokers paid options to highlight their listings to entrepreneurs looking for businesses that match local "wishes."
API Access & Consulting: For enterprise clients needing raw data integration or bespoke analysis.

5.2 Revenue Streams:
Subscription Fees: For access to the full analytics platform (developers, chains).
Per-Report Sales: For individual "Success Score" reports (entrepreneurs, small businesses).
Listing Fees: From landlords/brokers for premium/featured listings on the commercial marketplace.
Referral Fees: (Potential future) From brokers for successful lease agreements facilitated by your platform.

Frameworks and Languages
Frontend: TypeScript with React and Next.js
Backend: Java (SpringBoot)
Database: postgreSQL
ML: Python
Cloud: Google or AWS
