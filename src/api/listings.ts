import type { AddressHistory, Listing, Locations, MultipleListings, PropertyTypes, SimilarListing } from '../type';
import {client} from '../client';

const {endPointOrigin,fetch,options} = client;

type aggregates =
	| 'class'
	| 'status'
	| 'lastStatus'
	| 'type'
	| 'address.area'
	| 'address.city'
	| 'address.neighborhood'
	| 'details.propertyType'
	| 'details.style'
	| 'detail.numBedrooms'
	| 'details.numBathrooms';

type statistics =
	| 'avg-daysOnMarket'
	| 'sum-daysOnMarket'
	| 'min-daysOnMarket'
	| 'max-daysOnMarket'
	| 'avg-listPrice'
	| 'sum-listPrice'
	| 'min-listPrice'
	| 'max-listPrice'
	| 'avg-soldPrice'
	| 'sum-soldPrice'
	| 'min-soldPrice'
	| 'max-soldPrice'
	| 'cnt-new'
	| 'cnt-closed'
	| 'med-listPrice'
	| 'med-soldPrice'
	| 'med-daysOnMarket'
	| 'sd-listPrice'
	| 'sd-soldPrice'
	| 'sd-daysOnMarket'
	| 'grp-mth'
	| 'grp-yr';

interface findListingsRequestParams {
	/**filter listings by agent name for example John Doe */
	agent?: string;
	/**Aggregates listing counts in the response by specified fields.
	 * For example: GET /listings?aggregates=details.numBedrooms would provide a
	 * breakdown by bedroom count for all the listings in the response. */
	aggregates?: aggregates[];
	/**Example usage: ?amenities=Gym&amenities=Swimming Pool */
	ammenities?: string[];
	/**The area of the listing. Commonly referred to as region. */
	area?: string[];
	/**If supplied, filters results by one or more boardIds. Useful if your API key has more than one board enabled for it. */
	boardId?: number[];
	/**Filter results by brokerage name. */
	brokerage?: string;
	businessSubType?: string[];
	/** One or more cities to filter the results by.*/
	city?: string[];
	/**The class of listing to filter the search results by. */
	class?: 'condo' | 'residential' | 'commercial';
	/**Y or N may be specified to filter the listings that are authorised to display the address on the internet. */
	displayAddressOnInternet?: 'Y' | 'N';
	/**Y or N may be specified to filter the listings that are authorised to be displayed publicly. */
	displayPublic?: 'Y' | 'N';
	district?: string[];
	/**Use if you want to limit the response to containing certain fields only.
	 * For example: fields?listPrice,soldPrice would limit the response to
	 * contain listPrice and soldPrice only.
	 * You can also specify the amount of images to return,
	 * for example if a listing has 40 images total and you specify fields=images[5]
	 * it will only return the first 5 images.
	 * */
	fields?: string[];
	/**True or false may be specified to filter listings that have or does NOT have any images. */
	hasImages?: 'true' | 'false';
	/**One or more keywords may be specified to filter the results by. Useful for searching listings. */
	keywords?: string;
	/**Filters the last status of the listing. Multiple values may be used, ie: lastStatus=sus&lastStatus=sld&laststatus=exp */
	lastStatus?: 'Sus' | 'Exp' | 'Sld' | 'Ter' | 'Dft' | 'Lsd' | 'Sc' | 'Sce' | 'Lc' | 'Pc' | 'Ext' | 'New';
	/**Accepts a value for latitude. Must be used with radius parameter to return listings within a certain radius of a given latitude and longitude. */
	lat?: number;
	/**Accepts a value for longitude. Must be used with radius parameter to return listings within a certain radius of a given latitude and longitude. */
	long?: number;
	/**Filter results by the listing date. ie [YYYY-MM-DD] */
	listDate?: string;
	/**If false, the listings object will be empty. Useful for speeding up responses when statistics and aggregates are requested and listings are not needed. Default is "true" */
	listings?: boolean;
	/**An array of polygons arrays with arrays of longitude/latitude
	 *  shapes to be used as a filter for listing results.
	 *eg  [[[-79.14121,43.79041],[-79.132627,43.773059]]]
	 * */
	map?: string[];
	maxBaths?: number;
	maxBeds?: number;
	maxKitchens?: number;
	/**filters listings using max list date. response returns listings where status = A
    Match pattern:
    [YYYY-MM-DD] */
	maxListDate?: string;
	maxPrice?: number;
	/**provide date format [YYYY-MM-DD] */
	maxSoldDate?: string;
	/**Used to return listings filtered by a maximum square footage. */
	maxSqft?: number;
	/**
     * Filter listings by a maximum updatedOn date.
    Match pattern: [YYYY-MM-]
    */
	maxUpdatedOn?: string;
	/**If supplied, returns listings whose year built value is less than or equal to the supplied value. Note, response will exclude listings without a yearBuilt specification. */
	maxYearBuilt?: number;
	minBaths?: number;
	minBeds?: number;
	minKitchens?: number;
	/**
     * Filter listings by a maximum updatedOn date.
    Match pattern: [YYYY-MM-]
    */
	minListDate?: string;
	/**Used to return listings filtered by minimum parking spaces.
    >= 1 */
	minParkingSpaces?: number;
	minPrice?: number;
	minSoldDate?: string; //<date>
	minSoldPrice?: number;
	/**Used to return listings filtered by a minimum square footage.
    >= 1 */
	minSqft?: number;
	/**
     * Filter listings by a min updatedOn date.
    Match pattern: [YYYY-MM-]
    */
	minUpdatedOn?: string;
	/**If supplied, returns listings whose year built value is greater than or equal to the supplied value. Note, response will exclude listings without a yearBuilt specification. */
	minYearBuilt?: number;
	/**Filter by one or more mlsnumbers. */
	mlsNumber?: string[];
	/**The neighborhood that the listing is situated in. For example GET /listings?city=Vaughan&neighborhood=Sonoma Heights&neighborhood=Vellore Village */
	neighborhood?: string;
	/**Filter results by officeId */
	officeId?: string;
	/**
     * If set to "AND", listings must match all supplied parameters. If set to "OR", listings must match at least 1 parameter. Default is "AND".
    Allowed values:
    AND
    OR
    Default:---
     * 
     */
	operator?: string;
	/**
	 * If specified indexes a specific page in the results set. For example, if there are 1000 listings and 100 listings per page, if you'd like to view listings 101-201 you'd specify pageNum=2
	 */
	pageNum?: number;
	/**The property type of the listing. For a list of property types, see /listings/property-types */
	propertyType?: string[];
	/**Accepts a value for radius in KM. Must be used with lat and long parameters to return listings within a certain radius of a given latitude and longitude. */
	radius?: number;
	/**The amount of listings to return in each page of the results set.
    >= 1
    <= 10000 */
	resultsPerPage?: number;
	/**
     * The attribute that the listings will be sorted by. Note, distanceAsc and distanceDesc must be used in combination with lat, long and radius parameters.

     */
	sortBy?:
		| 'createdOnDesc'
		| 'updatedOnDesc'
		| 'createdOnAsc'
		| 'distanceAsc'
		| 'distanceDesc'
		| 'updatedOnAsc'
		| 'soldDateAsc'
		| 'soldDateDesc'
		| 'soldPriceAsc'
		| 'soldPriceDesc'
		| 'sqftAsc'
		| 'sqftDesc'
		| 'listPriceAsc'
		| 'listPriceDesc'
		| 'bedsAsc'
		| 'bedsDesc'
		| 'bathsDesc'
		| 'bathsAsc'
		| 'yearBuiltDesc'
		| 'yearBuiltAsc'
		| 'random';
	/**
	 * For example: GET /listings?statistics=avg-listPrice,avg-daysOnMarket&type=sale&city=Toronto would provide the average
	 * list price and average days on market for all re-sale properties in the city of Toronto.
	 * You can also group the statistics by year and/or month by adding grp-mth and/or grp-yr values to the request,
	 * for example, GET /listings?statistics=grp-mth,avg-listPrice would provide the average list price grouped by month for current active listings.
	 * Supported calculations include average (avg), minimum (min), maximum (max), count (cnt), median (med), standard deviation (sd) and sum (sum) for metrics like listPrice, soldPrice, daysOnMarket, new listings, closed listings and available listings.
	 */
	statistics?: statistics[];
	/**Set status=A to retrieve active listings. Set status=U to retrieve unavailable listings. Set status=A&status=U to retrieve both active and unavailable listings */
	status?: 'A'[] | 'U'[];
	/**The street name of the listing (excluding the street suffix and direction, for example "Yonge" */
	streetName?: string;
	/**The street number of the listing. */
	streetNumber?: string;
	/**The style of the listing. Commonly referred to as sub type. For a list of property sub types, see /listings/property-sub-types */
	style?: string[];
	/**Used to filter properties that are for sale or for lease. If not specified, will return listings of all types. */
	type?: 'sale'[] | 'lease'[];
	/**
      * Filter results by the date listing is updated.
        Match pattern:
        [YYYY-MM-DD]
      */
	updatedOn?: string;
	zoning?: string;
}

interface addressHistoryRequestParams {
	streetDirection?: string;
	unitNumber?: string;
	city: string;
	streetName: string;
	streetNumber: string;
	streetSuffix: string;
}

interface similarListingRequestParams {
	/**If supplied, filters results by one or more boardIds. Useful if your API key has more than one board enabled for it. */
	boardId?: number;
	/**If specified, returns similar listings whose listPrice are +/- the supplied value, for a given listing. For example, if the given listing is 1M and listPriceRange is 250k, similar listings between 750k and 1.25M will be returned. */
	listPriceRange?: number;
	/**If specified, will show similar listings within the specified radius (km). If not specified, defaults to showing listings in the same neighborhood. */
	radius?: number;
}

interface locationRequestParams {
	/**One or more areas to filter the results by. */
	area?: string[];
	/**One or more cities to filter the results by. */
	city?: string[];
	/**One or more neighborhoods to filter the results by. */
	neighbourhood?: string[];
}

/**
 * Use this endpoint to find listings using various parameters.
 *
 *As your user provides inputs, you simply pass those inputs to this endpoint to retrieve the listings that match their preferences in real-time.
 *
 *You can easily switch between available listings and sold listings.
 *
 *This endpoint offers geospatial support. If you're offering your users a map-based experience, you can pass in the boundary of the map and the endpoint will retrieve listings that fall within the boundary.
 *
 *You can also specify keywords and this endpoint will retrieve listings that match the keywords your user enters. This is useful if you'd like to create a search bar for your website or app.
 *
 *The statistics parameter lets you easily generate market statistics on demand.
 * @param params
 * @returns
 */
export async function findListings(params?: findListingsRequestParams): Promise<MultipleListings> {
	let url = `${endPointOrigin}/listings`;
	//use key slice query
	// fill url with query
	let queryParams = '';
	if (params) {
		for (const values in params) {
			if (Array.isArray(params[values as keyof findListingsRequestParams])) {
				(params[values as keyof findListingsRequestParams] as string[]).forEach((element: string) => {
					queryParams += `${values}=${element}&`;
				});
			} else {
				queryParams += `${values}=${params[values as keyof findListingsRequestParams]}&`;
			}
		}
		//trim additonal & symbol

		queryParams = queryParams.slice(0, -1);
		url = `${url}?${queryParams}`;
	}
	const request: MultipleListings = await fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));

	return request;
}

/**
 * Use this endpoint to get details about a specific listing.
 *
 *When requesting a specific listing an expanded view of the listing is provided which includes comparables as well as the mls history for the specific property. This is useful for building single property views within your app or website.
 * @param {string} mlsNumber
 * @param {number} boardId
 * @returns
 */
export async function getListing(mlsNumber: string, boardId?: number): Promise<Listing> {
	let url: string;
	if (boardId) url = `${endPointOrigin}/listings/${mlsNumber}?boardId=${boardId}`;
	else url = `${endPointOrigin}/listings/${mlsNumber}`;

	const request: Listing = await fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));

	return request;
}

/**
 * Provide this endpoint with an mls number and it'll retrieve similar properties that are also for sale.
 *
 * This is really useful if you'd like to show your users other properties they may be interested in.
 *
 *By default this endpoint will retrieve similar properties in the same neighborhood, however you can override this by using a radius parameter.
 * @param {string} mlsNumber
 * @param {similarListingRequestParams} params
 * @returns {Promise<SimilarListing>}
 */
export async function getSimilarListing(mlsNumber: string, params?: similarListingRequestParams): Promise<SimilarListing> {
	let url = `${endPointOrigin}/listings${mlsNumber}/similar`;
	let queryParams = '';
	if (params) {
		for (const values in params) {
			queryParams += `${values}=${params[values as keyof similarListingRequestParams]}&`;
		}

		queryParams = queryParams.slice(0, -1);
		url = `${url}?${queryParams}`;
	}
	const request: SimilarListing = await fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));

	return request;
}

/**
 * Use this endpoint to retrieve the mls history of a specific address.
 *
 * In addition to displaying the history you could also use the information in the response to create a graph that illustrates the change in value over time.
 * @param {addressHistoryRequestParams} params
 * @returns {Promise<AddressHistory>}
 */
export async function getAddressHistory(params: addressHistoryRequestParams): Promise<AddressHistory> {
	let url = `${endPointOrigin}/listings/history`;
	let queryParams = '';
	if (params) {
		for (const values in params) {
			queryParams += `${values}=${params[values as keyof addressHistoryRequestParams]}&`;
		}
		//trim additonal & symbol
		queryParams = queryParams.slice(0, -1);
		url = `${url}?${queryParams}`;
	}
	const request: AddressHistory = await fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));

	return request;
}

/**
 * This endpoint provides metadata for areas, cities and neighborhoods.
 *
 *This metadata can be used to populate inputs that you provide your users with that allow them to filter by area, city and neighborhood.
 * @param {locationRequestParams} params
 * @returns {Promise<Locations>}
 */
export async function getLocations(params?: locationRequestParams): Promise<Locations> {
	let url = `${endPointOrigin}/listings/locations`;
	let queryParams = '';
	if (params) {
		for (const values in params) {
			if (Array.isArray(params[values as keyof locationRequestParams])) {
				(params[values as keyof locationRequestParams] as string[]).forEach((element: string) => {
					queryParams += `${values}=${element}&`;
				});
			} else {
				queryParams += `${values}=${params[values as keyof locationRequestParams]}&`;
			}
		}
		//trim additonal & symbol
		queryParams = queryParams.slice(0, -1);
		url = `${url}?${queryParams}`;
	}
	const request: Locations = await fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));

	return request;
}

/**
 * This endpoint provides metadata for property types and styles.
 *
 * This metadata can be used to populate inputs that you provide your users with that allow them to filter by property type and style.
 * @returns {Promise<PropertyTypes>}
 */
export async function getPropertyTypes(): Promise<PropertyTypes> {
	const url = `${endPointOrigin}/listings/propert-types`;
	const request: PropertyTypes = await fetch(url, options)
		.then((res) => res.json())
		.then((json) => json)
		.catch((err) => console.error('error:' + err));

	return request;
}
