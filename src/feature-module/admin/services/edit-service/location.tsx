/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useCallback, useRef, useState, useEffect } from 'react';
import { GoogleMap, MarkerF, useLoadScript, Autocomplete,useJsApiLoader } from '@react-google-maps/api';

const libraries: ('places')[] = ['places'];
const containerStyle = { width: '100%', height: '360px', borderRadius: 8 };
const fallbackCenter = { lat: 28.6139, lng: 77.2090 }; // Delhi

type LocationValue = { address?: string; lat?: number; lng?: number };
type Props = {
  value: LocationValue;
  onChange: (patch: Partial<LocationValue>) => void;
  prevTab: () => void;
  nextTab: () => void;
};

const Location: React.FC<Props> = ({ value, onChange, prevTab, nextTab }) => {
  const { isLoaded, loadError } = useJsApiLoader({
   // id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  }); 

  // always keep a valid number center for the map
  const safeLat = Number.isFinite(value.lat as number) ? (value.lat as number) : fallbackCenter.lat;
  const safeLng = Number.isFinite(value.lng as number) ? (value.lng as number) : fallbackCenter.lng;

  const [marker, setMarker] = useState<{ lat: number; lng: number }>({ lat: safeLat, lng: safeLng });

  const mapRef = useRef<google.maps.Map | null>(null);
  const autoRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (isLoaded) {
    // Geolocate only when we don't have a saved location
    if (!value.lat || !value.lng) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude;
          const lng = pos.coords.longitude;
          setMarker({ lat, lng });
          onChange({ lat, lng }); // set immediately so marker has numbers
          mapRef.current?.panTo({ lat, lng });

          // reverse geocode to fill address
          const geocoder = new google.maps.Geocoder();
          geocoder.geocode({ location: { lat, lng } }, (results, status) => {
            if (status === 'OK' && results?.[0]) {
              onChange({ address: results[0].formatted_address });
            }
          });
        },
        () => {
          setMarker(fallbackCenter);
        }
      );
    } else {
      setMarker({ lat: safeLat, lng: safeLng });
    }
  }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoaded]);

  useEffect(() => {
    // keep marker synced with parent updates
    if (Number.isFinite(value.lat) && Number.isFinite(value.lng)) {
      setMarker({ lat: value.lat as number, lng: value.lng as number });
    }
  }, [value.lat, value.lng]);

  const onMapLoad = useCallback((map: google.maps.Map) => { mapRef.current = map; }, []);

  const placeMarkerAndFill = useCallback(
    async (lat: number, lng: number) => {
      setMarker({ lat, lng });
      onChange({ lat, lng });
      mapRef.current?.panTo({ lat, lng });
      try {
        const geocoder = new google.maps.Geocoder();
        const { results } = await geocoder.geocode({ location: { lat, lng } });
        if (results?.[0]?.formatted_address) {
          onChange({ address: results[0].formatted_address });
        }
      } catch {
        //
      }
    },
    [onChange]
  );

  const onMapClick = useCallback((e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    placeMarkerAndFill(e.latLng.lat(), e.latLng.lng());
  }, [placeMarkerAndFill]);

  const onMarkerDragEnd = useCallback((e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    placeMarkerAndFill(e.latLng.lat(), e.latLng.lng());
  }, [placeMarkerAndFill]);

  const onAddressPlaceChanged = () => {
    const place = autoRef.current?.getPlace();
    const loc = place?.geometry?.location;
    if (loc) {
      const lat = loc.lat();
      const lng = loc.lng();
      onChange({ address: place.formatted_address ?? place.name ?? '', lat, lng });
      setMarker({ lat, lng });
      mapRef.current?.panTo({ lat, lng });
    }
  };

  if (loadError) return <div className="alert alert-danger">Failed to load Google Maps.</div>;

  return (
    <>
      <div className="addition-service card-section space-service">
        <div className="row">
          <div className="col-md-12"><div className="heading-service"><h4>Location</h4></div></div>

          <div className="col-md-12">
            <div className="form-group">
              <label>Address</label>
              {isLoaded ? (
                <Autocomplete onLoad={(ac) => {autoRef.current = ac;ac.setComponentRestrictions({ country: "in" });}} onPlaceChanged={onAddressPlaceChanged}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search or set by pin"
                    value={value.address ?? ''}
                    onChange={(e) => onChange({ address: e.target.value })}
                  />
                </Autocomplete>
              ) : (
                <input type="text" className="form-control" placeholder="Search or set by pin" />
              )}
            </div>
          </div>

          <div className="col-md-12">
            <div className="form-group">
              <div className="map-grid">
                {isLoaded ? (
                  <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={marker}
                    zoom={14}
                    onLoad={onMapLoad}
                    onClick={onMapClick}
                    options={{ streetViewControl: false, mapTypeControl: false, fullscreenControl: false }}
                  >
                    {/* Use MarkerF to avoid lifecycle quirks */}
                    <MarkerF position={marker} draggable onDragEnd={onMarkerDragEnd} />
                  </GoogleMap>
                ) : (
                  <div style={{ ...containerStyle, display: 'grid', placeItems: 'center' }}>Loading map…</div>
                )}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Latitude</label>
              <input
                type="text"
                className="form-control"
                value={Number.isFinite(value.lat) ? String(value.lat) : ''}
                onChange={(e) => {
                  const lat = parseFloat(e.target.value);
                  if (Number.isFinite(lat)) { onChange({ lat }); setMarker((m) => ({ ...m, lat })); }
                }}
                placeholder="Enter Latitude"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label>Longitude</label>
              <input
                type="text"
                className="form-control"
                value={Number.isFinite(value.lng) ? String(value.lng) : ''}
                onChange={(e) => {
                  const lng = parseFloat(e.target.value);
                  if (Number.isFinite(lng)) { onChange({ lng }); setMarker((m) => ({ ...m, lng })); }
                }}
                placeholder="Enter Longitude"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom buttons */}
      <div className="row">
        <div className="col-md-12">
          <div className="bottom-btn">
            <div className="field-btns">
              <button className="btn btn-prev prev_btn" type="button" onClick={prevTab}>
                <i className="fas fa-arrow-left" /> Prev
              </button>
              <button className="btn btn-primary next_btn" type="button" onClick={nextTab}>
                Next <i className="fas fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
