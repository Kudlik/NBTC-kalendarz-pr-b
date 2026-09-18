"use client";

import { useEffect, useState } from "react";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { MemberKey } from "./constants";

export interface PracticeEntry {
  room: string;
  members: Partial<Record<MemberKey, boolean>>;
}

export type PracticeMap = Record<string, PracticeEntry>;

const COLLECTION = "practices";

export function usePractices() {
  const [entries, setEntries] = useState<PracticeMap>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, COLLECTION),
      (snapshot) => {
        const next: PracticeMap = {};
        snapshot.forEach((docSnap) => {
          const data = docSnap.data();
          next[docSnap.id] = {
            room: typeof data.room === "string" ? data.room : "",
            members: data.members ?? {},
          };
        });
        setEntries(next);
        setLoading(false);
      },
      () => setLoading(false)
    );
    return () => unsub();
  }, []);

  async function setMember(dateId: string, member: MemberKey, checked: boolean) {
    await setDoc(
      doc(db, COLLECTION, dateId),
      { members: { [member]: checked } },
      { merge: true }
    );
  }

  async function setRoom(dateId: string, room: string) {
    await setDoc(doc(db, COLLECTION, dateId), { room }, { merge: true });
  }

  return { entries, loading, setMember, setRoom };
}
