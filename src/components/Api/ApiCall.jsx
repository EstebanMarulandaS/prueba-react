import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./apicall.scss";

export const ApiCall = () => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      axios
        .get("https://dogapi.dog/api/v2/breeds")
        .then((response) => {
          setBreeds(response.data.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error retrieving data:", error);
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  const handleMakeApiCall = () => {
    setIsLoading(true);
  };

  return (
    <div className="apiDiv">
      <Button
        onClick={handleMakeApiCall}
        variant="primary"
        className="m-3 apiBtn"
      >
        Make API Call
      </Button>
      <div className="row">
        {breeds.map((breed) => (
          <div className="col-lg-4 col-md-6 mb-4" key={breed.id}>
            <Card className="card">
              <Card.Body>
                <Card.Title style={{ color: "orange" }}>
                  {breed.attributes.name}
                </Card.Title>
                <Card.Text style={{ color: "white" }}>
                  {breed.attributes.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
