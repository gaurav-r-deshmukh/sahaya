import React from 'react'
import { Button } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { Score } from "./Questionnair"
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
import { useDispatch, useSelector } from "react-redux"






class Scores extends React.Component {


    state = {
        dataBar: {
            labels: ["Your Score"],
            datasets: [
                {

                    label: "Your Score: " + Score,
                    data: [Score],
                    backgroundColor: [
                        "rgba(255, 134,159,0.4)"

                    ],
                    borderWidth: 2,
                    borderColor: [
                        "rgba(255, 134, 159, 1)"

                    ]
                }
            ]
        },
        options: {


            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: true
                }
            }
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                xAxes: [
                    {
                        barPercentage: 0.1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {

                        gridLines: {

                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },

                        ticks: {
                            suggestedMax: 20,
                            min: 0,
                            max: 20,
                            stepSize: 1,

                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }


    render() {



        return (

            <MDBContainer className="w-75">
                <h3 className="mt-5">Results</h3>
                <Bar data={this.state.dataBar} options={this.state.barChartOptions} />
                {/* <LinkContainer to={`/dashboard/profile/${id}`}>
                    <Button> Dashboard </Button>
                </LinkContainer> */}
            </MDBContainer>
        );
    }
}








/*  return (
      <>



      
          <Container className="w-50">
              <ProgressBar now={percent} animated label={percent + " %"} className="text-center" />
              <LinkContainer to="/dashboard">
                  <Button> Dashboard </Button>
              </LinkContainer>
          </Container>

      </>
  )
}*/

export default Scores









// import React from 'react'
// import { Container, ProgressBar, Button } from "react-bootstrap"
// import { LinkContainer } from "react-router-bootstrap"
// import { Score } from "./Questionnair"

// function Scores() {

//     const percent = (Score / 20) * 100


//     return (
//         <>
//             <Container className="w-50">
//                 <ProgressBar now={percent} animated label={percent + " %"} className="text-center" />
//                 <LinkContainer to={`/dashboard/profile/${Number(1)}`}>
//                     <Button> Dashboard </Button>
//                 </LinkContainer>
//             </Container>

//         </>
//     )
// }

// export default Scores
