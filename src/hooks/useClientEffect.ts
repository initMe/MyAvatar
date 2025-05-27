
"use client";

import { useEffect, type EffectCallback, type DependencyList } from 'react';

export function useClientEffect(effect: EffectCallback, deps?: DependencyList) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
