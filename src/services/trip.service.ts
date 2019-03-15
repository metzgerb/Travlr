import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Trip {
	id?: string,
	tripName?: string,
	startDate?: string,
	endDate?: string,
	destination?: string,
	description?: string,
	people?: number,
	activities?: string,
	minBudget?: number,
	maxBudget?: number,
}

@Injectable({
  providedIn: 'root'
})
export class TripService {

	uid: string;

	private trips: Observable<Trip[]>;
	private tripCollection: AngularFirestoreCollection<Trip>;

	constructor(
		private afs: AngularFirestore,
		private auth: AuthService,
	) {
		this.uid = this.auth.user;

		this.tripCollection = 
			this.afs.collection("users").doc(this.uid).collection<Trip>("trips");

		this.trips = this.tripCollection.snapshotChanges().pipe(
			map(actions => {
				return actions.map(a => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return {id, ...data };
				});
			})
		);
	}

	getTrips(): Observable<Trip[]> {
		return this.trips;
	}

	getTrip(id: string): Observable<Trip> {
		return this.tripCollection.doc<Trip>(id).valueChanges().pipe(
			take(1),
			map(trip => {
				trip.id = id;
				return trip
			})
		);
	}

	addTrip(trip: Trip): Promise<DocumentReference> {
		return this.tripCollection.add(trip);
	}

	updateTrip(trip: Trip): Promise<void> {
		return this.tripCollection.doc(trip.id).update({ 
			id: trip.id,
			tripName: trip.tripName,
			startDate: trip.startDate,
			endDate: trip.endDate,
			destination: trip.destination,
			people: trip.people,
			activities: trip.activities,
			minBudget: trip.minBudget,
			maxBudget: trip.maxBudget
		});
	}

	deleteTrip(id: string): Promise<void> {
		return this.tripCollection.doc(id).delete();
	}
}
