import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

type NavigationDirection = 'left' | 'right';

interface NavigationContextType {
  direction: NavigationDirection;
  setDirection: (dir: NavigationDirection) => void;
  navigateWithDirection: (fromIndex: number, toIndex: number) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [direction, setDirection] = useState<NavigationDirection>('right');

  const navigateWithDirection = useCallback((fromIndex: number, toIndex: number) => {
    setDirection(toIndex > fromIndex ? 'right' : 'left');
  }, []);

  return (
    <NavigationContext.Provider value={{ direction, setDirection, navigateWithDirection }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
}
