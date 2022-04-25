
interface Listing {
	mlsNumber: string;
	resource: string;
	status: string;
	class: string;
	type: string;
	listPrice: string;
	listDate: string;
	lastStatus: string;
	soldPrice: string;
	soldDate: string;
	originalPrice: string;
	address: Address;
	map: GeoMap;
	permissions: Permissions;
	images?: string[];
	details: Details;
	daysOnMarket: string;
	occupancy: string;
	updatedOn: string;
	condominium: Condominium;
	lot: Lot;
	nearby: Nearby;
	office: Office;
	openHouse: Record<number, OpenHouse>;
	rooms: Record<number, Rooms>;
	taxes: Taxes;
	timestamps: Timestamps;
	agents?: Record<string, any>[];
	history?: HistoryEntity[];
	comparables?: ComparablesEntity[];
}

interface SimilarListing {
	page: number;
	numPage: number;
	pageSize: number;
	count: number;
	similar: {
		mlsNumber: string;
		type: string;
		listPrice: string;
		listData: string;
		listStatus: string;
		office: Office;
		address: Address;
		details: Details;
		timestamps: Timestamps;
		images?: string[] | null;
	}[];
}

interface MultipleListings {
	listings: Listing[];
	page: number;
	numPages: number;
	pageSize: number;
	count: number;
	statistics: {
		listPrice: {
			min: number;
			max: number;
		};
	};
}

interface AddressHistory {
	streetNumber: string;
	streetName: string;
	streetSuffix: string;
	streetDirection: string;
	unitNumber: string;
	city: string;
	history?: HistoryEntity[] | null;
}

interface Locations {
	boards: {
		boardId: number;
		name: string;
		updatedOn: string;
		classes: {
			name: string;
			areas: {
				name: string;
				cities: {
					name: string;
					activeCount: number;
					location: {
						lat: number;
						long: number;
					};
					neighbourhoods: {
						name: string;
						activeCount: number;
						location: {
							lat: number;
							long: number;
						};
					}[];
				}[];
			}[];
		}[];
	}[];
}

interface Buildings {
	page: number;
	numPages: number;
	pageSize: number;
	count: number;
	statistics: {
		listPrice: {
			min: string;
			max: string;
		};
	};
	listings: Listing[];
}

interface PropertyTypes {
	boards?: BoardsEntity[] | null;
}
interface BoardsEntity {
	boardId: number;
	name: string;
	updatedOn: string;
	classes: Classes;
}
interface Classes {
	condo: Condo;
	commercial: Commercial;
	residential: Residential;
}
interface Condo {
	propertyTypes?: PropertyTypesEntity[] | null;
}
interface PropertyTypesEntity {
	'Att/Row/Twnhouse': PropertyTypeDetails;
	'Co-Op Apt': PropertyTypeDetails;
	'Co-Ownership Apt': PropertyTypeDetails;
	'Comm Element Condo': PropertyTypeDetails;
	'Condo Apt': PropertyTypeDetails;
	'Condo Townhouse': PropertyTypeDetails;
	'Det Condo': PropertyTypeDetails;
	'Leasehold Condo': PropertyTypeDetails;
	Locker: PropertyTypeDetails;
	'Lower Level': PropertyTypeDetails;
	Other: PropertyTypeDetails;
	'Parking Space': PropertyTypeDetails;
	'Phased Condo': PropertyTypeDetails;
	Room: PropertyTypeDetails;
	'Semi-Det Condo': PropertyTypeDetails;
	'Shared Room': PropertyTypeDetails;
	'Time Share': PropertyTypeDetails;
	'Upper Level': PropertyTypeDetails;
	'Vacant Land Condo': PropertyTypeDetails;
}
interface PropertyTypeDetails {
	activeCount: number;
	style?: null[] | null;
}
interface Commercial {
	propertyTypes?: PropertyTypesEntity1[] | null;
}
interface PropertyTypesEntity1 {}
interface Residential {
	propertyTypes?: PropertyTypesEntity2[] | null;
}
interface PropertyTypesEntity2 {
	'Att/Row/Twnhouse': PropertyTypeDetails;
	Cottage: PropertyTypeDetails;
	Detached: PropertyTypeDetails;
	Duplex: PropertyTypeDetails;
	Farm: PropertyTypeDetails;
	Fourplex: PropertyTypeDetails;
	Land: PropertyTypeDetails;
	Link: PropertyTypeDetails;
	'Lower Level': PropertyTypeDetails;
	'Mobile/Trailer': PropertyTypeDetails;
	Multiplex: PropertyTypeDetails;
	Other: PropertyTypeDetails;
	Room: PropertyTypeDetails;
	'Rural Resid': PropertyTypeDetails;
	'Semi-Detached': PropertyTypeDetails;
	'Shared Room': PropertyTypeDetails;
	'Store W/Apt/Offc': PropertyTypeDetails;
	Triplex: PropertyTypeDetails;
	'Upper Level': PropertyTypeDetails;
	'Vacant Land': PropertyTypeDetails;
}

interface Address {
	area: string;
	city: string;
	country?: null;
	district: string;
	majorIntersection: string;
	neighborhood: string;
	streetDirection: string;
	streetName: string;
	streetNumber: string;
	streetSuffix: string;
	unitNumber: string;
	zip: string;
	state: string;
	communityCode: string;
}
interface GeoMap {
	latitude: string;
	longitude: string;
	point: string;
}
interface Permissions {
	displayAddressOnInternet: string;
	displayPublic: string;
}
interface Details {
	airConditioning: string;
	basement1: string;
	basement2: string;
	centralVac: string;
	den: string;
	description: string;
	elevator: string;
	exteriorConstruction1: string;
	exteriorConstruction2: string;
	extras: string;
	furnished: string;
	garage: string;
	heating: string;
	numBathrooms: string;
	numBathroomsPlus?: null;
	numBedrooms: string;
	numBedroomsPlus: string;
	numFireplaces: string;
	numGarageSpaces: string;
	numParkingSpaces: string;
	numRooms: string;
	numRoomsPlus: string;
	patio: Record<string | number, any>;
	propertyType: string;
	sqft: string;
	style: string;
	swimmingPool: string;
	virtualTourUrl: string;
	yearBuilt: string;
	landAccessType: Record<string | number, any>;
	landSewer: Record<string | number, any>;
	viewType: Record<string | number, any>;
	zoningDescription: Record<string | number, any>;
	analyticsClick: Record<string | number, any>;
	moreInformationLink: Record<string | number, any>;
	alternateURLVideoLink: Record<string | number, any>;
	flooringType: Record<string | number, any>;
	foundationType: Record<string | number, any>;
	landscapeFeatures: Record<string | number, any>;
	fireProtection: Record<string | number, any>;
	roofMaterial: Record<string | number, any>;
	farmType: Record<string | number, any>;
	zoningType: Record<string | number, any>;
	businessType: Record<string | number, any>;
	businessSubType: Record<string | number, any>;
	landDisposition: Record<string | number, any>;
	storageType: Record<string | number, any>;
	constructionStyleSplitLevel: Record<string | number, any>;
	constructionStatus: Record<string | number, any>;
	loadingType: Record<string | number, any>;
	ceilingType: Record<string | number, any>;
	liveStreamEventURL: Record<string | number, any>;
	energuideRating: Record<string | number, any>;
	amperage: Record<string | number, any>;
	sewer: string;
	familyRoom: string;
	zoning: string;
	driveway: string;
	leaseTerms: string;
	centralAirConditioning: string;
	certificationLevel: string;
	energyCertification: string;
	parkCostMonthly: string;
	commonElementsIncluded: string;
	greenPropertyInformationStatement: string;
	handicappedEquipped: string;
	laundryLevel: string;
}

interface Condominium {
	ammenities?: Record<string | number, any>[] | null;
	buildingInsurance: Record<string | number, any>;
	condoCorp: Record<string | number, any>;
	condoCorpNum: Record<string | number, any>;
	exposure: Record<string | number, any>;
	lockerNumber: string;
	locker: Record<string | number, any>;
	parkingType: Record<string | number, any>;
	pets: Record<string | number, any>;
	propertyMgr: Record<string | number, any>;
	stories: Record<string | number, any>;
	fees: Fees;
	lockerUnitNumber: Record<string | number, any>;
	ensuiteLaundry: Record<string | number, any>;
	sharesPercentage: Record<string | number, any>;
	lockerLevel: Record<string | number, any>;
	unitNumber: Record<string | number, any>;
}
interface Fees {
	cableInlc: string;
	heatIncl: string;
	hydroIncl: string;
	maintenance: Record<string | number, any>;
	parkingIncl: string;
	taxesIncl: Record<string | number, any>;
	waterIncl: string;
}
interface Lot {
	acres: string;
	depth: string;
	irregular: string;
	legalDescription: string;
	measurement: string;
	width: string;
}
interface Nearby {
	ammenities?: string[] | null;
}
interface Office {
	brokerageName: string;
}
interface OpenHouse {
	date: string;
	endTime: string;
	startTime: string;
}
interface Rooms {
	description: string;
	features: string;
	features2: string;
	features3: string;
	length: string;
	width: string;
	level: string;
}
interface Taxes {
	annualAmount: string;
	assessmentYear: string;
}
interface Timestamps {
	idxUpdated?: null;
	listingUpdated: string;
	photosUpdated: string;
	conditionalExpiryDate?: null;
	terminatedDate?: null;
	suspendedDate?: null;
	listingEntryDate: string;
	closedDate: string;
	unavailableDate: string;
	expiryDate: string;
	extensionEntryDate?: null;
	possessionDate: string;
}

interface HistoryEntity {
	mlsNumber: string;
	type: string;
	listPrice: string;
	listDate: string;
	lastStatus: string;
	soldPrice: string;
	soldDate: string;
	office: Office;
	timestamps: Timestamps;
}

interface ComparablesEntity {
	mlsNumber: string;
	type: string;
	listPrice: string;
	listDate: string;
	lastStatus: string;
	soldPrice: string;
	soldDate: string;
	office: Office;
	address: Address1;
	details: Details1;
	timestamps: Timestamps;
	images?: string[] | null;
	condominium: Condominium1;
}
interface Address1 {
	area: string;
	city: string;
	country?: null;
	district: string;
	majorIntersection: string;
	neighborhood: string;
	streetDirection: string;
	streetName: string;
	streetNumber: string;
	streetSuffix: string;
	unitNumber: string;
	zip: string;
	state: string;
}
interface Details1 {
	garage: string;
	numBathrooms: string;
	numBathroomsPlus?: null;
	numBedrooms: string;
	numBedroomsPlus: string;
	numGarageSpaces: string;
	numParkingSpaces: string;
	propertyType: string;
	sqft: string;
}
interface Condominium1 {
	locker: Record<string | number, any>;
	parkingType: Record<string | number, any>;
	ammenities?: Record<string | number, any>[] | null;
	fees: Fees;
}
interface AddressHistory {
	streetNumber: string;
	streetName: string;
	streetSuffix: string;
	streetDirection: string;
	unitNumber: string;
	city: string;
	history?: HistoryEntity[] | null;
}

interface Office {
	brokerageName: string;
}

export {Listing,SimilarListing,Locations,MultipleListings,AddressHistory,PropertyTypes};