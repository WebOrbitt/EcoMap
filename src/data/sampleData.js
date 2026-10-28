import { Activity, AudioLines, Bike, Building2, Car, Construction, Leaf, Recycle, Trees, Volume2 } from 'lucide-react'

export const LOCATIONS = [
  { id:'bandra', name:'Bandra', area:'Bandra West', lat:19.0596, lng:72.8295, aqi:68, noise:61, severity:'Moderate', distance:'2.1 km', timestamp:'8:30 AM', explanation:'A moderate sample AQI suggests room for improvement. These illustrative readings are not live measurements.' },
  { id:'dadar', name:'Dadar', area:'Dadar East', lat:19.0176, lng:72.8562, aqi:92, noise:72, severity:'High', distance:'4.4 km', timestamp:'8:15 AM', explanation:'This example reading is higher than several other sample locations. It should not be used as a current health or travel advisory.' },
  { id:'andheri', name:'Andheri', area:'Andheri West', lat:19.1197, lng:72.8468, aqi:78, noise:68, severity:'Moderate', distance:'6.8 km', timestamp:'8:05 AM', explanation:'The illustrative AQI and sound level are sample values for exploring the interface, not current conditions.' },
  { id:'colaba', name:'Colaba', area:'Colaba Causeway', lat:18.9067, lng:72.8147, aqi:42, noise:55, severity:'Low', distance:'8.2 km', timestamp:'7:50 AM', explanation:'This comparatively lower sample reading is shown for demonstration only and does not indicate measured real-world conditions.' },
  { id:'powai', name:'Powai', area:'Powai Lake', lat:19.1176, lng:72.9060, aqi:55, noise:58, severity:'Low', distance:'9.5 km', timestamp:'8:20 AM', explanation:'These values are fictional demonstration data used to make the map and comparison features interactive.' },
]
export const INITIAL_REPORTS = [
  { id:'EM-104281', category:'Construction Dust', location:'Dadar', datetime:'2025-05-18T09:15', description:'Dust from ongoing road work near the station entrance during the morning commute.', severity:'High', status:'Under Review' },
  { id:'EM-104176', category:'Noise Pollution', location:'Bandra', datetime:'2025-05-17T20:40', description:'Frequent loud honking near the market junction in the early evening.', severity:'Moderate', status:'Submitted' },
  { id:'EM-103942', category:'Traffic Pollution', location:'Andheri', datetime:'2025-05-16T08:05', description:'Vehicles idling along the school pickup lane for several minutes at a time.', severity:'Moderate', status:'Resolved' },
]
export const ISSUE_TYPES = ['Air Pollution','Noise Pollution','Garbage Burning','Construction Dust','Traffic Pollution','Other']
export const RECOMMENDATIONS = [
  { icon:Bike, title:'Choose a cleaner commute', copy:'For short trips, consider walking, cycling, or shared transport when it is safe and practical.', tag:'AIR + NOISE' },
  { icon:Volume2, title:'Keep neighborhood noise in mind', copy:'Avoid unnecessary honking and keep speakers, generators, and late work at considerate levels.', tag:'NOISE' },
  { icon:Construction, title:'Reduce construction dust', copy:'Ask project teams about appropriate dust controls and use the relevant local channels for recurring concerns.', tag:'AIR QUALITY' },
  { icon:Trees, title:'Make space for green', copy:'Support shade trees and cared-for green spaces where local plans and site conditions allow.', tag:'COMMUNITY' },
  { icon:Recycle, title:'Dispose of waste responsibly', copy:'Use designated waste collection and reporting channels. Avoid burning leaves or household waste.', tag:'AIR QUALITY' },
  { icon:Activity, title:'Share a useful observation', copy:'Note the place, time, and pattern when reporting a recurring issue. Avoid sharing private details.', tag:'COMMUNITY' },
]
