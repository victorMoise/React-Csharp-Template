namespace backend.Entities
{
    public class Address
    {
        public int Id { get; init; }
        public string Street { get; init; }
        public string Details { get; init; }
        public int CityId { get; init; }
        public City City { get; init; }
    }
}
